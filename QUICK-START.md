# 🎯 Guia Rápido de Customização

## Para Começar

### 1️⃣ Inicie o servidor de desenvolvimento
```bash
npm run dev
```
Acesse: http://localhost:3000

### 2️⃣ Edite suas informações em 3 passos

#### Passo 1: Hero (Boas-vindas)
**Arquivo**: `src/components/Hero.astro`
```astro
<h1 class="hero-title">Olá! 👋</h1>
<p class="hero-subtitle">
  Sou um desenvolvedor web apaixonado... ← EDITE AQUI
</p>
```

#### Passo 2: About (Sobre você)
**Arquivo**: `src/components/About.astro`
```astro
<p>Sou um desenvolvedor web entusiasta... ← EDITE AQUI</p>
```

E modifique as habilidades:
```astro
<div class="skill-tag">HTML & CSS</div>
<div class="skill-tag">JavaScript</div>
<!-- Adicione suas tecnologias -->
```

#### Passo 3: Contact (Contato)
**Arquivo**: `src/components/Contact.astro`
```astro
<a href="mailto:seu.email@exemplo.com">
<a href="https://linkedin.com/in/seu-linkedin">
<a href="https://github.com/seu-github">
<!-- Atualize seus links -->
```

### 3️⃣ Adicione seus projetos
**Arquivo**: `src/pages/index.astro`

Adicione novos cartões assim:
```astro
<ProjectCard 
  title="Nome do Seu Projeto" 
  description="O que o projeto faz e por que é legal"
  tags={['ReactJS', 'TypeScript', 'Tailwind']}
  link="https://seu-projeto.com"
  github="https://github.com/user/projeto"
/>
```

## 🎨 Personalizações Extras

### Mudar cores principais
**Arquivo**: `src/layouts/Layout.astro`

Procure por:
- `#0066cc` = Azul principal (links, botões)
- `#ffffff` = Branco (fundo tema claro)
- `#0f0f0f` = Preto (fundo tema escuro)

### Mudar animações
**Arquivo**: `src/components/Hero.astro`

A animação do avatar usa:
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

### Adicionar nova seção
1. Crie novo arquivo em `src/components/MinhaSecao.astro`
2. Importe em `src/pages/index.astro`
3. Use a tag `<MinhaSecao />`

## 🚀 Deploy

### GitHub Pages (GRÁTIS)
```bash
npm run build
# Faça push da pasta 'dist' para seu repositório
```

### Netlify
1. Conecte seu repositório
2. Build: `npm run build`
3. Publish: `dist`

### Vercel
1. Importe seu projeto
2. Framework: Astro
3. Deploy automático!

## 📱 Testar Responsividade
- Abra o DevTools (F12)
- Clique em "Toggle device toolbar" (Ctrl+Shift+M)
- Teste em Mobile, Tablet e Desktop

## ✅ Checklist Antes de Publicar

- [ ] Nome atualizado no Hero
- [ ] Bio atualizada no About
- [ ] Sua foto/avatar definido
- [ ] Habilidades corretas listadas
- [ ] Seus projetos adicionados
- [ ] Links de contato atualizados
- [ ] Testado em mobile
- [ ] Tema claro/escuro funcionando

## 🐛 Precisa de Ajuda?

Se algo quebrou:
1. Limpe cache: `npm run build` depois `npm run preview`
2. Reinicie servidor: `npm run dev`
3. Verifique a sintaxe dos componentes .astro

## 📚 Arquivos Importantes

```
src/
  ├── components/        ← Componentes reutilizáveis
  ├── layouts/
  │   └── Layout.astro   ← Template principal com tema
  └── pages/
      └── index.astro    ← Sua página inicial
```

**Happy coding! 🎉**
