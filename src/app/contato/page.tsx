'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Limpa o erro do campo quando o usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Por favor, informe seu nome';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, informe seu email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor, informe um email válido';
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Por favor, informe seu telefone';
    }

    if (!formData.mensagem.trim()) {
      newErrors.mensagem = 'Por favor, escreva uma mensagem';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Aqui você integraria com sua API de backend
      console.log('Formulário enviado:', formData);
      setSubmitted(true);
      
      // Reset form
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
      });
      
      // Esconde a mensagem de sucesso após 5 segundos
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entre em contato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para responder suas dúvidas e ajudar você a dar 
            o primeiro passo na jornada musical do seu filho.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulário */}
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envie sua mensagem
            </h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                    errors.nome ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Seu nome"
                />
                {errors.nome && (
                  <p className="mt-1 text-sm text-red-600">{errors.nome}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                    errors.telefone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="(00) 00000-0000"
                />
                {errors.telefone && (
                  <p className="mt-1 text-sm text-red-600">{errors.telefone}</p>
                )}
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none ${
                    errors.mensagem ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Conte-nos um pouco sobre seu interesse..."
                />
                {errors.mensagem && (
                  <p className="mt-1 text-sm text-red-600">{errors.mensagem}</p>
                )}
              </div>

              <Button type="submit" className="w-full">
                Enviar mensagem
              </Button>
            </form>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <Card>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Outras formas de contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Telefone</h4>
                    <p className="text-gray-600">(11) 9999-9999</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Seg a Sex, 9h às 18h
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">contato@starkids.com.br</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Resposta em até 24h
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Av. Paulista, 1000<br />
                      São Paulo - SP, 01310-100
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary-50 to-white">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Agende uma visita
              </h3>
              <p className="text-gray-600 mb-6">
                Venha conhecer nossa estrutura pessoalmente e ver de perto 
                como trabalhamos. Será um prazer receber você e sua família!
              </p>
              <Button href="/planos" variant="secondary" className="w-full">
                Ver nossos planos
              </Button>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Perguntas frequentes
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    A partir de que idade posso matricular meu filho?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Aceitamos alunos a partir de 4 anos de idade.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Preciso ter instrumento em casa?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Não inicialmente. Fornecemos orientação para aquisição quando necessário.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}