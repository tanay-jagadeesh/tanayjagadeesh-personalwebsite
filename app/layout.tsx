import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tanay Jagadeesh | Software Engineer & Data Scientist",
  description: "First-year Management Engineering student specializing in data science, machine learning, and software development. Building real-time payment systems and orbital software.",
  keywords: ["Tanay Jagadeesh", "Software Engineer", "Data Scientist", "Machine Learning", "Management Engineering"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
