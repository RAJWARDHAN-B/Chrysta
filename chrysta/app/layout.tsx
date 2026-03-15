import type { Metadata, Viewport } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#6366f1", // Chrysta Primary Purple/Indigo
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Chrysta - Collaborative Document Editor",
    template: "%s | Chrysta",
  },
  description: "A real-time collaborative document editor designed for modern teams. Write, brainstorm, and publish in one fluid workspace.",
  keywords: ["collaborative editor", "real-time", "document editor", "team collaboration", "Chrysta", "rich text editor"],
  authors: [{ name: "Chrysta Team" }],
  creator: "Chrysta Team",
  publisher: "Chrysta",
  openGraph: {
    title: "Chrysta - Collaborative Document Editor",
    description: "Write, brainstorm, and publish in one fluid workspace with real-time collaboration.",
    url: "https://chrysta.vercel.app", // Note: Replace with your actual domain
    siteName: "Chrysta",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chrysta Collaborative Editor",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chrysta - Collaborative Document Editor",
    description: "Real-time collaborative document editor for modern teams.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/chrystalogobg.png",
    shortcut: "/chrystalogobg.png",
    apple: "/chrystalogobg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
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
