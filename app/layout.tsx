import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import SWRegister from "@/components/SWRegister";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aditya Mishra - Advanced Portfolio",
  description: "The most advanced portfolio showcasing Android development, cybersecurity expertise, and cutting-edge web technologies",
  keywords: ["Android Developer", "Cybersecurity", "Portfolio", "Aditya Mishra", "Kotlin", "Java", "Next.js"],
  authors: [{ name: "Aditya Mishra" }],
  openGraph: {
    title: "Aditya Mishra - Advanced Portfolio",
    description: "Explore the most advanced portfolio with 3D animations, AI-powered features, and real-time GitHub stats",
    url: "https://aditya-portfolio.vercel.app",
    siteName: "Aditya Mishra Portfolio",
    images: [
      {
        url: "/vercel.svg",
        width: 1200,
        height: 630,
        alt: "Aditya Mishra Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Mishra - Advanced Portfolio",
    description: "The most advanced portfolio with cutting-edge features",
    images: ["/vercel.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Aditya Portfolio" />
        <link rel="apple-touch-icon" href="/vercel.svg" />

      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SWRegister />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}