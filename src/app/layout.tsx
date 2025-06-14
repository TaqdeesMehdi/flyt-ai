import type { Metadata } from "next";
import "./globals.css";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["500", "700"], // Specify the weights (e.g., regular and bold)
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Flyt AI",
  description: "A personal trip planner if you want to go anywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
