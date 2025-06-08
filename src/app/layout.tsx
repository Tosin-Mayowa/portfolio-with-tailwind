import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/Components/Header/Header";

export const metadata: Metadata = {
  title: "Mayowa Portfolio",
  description: "Frontend Engineer with 3years experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
       <Header/>
        {children}
      </body>
    </html>
  );
}
