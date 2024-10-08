// auth/signin/route.js

import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma'; // Adjust the path according to your project structure
import bcrypt from 'bcrypt';

export async function POST(request) {
  const { email, password } = await request.json();

  // Validate incoming data
  if (!email || !password) {
    return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
  }

  try {
    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ message: 'User Not Found' }, { status: 401 });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    // If successful, you may want to return user info or a success message
    return NextResponse.json({ message: 'Sign-in successful', userId: user.id }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'An error occurred during sign-in' }, { status: 500 });
  }
}
