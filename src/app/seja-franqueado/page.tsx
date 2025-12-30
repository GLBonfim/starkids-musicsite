import Button from '@/components/Button';
import Card from '@/components/Card';

export default function SejaFranqueadoPage() {
  const beneficios = [
    {
      titulo: 'Marca Reconhecida',
      descricao: 'Utilize uma marca consolidada e respeitada no mercado de educação musical infantil.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      titulo: 'Metodologia Completa',
      descricao: 'Acesso a todo nosso material pedagógico e sistema de ensino já testado e aprovado.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      titulo: 'Suporte Contínuo',
      descricao: 'Treinamento inicial e suporte operacional permanente para garantir o sucesso da unidade.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      titulo: 'Tecnologia Integrada',
      descricao: 'Plataforma digital completa para gestão, comunicação com pais e aulas online.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      titulo: 'Marketing Profissional',
      descricao: 'Estratégias e materiais de marketing para atrair e reter alunos na sua região.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
    },
    {
      titulo: 'Retorno Atrativo',
      descricao: 'Modelo de negócio rentável com potencial de crescimento e expansão.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  const etapas = [
    {
      numero: '01',
      titulo: 'Cadastro Inicial',
      descricao: 'Preencha o formulário com suas informações e motivações para se tornar franqueado.',
    },
    {
      numero: '02',
      titulo: 'Análise de Perfil',
      descricao: 'Nossa equipe analisa seu perfil e região de interesse para avaliar viabilidade.',
    },
    {
      numero: '03',
      titulo: 'Apresentação do Modelo',
      descricao: 'Reunião detalhada sobre investimento, retorno e operação da franquia.',
    },
    {
      numero: '04',
      titulo: 'Formalização',
      descricao: 'Assinatura de contrato e início do processo de implantação da unidade.',
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-yellow-50/20 via-blue-50/20 to-pink-50/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Seja um franqueado
            <span className="text-[#1890ff]"> StarKids</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transforme sua paixão por educação em um negócio de sucesso. 
            Junte-se à rede de escolas de música que mais cresce no Brasil.
          </p>
          <Button href="/contato" size="lg">
            Quero saber mais
          </Button>
        </div>

        {/* Por que ser franqueado */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Por que ser um franqueado StarKids?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => (
              <Card key={index} hover>
                <div className="w-16 h-16 bg-[#ffb300] rounded-full flex items-center justify-center mb-6 text-white">
                  {beneficio.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {beneficio.titulo}
                </h3>
                <p className="text-gray-600">
                  {beneficio.descricao}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Investimento */}
        <section className="mb-20">
          <Card className="bg-[#1890ff]/10 backdrop-blur-sm border border-[#1890ff]/20 shadow-xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Investimento e Retorno
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-[#1890ff] mb-2">
                    R$ 150k
                  </div>
                  <p className="text-gray-600 font-medium">Investimento inicial</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Inclui taxa de franquia, equipamentos e capital de giro
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#FF6B9D] mb-2">
                    18-24
                  </div>
                  <p className="text-gray-600 font-medium">Meses de payback</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Retorno médio do investimento
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#ffb300] drop-shadow-md mb-2">
                    30%+
                  </div>
                  <p className="text-gray-600 font-medium">Margem de lucro</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Com operação consolidada
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Processo */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Como se tornar um franqueado
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {etapas.map((etapa, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#1890ff] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {etapa.numero}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {etapa.titulo}
                  </h3>
                  <p className="text-gray-600">
                    {etapa.descricao}
                  </p>
                </div>
                {index < etapas.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-[#ffb300]" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Depoimento */}
        <section className="mb-20">
          <Card className="bg-[#FF6B9D]/10 backdrop-blur-sm">
            <div className="text-center max-w-3xl mx-auto">
              <svg className="w-12 h-12 text-[#FF6B9D] mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 font-medium italic">
                "Abrir uma unidade StarKids foi a melhor decisão da minha vida profissional. 
                O suporte da rede e a paixão dos pais pelo nosso trabalho tornam cada dia gratificante."
              </blockquote>
              <p className="text-gray-600 font-medium">
                — Roberto Silva, Franqueado StarKids São Paulo
              </p>
            </div>
          </Card>
        </section>

        {/* CTA Final */}
        <section className="text-center">
          <Card className="bg-gradient-to-br from-[#1890ff] to-[#096dd9] text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para começar?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Entre em contato conosco e descubra como se tornar parte 
              da família StarKids.
            </p>
            <Button href="/contato" size="lg" variant="primary">
              Solicitar informações
            </Button>
          </Card>
        </section>
      </div>
    </main>
  );
}