import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
      
      return NextResponse.json({helo:'world!'});
    } catch (error) {
      return NextResponse.json({ error: 'Failed to fetch history records' }, { status: 500 });
    }
  }
  export async function POST(request: Request) {
    try {
      const { year, content } = await request.json();
      if (!year || !content) {
        return NextResponse.json({ error: 'Year and content are required' }, { status: 400 });
      }
      
      const newHistory = await prisma.history.create({
        data: {
          year,
          content,
        },
      });
  
      return NextResponse.json(newHistory, { status: 201 });
    } catch (error) {
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }