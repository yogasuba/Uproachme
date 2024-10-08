// app/api/auth/forgot-password/route.js
import { sendPasswordResetEmail } from '../../../../lib/sendEmail';
import prisma from '../../../../lib/prisma';
import crypto from 'crypto'; // Import the crypto module

export async function POST(req) {
  const { email } = await req.json();

  // Find user by email
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
  }

  // Generate reset token and save it in the database
  const token = crypto.randomBytes(32).toString('hex');
  await prisma.passwordReset.create({
    data: {
      userId: user.id,
      token,
    },
  });

  // Send password reset email
  await sendPasswordResetEmail(user.email, token);

  return new Response(JSON.stringify({ message: 'Password reset link sent' }), { status: 200 });
}
