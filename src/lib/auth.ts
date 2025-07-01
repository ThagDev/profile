import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key';
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'password';

export interface AdminUser {
  username: string;
  isAdmin: boolean;
  loginTime: number;
}

// Hash password for comparison
export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(12);
  return bcrypt.hash(password, salt);
};

// Verify password
export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};

// Generate JWT token
export const generateToken = (user: AdminUser): string => {
  return jwt.sign(
    {
      username: user.username,
      isAdmin: user.isAdmin,
      loginTime: user.loginTime,
    },
    JWT_SECRET,
    { expiresIn: '24h' }
  );
};

// Verify JWT token
export const verifyToken = (token: string): AdminUser | null => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AdminUser;
    return decoded;
  } catch {
    return null;
  }
};

// Check admin credentials
export const checkAdminCredentials = async (username: string, password: string): Promise<boolean> => {
  console.log('Checking credentials:', {
    receivedUsername: username,
    expectedUsername: ADMIN_USERNAME,
    receivedPassword: password,
    expectedPassword: ADMIN_PASSWORD,
    usernameMatch: username === ADMIN_USERNAME,
    passwordMatch: password === ADMIN_PASSWORD,
  });

  if (username !== ADMIN_USERNAME) {
    console.log('Username mismatch');
    return false;
  }
  
  // For demo, direct comparison. In production, use hashed passwords
  const result = password === ADMIN_PASSWORD;
  console.log('Final auth result:', result);
  return result;
};

// Create admin session
export const createAdminSession = (username: string): AdminUser => {
  return {
    username,
    isAdmin: true,
    loginTime: Date.now(),
  };
};

// Validate admin session
export const validateAdminSession = (token: string): boolean => {
  const user = verifyToken(token);
  if (!user || !user.isAdmin) {
    return false;
  }
  
  // Check if session is not older than 24 hours
  const sessionAge = Date.now() - user.loginTime;
  const maxAge = 24 * 60 * 60 * 1000; // 24 hours
  
  return sessionAge < maxAge;
};
