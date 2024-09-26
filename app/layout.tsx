

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";


import { ClerkProvider } from '@clerk/nextjs'

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imprintion",
  description: "Your Destination for Personalized Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body className={font.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
