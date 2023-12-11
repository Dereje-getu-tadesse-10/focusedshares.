import { MinimalSong } from '@/src/server/youtube.server';
import { Song } from '../Song/Song';
import { css } from '@/styled-system/css';
import { useTranslations } from 'next-intl';
export const RelatedSong = ({
  song,
  lang,
}: {
  song: MinimalSong[];
  lang: string;
}) => {
  const t = useTranslations('Song');

  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      })}
    >
      {song.map((song) => (
        <Song key={song.title} song={song} lang={lang} inLive={t('inLive')} />
      ))}
    </div>
  );
};
