import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IntimateMap - Votre journal intime géolocalisé",
  description: "Cartographiez vos moments intimes en toute confidentialité. Application mobile sécurisée avec carte interactive, coffre-fort chiffré et système de badges.",
  keywords: "intime, carte, géolocalisation, confidentialité, sécurisé, coffre-fort, privé",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} antialiased bg-gray-950 text-gray-100`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
