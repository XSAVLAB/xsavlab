import { NextRequest, NextResponse } from 'next/server';
import prisma  from '@/lib/prisma'; // Ensure prisma is initialized

// POST request handler - Create a new client story
export const  POST =  async(req: NextRequest) => {
  try {
    const body = await req.json();
    const { image, title, content } = body;
    const newStory = await prisma.clientStories.create({
      data: {
        image,
        title,
        content,
      },
    });

    return NextResponse.json(newStory);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create client story' }, { status: 500 });
  }
}

export const GET = async (req: NextRequest)  =>{
    try {
      const stories = await prisma.clientStories.findMany();
      return NextResponse.json(stories);
    } catch (error) {
      return NextResponse.json({ error: 'Failed to fetch client stories' }, { status: 500 });
    }
  }