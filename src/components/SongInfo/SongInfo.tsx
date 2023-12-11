import { formatNumber, truncate } from '@/src/lib/youtube';
import { Song } from '@/src/server/youtube.server';
import { css } from '@/styled-system/css';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const SongInfo = ({ song }: { song: Song }) => {
  const t = useTranslations('Song');

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
      <div
        className={css({
          fontSize: 'sm',
          fontWeight: '500',
          color: 'var(--colors-text-muted)',
          display: 'flex',
          alignItems: 'center',
          gap: '1',
        })}
      >
        <p>
          {song.category} •{' '}
          {song.duration === '0:00' ? t('inLive') : song.duration}{' '}
        </p>
        •{' '}
        <p>
          {formatNumber(song.viewCount)} {t('views')}
        </p>
      </div>
      <p
        className={css({
          fontSize: 'sm',
          fontWeight: '500',
          color: 'var(--colors-text-muted)',
        })}
      >
        {t('viewsCount')}
      </p>
    </div>
  );
};
