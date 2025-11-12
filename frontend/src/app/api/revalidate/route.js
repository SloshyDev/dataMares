import { revalidatePath } from 'next/cache';

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const path = searchParams.get('path');

  if (secret !== process.env.REVALIDATE_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }

  if (!path) {
    return new Response('Missing path', { status: 400 });
  }

  try {
    // Ya no es necesario limpiar caché en memoria
    revalidatePath(path);
    return new Response('Revalidated', { status: 200 });
  } catch (err) {
    return new Response('Error revalidating', { status: 500 });
  }
}
