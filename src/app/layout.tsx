import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const marnerCore = localFont({
  src: "../fonts/marner-Core.woff2",
  variable: "--font-marner-core",
});

export const metadata: Metadata = {
  title: "marner-next-kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${marnerCore.variable} ${marnerCore.className}`}>
        {children}
      </body>
    </html>
  );
}
