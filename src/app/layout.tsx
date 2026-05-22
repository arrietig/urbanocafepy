import type { Metadata } from "next";
import { Alexandria, Cormorant_Garamond, Archivo_Black, Anton } from "next/font/google";
import "./globals.css";

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Demo — Tu marca aquí",
  description: "Demo de landing page. Reemplazá este texto con la descripción real de tu empresa.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={`${alexandria.variable} ${cormorant.variable} ${archivoBlack.variable} ${anton.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
