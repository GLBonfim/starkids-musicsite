'use client';

import Link from 'next/link';
import { useState } from 'react';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '/' },
    { label: 'Nossos Planos', href: '/planos' },
    { label: 'Seja um Franqueado', href: '/seja-franqueado' },
    { label: 'Contato', href: '/contato' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0077BE]/90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="StarKids Logo" 
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold text-white">
              Star<span className="text-[#ffb300]">Kids</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-[#ffb300] transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contato" size="sm">
              Agendar Aula Experimental
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-white/10 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-white/90 hover:text-[#ffb300] transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contato" className="w-full" size="sm">
              Agendar Aula Experimental
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}