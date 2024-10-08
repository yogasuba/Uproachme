"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      // Handle success (e.g., redirect to a welcome page)
      console.log(data.message);
    } else {
      // Handle error (e.g., show error message)
      setErrorMessage(data.message);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Signup Form */}
      <div className="w-1/2 bg-white flex flex-col justify-center p-4">
        <div className="max-w-md ml-20">
        <Image src="/icons/[removal 1.jpg" alt="Uproach Me Logo" width={130} height={50} className='mb-4' />          <h1 className="text-2xl font-bold mb-3">Sign up to Uproach me</h1>
          <p className="mb-4 text-xs">
            Already have an account?{' '}
            <Link href="/signin" className="text-blue-500">
              Sign in
            </Link>
          </p>

          <div className="flex space-x-4 mb-3">
            <button className="w-1/2 p-2 border rounded-md flex items-center justify-center text-sm">
              <Image src="/icons/google-icon.svg" alt="Google" width={20} height={20} className="mr-2" />
              Continue with Google
            </button>
            <button className="w-1/2 p-2 border rounded-md flex items-center justify-center text-sm">
              <Image src="/icons/apple-icon.svg" alt="Apple" width={20} height={20} className="mr-2" />
              Continue with Apple
            </button>
          </div>

          {/* OR with Horizontal Lines */}
          <div className="flex items-center mb-2">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-3 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* First and Last Name Fields */}
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter the First Name"
                  className="w-full p-3 border rounded-md text-xs"
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter the Last Name"
                  className="w-full p-3 border rounded-md text-xs"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter the Email"
                className="w-full p-3 border rounded-md text-xs"
                required
              />
            </div>
            {/* Password Field with Show/Hide Option */}
            <div className="mb-4 relative">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                className="w-full p-3 border rounded-md pr-10 text-xs"
                required
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <Image src="/icons/eye.png" alt="Hide password" width={25} height={26} className='mt-6' />
                ) : (
                  <Image src="/icons/eye-off.svg" alt="Show password" width={20} height={20} className='mt-6' />
                )}
              </div>
            </div>

            <button className="w-full bg-purple-600 text-white p-3 rounded-md font-bold">
              Get started
            </button>
            {errorMessage && (
              <p className="text-red-500 text-xs mt-2">{errorMessage}</p>
            )}
          </form>
          <p className="text-xs text-center mt-4">
            By signing up, you agree to our{' '}
            <Link href="/terms" className="text-blue-500">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-blue-500">
              Privacy Policy
            </Link>
            .
          </p>
          <p className="text-xs text-center mt-1">
            Need help? <Link href="/help" className="text-blue-500">Get in touch</Link>.
          </p>
        </div>
      </div>

      {/* Right Side - Background with Image */}
      <div className="w-1/2 relative bg-cover bg-center"
           style={{ backgroundImage: 'url("/background-pattern.png")' }}>
        {/* Subtle Floating Image */}
        <div className="absolute inset-0 flex items-center justify-center classicImage">
          <Image
            src="/image.png" // Path to your single image in the public folder
            alt="Right side design"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
