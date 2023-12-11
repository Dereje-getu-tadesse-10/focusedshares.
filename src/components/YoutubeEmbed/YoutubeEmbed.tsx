import { SongInfo } from '@/src/components/SongInfo/SongInfo';
import { Song } from '@/src/server/youtube.server';
import { EmbedYoutube } from './Embed';

export const YoutubeEmbed = ({
  id,
  title,
  song,
}: {
  id: string;
  title: string;
  song: Song;
}) => {
  return (
    <div>
      <EmbedYoutube id={id} title={title} />
      <SongInfo song={song} />
    </div>
  );
};
