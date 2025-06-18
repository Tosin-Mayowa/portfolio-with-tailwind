import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/Components/Header/Header";
import { ThemeProvider } from "./_lib/Context";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose based on your usage
  variable: "--font-playfair",   // optional, for CSS variable usage
  display: "swap",
});
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
        className={playfair.className}
      >
        <ThemeProvider>
         <Header/>
        {children}
        </ThemeProvider>
       
      </body>
    </html>
  );
}
