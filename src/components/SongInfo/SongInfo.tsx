import { truncate } from '@/src/lib/youtube';
import { Song } from '@/src/server/youtubeSong';
import { css } from '@/styled-system/css';
import Link from 'next/link';

export const SongInfo = ({ song }: { song: Song }) => {
  return (
    <div
      className={css({
        mt: 4,
      })}
    >
      <h1>{truncate(song.title, 35)}</h1>
      <Link
        href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
          song.channelTitle
        )}`}
        className={css({
          fontWeight: '500',
          color: 'var(--colors-text-muted)',
          fontSize: 'xs',
        })}
      >
        {song.channelTitle}
      </Link>
      <p>{song.description}</p>
    </div>
  );
};
