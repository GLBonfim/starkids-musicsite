# StarKids - Site Educacional

Site profissional para escola de música infantil desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## 📋 Estrutura do Projeto

```
starkids-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── planos/
│   │   │   └── page.tsx
│   │   ├── contato/
│   │   │   └── page.tsx
│   │   └── seja-franqueado/
│   │       └── page.tsx
│   └── components/
│       ├── Navbar.tsx
│       ├── Button.tsx
│       └── Card.tsx
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── postcss.config.mjs
└── next.config.mjs
```

## 🚀 Instalação

### Passo 1: Criar o projeto Next.js

```bash
npx create-next-app@latest starkids-website --typescript --tailwind --app
```

Quando perguntado, escolha:
- ✅ TypeScript: Yes
- ✅ ESLint: Yes
- ✅ Tailwind CSS: Yes
- ✅ `src/` directory: Yes
- ✅ App Router: Yes
- ❌ Customize default import alias: No

### Passo 2: Navegar para a pasta do projeto

```bash
cd starkids-website
```

### Passo 3: Criar estrutura de pastas

```bash
# Windows (PowerShell)
New-Item -ItemType Directory -Force -Path src/components
New-Item -ItemType Directory -Force -Path src/app/planos
New-Item -ItemType Directory -Force -Path src/app/contato
New-Item -ItemType Directory -Force -Path src/app/seja-franqueado

# macOS/Linux
mkdir -p src/components
mkdir -p src/app/planos
mkdir -p src/app/contato
mkdir -p src/app/seja-franqueado
```

### Passo 4: Copiar os arquivos

Copie o conteúdo de cada arquivo que forneci anteriormente para os respectivos locais:

#### Arquivos de Configuração (raiz do projeto):
1. `tailwind.config.ts`
2. `tsconfig.json`
3. `package.json`

#### Componentes (`src/components/`):
1. `Button.tsx`
2. `Card.tsx`
3. `Navbar.tsx`

#### App (`src/app/`):
1. `layout.tsx`
2. `page.tsx`
3. `globals.css`

#### Páginas internas:
1. `src/app/planos/page.tsx`
2. `src/app/contato/page.tsx`
3. `src/app/seja-franqueado/page.tsx`

### Passo 5: Instalar dependências

```bash
npm install
```

### Passo 6: Rodar o projeto

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📁 Conteúdo dos Arquivos Adicionais

### `postcss.config.mjs`

```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
```

### `next.config.mjs`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
```

### `.gitignore`

```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

## 🎨 Personalização

### Cores

Edite `tailwind.config.ts` para alterar a paleta de cores:

```typescript
colors: {
  primary: {
    500: '#0c8ce9', // Azul principal
  },
  accent: {
    300: '#ffd24a', // Amarelo CTA
  },
}
```

### Conteúdo

Edite os arquivos `.tsx` dentro de `src/app/` para alterar textos e conteúdos.

## 📦 Build para Produção

```bash
npm run build
npm start
```

## 🌐 Deploy

### Vercel (Recomendado)

```bash
npm i -g vercel
vercel
```

### Outras opções
- Netlify
- AWS Amplify
- Google Cloud Run

## 🛠️ Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **App Router** - Roteamento moderno

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## ✨ Funcionalidades

- ✅ Navegação fixa com menu mobile
- ✅ Animações hover nos cards
- ✅ Formulário com validação
- ✅ Rotas funcionais
- ✅ SEO otimizado
- ✅ Performance otimizada

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique se todas as dependências estão instaladas
2. Limpe o cache: `rm -rf .next node_modules && npm install`
3. Certifique-se de estar usando Node.js 18+

## 📝 Licença

Este projeto foi criado para uso educacional e comercial.

---

**Desenvolvido com ❤️ usando Next.js e Tailwind CSS**