import { truncate } from '@/src/lib/youtube';
import { MinimalSong } from '@/src/server/youtube.server';
import { css } from '@/styled-system/css';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export const ContainerSongs = ({
  songs,
  lang,
}: {
  songs: MinimalSong[];
  lang: string;
}) => {
  const t = useTranslations('InLive');
  return (
    <section
      className={css({
        display: 'grid',
        mx: 4,
        gap: 7,
        my: 7,
        sm: {
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
        },
      })}
    >
      {songs.map((song) => (
        <Song key={song.youtubeId} song={song} inLive={t('text')} />
      ))}
    </section>
  );
};

export const Song = ({
  song,
  inLive,
}: {
  song: MinimalSong;
  inLive: string;
}) => {
  return (
    <Link
      href={`/${song.youtubeId}`}
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
          {truncate(song.title, 35)}
        </h3>
        <p
          className={css({
            fontSize: 'xs',
            fontWeight: '500',
            color: 'var(--colors-text-muted)',
          })}
        >
          {song.category} • {song.duration === '0:00' ? inLive : song.duration}{' '}
        </p>
      </div>
    </Link>
  );
};
