import { formatNumber, truncate } from '@/src/lib/youtube';
import { Song } from '@/src/server/youtube.server';
import { css } from '@/styled-system/css';
import { ThumbsUp } from 'lucide-react';
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
          fontSize: 'sm',
        })}
      >
        {song.channelTitle}
      </Link>

      <div>
          <ThumbsUp
            className={css({ color: 'var(--colors-text-muted)' })}
            size={'16'}
          />
      </div>
    </div>
  );
};
