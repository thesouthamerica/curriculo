# Portfólio Profissional com Astro

Um portfólio profissional moderno e responsivo construído com [Astro](https://astro.build), com suporte a tema claro/escuro.

## 🚀 Características

- ✨ Design minimalista e clean
- 🌓 Tema claro/escuro com localStorage
- 📱 Completamente responsivo
- ⚡ Carregamento rápido (Astro - zero JavaScript por padrão)
- 🎨 Componentes reutilizáveis
- 🔗 Seções: Hero, Sobre, Projetos e Contato

## 📁 Estrutura do Projeto

```
curriculo/
├── src/
│   ├── components/
│   │   ├── Header.astro          # Navegação principal
│   │   ├── Hero.astro            # Seção de boas-vindas
│   │   ├── About.astro           # Seção Sobre e Habilidades
│   │   ├── ProjectCard.astro     # Cartão de projeto reutilizável
│   │   ├── Contact.astro         # Seção de contato
│   │   └── ThemeToggle.astro     # Botão de alternância de tema
│   ├── layouts/
│   │   └── Layout.astro          # Layout principal com tema
│   └── pages/
│       └── index.astro           # Página inicial
├── public/                       # Arquivos estáticos
├── astro.config.mjs             # Configuração do Astro
├── package.json
└── README.md
```

## 🛠 Como Usar

### Pré-requisitos
- Node.js 16+ e npm instalados

### Instalação

```bash
# Já está instalado! As dependências foram baixadas automaticamente
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O servidor de desenvolvimento estará disponível em [http://localhost:3000](http://localhost:3000)

### Build para Produção

```bash
npm run build
```

Isso vai gerar os arquivos otimizados na pasta `dist/`

### Preview da Build

```bash
npm run preview
```

## 🎨 Personalizando seu Portfólio

### 1. **Atualize as Informações Pessoais**

Edite `src/components/Hero.astro`:
- Altere o título e descrição
- Customize o emoji do avatar

Edite `src/components/About.astro`:
- Atualize sua bio
- Modifique a lista de habilidades

### 2. **Adicione seus Projetos**

Em `src/pages/index.astro`, modifique o componente `ProjectCard`:

```astro
<ProjectCard 
  title="Seu Projeto" 
  description="Descrição do que o projeto faz"
  tags={['Tech1', 'Tech2', 'Tech3']}
  link="https://seu-link.com"
  github="https://github.com/usuario/repo"
/>
```

### 3. **Configure o Contato**

Em `src/components/Contact.astro`, atualize os links:
- Email
- LinkedIn
- GitHub
- Twitter

### 4. **Customize as Cores**

Edite `src/layouts/Layout.astro` para alterar o esquema de cores padrão.

## 🎯 Seções do Portfólio

### Header
- Logo/Nome
- Navegação com links âncora
- Sticky no topo

### Hero
- Título com efeito de animação
- Descrição profissional
- Botões de chamada à ação
- Avatar com emoji animado

### About
- Biografia
- Lista de habilidades com tags
- Layout responsivo em grid

### Projects
- Grid de cartões de projetos
- Tags de tecnologias
- Links para demo e GitHub
- Efeito hover com elevação

### Contact
- Ícones com links
- Múltiplos canais de contato
- Footer com copyright

## 🌈 Tema Claro/Escuro

O tema é gerenciado automaticamente com:
- Preferência salva em localStorage
- Transições suaves de cores
- Botão flutuante no canto superior direito

## 📱 Responsividade

O portfólio é completamente responsivo:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (<768px)

## ⚡ Performance

O Astro entrega:
- Zero JavaScript por padrão
- CSS scoped em componentes
- Build estática ultra-rápida
- Excelente SEO

## 📝 Dicas

1. **Adicione favicons**: Coloque arquivos em `public/`
2. **Otimize imagens**: Use formatos modernos (WebP)
3. **Adicione analytics**: Integre Google Analytics ou alternativa
4. **Deploy**: GitHub Pages, Netlify ou Vercel
5. **Domínio customizado**: Configure DNS e SSL

## 🚀 Próximos Passos

1. Personalize todas as informações
2. Adicione seus projetos reais
3. Teste em diferentes dispositivos
4. Deploy do site
5. Compartilhe seu portfólio!

## 📚 Recursos

- [Documentação Astro](https://docs.astro.build)
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS Tricks](https://css-tricks.com)

## 📄 Licença

Este projeto é seu! Use como desejar.

---

**Bom desenvolvimento! 🚀**
