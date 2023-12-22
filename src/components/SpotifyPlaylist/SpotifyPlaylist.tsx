import { SpotifyPlaylist } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

export const SpotifyPlaylists = ({
  playlist,
}: {
  playlist: SpotifyPlaylist;
}) => {
  return (
    <Link
      href={playlist.playlist_external_urls}
      className='playlist-card'
      target='_blank'
    >
      <Image
        alt={playlist.playlist_title}
        src={playlist.playlist_image}
        width={380}
        height={180}
      />
      <h2>{playlist.playlist_title}</h2>
      <p>
        {playlist.category} • {playlist.playlist_total_tracks} Tracks
      </p>
    </Link>
  );
};
