import { truncate } from '@/src/lib/youtube';
import { MinimalSong } from '@/src/server/youtubeSong';
import { css } from '@/styled-system/css';
import Image from 'next/image';
import Link from 'next/link';

export const ContainerSongs = ({ songs }: { songs: MinimalSong[] }) => {
  return (
    <div
      className={css({
        display: 'grid',
        mx: 4,
        gap: 4,
        sm: {
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
        },
      })}
    >
      {songs.map((song) => (
        <Song key={song.youtubeId} song={song} />
      ))}
    </div>
  );
};

export const Song = ({ song }: { song: MinimalSong }) => {
  return (
    <Link
      href={`/song/${song.youtubeId}`}
      className={css({
        width: '100%',
      })}
    >
      <Image
        className={css({
          rounded: '2xl',
          width: '100%',
          _hover: {
            rounded: '0',
          },
          transition: 'all 0.2s ease-in-out',
        })}
        src={song.thumb}
        alt={song.title}
        width={320}
        height={180}
      />
      <div
        className={css({
          mt: 2,
        })}
      >
        <h3 className={css({ fontWeight: '550', color: 'var(--colors-text)' })}>
          {truncate(song.title, 40)}
        </h3>
        <p
          className={css({
            fontSize: 'xs',
            fontWeight: '500',
            color: 'var(--colors-text-muted)',
          })}
        >
          {song.category} •{' '}
          {song.duration === '0:00' ? 'In live' : song.duration}{' '}
        </p>
      </div>
    </Link>
  );
};