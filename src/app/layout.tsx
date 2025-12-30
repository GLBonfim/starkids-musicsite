'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";
import LoadingScreen from "@/components/home/LoadingScreen";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <title>StarKids - Educação Musical Infantil</title>
        <meta name="description" content="Desperte o talento musical do seu filho com metodologia comprovada e ambiente acolhedor" />
      </head>
      <body className={inter.className}>
        <LoadingScreen />
        <AnimatedBackground />
        {!isLoading && <Navbar />}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Footer */}
        <footer className="bg-[#0077BE] text-white py-12 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Logo e Descrição */}
              <div className="md:col-span-2">
                <div className="mb-4">
                  <img 
                    src="/logo.png" 
                    alt="StarKids Logo" 
                    className="h-12 w-auto mb-4"
                  />
                </div>
                <p className="text-white/80 max-w-md">
                  Transformando vidas através da música, com metodologia comprovada 
                  e ambiente acolhedor para o desenvolvimento integral das crianças.
                </p>
              </div>

              {/* Barra da Tijuca */}
              <div>
                <h3 className="font-bold mb-4">Barra da Tijuca</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>(21) 3269-0456</li>
                  <li>(21) 98273-9509</li>
                  <li>
                    Av. Gastão Sengés, 185<br />
                    Loja 129 - Barra, RJ
                  </li>
                </ul>
              </div>

              {/* Recreio */}
              <div>
                <h3 className="font-bold mb-4">Recreio</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>(21) 3264-0456</li>
                  <li>(21) 98273-9509</li>
                  <li>
                    Rua Senador Rui Carneiro, 301<br />
                    Loja C - Recreio, RJ
                  </li>
                </ul>
              </div>
            </div>

            {/* Links Rápidos */}
            <div className="mb-8">
              <h3 className="font-bold mb-4 text-center">Links Rápidos</h3>
              <ul className="flex flex-wrap justify-center gap-6">
                <li>
                  <a href="/" className="text-white/80 hover:text-[#ffb300] transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="/planos" className="text-white/80 hover:text-[#ffb300] transition-colors">
                    Nossos Planos
                  </a>
                </li>
                <li>
                  <a href="/seja-franqueado" className="text-white/80 hover:text-[#ffb300] transition-colors">
                    Seja um Franqueado
                  </a>
                </li>
                <li>
                  <a href="/contato" className="text-white/80 hover:text-[#ffb300] transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/20 pt-8 text-center text-white/80 text-sm">
              <p>© 2024 StarKids. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}