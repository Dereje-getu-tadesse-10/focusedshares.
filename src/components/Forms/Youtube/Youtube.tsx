import { useYoutubeForm } from './useYoutube';
import { css } from '@/styled-system/css';
import { Controller } from 'react-hook-form';

import { Button } from '@/src/stories/button/button';
import { GenreSelect } from '@/src/stories/select/select';
import { Input } from '@/src/stories/input/input';

export const YoutubeForm = () => {
  const { handleSubmit, onSubmit, formState, control } = useYoutubeForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={css({
          mt: '1rem',
        })}
      >
        <Controller
          name='url'
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder='https://www.youtube.com/watch?v=jfKfPfyJRdk'
              label='Youtube url'
              labelFor='url'
              value={value}
              onChange={onChange}
            />
          )}
        />
      </div>
      <div className={css({ mt: '3' })}>
        <Controller
          name='category'
          control={control}
          render={({ field: { onChange, value } }) => (
            <GenreSelect value={value} onChange={onChange} />
          )}
        />
        <div
          className={css({
            mt: '5',
            display: 'flex',
            justifyContent: 'flex-end',
          })}
        >
          <Button
            type={'submit'}
            disabled={!formState.isValid || formState.isSubmitting}
          >
            Add song
          </Button>
        </div>
      </div>
    </form>
  );
};
