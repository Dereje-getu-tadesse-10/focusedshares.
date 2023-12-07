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
        color: 'var(--colors-text-muted)',
      })}
    >
      Here you can find all the songs that are currently available on Focused
      Shares and you can sign up to add your own songs.
    </p>
  </div>
);
