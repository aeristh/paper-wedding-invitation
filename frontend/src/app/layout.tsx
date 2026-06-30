import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond, Lato, Amiri } from "next/font/google";
import "./globals.css";
import { weddingData } from "@/data/weddingData";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script"
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-display"
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body"
});
const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic"
});

export const metadata: Metadata = {
  title: weddingData.meta.siteTitle,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${greatVibes.variable} ${cormorant.variable} ${lato.variable} ${amiri.variable} bg-black font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
