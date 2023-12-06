import { z } from 'zod';
import { prisma } from '@/src/lib/prisma';
import { formatDuration, videoId } from '@/src/lib/youtube';
import { getSongYt } from '@/src/lib/youtube';
import { auth } from '@/src/lib/auth';

const requestSchema = z.object({
  url: z.string().url(),
  category: z.enum([
    'KPOP',
    'JAZZ',
    'LOFI',
    'CLASSICAL',
    'AMBIENT',
    'ELECTRONIC',
    'OTHER',
  ]),
});

export const POST = async (request: Request) => {
  try {
    const requestBody = await request.json();
    const body = requestSchema.safeParse(requestBody);

    const session = await auth();

    if (!session) {
      return Response.json(
        {
          message: 'You must be logged in',
        },
        {
          status: 401,
        }
      );
    }

    if (!body.success) {
      return Response.json(
        {
          message: 'Oops, something went wrong',
        },
        {
          status: 400,
        }
      );
    }

    const { category, url } = body.data;

    const videoIdFromUrl = videoId({ url: url });
    const response = await getSongYt({ videoId: videoIdFromUrl });

    const exists = await prisma.youtubeSong.findUnique({
      where: {
        youtubeId: videoIdFromUrl,
      },
    });

    if (exists) {
      return Response.json(
        {
          message: 'This song already exists',
        },
        {
          status: 400,
        }
      );
    }
    console.log(response.items[0].snippet.thumbnails);
    const data = {
      title: response.items[0].snippet.title,
      thumb: response.items[0].snippet.thumbnails.medium.url,
      channelTitle: response.items[0].snippet.channelTitle,
      viewCount: response.items[0].statistics.viewCount,
      youtubeId: body.data.url,
      duration: formatDuration(response.items[0].contentDetails.duration),
      desctiption: response.items[0].snippet.description,
    };
    await prisma.youtubeSong.create({
      data: {
        category: category,
        title: response.items[0].snippet.title,
        channelTitle: data.channelTitle,
        thumb: data.thumb,
        viewCount: data.viewCount,
        youtubeId: videoIdFromUrl,
        duration: data.duration,
        description: data.desctiption,
      },
    });

    return Response.json({
      status: 200,
    });
  } catch (error) {
    return Response.json(
      {
        status: 400,
        message: 'Oops, something went wrong',
      },
      {
        status: 400,
      }
    );
  }
};
