import { ContainerSongs } from '@/src/components/Song/Song';
import { getSongs } from '@/src/server/youtubeSong';
import { css } from '@/styled-system/css';

const SongsPage = async () => {
  const songs = await getSongs();

  return (
    <main>
      <section
        className={css({
          my: 7,
        })}
      >
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
            Here you can find all the songs that are currently available on
            Focused Shares and you can sign up to add your own songs.
          </p>
        </div>

        <ContainerSongs songs={songs} />
      </section>
    </main>
  );
};

export default SongsPage;
