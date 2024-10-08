// lib/sendEmail.js
import nodemailer from 'nodemailer';

export async function sendPasswordResetEmail(to, token) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // your email address
      pass: process.env.EMAIL_PASS,  // your email password or app password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Password Reset Request',
    text: `You requested a password reset. Click the link to reset your password: 
           http://localhost:3000/reset-password?token=${token}`, // Update this URL as needed
  };

  await transporter.sendMail(mailOptions);
}
