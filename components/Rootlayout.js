"use client";

import { SessionProvider } from "next-auth/react"; // session provider for wrapper
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  // also the html element not meta
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>{children}</SessionProvider>
        {/* wrap up the next-auth */}
      </body>
    </html>
  );
}
