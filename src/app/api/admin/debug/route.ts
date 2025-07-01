import { NextResponse } from 'next/server';

export async function GET() {
  const adminPassword = process.env.ADMIN_PASSWORD;
  
  return NextResponse.json({
    hasAdminUsername: !!process.env.ADMIN_USERNAME,
    hasAdminPassword: !!process.env.ADMIN_PASSWORD,
    hasAdminSecret: !!process.env.ADMIN_SECRET_KEY,
    hasJwtSecret: !!process.env.JWT_SECRET,
    // Don't expose actual values in production
    ...(process.env.NODE_ENV === 'development' && {
      adminUsername: process.env.ADMIN_USERNAME,
      adminSecret: process.env.ADMIN_SECRET_KEY?.substring(0, 10) + '...',
      // Debug password info
      passwordLength: adminPassword?.length,
      passwordPrefix: adminPassword?.substring(0, 10),
      passwordSuffix: adminPassword?.substring(adminPassword.length - 5),
      fullPasswordForDebug: adminPassword, // Only in dev mode
    })
  });
}
