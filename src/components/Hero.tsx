import Link from 'next/link';
import { button } from '@/src/stories/button/button';
import { css } from '@/styled-system/css';
export const Hero = () => {
  return (
    <section
      className={css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '4rem auto',
        padding: '0 1rem',
      })}
    >
      <h1
        className={css({
          fontSize: '3xl',
          fontWeight: '600',
          color: 'var(--colors-text)',
          md: {
            fontSize: '4xl',
          },
        })}
      >
        Elevate Your Focus with Focus Song
      </h1>
      <p
        className={css({
          fontSize: '1rem',
          fontWeight: 'medium',
          color: 'var(--colors-text-muted)',
        })}
      >
        Discover a world combining focus and music, featuring lo-fi hip hop to
        rain sounds. Share your favorite YouTube videos in our diverse musical
        community.
      </p>
      <Link className={button({ visual: 'solid' })} href={'/songs'}>
        Discover now
      </Link>
    </section>
  );
};
