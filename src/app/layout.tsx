import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  src: [
    { path: "../fonts/Geist[wght].woff2", style: "normal" },
    { path: "../fonts/Geist-Italic[wght].woff2", style: "italic" },
  ],
  display: "block",
  variable: "--font-geist",
});

const geistMono = localFont({
  src: [
    { path: "../fonts/GeistMono[wght].woff2", style: "normal" },
    { path: "../fonts/GeistMono-Italic[wght].woff2", style: "italic" },
  ],
  display: "block",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
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
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
