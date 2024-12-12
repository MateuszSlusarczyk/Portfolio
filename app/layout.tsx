"use client";
import "./globals.css";
import { ParallaxProvider } from "react-scroll-parallax";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-black via-purple-900 to-gray-900 text-white">
      <ParallaxProvider>{children}</ParallaxProvider>      
      </body>
    </html>
  );
}
