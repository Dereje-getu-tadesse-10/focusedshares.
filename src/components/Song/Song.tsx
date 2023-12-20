'use client';
import { truncate } from '@/src/lib/youtube';
import { MinimalSong } from '@/src/server/youtube.server';
import { Tabs } from '@ark-ui/react';
import { css } from '@/styled-system/css';
import Image from 'next/image';
import Link from 'next/link';
import { SpotifyPlaylist } from '@prisma/client';
import { SpotifyPlaylists } from '../SpotifyPlaylist/SpotifyPlaylist';

export const ContainerSongs = ({
  songs,
  playlists,
}: {
  songs: MinimalSong[];
  playlists: SpotifyPlaylist[];
}) => {
  return (
    <section
      className={css({
        mx: '1rem',
      })}
    >
      <Tabs.Root defaultValue='youtube' lazyMount unmountOnExit>
        <Tabs.List
          className={css({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexShrink: '0',
            position: 'relative',
            overflow: 'auto',
            gap: '.4rem',
          })}
        >
          <Tabs.Trigger
            className={css({
              cursor: 'pointer',
              padding: '3px',
            })}
            value='youtube'
          >
            Youtube Songs
          </Tabs.Trigger>
          <Tabs.Trigger
            className={css({
              cursor: 'pointer',
            })}
            value='spotify'
          >
            Spotify Playlists
          </Tabs.Trigger>
          <Tabs.Indicator
            className={css({
              bg: 'var(--colors-primary)',
              height: '2px',
              width: '100%',
              bottom: '0',
            })}
          />
        </Tabs.List>
        <Tabs.Content
          value='youtube'
          className={css({
            display: 'grid',
            gap: 7,
            my: 7,
            sm: {
              gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            },
          })}
        >
          {songs.map((song) => (
            <Song key={song.youtubeId} song={song} />
          ))}
        </Tabs.Content>
        <Tabs.Content
          value='spotify'
          className={css({
            display: 'grid',
            gap: '1rem',
            my: 7,
            sm: {
              gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            },
          })}
        >
          {playlists.map((playlist) => (
            <SpotifyPlaylists playlist={playlist} />
          ))}
        </Tabs.Content>
      </Tabs.Root>
    </section>
  );
};

export const Song = ({ song }: { song: MinimalSong }) => {
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
          {song.category} •{' '}
          {song.duration === '0:00' ? 'In live' : song.duration}{' '}
        </p>
      </div>
    </Link>
  );
};
