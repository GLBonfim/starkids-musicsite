import Link from 'next/link';

export default function PlanosPage() {
  const planos = [
    {
      nome: 'Starkids Baby',
      descricao: '(De 6 meses a 2 anos)',
      cor: 'bg-[#ffb300]',
      corTexto: 'text-[#1890ff]',
      estrela: 'text-[#1890ff]',
    },
    {
      nome: 'Starkids Music',
      descricao: '(De 3 a 5 anos)',
      cor: 'bg-[#1890ff]',
      corTexto: 'text-white',
      estrela: 'text-white',
    },
    {
      nome: 'Starkids Teen',
      descricao: '(De 6 à 16 anos)',
      cor: 'bg-[#ffb300]',
      corTexto: 'text-[#1890ff]',
      estrela: 'text-[#1890ff]',
    },
    {
      nome: 'Starkids Family',
      descricao: '(Pais e filhos juntos)',
      cor: 'bg-[#ffb300]',
      corTexto: 'text-[#1890ff]',
      estrela: 'text-[#1890ff]',
      wide: true,
    },
    {
      nome: 'Star Music',
      descricao: '(Sem limite de idade)',
      cor: 'bg-[#1890ff]',
      corTexto: 'text-white',
      estrela: 'text-white',
      wide: true,
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-blue-50/20 via-yellow-50/10 to-pink-50/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#1890ff]">O que você </span>
            <span className="text-[#FF6B9D]">realmente precisa</span>
          </h1>
        </div>

        {/* Grid de Planos */}
        <div className="max-w-5xl mx-auto">
          {/* Primeira linha - 3 cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {planos.slice(0, 3).map((plano, index) => (
              <Link
                key={index}
                href="/contato"
                className={`${plano.cor} rounded-3xl p-8 flex flex-col items-center justify-center 
                  min-h-[280px] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                  cursor-pointer group relative overflow-hidden`}
              >
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                
                {/* Estrela */}
                <div className={`${plano.estrela} mb-6 transform group-hover:rotate-12 transition-transform duration-300`}>
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                
                {/* Conteúdo */}
                <h3 className={`text-2xl font-bold ${plano.corTexto} mb-2 text-center`}>
                  {plano.nome}
                </h3>
                <p className={`${plano.corTexto} text-center font-medium`}>
                  {plano.descricao}
                </p>

                {/* Indicador de clique */}
                <div className={`mt-6 ${plano.corTexto} opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold`}>
                  Clique para saber mais →
                </div>
              </Link>
            ))}
          </div>

          {/* Segunda linha - 2 cards maiores */}
          <div className="grid md:grid-cols-2 gap-6">
            {planos.slice(3, 5).map((plano, index) => (
              <Link
                key={index + 3}
                href="/contato"
                className={`${plano.cor} rounded-3xl p-8 flex flex-col items-center justify-center 
                  min-h-[280px] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                  cursor-pointer group relative overflow-hidden`}
              >
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                
                {/* Estrela */}
                <div className={`${plano.estrela} mb-6 transform group-hover:rotate-12 transition-transform duration-300`}>
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                
                {/* Conteúdo */}
                <h3 className={`text-2xl font-bold ${plano.corTexto} mb-2 text-center`}>
                  {plano.nome}
                </h3>
                <p className={`${plano.corTexto} text-center font-medium`}>
                  {plano.descricao}
                </p>

                {/* Indicador de clique */}
                <div className={`mt-6 ${plano.corTexto} opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold`}>
                  Clique para saber mais →
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 mb-6">
            Não sabe qual plano escolher? Estamos aqui para ajudar!
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium 
              rounded-lg bg-[#FF6B9D] text-white hover:bg-[#ff5a8d] 
              transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Fale com um consultor
          </Link>
        </div>

        {/* Informação adicional */}
        <div className="mt-20 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Todos os planos incluem
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#1890ff] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Aula experimental gratuita</h3>
                <p className="text-gray-600 text-sm">
                  Conheça nossa metodologia antes de se comprometer
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#00B4D8] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Professores qualificados</h3>
                <p className="text-gray-600 text-sm">
                  Equipe especializada em educação musical
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#00B4D8] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Material didático incluso</h3>
                <p className="text-gray-600 text-sm">
                  Todo material necessário para as aulas
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#00B4D8] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Ambiente acolhedor</h3>
                <p className="text-gray-600 text-sm">
                  Espaços pensados para desenvolvimento integral
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}