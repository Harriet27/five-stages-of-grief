import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Traditional Chinese Medicine Characters",
  description: "Explore traditional Chinese medicine through our Boy and Girl characters",
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
