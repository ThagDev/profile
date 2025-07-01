import { NextRequest, NextResponse } from 'next/server';
import { checkAdminCredentials, createAdminSession, generateToken } from '@/lib/auth';

// Force Node.js runtime for crypto operations
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    console.log('Raw request body:', body);
    
    const { username, password, secretKey } = JSON.parse(body);
    
    console.log('Parsed login data:', {
      username,
      password: password ? `${password.substring(0, 5)}...` : 'undefined',
      secretKey: secretKey ? `${secretKey.substring(0, 10)}...` : 'undefined'
    });

    // Debug: Log environment variables (remove in production)
    console.log('Environment check:', {
      hasAdminUsername: !!process.env.ADMIN_USERNAME,
      hasAdminPassword: !!process.env.ADMIN_PASSWORD,
      hasAdminSecret: !!process.env.ADMIN_SECRET_KEY,
      adminUsername: process.env.ADMIN_USERNAME,
      secretKeyMatch: secretKey === process.env.ADMIN_SECRET_KEY,
    });

    // Check secret key first (extra security layer)
    if (secretKey !== process.env.ADMIN_SECRET_KEY) {
      console.log('Secret key mismatch!');
      return NextResponse.json(
        { error: 'Unauthorized access' },
        { status: 401 }
      );
    }

    console.log('Secret key verified, checking admin credentials...');

    // Check admin credentials
    const isValidAdmin = await checkAdminCredentials(username, password);
    
    if (!isValidAdmin) {
      console.log('Invalid admin credentials:', { username });
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Create session and token
    const adminUser = createAdminSession(username);
    const token = generateToken(adminUser);

    // Set httpOnly cookie for security
    const response = NextResponse.json(
      {
        success: true,
        message: 'Login successful',
        user: {
          username: adminUser.username,
          isAdmin: adminUser.isAdmin,
        },
      },
      { status: 200 }
    );

    // Set secure cookie
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60, // 24 hours
      path: '/',
    });

    return response;

  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
