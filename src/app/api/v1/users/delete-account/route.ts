import { auth } from '@/src/lib/auth';
import { prisma } from '@/src/lib/prisma';

export const runtime = 'edge';

export const DELETE = async (request: Request) => {
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

  const userExists = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  if (!userExists) {
    return Response.json({
      status: 404,
    });
  }

  await prisma.user.delete({
    where: {
      id: session.user.id,
    },
  });

  return Response.json({
    status: 200,
  });
};
