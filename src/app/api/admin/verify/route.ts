import { NextRequest, NextResponse } from 'next/server';
import { validateAdminSession } from '@/lib/auth';

// Force Node.js runtime for crypto operations
export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('admin_token')?.value;
    console.log('Verify token:', token ? 'present' : 'missing');

    if (!token || !validateAdminSession(token)) {
      console.log('Verify failed: token invalid or session expired');
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    console.log('Verify successful');
    return NextResponse.json(
      { success: true, message: 'Authenticated' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Admin verify error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
