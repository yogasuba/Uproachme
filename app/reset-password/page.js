"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { FiArrowLeft } from 'react-icons/fi'; // Back arrow icon

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter(); // Initialize the router

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Replace this with the actual token you get from the URL
    const token = new URLSearchParams(window.location.search).get('token'); 

    // Send the new password to your API
    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, newPassword }), // Send token and new password
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setSuccess('Password changed successfully!'); // Success message

      // Redirect to the sign-in page after a short delay
      setTimeout(() => {
        router.push('/signin'); // Redirect to sign-in page
      }, 2000); // Adjust the delay as needed
    } catch (err) {
      setError(err.message); // Error message
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Reset Password Form */}
      <div className="w-1/2 bg-white flex flex-col justify-center relative">
        <div className="max-w-md ml-20">
          {/* Back arrow */}
          <Link href="/signin" className="absolute top-4 left-4 text-gray-600 hover:text-gray-800">
            <FiArrowLeft size={24} />
          </Link>

          <Image src="/icons/[removal 1.jpg" alt="Uproach Me Logo" width={130} height={50} className="mb-4" />
          <h1 className="text-2xl font-bold mb-3">Set your new password</h1>
          <p className="mb-4 text-xs font-bold">Please enter a new password for your Uproach Me account</p>

          {/* Reset Password Form */}
          <form onSubmit={handleSubmit}>
            {/* New Password Field with Show/Hide Option */}
            <div className="mb-4 relative">
              <label htmlFor="new-password" className="block mb-2 text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="new-password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)} // Handle input change
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

            {/* Error and Success Messages */}
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}

            <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-md font-bold">
              Set Password
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - Background with Image */}
      <div
        className="w-1/2 relative bg-cover bg-center"
        style={{ backgroundImage: 'url("/background-pattern.png")' }}
      >
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
