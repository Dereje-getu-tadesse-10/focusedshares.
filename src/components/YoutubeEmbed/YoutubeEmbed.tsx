'use client';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { SongInfo } from '@/src/components/SongInfo/SongInfo';
import { Song } from '@/src/server/requests';

export const YoutubeEmbed = ({
  id,
  title,
  song,
}: {
  id: string;
  title: string;
  song: Song;
}) => (
  <div>
    <LiteYouTubeEmbed id={id} title={title} />
    <SongInfo song={song} />
  </div>
);
