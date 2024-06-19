
import { SessionProvider, getSession } from "next-auth/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Solving Your Math problem today",
  description: "Open Source Math APP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider> {children}</SessionProvider>
      </body>
    </html>
  );
}
