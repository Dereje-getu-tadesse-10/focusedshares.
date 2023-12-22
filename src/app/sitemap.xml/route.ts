import { MinimalSong, allYoutubeSongs } from '@/src/server/requests';

const URL = 'https://focusedshares.com';

function generateSiteMap(songs: MinimalSong[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${URL}</loc>
     </url>
     <url>
       <loc>${URL}/songs</loc>
     </url>
      <url>
       <loc>${URL}/terms-and-conditions</loc>
     </url>
     <url>
       <loc>${URL}/cookies</loc>
     </url>
     ${songs
       .map(({ youtubeId }) => {
         return `
           <url>
               <loc>${URL}/${`${youtubeId}`}</loc>
           </url>
         `;
       })
       .join('')}
   </urlset>
 `;
}

export async function GET() {
  const songs = await allYoutubeSongs();
  const body = generateSiteMap(songs);

  return new Response(body, {
    status: 200,
    headers: {
      'Cache-control': 'public, s-maxage=86400, stale-while-revalidate',
      'content-type': 'application/xml',
    },
  });
}
