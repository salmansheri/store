import type { Metadata } from "next";
import {Poppins} from 'next/font/google';
import "./globals.css";
import React from 'react';

const font = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
}

)



export const metadata: Metadata = {
  title: "Store It",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.variable} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );


}
;