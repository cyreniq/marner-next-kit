import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: [
    { path: "../fonts/InterVariable.woff2", style: "normal" },
    { path: "../fonts/InterVariable-Italic.woff2", style: "italic" },
  ],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "marner-next-kit",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
