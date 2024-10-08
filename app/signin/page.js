"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';


export default function SigninPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
  };
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Signup Form */}
      <div className="w-1/2 bg-white flex flex-col justify-center p-4">
        <div className="max-w-md ml-20">
          <Image src="/icons/[removal 1.jpg" alt="Uproach Me Logo" width={130} height={50} className='mb-4' />
          <h1 className="text-2xl font-bold mb-3">Login to Uproach me</h1>
          <p className="mb-4 text-xs">
            Dont have an account?{' '}
            <Link href="/signup" className="text-purple-600 font-bold">
              Sign up
            </Link>
          </p>

          <div className="flex space-x-4 mb-3">
            <button className="w-1/2  p-2 border rounded-md flex items-center justify-center text-sm">
              <Image src="/icons/google-icon.svg" alt="Google" width={20} height={20} className="mr-2" />
              Continue with Google
            </button>
            <button className="w-1/2  p-2 border rounded-md flex items-center justify-center text-sm">
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

       
          <form>
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
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <Image src="/icons/eye.png" alt="Hide password" width={25} height={26}/>
                ) : (
                  <Image src="/icons/eye-off.svg" alt="Show password" width={20} height={20}/>
                )}
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                    <input
                        id="remember-me"
                        type="checkbox"
                        className="checkbox-custom h-4 w-4 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-xs text-gray-900 font-bold">
                        Remember me
                    </label>
                </div>

                <div className="text-xs">
                    <a href="/forgot_password" className=" text-purple-600 hover:purple-600 font-bold">
                        Forgot password?
                    </a>
                </div>
              </div>
            </div>

            <button className="w-full bg-purple-600 text-white p-3 rounded-md font-bold">
              Get started
            </button>
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
