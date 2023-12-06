import { MinimalSong } from '@/src/server/youtubeSong';
import { Song } from '../Song/Song';
import { css } from '@/styled-system/css';

export const RelatedSong = ({ song }: { song: MinimalSong[] }) => (
  <div
    className={css({
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    })}
  >
    {song.map((song) => (
      <Song key={song.title} song={song} />
    ))}
  </div>
);
