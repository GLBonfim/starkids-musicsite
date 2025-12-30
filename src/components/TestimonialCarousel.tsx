'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Ver minha filha tocar sua primeira música foi um dos momentos mais emocionantes da minha vida. A StarKids não ensina apenas música, ensina confiança e disciplina.",
    author: "Ana Paula",
    role: "mãe da Sofia (7 anos)"
  },
  {
    quote: "Meu filho era tímido e tinha dificuldade em se expressar. Após 6 meses na StarKids, ele está mais confiante, faz apresentações e até criou suas próprias composições. Estou impressionada!",
    author: "Carlos Eduardo",
    role: "pai do Miguel (9 anos)"
  },
  {
    quote: "A metodologia da StarKids é incrível! Minha filha mal pode esperar pelo dia da aula. Ver o brilho nos olhos dela quando toca é algo que não tem preço. Melhor investimento que fizemos.",
    author: "Juliana Santos",
    role: "mãe da Laura (6 anos)"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000); // Muda a cada 6 segundos

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToTestimonial = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Aspas decorativas */}
      <svg 
        className="w-12 h-12 text-[#1890ff] mx-auto mb-6" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      {/* Container do depoimento com animação */}
      <div className="relative overflow-hidden min-h-[280px] flex items-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute w-full transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? 'opacity-100 translate-x-0'
                : index < currentIndex
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 font-medium italic text-center leading-relaxed px-4">
              "{testimonial.quote}"
            </blockquote>
            <div className="text-center">
              <p className="text-gray-900 font-bold text-lg">
                {testimonial.author}
              </p>
              <p className="text-gray-600">
                {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prevTestimonial}
          disabled={isAnimating}
          className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-[#ffb300] transition-all duration-200 flex items-center justify-center text-[#1890ff] hover:text-white disabled:opacity-50"
          aria-label="Depoimento anterior"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Indicadores */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              disabled={isAnimating}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-[#1890ff]'
                  : 'w-2 bg-gray-300 hover:bg-[#ffb300]'
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextTestimonial}
          disabled={isAnimating}
          className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-[#ffb300] transition-all duration-200 flex items-center justify-center text-[#1890ff] hover:text-white disabled:opacity-50"
          aria-label="Próximo depoimento"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}