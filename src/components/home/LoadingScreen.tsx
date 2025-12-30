'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1890ff] via-[#096dd9] to-[#0050b3]">
      
      {/* Estrelas flutuantes no fundo */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <svg className="w-3 h-3 text-white opacity-60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        ))}
      </div>

      {/* Estrela Principal Brilhante */}
      <div className="relative mb-12 animate-star-pulse">
        <div className="absolute inset-0 animate-spin-slow">
          <svg className="w-32 h-32 text-[#ffb300] opacity-30 blur-xl" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <svg className="w-24 h-24 text-[#ffb300] relative z-10 drop-shadow-2xl animate-float-star" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        {/* Brilhos */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#ffb300] rounded-full blur-3xl opacity-40 animate-pulse" />
      </div>

      {/* Equalizador Musical */}
      <div className="relative flex h-40 items-end justify-center gap-2 mb-10">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="w-3 origin-bottom rounded-full shadow-lg"
            style={{
              background: i % 3 === 0 
                ? 'linear-gradient(to top, #ffb300, #ffa000)' 
                : i % 3 === 1 
                ? 'linear-gradient(to top, #FF6B9D, #FF8CB4)' 
                : 'linear-gradient(to top, #69c0ff, #1890ff)',
              animation: `wave ${0.8 + Math.random() * 0.4}s ease-in-out ${i * 0.08}s infinite`,
              height: `${40 + Math.random() * 60}%`,
            }}
          />
        ))}
      </div>

      {/* Notas Musicais Flutuantes */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-note"
            style={{
              left: `${10 + i * 12}%`,
              bottom: '-50px',
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            <svg 
              className={`w-8 h-8 ${i % 3 === 0 ? 'text-[#ffb300]' : i % 3 === 1 ? 'text-[#FF6B9D]' : 'text-white'} opacity-70`} 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </div>
        ))}
      </div>

      {/* Texto */}
      <div className="text-center space-y-3 animate-fade-in relative z-10">
        <h1 className="text-5xl font-bold tracking-wide text-white drop-shadow-lg">
          Star<span className="text-[#ffb300]">Kids</span>
        </h1>
        <p className="text-xl text-white/90 font-medium animate-pulse">
          🎵 Preparando a magia musical...
        </p>
      </div>

      {/* Ondas de Som */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden opacity-20">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent animate-wave" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent animate-wave" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Animações CSS */}
      <style jsx>{`
        /* Fade-in */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        /* Equalizador - Ondas */
        @keyframes wave {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }

        /* Estrela Principal - Flutuação */
        @keyframes float-star {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(10deg); }
        }
        .animate-float-star {
          animation: float-star 3s ease-in-out infinite;
        }

        /* Estrela Principal - Pulse */
        @keyframes star-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-star-pulse {
          animation: star-pulse 2s ease-in-out infinite;
        }

        /* Rotação Lenta */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        /* Notas Musicais Flutuantes */
        @keyframes float-note {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100vh) translateX(50px) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float-note {
          animation: float-note linear infinite;
        }

        /* Estrelinhas piscando */
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }

        /* Ondas de som */
        @keyframes wave-motion {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-wave {
          animation: wave-motion 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}