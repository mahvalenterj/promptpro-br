# PromptProBR — Arquitetura Moderna com React + Vite

Refatoração completa do site PromptProBR de um monolítico HTML em uma arquitetura moderna, escalável e reutilizável com **React**, **Vite** e **CSS Modules**.

## 📁 Estrutura de Pastas

```
src/
├── components/
│   ├── base/                    # Componentes reutilizáveis
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.module.css
│   │   ├── Section/
│   │   │   ├── Section.jsx
│   │   │   └── Section.module.css
│   │   ├── Card/
│   │   │   ├── Card.jsx
│   │   │   └── Card.module.css
│   │   ├── Badge/
│   │   │   ├── Badge.jsx
│   │   │   └── Badge.module.css
│   │   ├── Container/
│   │   │   ├── Container.jsx
│   │   │   └── Container.module.css
│   │   └── index.js
│   │
│   └── sections/                # Seções principais
│       ├── BackgroundEffects/   # Orbs + Grid
│       │   ├── BackgroundEffects.jsx
│       │   └── BackgroundEffects.module.css
│       ├── Navbar/
│       ├── Hero/
│       ├── StatsBar/
│       ├── DorSection/
│       ├── NichosSection/
│       ├── IncludesSection/
│       ├── DepoimentosSection/
│       ├── OfertaSection/
│       ├── FAQSection/
│       ├── FooterCTA/
│       ├── Footer/
│       └── index.js
│
├── data/                        # Dados estáticos
│   ├── nichos.js
│   ├── stats.js
│   ├── depoimentos.js
│   ├── faq.js
│   ├── includes.js
│   └── dorProblems.js
│
├── config/                      # Configurações globais
│   └── theme.js
│
├── styles/                      # Estilos globais
│   └── global.css
│
├── App.jsx                      # Componente principal
├── main.jsx                     # Ponto de entrada
└── index.html                   # HTML root (Vite)
```

## 🚀 Como Iniciar

### 1. Instalar Dependências

```bash
npm install
# ou
yarn install
```

### 2. Rodar em Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

O servidor abrirá automaticamente em `http://localhost:5173`

### 3. Build para Produção

```bash
npm run build
# ou
yarn build
```

Os arquivos otimizados estarão em `dist/`

### 4. Preview da Build

```bash
npm run preview
# ou
yarn preview
```

## 📦 Estrutura de Componentes

### Componentes Base (Reutilizáveis)

#### `<Button>`
Botão polivalente com variantes `primary` e `ghost`, tamanhos `sm`, `md`, `lg`.

```jsx
<Button variant="primary" size="md" as="a" href="#oferta">
  Quero meus prompts agora →
</Button>
```

#### `<Section>`
Wrapper padrão para seções. Suporta tema escuro com `dark={true}`.

```jsx
<Section dark={true} id="nichos">
  {/* conteúdo */}
</Section>
```

#### `<Card>`
Card base com variantes `default`, `nicho`, `testimonial`.

```jsx
<Card variant="nicho">
  {/* conteúdo */}
</Card>
```

#### `<Badge>`
Tag/label com variantes `primary`, `success`, `danger`, `info`.

```jsx
<Badge variant="primary">✦ +1.300 prompts profissionais</Badge>
```

#### `<Container>`
Layout container com tamanhos `sm`, `md`, `lg`, `xl`.

```jsx
<Container size="lg">
  {/* conteúdo centralizado */}
</Container>
```

### Componentes de Seção

Cada seção é um componente independente que consome dados de arquivos separados.

- **Navbar**: Navegação principal com logo e CTA
- **Hero**: Seção principal com headline
- **StatsBar**: Estatísticas renderizadas dinamicamente
- **DorSection**: Problemas/dores do usuário
- **NichosSection**: Exibe 13 nichos com mapa dinâmico
- **IncludesSection**: O que está incluído (layout dois-colunas)
- **DepoimentosSection**: Depoimentos com avatares dinâmicos
- **OfertaSection**: Box de oferta e preço
- **FAQSection**: FAQ interativo (accordion)
- **FooterCTA**: CTA final
- **Footer**: Rodapé
- **BackgroundEffects**: Orbs flutuantes + grid

## 📊 Dados Estáticos

Todos os dados foram extraídos para arquivos separados em `src/data/`:

- `nichos.js` — Lista dos 13 nichos com emojis e contagem
- `stats.js` — Stats da navbar/seção principal
- `depoimentos.js` — Depoimentos com avatares
- `faq.js` — Perguntas e respostas
- `includes.js` — Features incluídos + IAs suportadas
- `dorProblems.js` — Problemas/dores

**Exemplo:**
```javascript
export const nichos = [
  { emoji: '📱', name: 'Marketing Digital', count: 120 },
  { emoji: '💼', name: 'Vendas', count: 100 },
  // ...
];
```

## 🎨 Estilos

### CSS Modules

Cada componente tem seu próprio `Module.css`:
- Sem conflitos de nomes globais
- Estilos encapsulados por componente
- Fácil manutenção e escalabilidade

### Variáveis CSS Globais

Arquivo `styles/global.css` define:
- Cores tema (`--accent`, `--bg`, etc.)
- Tipografia
- Animações globais

## ♿ Acessibilidade

- **ARIA labels** em elementos interativos
- **Roles semânticas** (`role="main"`, `role="navigation"`, etc.)
- **Keyboard navigation** no FAQ (accordion)
- **Semantic HTML** (section, header, main, footer)

## 📱 Responsividade

- Mobile-first approach
- Breakpoints: 600px, 768px
- Todos os componentes adaptados para mobile
- Grid e flexbox fluúdos

## 🎭 Animações

- Fade-up no Hero
- Scale-in nos depoimentos
- Slide-down no FAQ
- Transições suaves em buttons e cards

## 🔄 Como Adicionar Novos Dados

1. Crie um novo arquivo em `src/data/novo.js`
2. Exporte um array/objeto com seus dados
3. Importe no componente que precisar
4. Use `.map()` para renderizar dinamicamente

**Exemplo:**
```javascript
// src/data/novo.js
export const meusDados = [...];

// Usar no componente
import { meusDados } from '../data/novo';

export const MeuComponente = () => {
  return (
    <div>
      {meusDados.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};
```

## 🛠️ Como Adicionar Novo Componente

1. Criar pasta em `src/components/sections/MeuComponente/`
2. Arquivos:
   - `MeuComponente.jsx`
   - `MeuComponente.module.css`
3. Exportar em `src/components/sections/index.js`
4. Importar e usar em `App.jsx`

## ✅ Checklist de Refatoração

- ✅ Separação em componentes independentes
- ✅ CSS Modules (sem conflitos globais)
- ✅ Dados extraídos para arquivos
- ✅ Renderização dinâmica (map)
- ✅ Componentes reutilizáveis base
- ✅ Acessibilidade melhorada
- ✅ Semântica HTML
- ✅ Responsividade mobile-first
- ✅ Animações preservadas
- ✅ Design original mantido
- ✅ Código pronto para produção

## 🚀 Deploy

### Vercel (Recomendado para Vite)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Fazer upload da pasta `dist/`
```

## 📝 Licença

MIT — PromptProBR 2024

---

**Desenvolvido com ❤️ usando React + Vite**