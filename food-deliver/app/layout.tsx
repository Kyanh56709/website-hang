import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Or whatever font came default
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iPos Food Delivery",
  description: "Best food in town",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* ADD suppressHydrationWarning HERE 👇 */}
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}