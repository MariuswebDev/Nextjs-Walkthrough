import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Site",
  description: "Welcome to my awsome site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col bg-gray-900">
        <nav className="bg-gray-700 px-3 flex p-6 justify-between text-white items-center top-0 sticky">
          <span className="text-white font-bold text-3xl cursor-pointer">
            Marius <span className="text-blue-400">Dev</span>
          </span>
          <div className="space-x-4 font-semibold cursor-pointer">
            <Link
              className={`hover:text-amber-600 transition-colors hover:font-bold`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`hover:text-amber-600 transition-colors hover:font-bold `}
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className={`hover:text-amber-600 transition-colors hover:font-bold `}
              href="/about"
            >
              Skills
            </Link>
            <Link
              className={`hover:text-amber-600 transition-colors hover:font-bold `}
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </nav>
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
