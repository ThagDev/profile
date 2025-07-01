/**
 * SECRET ADMIN ACCESS INFORMATION
 * ==================================
 * 
 * 🔐 Admin Login URL: http://localhost:3000/admin/login
 * 
 * 📋 Credentials:
 * Username: thangdev_admin_2025
 * Password: ThangDev@SecureAdmin#2025!
 * Secret Key: ultra_secret_thang_admin_key_xyz789
 * 
 * 🛡️ Security Features:
 * - JWT tokens with 24h expiration
 * - HttpOnly cookies
 * - Secret key verification
 * - Hidden routes (404 for unauthorized)
 * - No public links or references
 * 
 * 🎯 Access Method:
 * 1. Navigate to /admin/login manually
 * 2. Enter all 3 required fields
 * 3. Access admin dashboard at /admin/dashboard
 * 
 * ⚠️ KEEP THIS FILE SECRET! 
 * Add to .gitignore if needed.
 */

// You can access admin by typing in browser:
// http://localhost:3000/admin/login

export const ADMIN_ACCESS_INFO = {
  url: '/admin/login',
  username: 'thangdev_admin_2025',
  password: 'ThangDev@SecureAdmin#2025!',
  secretKey: 'ultra_secret_thang_admin_key_xyz789',
  note: 'This information is for personal use only. Keep confidential!',
};
