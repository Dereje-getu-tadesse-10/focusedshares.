'use client';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { SongInfo } from '../SongInfo/SongInfo';
import { Song } from '@/src/server/youtubeSong';

export const YoutubeEmbed = ({ id, title, song }: { id: string; title: string, song: Song }) => (
  <div>
    <LiteYouTubeEmbed id={id} title={title} />
    <SongInfo song={song} />
  </div>
);
