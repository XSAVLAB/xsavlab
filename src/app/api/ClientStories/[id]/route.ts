import { NextRequest, NextResponse } from 'next/server';
import  prisma  from '@/lib/prisma';  // Assuming prisma is initialized

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
      const clientStory = await prisma.clientStories.findUnique({
        where: { id: params.id },
      });
  
      if (!clientStory) {
        return NextResponse.json({ error: 'Client story not found' }, { status: 404 });
      }
  
      return NextResponse.json(clientStory);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Failed to fetch client story' }, { status: 500 });
    }
  }

// PUT request handler - Update an existing client story by ID
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const updatedClientStory = await prisma.clientStories.update({
      where: { id: params.id },
      data: {
        image: body.image,
        title: body.title,
        content: body.content,
      },
    });
    return NextResponse.json(updatedClientStory);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to update client story' }, { status: 500 });
  }
}

// DELETE request handler - Delete a client story by ID
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
try {
    const body = await req.json();
    try {
        const updatedClientStory = await prisma.clientStories.delete({
            where: { id: params.id },
        });
        return NextResponse.json(null,{status:204});
    } catch (error) {
        return NextResponse.json({ error: 'no data exist' }, { status: 404 });
    }
} catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to update client story' }, { status: 500 });
}
}

