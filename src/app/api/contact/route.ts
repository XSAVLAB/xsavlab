import { NextRequest, NextResponse } from 'next/server';
import prisma  from '@/lib/prisma';  
import { emailValidate, nameValidate } from '@/lib/validators';

// GET request handler - Fetch all contacts
export async function GET(req: NextRequest) {
  try {
    const contacts = await prisma.contact.findMany();
    return NextResponse.json(contacts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 500 });
  }
}

// POST request handler - Create a new contact
export async function POST(req: NextRequest) {
  try {
    const body =  await req.formData();
    const newContact = await prisma.contact.create({
      data: {
        firstName: nameValidate( body.get("firstName") as string),
        lastName: nameValidate(body.get("lastName") as string),
        companyName: nameValidate(body.get("companyName") as string),
        workEmail: emailValidate(body.get("workEmail") as string),
        phoneNumber: body.get("phoneNumber") as string,
        description: body.get("description") as string,
      },
    });
    return NextResponse.json({status:201});
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Failed to create contact' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.formData(); 
    const id  = parseInt(body.get('id') as string); 
    
    try {
      await prisma.contact.delete({
        where: { id },
      });
      return NextResponse.json({ message: 'Contact deleted successfully' });
    } catch (error) {
      return NextResponse.json({ error: 'Contact dosent exist' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete contact' }, { status: 500 });
  }
}
