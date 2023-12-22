import { css } from '@/styled-system/css';
import { Button } from '@/src/stories/button/button';
import { Input } from '@/src/stories/input/input';
import { addSong } from '@/src/server/youtube.server';
import { GENRES } from '@/src/components/Forms/genres';
import toast from 'react-hot-toast';
import { useModal } from '@ebay/nice-modal-react';

export const YoutubeForm = () => {
  const modal = useModal();

  const createSong = async (formData: FormData) => {
    const res = await addSong(formData);
    if (res.data?.success) {
      modal.hide();
      toast.success(res.data?.message);
    } else {
      toast.error(res?.data?.message || 'An error occurred');
    }
  };

  return (
    <form action={createSong}>
      <div
        className={css({
          mt: '1rem',
        })}
      >
        <Input
          placeholder='https://www.youtube.com/watch?v=jfKfPfyJRdk'
          label='Youtube url'
          labelFor='url'
          name={'url'}
        />
      </div>
      <div className={css({ mt: '3' })}>
        <label
          htmlFor='category'
          className={css({
            color: 'var(--colors-text-muted)',
            display: 'block',
            fontSize: '14px',
            fontWeight: 'normal',
            marginBottom: '.3rem',
          })}
        >
          Category
        </label>
        <select
          name={'category'}
          id='category'
          className={css({
            border: '1px solid var(--colors-input-focus)',
            rounded: 'sm',
            padding: '.5rem',
            bg: 'var(--colors-background)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            cursor: 'pointer',
            color: 'var(--colors-text-muted)',
            WebkitAppearance: 'none',
            '&:focus': {
              outline: '2px solid var(--colors-input-focus)',
            },
            '&:active': {
              outline: '2px solid var(--colors-input-focus)',
            },
          })}
        >
          {GENRES.map((item) => (
            <option key={item.id} value={item.id}>
              {item.id}
            </option>
          ))}
          ;
        </select>
        <div
          className={css({
            mt: '5',
            display: 'flex',
            justifyContent: 'flex-end',
          })}
        >
          <Button type={'submit'}>Add song</Button>
        </div>
      </div>
    </form>
  );
};
