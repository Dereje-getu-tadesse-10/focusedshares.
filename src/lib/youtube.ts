// get youtube search results
export const getSongYt = async ({ videoId }: { videoId: string }) => {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${process.env.GOOGLE_API}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return response.json();
};

// extract video id from youtube url
export const videoId = ({ url }: { url: string }) => {
  const regex = /(?:\?v=|&v=|youtu\.be\/)(.*?)(?:\?|&|$)/;
  const match = url.match(regex);
  return match ? match[1] : '';
};

// is valid youtube url
export const isValidYouTubeUrl = (url: string) => {
  const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
  return regex.test(url);
};

// validate youtube response video duration
export const formatDuration = (duration: string) => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  if (!match) {
    return '0:00';
  }

  const hours = match[1] ? parseInt(match[1].slice(0, -1)) : 0;
  const minutes = match[2] ? parseInt(match[2].slice(0, -1)) : 0;
  const seconds = match[3] ? parseInt(match[3].slice(0, -1)) : 0;

  let formattedDuration = '';

  if (hours > 0) {
    formattedDuration += `${hours}:`;
  }

  formattedDuration += `${minutes.toString().padStart(2, '0')}:`;

  formattedDuration += seconds.toString().padStart(2, '0');

  return formattedDuration;
};

// format video views
export const formatNumber = (numberAsString: string, locale = 'en-US') => {
  const number = parseInt(numberAsString, 10);
  return isNaN(number) ? '0' : number.toLocaleString(locale);
};

// truncate string
export const truncate = (str: string, n: number) => {
  return str.length > n ? str.substr(0, n - 1) + '...' : str;
};
