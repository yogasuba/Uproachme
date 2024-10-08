"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi'; // Back arrow icon

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false); // To track if the form is submitted
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send request to API to send the reset email
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubmitted(true); // Show success message
      } else {
        const data = await res.json();
        setError(data.message || 'Something went wrong, please try again.'); // Show error message if submission fails
      }
    } catch (err) {
      setError('Unable to process your request at the moment.');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Signup Form */}
      <div className="w-1/2 bg-white flex flex-col justify-center relative">
        <div className="max-w-md ml-20">
          {/* Back arrow */}
          <Link href="/signin" className="absolute top-4 left-4 text-gray-600 hover:text-gray-800">
            <FiArrowLeft size={24} />
          </Link>

          <Image src="/icons/[removal 1.jpg" alt="Uproach Me Logo" width={130} height={50} className="mb-4" />

          {/* Conditional rendering: show form or success message */}
          {!submitted ? (
            <>
              <h1 className="text-2xl font-bold mb-3">Forgot your password?</h1>
              <p className="mb-4 text-xs font-bold">To reset your password, please enter the email address.</p>

              {/* Error message */}
              {error && <p className="text-red-600 mb-4 text-sm">{error}</p>}

              {/* Reset Password Form */}
              <form onSubmit={handleSubmit}>
                {/* Email Field */}
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter the Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-3 border rounded-md text-xs"
                  />
                </div>

                <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-md font-bold">
                  Reset Password
                </button>
              </form>
            </>
          ) : (
            // Success message
            <div className=" items-start justify-center ">
              <h1 className="text-2xl font-bold mb-3">Forgot your password?</h1>
              <p className="text-gray-600 mb-4 text-sm ">You have been emailed a password reset link.</p>
            </div>
          )}
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
