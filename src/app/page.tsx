import Link from 'next/link';
import Button from '@/components/Button';
import Card from '@/components/Card';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Full Screen com Imagem de Fundo */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Imagem de Fundo Ofuscada */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/hero-background.jpg')",
              filter: 'brightness(0.4) blur(2px)',
            }}
          />
          {/* Overlay adicional para melhor contraste */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        {/* Conteúdo Central */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
            Desperte o talento musical
            <br />
            <span className="text-[#1890ff]">do seu filho</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Uma jornada de aprendizado musical que transforma vidas, 
            desenvolve habilidades e cria memórias para sempre.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button href="/contato" size="lg" className="text-lg px-10 py-5 shadow-2xl">
              Agendar Aula Experimental
            </Button>
            <Link
              href="/planos"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium 
                rounded-lg border-2 border-[#1890ff] text-white bg-[#1890ff]/20 backdrop-blur-sm
                hover:bg-[#1890ff] hover:text-white transition-all duration-200 shadow-2xl"
            >
              Conhecer Planos
            </Link>
          </div>

          {/* Scroll Indicator */}
         
        </div>
      </section>

      {/* Proposta de Valor */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Educação musical que vai <span className="text-[#FF6B9D]">além das notas</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Na StarKids, acreditamos que a música é uma ferramenta poderosa para o 
            desenvolvimento integral das crianças. Nosso método combina técnica, 
            criatividade e diversão, criando um ambiente onde cada criança pode 
            descobrir e desenvolver seu potencial único.
          </p>
        </div>
      </section>

      {/* Divisor Ondulado */}
      <div className="relative h-20 bg-gradient-to-b from-blue-50/30 to-transparent">
        <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0 C480,80 960,80 1440,0 L1440,120 L0,120 Z" fill="#1890ff" opacity="0.1"/>
        </svg>
      </div>

      {/* O Jeito StarKids */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-yellow-50/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            O jeito StarKids de ensinar
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card hover>
              <div className="w-16 h-16 bg-[#ffb300] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Metodologia Comprovada
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Técnicas pedagógicas modernas adaptadas à realidade de cada aluno, 
                respeitando o ritmo individual de aprendizado.
              </p>
            </Card>

            {/* Card 2 */}
            <Card hover>
              <div className="w-16 h-16 bg-[#1890ff] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Ambiente Acolhedor
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Espaços pensados para que cada criança se sinta segura, 
                motivada e inspirada a explorar seu potencial musical.
              </p>
            </Card>

            {/* Card 3 */}
            <Card hover>
              <div className="w-16 h-16 bg-[#FF6B9D] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Professores Qualificados
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Equipe especializada em educação musical infantil, 
                apaixonada por ensinar e desenvolver talentos.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Divisor Ondulado Invertido */}
      <div className="relative h-20 bg-gradient-to-b from-transparent to-[#ffb300]/10">
        <svg className="absolute top-0 w-full h-20" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,120 C480,40 960,40 1440,120 L1440,0 L0,0 Z" fill="#ffb300" opacity="0.05"/>
        </svg>
      </div>

      {/* Carrossel de Depoimentos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#ffb300]/10 via-blue-50/20 to-pink-50/10 backdrop-blur-sm">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que os <span className="text-[#1890ff]">pais dizem</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja como a StarKids está transformando a vida de famílias inteiras
          </p>
        </div>
        <TestimonialCarousel />
      </section>

      {/* Divisor Musical */}
      <div className="relative h-32 bg-gradient-to-b from-[#ffb300]/10 to-white overflow-hidden">
        <svg className="absolute top-0 w-full h-32" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 Q360,20 720,60 T1440,60 L1440,120 L0,120 Z" fill="#1890ff" opacity="0.08"/>
        </svg>
        {/* Notas musicais decorativas */}
        <div className="absolute inset-0 flex items-center justify-around opacity-10">
          <svg className="w-8 h-8 text-[#1890ff]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
          <svg className="w-6 h-6 text-[#ffb300]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
          <svg className="w-10 h-10 text-[#FF6B9D]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
          <svg className="w-7 h-7 text-[#1890ff]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>
      </div>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Pronto para começar essa jornada?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Agende uma aula experimental gratuita e veja seu filho descobrir 
            o prazer de fazer música.
          </p>
          <Button href="/contato" size="lg">
            Agendar Aula Experimental Gratuita
          </Button>
        </div>
      </section>
    </main>
  );
}