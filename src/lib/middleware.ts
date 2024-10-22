import { NextRequest, NextResponse } from 'next/server';
import { verifyJwtToken } from '@/lib/jwtauth';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token'); 

  if (!token) {
    return NextResponse.json({ error: 'Authentication token is missing' }, { status: 401 });
  }

  try {
    await verifyJwtToken(token.value);
    return NextResponse.next(); 
  } catch (error) {
    return NextResponse.json({ error: 'Invalid authentication token' }, { status: 403 });
  }
}


export const config = {
  matcher: ['/api/users'], 
};
