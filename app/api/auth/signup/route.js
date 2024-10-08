// auth/signup/route.js

import { NextResponse } from 'next/server';
import  prisma  from '../../../../lib/prisma'; // Adjust the path according to your project structure
import bcrypt from 'bcrypt';

export async function POST(request) {
  const { firstName, lastName, email, password } = await request.json();

  // Validate incoming data (you can add more validation as needed)
  if (!firstName || !lastName || !email || !password) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  try {
    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: 'User created successfully', user: newUser }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'An error occurred during signup' }, { status: 500 });
  }
}
