# GUIA COMPLETO: IMPLEMENTAR LANDING PAGE NO ANTIGRAVITY
## Mestra Gi - "Despertar da Missão de Vida"

**Versão:** 1.0  
**Plataforma:** Antigravity  
**Objetivo:** Converter 5-8% com design luxo + copy psicológica

---

## 1. ESTRUTURA ANTIGRAVITY PARA SEU PROJETO

### 1.1 Criação do Funnel Base

**No Painel Antigravity:**
1. Clique em **"Novo Funnel"** (ou "New Campaign")
2. **Nome:** "Despertar da Missão - Mestra Gi"
3. **Tipo:** Landing Page (não funil multi-step ainda)
4. **Template:** Comece em **"Blank"** (você tem controle total)

**URL:** `mestragi.com/despertar-missao`  
ou  
`despertar-missao-vida.com` (melhor para SEO)

---

### 1.2 Seções do Funnel (Order de Criação)

No Antigravity, você vai criar **11 Seções principais**:

```
01. Header/Navigation
02. Hero (O Portal)
03. Recognition (O Espelho)
04. Transition (Bridge)
05. What Is (Bio-Sinfonia)
06. Journey (Timeline)
07. Value Stack (O Altar)
08. Authority (Quem Guia)
09. Science (Ciência)
10. FAQ
11. Guarantee + CTA Final
12. Footer
```

---

## 2. CONFIGURAÇÃO PASSO A PASSO NO ANTIGRAVITY

### 2.1 HEADER & NAVIGATION

**No Antigravity:**
1. Adicione um bloco de **"Header"**
2. **Logo:** Upload a logo da Mestra Gi (quadrado, 200x200px)
3. **Menu:** Simples (não precisa de muitos links)
   - Home
   - Sobre Mestra Gi
   - Garantia
   - Contato

**CSS Personalizado (Antigravity permite):**
```css
.header {
  background: linear-gradient(135deg, #01261C 0%, #0F172A 100%);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 999;
}

.logo {
  color: #D4AF37;
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
}
```

---

### 2.2 HERO SECTION (O Portal)

**Componentes no Antigravity:**

1. **Background:**
   - Cor: Deep Emerald (`#01261C`)
   - Ou imagem de fundo (floresta noite)
   - **Altura:** 100vh (full viewport)

2. **Título Principal:**
   - **Copy:** "Ative Sua Missão de Vida em 30 Minutos"
   - **Font:** Playfair Display, 3.5-4rem
   - **Cor:** Branco (`#FFFFFF`)
   - **Efeito:** Usar CSS animation para digitação (veja código abaixo)

3. **Subtítulo:**
   - **Copy:** "Mulher, você sente que existe algo maior esperando por você? Uma missão que vai além da rotina..."
   - **Font:** Inter, 1.2rem
   - **Cor:** Branco com 90% opacity

4. **CTA Button (Primário):**
   - **Texto:** "🎧 QUERO DESPERTAR MINHA MISSÃO AGORA"
   - **Cor Fundo:** Liquid Gold (`#D4AF37`)
   - **Cor Texto:** Dark (`#1F2937`)
   - **Padding:** 16px 48px
   - **Border-radius:** 50px
   - **Hover:** Levanta 8px + glow effect

5. **Benefit Tags:**
   - 3 tags com ícones (🎧 Áudio | 🎁 Bônus | ⚡ Acesso)
   - Fundo: `rgba(255,255,255,0.15)`
   - Backdrop-filter: blur(10px)

**Código CSS para Antigravity:**
```css
/* Hero Title - Typing Animation */
.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  color: white;
  animation: typing 3s steps(50, end), blink 0.75s step-end infinite;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #D4AF37;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  from, to {
    border-right-color: transparent;
  }
  50% {
    border-right-color: #D4AF37;
  }
}

/* CTA Button */
.cta-primary {
  background: #D4AF37;
  color: #1F2937;
  padding: 16px 48px;
  border-radius: 50px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 30px rgba(212, 175, 55, 0.3);
}

.cta-primary:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(212, 175, 55, 0.5);
  background: #E5C158;
}
```

---

### 2.3 RECOGNITION SECTION (O Espelho)

**No Antigravity:**

1. **Estrutura:** Grid 1 coluna (mobile) → 3 colunas (desktop)

2. **Headline:**
   - **Copy:** "Se Você Chegou Até Aqui, Você Já Sentiu..."
   - **Fonte:** Playfair Display, 2.5rem
   - **Cor:** Dark (`#1F2937`)

3. **5 Pain Cards:**

```
Card 1:
- Ícone: ❌
- Texto: "A frustração de não saber qual é seu verdadeiro propósito"
- Background: `rgba(212, 175, 55, 0.05)`
- Border-left: 4px solid `#D4AF37`

(Repetir para Cards 2-5)
```

4. **Breathing Section (Transição interna):**
   - Fundo: Gradiente roxo-ciano
   - Texto grande: "Respira fundo. Você não está perdida."
   - Subtexto: "Sua missão sempre esteve dentro de você. Ela só precisa ser ativada."

**CSS:**
```css
.pain-card {
  background: rgba(212, 175, 55, 0.05);
  border-left: 4px solid #D4AF37;
  padding: 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
  animation: slideInLeft 0.6s ease-out;
}

.pain-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.1);
}

/* Frosted Glass Effect (se quiser avançado) */
.pain-card {
  backdrop-filter: blur(5px);
  background: rgba(31, 41, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.2);
}
```

---

### 2.4 TRANSITION SECTION (Bridge)

**No Antigravity:**

1. **Background:** Gradiente roxo-ciano
   ```css
   background: linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%);
   ```

2. **Texto:**
   ```
   "Você não precisa de mais informações. 
   Você já leu livros. Já fez cursos. Já tentou 'encontrar seu propósito'.
   
   O que você precisa é de uma experiência que desperte sua sabedoria interior."
   ```

3. **Cor Texto:** Branco (`#FFFFFF`)
4. **Font:** Inter, 1.2rem
5. **Text-align:** Center
6. **Max-width:** 700px (centrado)

---

### 2.5 WHAT IS SECTION (Bio-Sinfonia)

**No Antigravity:**

1. **Headline:** "O Que É Esta Meditação"
2. **Subheadline:** "Esta não é mais uma meditação de relaxamento..."

3. **3 Feature Cards** (Grid 3 colunas):

```
Card 1 - Mental
- Ícone: 🧠
- Título: "Mental"
- Cor: Purple (`#8B5CF6`)
- Copy: "Limpa crenças limitantes..."

Card 2 - Emocional  
- Ícone: 💜
- Título: "Emocional"
- Cor: Rose (`#EC4899`)
- Copy: "Ativa gratidão antecipada..."

Card 3 - Energético
- Ícone: ⚡
- Título: "Energético"
- Cor: Cyan (`#06B6D4`)
- Copy: "Alinha seu campo de possibilidades..."
```

4. **Results List** (abaixo dos cards):
   - Fundo: Light (`#F8FAFC`)
   - Ícone: ✨ (em vez de ✅)
   - Cada item em nova linha com ícone

**CSS:**
```css
.feature-card {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(6, 182, 212, 0.05));
  padding: 30px;
  border-radius: 12px;
  border: 1px solid rgba(212, 175, 55, 0.2);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(139, 92, 246, 0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}
```

---

### 2.6 JOURNEY SECTION (Timeline - OS 10 PASSOS)

**No Antigravity:**

Este é o mais **importante** para conversão. Aqui você mostra profundidade.

**Estrutura:**
1. **Headline:** "O Que Acontece Durante os 30 Minutos"
2. **10 Step Cards** em layout vertical (ou grid 2x5)

**Cada Card tem:**
```
Número: 1️⃣ 2️⃣ 3️⃣ ... (emoji numerado)
Título: "Abertura e Intenção"
Duração: (2 min)
Descrição: "Você se conecta com o propósito sagrado..."
Cor de Fundo: Gradiente específico por passo

Passo 1 → Ouro
Passo 2 → Rosa/Magenta
Passo 3 → Ciano
... (vide PRD anterior para cores)
```

**CSS:**
```css
.journey-step {
  background: linear-gradient(135deg, var(--step-color-1) 0%, var(--step-color-2) 100%);
  padding: 25px;
  border-radius: 12px;
  border-top: 3px solid #D4AF37;
  color: white;
  transition: all 0.3s ease;
  counter-increment: step-counter;
}

.journey-step::before {
  content: counter(step-counter);
  display: inline-block;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  font-weight: 700;
  margin-bottom: 15px;
}

.journey-step:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}
```

---

### 2.7 VALUE STACK (O Altar - SEÇÃO CRÍTICA)

**No Antigravity:**

Este é onde você **fatura**. Design luxuoso + copy = conversão.

**Estrutura:**

1. **Headline:** "O Que Você Recebe"

2. **3 Value Cards** (Grid 3 colunas):

```
Card 1: 🎧 MEDITAÇÃO
- Descrição: "Áudio 30 min..."
- Preço Original: R$ 97 (strikethrough, cinza)
- Label: "Incluso"

Card 2: 📖 GUIA
- Descrição: "PDF com 7 Sinais..."
- Preço Original: R$ 47 (strikethrough)
- Label: "Incluso"

Card 3: ✨ ACESSO 1 ANO
- Descrição: "Pratique quando quiser..."
- Preço Original: R$ 97 (strikethrough)
- Label: "Incluso"
```

**Cores dos Cards:** Usar gradiente roxo-ciano
```css
background: linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%);
```

3. **Big Reveal - The Stack:**

```
Valor Total: R$ 241 (grande, strikethrough, cinza)
↓
Seu Investimento: R$ 30 (OURO, 3.5rem, bold)
ou
3x de R$ 10 (sem juros)
```

**CSS Crítico:**
```css
.value-original {
  font-size: 1.8rem;
  color: #D1D5DB;
  text-decoration: line-through;
  margin-bottom: 10px;
}

.value-final {
  font-size: 3.5rem;
  color: #D4AF37;
  font-weight: 700;
  font-family: 'Playfair Display', serif;
  text-shadow: 0 2px 10px rgba(212, 175, 55, 0.3);
}

.value-payment-option {
  font-size: 1.1rem;
  color: #8B5CF6;
  margin-top: 15px;
  font-weight: 600;
}
```

4. **CTA Secundário (Forte):**
   - Botão: "SIM, QUERO ATIVAR MINHA MISSÃO"
   - Mesmo estilo que o primário
   - Margem superior: 40px

---

### 2.8 AUTHORITY SECTION (Quem Guia)

**No Antigravity:**

1. **Layout:** 2 colunas (imagem | texto)
   - Em mobile: 1 coluna (imagem em cima)

2. **Coluna 1 - Imagem:**
   - Foto circular da Mestra Gi (280x280px)
   - Border: 4px solid `#D4AF37`
   - Box-shadow: `0 20px 40px rgba(139, 92, 246, 0.2)`
   - Badge abaixo: "Fundadora UCCAI"

3. **Coluna 2 - Texto:**
   ```
   Título: "Mestra Gislaine Wahbe"
   Subtítulo (em roxo): "35 anos dedicados à transformação"
   
   Bio (3 parágrafos):
   - Parágrafo 1: Combinação de expertise
   - Parágrafo 2: Credenciais (UCCAI, série Gaia, 1M pessoas)
   - Parágrafo 3: Filosofia (integração ciência + espiritualidade)
   
   Quote (em itálico, com borda lateral):
   "Minha missão é despertar mulheres para a grandeza que já existe dentro delas.
   Esta meditação é o portal de entrada."
   ```

**CSS:**
```css
.authority-image {
  border-radius: 50%;
  border: 4px solid #D4AF37;
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
  object-fit: cover;
}

.authority-quote {
  background: white;
  padding: 20px;
  border-left: 4px solid #D4AF37;
  font-style: italic;
  margin-top: 30px;
}
```

---

### 2.9 SCIENCE SECTION (Validação)

**No Antigravity:**

1. **Headline:** "Por que Esta Prática Funciona?"
2. **Subheadline:** "A Neurociência já comprovou que..."

3. **4 Proof Points** (vertical ou grid 2x2):

```
Ponto 1: 🧠 Neuroplasticidade
"Visualização ativa cria novas redes neurais..."

Ponto 2: 💜 Gratidão Antecipada
"Altera sua química cerebral + dopamina..."

Ponto 3: 🎯 Estados Expandidos
"Frequências cerebrais theta/alfa..."

Ponto 4: ⚡ Decretos
"A repetição muda conexões neurais..."
```

4. **Grande conclusão (em box destaque):**
   ```
   "Quando você combina essas técnicas em uma única prática estruturada,
   você não está apenas relaxando.
   
   Você está reescrevendo sua realidade."
   ```

**CSS:**
```css
.science-point {
  background: rgba(212, 175, 55, 0.05);
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #8B5CF6;
  margin-bottom: 20px;
}

.science-conclusion {
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(6, 182, 212, 0.1));
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1F2937;
}
```

---

### 2.10 FAQ SECTION

**No Antigravity:**

Use o componente **"Accordion"** (se disponível) ou crie com CSS:

**5 FAQ Items:**

```
Q1: "E se eu não tiver tempo?"
A: "São 30 minutos... (resposta completa do documento de copy)"

Q2: "E se eu não conseguir visualizar?"
A: "A prática funciona mesmo se você não vê imagens..."

Q3: "Isso funciona para qualquer crença espiritual?"
A: "Sim. Esta prática é universal..."

Q4: "E se eu já fiz outras meditações e não funcionaram?"
A: "Esta é diferente. Não é relaxamento..."

Q5: "Por quanto tempo tenho acesso?"
A: "1 ano completo..."
```

**CSS Accordion:**
```css
.faq-item {
  margin-bottom: 20px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  overflow: hidden;
}

.faq-question {
  padding: 20px;
  background: #F8FAFC;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  color: #1F2937;
  transition: all 0.3s ease;
}

.faq-question:hover {
  background: rgba(139, 92, 246, 0.05);
}

.faq-answer {
  padding: 0 20px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: white;
}

.faq-item.active .faq-answer {
  padding: 20px;
  max-height: 500px;
}

.faq-toggle {
  transition: transform 0.3s ease;
}

.faq-item.active .faq-toggle {
  transform: rotate(45deg);
}
```

---

### 2.11 GUARANTEE SECTION

**No Antigravity:**

**Visual:**
- **Ícone grande:** 🛡️
- **Cor de fundo:** Gradiente ciano-roxo suave
- **Padding:** 60px vertical, 40px horizontal

**Copy:**
```
🛡️ GARANTIA INCONDICIONAL DE 7 DIAS

Sua jornada está protegida.

[Resto do texto - vide documento de copy]

O risco é ZERO. A confiança é TOTAL.
```

**CSS:**
```css
.guarantee {
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1));
  padding: 60px 40px;
  border-radius: 12px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.guarantee-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.guarantee h3 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #1F2937;
  margin-bottom: 20px;
}

.guarantee p {
  color: #1F2937;
  line-height: 1.8;
  font-size: 1.05rem;
}
```

---

### 2.12 FINAL CTA + URGENCY

**No Antigravity:**

**Fundo:** Gradiente roxo-ciano (mesmo do Hero)

**Copy:**
```
"Este É o Momento"

"Você chegou até aqui porque algo dentro de você descobriu a verdade:

SUA MISSÃO ESTÁ ESPERANDO.

Não precisa ser perfeito.
Não precisa ser o momento ideal.
Você só precisa começar."
```

**Botão:**
- Tamanho: GRANDE (mais visível)
- Texto: "SIM, ESTOU PRONTA PARA DESPERTAR MINHA MISSÃO"
- Cor: Ouro
- Hover: Levanta + glow

**Microcopy abaixo:**
```
"R$ 30 à vista ou 3x de R$ 10 • Acesso Imediato • Garantia de 7 dias"
```

---

### 2.13 FOOTER

**No Antigravity:**

Simples e elegante:

```
Copyright © 2026 Mestra Gislaine Wahbe. Todos os direitos reservados.
Powered by Mestra Gi Meditation

[Links opcionais: Política de Privacidade | Termos de Uso | Contato]
```

**Cor de fundo:** Dark (`#1F2937`)  
**Cor de texto:** White com 80% opacity

---

## 3. INTEGRAÇÕES NO ANTIGRAVITY

### 3.1 Conectar com Hotmart

**Passos:**

1. No **Antigravity Dashboard** → Settings → Integrations
2. Buscar **"Hotmart"** ou **"E-commerce"**
3. Adicionar seu **Product ID do Hotmart**
4. Copiar o **Hotmart Checkout Link**
5. Colar no **CTA Button (link destino)**

**Estrutura do Link:**
```
https://pay.hotmart.com/[SEU_ID_PRODUTO]
```

### 3.2 Conectar Google Analytics 4

**Passos:**

1. Settings → Analytics
2. Adicionar **GA4 Measurement ID**
3. Enabling Track Events:
   - CTA Clicks
   - Scroll Depth (25%, 50%, 75%, 100%)
   - Section Views
   - Form Submissions

**Eventos Customizados:**
```
event_name: "cta_hero_click"
event_name: "cta_price_click"
event_name: "faq_expand"
event_name: "scroll_70_percent"
```

### 3.3 Email Marketing Integration (RD Station ou Mailchimp)

**No Antigravity:**

1. Se quiser capturar email ANTES de enviar para Hotmart:
   - Adicione um bloco "Email Capture"
   - Defina automation para enviar email boas-vindas
   - Integre com RD Station ou Mailchimp

2. **Webhook para Hotmart:**
   - Quando alguém compra no Hotmart
   - Dispara email automático com link de acesso
   - Cria tag no email marketing

---

## 4. OTIMIZAÇÕES FINAIS NO ANTIGRAVITY

### 4.1 Responsividade

**Antigravity Templates:** Já vêm responsive.

Mas revise:
- [ ] Hero title em mobile (reduzir para 2rem)
- [ ] Grid cards em mobile (1 coluna)
- [ ] CTA buttons grande o suficiente (44px+ height)
- [ ] Imagens otimizadas (WebP se possível)

### 4.2 Performance

**Antigravity Dashboard → Page Speed:**
1. Comprimir imagens (ferramentas: TinyPNG, Squoosh)
2. Lazy load images (Antigravity faz automaticamente)
3. Remover scripts desnecessários
4. Minificar CSS customizado

**Target:**
- Lighthouse Score: 90+
- Page Load Time: <2s
- Mobile Score: 85+

### 4.3 A/B Testing no Antigravity

1. Clique em **"Variants"** ou **"A/B Test"**
2. Crie 2 versões:
   - **Variante A:** Headline "Ative Sua Missão"
   - **Variante B:** Headline "O Despertar Começa Aqui"
3. Split traffic: 50/50
4. Monitore por 3-7 dias
5. Scale com a vencedora

---

## 5. CHECKLIST PRÉ-LAUNCH

- [ ] Todas as 11 seções criadas no Antigravity
- [ ] Copy revisada e aprovada (sem typos)
- [ ] Imagem Mestra Gi otimizada e uploadada
- [ ] Hotmart link testado (redireciona corretamente)
- [ ] GA4 tracking confirmado
- [ ] Email boas-vindas Hotmart configurado
- [ ] Teste em 3 browsers (Chrome, Firefox, Safari)
- [ ] Teste mobile em iPhone + Android
- [ ] Cores corretas (#01261C, #D4AF37, #8B5CF6, #06B6D4)
- [ ] Fontes instaladas (Playfair Display, Inter)
- [ ] CTA buttons 100% visíveis (above fold no hero)
- [ ] Garantia 7 dias clara e proeminente
- [ ] FAQ accordion funcionando
- [ ] Scroll suave (smooth scroll)
- [ ] Cursor customizado testado (se implementou)
- [ ] Meta tags para redes sociais
- [ ] Domínio customizado apontando para Antigravity

---

## 6. WORKFLOW DE IMPLEMENTAÇÃO

### Semana 1:
- [ ] Criar funnel base no Antigravity
- [ ] Adicionar Hero + Recognition + Bridge
- [ ] Testar responsividade

### Semana 2:
- [ ] Adicionar Bio-Sinfonia + Jornada + Altar
- [ ] Integrar com Hotmart
- [ ] Configurar GA4

### Semana 3:
- [ ] Adicionar Autoridade + Ciência + FAQ
- [ ] Adicionar Garantia + CTA Final
- [ ] Testes finais

### Semana 4:
- [ ] A/B Testing headlines (3 variações)
- [ ] Otimizar performance
- [ ] Deploy + anúncios iniciais

---

## 7. DICAS PRO DO ANTIGRAVITY

✅ **Use "Sections" (não pages):**  
Antigravity organiza melhor em seções do que páginas separadas.

✅ **Customize CSS quando necessário:**  
Antigravity permite CSS customizado por elemento. Use isso para efeitos luxo.

✅ **Teste em Desktop PRIMEIRO:**  
Depois adapte para mobile. Antigravity faz automático, mas revise.

✅ **Hotmart automático:**  
Quando alguém clica, vai direto para Hotmart. Não precisa de página intermediária.

✅ **Rastreie tudo:**  
GA4 + Hotmart dashboard = você ve exatamente onde as pessoas caem.

---

**Documento Pronto para Execução**  
*Versão 1.0 | Antigravity Specifics | Janeiro 2026*