import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/Components/Header/Header";
import { ThemeProvider } from "./_lib/Context";

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
        <ThemeProvider>
         <Header/>
        {children}
        </ThemeProvider>
       
      </body>
    </html>
  );
}
