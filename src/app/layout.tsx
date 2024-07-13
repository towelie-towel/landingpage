import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from './providers'
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desarrollo de software personalizado para tu negocio | Nox Creation",
  description: "En NOX Creation, transformamos tu visión empresarial en realidad digital. Especialistas en automatización de negocios y desarrollo de software personalizado, ofrecemos soluciones innovadoras como páginas web atractivas, tiendas online eficientes y aplicaciones móviles interactivas. Descubre cómo podemos impulsar tu negocio hoy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
