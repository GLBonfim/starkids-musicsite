import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StarKids - Educação Musical Infantil",
  description: "Desperte o talento musical do seu filho com metodologia comprovada e ambiente acolhedor",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        {children}
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Logo e Descrição */}
              <div className="md:col-span-2">
                <div className="mb-4">
                  <img 
                    src="/logo.png" 
                    alt="StarKids Logo" 
                    className="h-12 w-auto mb-4 brightness-0 invert"
                  />
                </div>
                <p className="text-gray-400 max-w-md">
                  Transformando vidas através da música, com metodologia comprovada 
                  e ambiente acolhedor para o desenvolvimento integral das crianças.
                </p>
              </div>

              {/* Links Rápidos */}
              <div>
                <h3 className="font-bold mb-4">Links Rápidos</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/" className="text-gray-400 hover:text-white transition-colors">
                      Início
                    </a>
                  </li>
                  <li>
                    <a href="/planos" className="text-gray-400 hover:text-white transition-colors">
                      Nossos Planos
                    </a>
                  </li>
                  <li>
                    <a href="/seja-franqueado" className="text-gray-400 hover:text-white transition-colors">
                      Seja um Franqueado
                    </a>
                  </li>
                  <li>
                    <a href="/contato" className="text-gray-400 hover:text-white transition-colors">
                      Contato
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contato */}
              <div>
                <h3 className="font-bold mb-4">Contato</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>(11) 9999-9999</li>
                  <li>contato@starkids.com.br</li>
                  <li>
                    Av. Paulista, 1000<br />
                    São Paulo - SP
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
              <p>© 2025 StarKids. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}