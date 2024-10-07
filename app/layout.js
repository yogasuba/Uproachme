// app/layout.js

import '../styles/globals.css';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  weight: ['400', '500', '600'], // Choose the weights you need
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`mx-auto max-w-7xl pr-8 pl-8 pt-8 ${manrope.className}`}>
        <main className="mx-auto">{children}</main>
      </body>
    </html>
  );
}
