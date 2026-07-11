import type { Metadata } from "next";
import { Inter, Passion_One } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const passionOne = Passion_One({
  variable: "--font-passion-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Mooshuree Portfolio",
  description: "Mooshuree's personal portfolio website.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${passionOne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">{children}</body>
    </html>
  );
}
