import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  // Estilos base
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Variantes de cor
  const variants = {
    primary: 'bg-[#ffb300] text-gray-900 hover:bg-[#ffa000] focus:ring-[#ffb300] shadow-sm hover:shadow-md font-semibold',
    secondary: 'bg-[#1890ff] text-white hover:bg-[#096dd9] focus:ring-[#1890ff] shadow-sm hover:shadow-md',
    outline: 'border-2 border-[#1890ff] text-[#1890ff] hover:bg-[#1890ff] hover:text-white focus:ring-[#1890ff]',
  };
  
  // Tamanhos
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  // Se tiver href, renderiza como Link
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  // Caso contrário, renderiza como button
  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}