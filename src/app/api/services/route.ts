import { NextRequest, NextResponse } from 'next/server';
import prisma  from '@/lib/prisma';  
import SaveImage from '@/lib/filesave';

// GET request handler - Fetch all services
export async function GET(req: NextRequest) {
  try {
    const services = await prisma.services.findMany();
    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}

// POST request handler - Create a new service
export async function POST(req: NextRequest) {
  try{
    const formData = await req.formData();
    let technologies = formData.get('technologies') as string;

    const newService = await prisma.services.create({
      data: {
        name: formData.get('name') as string,
        description: formData.get('description') as string,
        technologies: technologies.split(','),
        icon:  await SaveImage(formData.get('icon') as File,process.env.ASSETS_LOCATION as string),
      },
    });
    return NextResponse.json(newService);
  } catch (error) {

    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
  }
}

export const PUT = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const id = formData.get('id') as string;
    const body: any = {};
    const entries = Array.from(formData.entries());
    for (const [key, value] of entries) {
      if (key === "icon" && value instanceof File) {
        const dirpath = "public/assets"; 
        const path = await SaveImage(value, dirpath);
        body.icon = path;  
      } else if (key === "technologies" && typeof value === 'string') {
        body.technologies = value.split(','); 
      } else {
        body[key] = value;
      }
    }
    const result = await prisma.services.update({
      where: { id: id },
      data: body,
    });
    return NextResponse.json({status:200});

  } catch (error) {
    console.error("Error updating service:", error);
    return NextResponse.json({ error: 'Failed to update service' }, { status: 500 });
  }
};
