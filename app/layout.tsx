import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Preeti & Amit — Wedding Invitation",
  description: "Preeti & Amit's wedding invitation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
