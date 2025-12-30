import Button from '@/components/Button';
import Card from '@/components/Card';

export default function PlanosPage() {
  const planos = [
    {
      nome: 'Iniciante',
      descricao: 'Perfeito para dar os primeiros passos no mundo da música',
      preco: 'R$ 249',
      periodo: '/mês',
      beneficios: [
        'Aulas semanais de 45 minutos',
        'Material didático incluso',
        'Acompanhamento personalizado',
        'Acesso à plataforma online',
        'Apresentações semestrais',
      ],
      destaque: false,
    },
    {
      nome: 'Intermediário',
      descricao: 'Para quem quer evoluir e explorar novos horizontes musicais',
      preco: 'R$ 349',
      periodo: '/mês',
      beneficios: [
        'Aulas semanais de 60 minutos',
        'Material didático incluso',
        'Acompanhamento personalizado',
        'Acesso à plataforma online',
        'Apresentações semestrais',
        'Workshop mensal incluso',
        'Preparação para festivais',
      ],
      destaque: true,
    },
    {
      nome: 'Avançado',
      descricao: 'Desenvolvimento profundo para jovens talentos',
      preco: 'R$ 449',
      periodo: '/mês',
      beneficios: [
        'Aulas semanais de 90 minutos',
        'Material didático premium',
        'Mentoria individualizada',
        'Acesso ilimitado à plataforma',
        'Apresentações mensais',
        'Workshops ilimitados',
        'Preparação para concursos',
        'Gravação em estúdio profissional',
      ],
      destaque: false,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Escolha o plano ideal para seu filho
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todos os nossos planos incluem professores qualificados, 
            ambiente acolhedor e metodologia comprovada.
          </p>
        </div>

        {/* Cards dos Planos */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {planos.map((plano, index) => (
            <Card
              key={index}
              hover
              className={`relative ${
                plano.destaque 
                  ? 'border-2 border-accent-300 shadow-xl' 
                  : ''
              }`}
            >
              {plano.destaque && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent-300 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plano.nome}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {plano.descricao}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-primary-500">
                    {plano.preco}
                  </span>
                  <span className="text-gray-600 ml-2">
                    {plano.periodo}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plano.beneficios.map((beneficio, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{beneficio}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contato"
                variant={plano.destaque ? 'primary' : 'secondary'}
                className="w-full"
              >
                Quero este plano
              </Button>
            </Card>
          ))}
        </div>

        {/* Informações Adicionais */}
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            O que está incluso em todos os planos
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Sem taxa de matrícula</h3>
                <p className="text-gray-600 text-sm">
                  Investimento transparente e sem surpresas
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Flexibilidade de horários</h3>
                <p className="text-gray-600 text-sm">
                  Encaixe as aulas na rotina da sua família
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Comunidade de pais</h3>
                <p className="text-gray-600 text-sm">
                  Participe de eventos e conecte-se com outras famílias
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ainda tem dúvidas?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Entre em contato conosco e teremos prazer em ajudar você a escolher o melhor plano.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contato" size="lg">
              Falar com um consultor
            </Button>
            <Button href="/" variant="outline" size="lg">
              Voltar para o início
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}