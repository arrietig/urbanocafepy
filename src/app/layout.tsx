import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Archivo_Black } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Urbano Café — Café de especialidad en Paraguay",
  description:
    "Urbano Café tuesta granos de origen único en Asunción. Café de especialidad, suscripciones, métodos y nuestras cafeterías.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${cormorant.variable} ${archivoBlack.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
