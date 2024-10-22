import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Import your Prisma client
import SaveImage from '@/lib/filesave';
import { nameValidate,emailValidate } from '@/lib/validators';

const dirpath = "public/assets"; 

export async function GET(req: NextRequest) {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const description = formData.get('description');
    const icon = formData.get('icon') as File;
    const iconUrl = await SaveImage(icon,dirpath);
    const user = await prisma.client.create({
      data: {
        name: nameValidate(name as string),
        email: emailValidate(email as string),
        description: description as string,
        icon: iconUrl, 
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    // Parse FormData
    const formData = await req.formData();
    const id = formData.get('id');
    const body: any = {};
    const entries = Array.from(formData.entries());
    for (const [key, value] of entries) {
      if (key === "image" && value instanceof File) {
        const dirpath = "public/assets"; 
        const imagePath = await SaveImage(value, dirpath);
        body.image = imagePath; 
      }
      if (key === 'email'){
        body.email=emailValidate(value as string)
      } 
      if(key === 'name'){
        body.name=nameValidate(value as string)
      }
    }
    const updatedUser = await prisma.client.update({
      where: { id: id as string },
      data:body,
    });
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const formData = await req.formData();
    const id = formData.get('id');

    await prisma.client.delete({
      where: { id: id as string },
    });

    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
  }
}

