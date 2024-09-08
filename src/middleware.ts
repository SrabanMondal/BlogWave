import { NextRequest, NextResponse } from 'next/server';
import {jwtVerify} from 'jose'
export async function middleware(req: NextRequest) {
  let token = req.cookies.get('token')?.value;
  if(typeof token !== 'string'){
    const authorizationHeader = req.headers.get('authorization');
    if(authorizationHeader){
      token = authorizationHeader.split(' ')[0];
    }
  }
  const url = req.nextUrl.clone()
  const regex = /^\/blog\/[^\/]+$/;
  if (!token) {
    if (regex.test(url.pathname)) {
      url.searchParams.set('unauth', 'false');
      return NextResponse.rewrite(url);
    }
    return NextResponse.redirect(new URL('/login', req.url));
  }
  try {
    //jwt.verify(token as string, process.env.JWT_SECRET??'');
    const secret = new TextEncoder().encode(process.env.JWT_SECRET ?? '');
    await jwtVerify(token, secret)
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/home/:path*','/blog/:path*','/user/:path*'],
};
