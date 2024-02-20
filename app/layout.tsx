import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Disney+ clone",
  description: "for educational purposes only!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
