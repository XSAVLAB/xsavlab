import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import SaveImage from '@/lib/filesave';

export async function GET(req: NextRequest) {
  try {
    const blogPosts = await prisma.blogPost.findMany();
    return NextResponse.json(blogPosts);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid authentication token' }, { status: 403 });
  }
}

export async function POST(req: NextRequest) {

  try {
    const formData = await req.formData();
    const title = formData.get('title');
    const content = formData.get('content');
    const file = formData.get('image') as File;
    const userId = formData.get('userId');
    let imagePath;

    if (file) {
        try {
          const dirpath = 'public/assets';
          imagePath = await SaveImage(file, dirpath);
        } catch (error) {
          return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
        }
      }
    const blogPost = await prisma.blogPost.create({
      data: {
        title: title as string,
        content: content as string,
        image:  imagePath as string,
        userId: userId as string,
      },
    });

    return NextResponse.json(blogPost, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {

  try {
    const formData = await req.formData();
    const id = formData.get('id'); 
    const body: any = {};
    const entries = Array.from(formData.entries());
    let imagePath;
    for (const [key, value] of entries) {
      if (key === "image" && value instanceof File) {
        const dirpath = "public/assets"; 
        imagePath = await SaveImage(value, dirpath);
        body.image = imagePath; 
      } 
      else {
        body[key] = value;
      }
    }
    const updatedBlogPost = await prisma.blogPost.update({
      where: { id: id as string },
      data: body,
    });

    return NextResponse.json(updatedBlogPost);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update blog post' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {

  try {
    const formData = await req.formData();
    const id = formData.get('id'); 
    await prisma.blogPost.delete({
      where: { id: id as string },
    });

    return NextResponse.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 });
  }
}
