'use client';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

export const EmbedYoutube = ({ id, title }: { id: string; title: string }) => (
  <LiteYouTubeEmbed id={id} title={title} />
);
