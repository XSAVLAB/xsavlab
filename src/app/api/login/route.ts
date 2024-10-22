import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma"; 
import { verifyPassword } from "@/lib/password"; 
import {generateToken} from '@/lib/jwtauth'

export async function POST(req: NextRequest) {
    try{
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const isPasswordValid = await verifyPassword(password, user.password);
    const token = await generateToken(user.email);
    await prisma.login.create({
        data: {
          email: user.email,
        },
      });
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful",token:token, user: { email: user.email, role: user.role } });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
