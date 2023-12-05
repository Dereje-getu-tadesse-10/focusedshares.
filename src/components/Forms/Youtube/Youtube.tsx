import { useYoutubeForm } from './useYoutube';
import { css } from '@/styled-system/css';
import { Controller } from 'react-hook-form';

import { Button } from '@/src/stories/button/button';
import { GenreSelect } from '@/src/stories/select/select';

export const YoutubeForm = () => {
  const { handleSubmit, onSubmit, register, setValue, formState, control } =
    useYoutubeForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={css({
          mt: '1rem',
        })}
      >
        <label
          className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '.2rem',
            fontSize: 'sm',
          })}
        >
          Youtube url
          <input
            placeholder='https://www.youtube.com/watch?v=jfKfPfyJRdk'
            {...register('url')}
            className={css({
              border: '1px solid var(--border)',
              borderRadius: 'sm',
              padding: '.5rem',
              outline: 'none',
              backgroundColor: 'var(--background)',
              height: '42px',
              color: 'gray.500 !important',
            })}
          />
        </label>
      </div>
      <div className={css({ mt: '3' })}>
        <Controller
          name='category'
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <GenreSelect value={value} onChange={onChange} />
            </>
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
            disabled={
              !formState.isDirty ||
              !formState.isValid ||
              !formState.isDirty ||
              !formState.isValid ||
              formState.isLoading
            }
          >
            Add song
          </Button>
        </div>
      </div>
    </form>
  );
};
