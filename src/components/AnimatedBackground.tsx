'use client';

import { useEffect, useState } from 'react';

interface FloatingIcon {
  id: number;
  type: 'star' | 'note' | 'planet';
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function AnimatedBackground() {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    // Gerar ícones flutuantes aleatórios
    const generateIcons = () => {
      const newIcons: FloatingIcon[] = [];
      const types: ('star' | 'note' | 'planet')[] = ['star', 'note', 'planet'];
      
      for (let i = 0; i < 20; i++) {
        newIcons.push({
          id: i,
          type: types[Math.floor(Math.random() * types.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 40 + 30,
          duration: Math.random() * 20 + 15,
          delay: Math.random() * 5,
        });
      }
      setIcons(newIcons);
    };

    generateIcons();
  }, []);

  const renderIcon = (icon: FloatingIcon) => {
    switch (icon.type) {
      case 'star':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        );
      case 'note':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        );
      case 'planet':
        return (
          <svg viewBox="0 0 64 64" fill="currentColor" className="w-full h-full">
            <circle cx="32" cy="32" r="16" />
            <ellipse cx="32" cy="32" rx="28" ry="8" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        );
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute opacity-[0.15] animate-float"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            animationDuration: `${icon.duration}s`,
            animationDelay: `${icon.delay}s`,
            color: icon.type === 'star' ? '#ffb300' : 
                   icon.type === 'note' ? '#1890ff' : '#FF6B9D',
          }}
        >
          {renderIcon(icon)}
        </div>
      ))}
    </div>
  );
}