import type { Metadata } from "next";
import "./globals.css";

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
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
