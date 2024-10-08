"use client";
import '../styles/globals.css';
import { Manrope } from 'next/font/google';
import { usePathname } from 'next/navigation';

const manrope = Manrope({
  weight: ['400', '500', '600'], // Choose the weights you need
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current route

  // Check if it's the signup or signin page
  const isAuthPage = pathname === '/signup' || pathname === '/signin' || pathname === '/forgot_password' || pathname === '/reset-password';

  return (
    <html lang="en">
      <body
        className={`${isAuthPage ? 'min-h-screen w-full flex justify-center items-center' : 'mx-auto max-w-7xl sm:pr-8 sm:pl-8 sm:pt-8'} ${manrope.className}`}
      >
        <main className={`${isAuthPage ? 'w-full h-full' : 'mx-auto'}`}>
          {children}
        </main>
      </body>
    </html>
  );
}
