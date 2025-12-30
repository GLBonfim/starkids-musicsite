"use client";

import { useMemo } from "react";
import { Music } from "lucide-react";

type Dot = { top: number; left: number; size: number; delay: number; dur: number };
type Icon = { top: number; left: number; delay: number; dur: number; icon: string };

export default function LoadingScreen() {
  const stars = useMemo<Dot[]>(() => {
    return Array.from({ length: 30 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 8 + Math.random() * 16,
      delay: Math.random() * 2,
      dur: 2 + Math.random() * 3,
    }));
  }, []);

  const icons = useMemo<Icon[]>(() => {
    const arr = ["🎵", "🎶", "🎼", "🎹", "🎸", "🎺"];
    return arr.map((icon) => ({
      icon,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      dur: 4 + Math.random() * 3,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-yellow-400">
      {/* fundo animado */}
      <div className="absolute inset-0">
        {stars.map((s, i) => (
          <div
            key={`star-${i}`}
            className="absolute text-yellow-300"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              fontSize: `${s.size}px`,
              animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
            }}
          >
            ⭐
          </div>
        ))}

        {icons.map((it, i) => (
          <div
            key={`icon-${i}`}
            className="absolute text-2xl text-white/40"
            style={{
              top: `${it.top}%`,
              left: `${it.left}%`,
              animation: `floatMusic ${it.dur}s ease-in-out ${it.delay}s infinite`,
            }}
          >
            {it.icon}
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="animate-bounce text-7xl">⭐</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Music className="text-yellow-300" size={32} />
            </div>
          </div>
        </div>

        <div className="relative mb-8 flex h-32 items-end justify-center gap-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-full w-2 origin-bottom rounded-full bg-gradient-to-t from-yellow-400 via-blue-400 to-blue-600 shadow-lg"
              style={{ animation: `wave 1.2s ease-in-out ${i * 0.1}s infinite` }}
            />
          ))}
        </div>

        <div className="mb-3 text-4xl font-extrabold text-white">
          Starkids Music
        </div>
        <div className="animate-pulse text-lg font-medium text-yellow-300">
          Preparando a magia musical...
        </div>
      </div>
    </div>
  );
}
