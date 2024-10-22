import { NextRequest, NextResponse } from "next/server";
import SaveImage from "@/lib/filesave";
import prisma from "@/lib/prisma"; 
import { Role } from "@prisma/client";
import { hashPassword } from "@/lib/password";
import { error } from "console";

// GET request handler
export async function GET(req: NextRequest) {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

// POST request handler - Create a new user with image upload
export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string | null;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    let password = formData.get("password") as string;
    const role = formData.get("role") as Role;
    const department = formData.get("department") as string;
    const file = formData.get("image") as File;

    let imagePath: string | null = null;

    const user = await prisma.user.findMany({where:{email:email}});
    if (user.length > 0){
      return NextResponse.json({error:'user exist already'},{status:409})
    }

    password =  await hashPassword(password);

    if (file) {
      try {
        const dirpath = 'public/assets';
        imagePath = await SaveImage(file, dirpath);
      } catch (error) {
        return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
      }
    }
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        role,
        department,
        image: imagePath,
      },
    });
    return NextResponse.json({ message: "User created successfully" }, { status: 201 });
  } catch (error) {
    
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

export async function PUT(request: Request) {
  try {

    const formData = await request.formData();
    const id =  formData.get('id') as string;
    const body: any = {};

    const entries = Array.from(formData.entries());
    for (const [key, value] of entries) {
      if (key === "image" && value instanceof File) {
        const dirpath = "public/assets"; 
        const imagePath = await SaveImage(value, dirpath);
        body.image = imagePath; 
      } 
      else if (key === "password" && typeof value === "string") {
        body.password = hashPassword(value)
    }
      else {
        body[key] = value;
      }
    }
    const updatedUser = await prisma.user.update({
      where: { id },
      data: body,
    });
    return NextResponse.json({ data: updatedUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error updating user" }, { status: 500 });
  }
}

