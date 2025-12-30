import Button from '@/components/Button';
import Card from '@/components/Card';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Desperte o talento musical
            <br />
            <span className="text-primary-500">do seu filho</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Uma jornada de aprendizado musical que transforma vidas, 
            desenvolve habilidades e cria memórias para sempre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/contato" size="lg">
              Agendar Aula Experimental
            </Button>
            <Button href="/planos" variant="outline" size="lg">
              Conhecer Planos
            </Button>
          </div>
        </div>
      </section>

      {/* Proposta de Valor */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Educação musical que vai além das notas
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Na StarKids, acreditamos que a música é uma ferramenta poderosa para o 
            desenvolvimento integral das crianças. Nosso método combina técnica, 
            criatividade e diversão, criando um ambiente onde cada criança pode 
            descobrir e desenvolver seu potencial único.
          </p>
        </div>
      </section>

      {/* O Jeito StarKids */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            O jeito StarKids de ensinar
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card hover>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Depoimento */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-50">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-12 h-12 text-primary-300 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 font-medium italic">
            "Ver minha filha tocar sua primeira música foi um dos momentos mais 
            emocionantes da minha vida. A StarKids não ensina apenas música, 
            ensina confiança e disciplina."
          </blockquote>
          <p className="text-gray-600 font-medium">
            — Ana Paula, mãe da Sofia (7 anos)
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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