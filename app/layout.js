// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";

// Load Inter font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "For my Love",
  description: "A collection of heartfelt affirmations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
