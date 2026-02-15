import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Treble Software | Premium SaaS Engineering",
  description: "A product-focused engineering partner building scalable SaaS systems for founders and modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${jetbrainsMono.variable} antialiased bg-[#0A0A0A] text-gray-100 selection:bg-indigo-500/30 selection:text-indigo-200`}
      >
        {children}
      </body>
    </html>
  );
}
