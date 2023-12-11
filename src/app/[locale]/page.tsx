import { unstable_setRequestLocale } from 'next-intl/server';

import { Hero } from '@/src/components/Heros/Hero';
import { ContainerSongs } from '@/src/components/Song/Song';
import { MinimalSong, getSongs } from '@/src/server/youtube.server';
export const runtime = 'edge';

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const songs: MinimalSong[] = await getSongs(9);
  return (
    <main>
      <Hero lang={locale} />
      <ContainerSongs songs={songs} lang={locale} />
    </main>
  );
}
