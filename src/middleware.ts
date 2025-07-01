import { NextRequest, NextResponse } from 'next/server';
import { validateAdminSession } from '@/lib/auth';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Protect admin routes
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const token = request.cookies.get('admin_token')?.value;

    if (!token || !validateAdminSession(token)) {
      // Redirect to a hidden login page
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Hide admin routes from non-authenticated users
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const token = request.cookies.get('admin_token')?.value;
    
    if (!token || !validateAdminSession(token)) {
      // Return 404 instead of redirect to hide the existence of admin panel
      return new NextResponse(null, { status: 404 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
