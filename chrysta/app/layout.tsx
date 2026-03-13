import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chrysta - Collaborative Document Editor",
  description: "A real-time collaborative document editor designed for modern teams. Write, brainstorm, and publish in one fluid workspace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/chrystalogobg.png" type="image/png" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} font-display antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/20`}
      >
        {children}
      </body>
    </html>
  );
}
