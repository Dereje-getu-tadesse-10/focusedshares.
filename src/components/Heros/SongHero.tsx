import { css } from '@/styled-system/css';

export const SongHero = () => (
  <div
    className={css({
      mx: 4,
      mb: 7,
    })}
  >
    <h1
      className={css({
        fontSize: '2xl',
        fontWeight: '600',
        color: 'var(--colors-text)',
      })}
    >
      Songs
    </h1>
    <p
      className={css({
        mt: '.5rem',
        color: 'var(--colors-text-muted)',
        maxW: '800px',
        textStyle: 'body',
      })}
    >
      Here you can find a collection of songs to help you focus on your work. If
      you don&apos;t find what you&apos;re looking for, you can always add your
      own songs.
    </p>
  </div>
);
