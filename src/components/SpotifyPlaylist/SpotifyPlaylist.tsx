import { css } from '@/styled-system/css';
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
      className={css({
        position: 'relative',
        _hover: {
          '& > div': {
            display: 'block',
          },
        },
      })}
      target='_blank'
    >
      <Image
        alt={playlist.playlist_title}
        src={playlist.playlist_image}
        className={css({
          rounded: '2xl',
          width: '100%',
          // height: '230px',
          objectFit: 'cover',
          _hover: {
            rounded: '0',
          },
          transition: 'all 0.2s ease-in-out',
        })}
        width={380}
        height={180}
      />
      <div
        className={css({
          display: 'none',
          width: '95%',
          position: 'absolute',
          bottom: '2.5',
          left: '50%',
          transform: 'translate(-50%, 0%)',
        })}
      >
        <div
          className={css({
            backgroundColor: 'var(--colors-background)',
            width: '100%',
            padding: '5px',
            _hover: {
              borderRadius: 'lg',
            },
          })}
        >
          <h1
            className={css({
              color: 'var(--colors-text)',
              fontWeight: 'medium',
              fontSize: '1.1rem',
            })}
          >
            {playlist.playlist_title}
          </h1>
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '1px',
            })}
          >
            <p
              className={css({
                color: 'var(--colors-text-muted)',
                fontWeight: 'medium',
                fontSize: '.8rem',
              })}
            >
              {playlist.category} • {playlist.playlist_total_tracks} Tracks
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
