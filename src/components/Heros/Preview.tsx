import { MinimalSong } from '@/src/server/requests';
import { ContainerSongs } from '../Song/Song';
import { css } from '@/styled-system/css';
import { SpotifyPlaylist } from '@prisma/client';

export const Preview = ({
  songs,
  playlists,
}: {
  songs: MinimalSong[];
  playlists: SpotifyPlaylist[];
}) => {
  return (
    <section
      className={css({
        mt: '6rem',
      })}
    >
      <div
        className={css({
          mt: '3rem',
        })}
      >
        <ContainerSongs songs={songs} playlists={playlists} />
      </div>
    </section>
  );
};
