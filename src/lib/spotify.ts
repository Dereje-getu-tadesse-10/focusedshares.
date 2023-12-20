export const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    // @ts-ignore fix this later
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
};

// Get Playlist data
export const getPlaylist = async (playlistId: string) => {
  const { access_token } = await getAccessToken();
  const data = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  return data.json();
};

// Extract playlist ID from Spotify url
export const playlistId = ({ url }: { url: string }) => {
  const regex = /open\.spotify\.com\/playlist\/([a-zA-Z0-9]+)/;
  const match = url.match(regex);
  return match ? match[1] : '';
};

// Check if URL is a valid Spotify playlist URL
export const isValidSpotifyPlaylistUrl = (url: string) => {
  const regex = /^(https?:\/\/)?(open\.spotify\.com\/playlist\/)[a-zA-Z0-9]+$/;
  return regex.test(url);
};
