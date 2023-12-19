import { MinimalSong } from '@/src/server/youtube.server';
import { ContainerSongs } from '../Song/Song';
import { css } from '@/styled-system/css';
import Link from 'next/link';
import { button } from '@/src/stories/button/button';

export const Preview = ({ songs }: { songs: MinimalSong[] }) => {
  return (
    <section
      className={css({
        mt: '6rem',
      })}
    >
      {/* <h1
        className={css({
          color: 'var(--colors-text)',
          fontWeight: '500',
          textAlign: 'center',
          fontSize: 'lg',
        })}
      >
        Preview Songs
      </h1> */}
      {/* <p
        className={css({
          color: 'var(--colors-text-muted)',
          fontWeight: '500',
          textAlign: 'center',
          fontSize: 'sm',
          mt: '.5rem',
          paddingX: '1rem',
        })}
      >
        If you don&apos;t find what you&apos;re looking for, you can always add
        your own songs.
      </p> */}
      <div
        className={css({
          mt: '3rem',
        })}
      >
        <ContainerSongs songs={songs} />
      </div>
    </section>
  );
};
