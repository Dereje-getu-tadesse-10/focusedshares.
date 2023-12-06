'use client';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export const YoutubeEmbed = ({ id, title }: { id: string; title: string }) => (
  <LiteYouTubeEmbed id={id} title={title} />
);
