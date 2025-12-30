import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const hoverStyles = hover 
    ? 'hover:shadow-2xl hover:-translate-y-2 transition-all duration-300' 
    : '';
  
  return (
    <div className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-md p-6 md:p-8 ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}