import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { isValidYouTubeUrl } from '@/src/lib/youtube';
import { useModal } from '@ebay/nice-modal-react';
import { useRouter } from 'next/navigation';
import { GENRES } from './genres';

const youtubeFormSchema = z.object({
  url: z.string().url().min(1).refine(isValidYouTubeUrl, {
    message: 'Invalid youtube url',
  }),
  category: z.string().refine(
    (value) => {
      return GENRES.some((genre) => genre.id === value);
    },
    { message: 'Select a genre' }
  ),
});

type YoutubeFormSchema = z.infer<typeof youtubeFormSchema>;

export const useYoutubeForm = () => {
  const modal = useModal();
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isLoading, isValid },
  } = useForm<YoutubeFormSchema>({
    resolver: zodResolver(youtubeFormSchema),
    defaultValues: {
      category: 'KPOP',
    },
  });

  const request = async (data: YoutubeFormSchema) => {
    const response = await fetch('/api/v1/songs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  const { mutate: addSong } = useMutation({
    mutationFn: request,
    onSuccess: (data) => {
      if (data.status === 200) {
        router.refresh();
        modal.hide();
        toast.success('Song added successfully!');
      } else {
        toast.error(data.message);
      }
    },
  });

  const onSubmit = (data: YoutubeFormSchema) => {
    addSong(data);
  };

  return {
    formState: {
      errors,
      isDirty,
      isLoading,
      isValid,
    },
    handleSubmit,
    onSubmit,
    control,
  };
};
