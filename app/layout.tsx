import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import SWRegister from "@/components/SWRegister";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Aditya Kumar Mishra — Native Android Developer",
  description: "Native Android Developer specializing in Kotlin, Jetpack Compose, MVVM Architecture, Room, Hilt DI, Coroutines, and Retrofit. Building premium offline-first apps.",
  keywords: ["Android Developer", "Kotlin", "Jetpack Compose", "MVVM", "Portfolio", "Aditya Mishra", "Mobile App Developer", "Room", "Hilt", "Coroutines"],
  authors: [{ name: "Aditya Kumar Mishra" }],
  openGraph: {
    title: "Aditya Kumar Mishra — Native Android Developer",
    description: "Native Android Developer building premium Kotlin apps with Jetpack Compose, MVVM & real-time backends.",
    url: "https://aditya-portfolio.vercel.app",
    siteName: "Aditya Mishra Portfolio",
    images: [{ url: "/vercel.svg", width: 1200, height: 630, alt: "Aditya Mishra" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Kumar Mishra — Native Android Developer",
    description: "Kotlin · Jetpack Compose · MVVM · Room · Hilt · Coroutines · Retrofit",
    images: ["/vercel.svg"],
  },
  robots: { index: true, follow: true },
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
        <meta name="apple-mobile-web-app-title" content="Aditya Portfolio" />
        <meta name="theme-color" content="#08080f" />
        <link rel="apple-touch-icon" href="/vercel.svg" />

      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
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