import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sportive Rewards Preview",
  description: "Client-facing Sportive Rewards approval and implementation preview hub."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
