export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  categorySlug: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
}

export interface BlogCategory {
  name: string;
  slug: string;
}

export const blogCategories: BlogCategory[] = [
  { name: "Tecnologia", slug: "tecnologia" },
  { name: "Aplicações", slug: "aplicacoes" },
  { name: "Manutenção", slug: "manutencao" },
  { name: "Novidades", slug: "novidades" },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Como funciona uma embreagem eletromagnética: guia completo",
    slug: "como-funciona-embreagem-eletromagnetica",
    excerpt: "Entenda o princípio de funcionamento das embreagens eletromagnéticas, seus componentes principais e como elas transmitem torque de forma controlada.",
    content: `A embreagem eletromagnética é um dispositivo fundamental na transmissão de potência mecânica, permitindo o acoplamento e desacoplamento controlado entre dois eixos rotativos através de um campo magnético gerado por uma bobina elétrica.

## Princípio de funcionamento

Quando uma corrente elétrica é aplicada à bobina da embreagem, um campo magnético é gerado. Esse campo atrai o disco de armadura contra o rotor, criando uma conexão por atrito entre as superfícies. O torque é então transmitido do eixo de entrada para o eixo de saída.

Ao interromper a corrente elétrica, o campo magnético cessa e molas de retorno separam o disco de armadura do rotor, desacoplando a transmissão de torque instantaneamente.

## Componentes principais

Uma embreagem eletromagnética é composta por:

- **Bobina**: Gera o campo magnético quando energizada
- **Rotor**: Conectado ao eixo de entrada, gira continuamente
- **Armadura**: Disco que é atraído magneticamente contra o rotor
- **Cubo**: Conectado ao eixo de saída, transmite o torque quando acoplado
- **Molas de retorno**: Separam armadura do rotor quando a bobina é desenergizada

## Vantagens sobre embreagens mecânicas

As embreagens eletromagnéticas oferecem diversas vantagens em relação às alternativas mecânicas e pneumáticas:

1. **Acionamento remoto**: Podem ser controladas eletronicamente à distância
2. **Resposta rápida**: Tempos de acoplamento na ordem de milissegundos
3. **Controle preciso**: Integração com PLCs e sistemas de automação
4. **Baixa manutenção**: Sem necessidade de ajustes mecânicos frequentes
5. **Longa vida útil**: Milhões de ciclos de operação

## Aplicações industriais

As embreagens eletromagnéticas são amplamente utilizadas em:

- Máquinas de embalagem e packaging
- Impressoras industriais
- Equipamentos agrícolas (plantadeiras, colheitadeiras)
- Sistemas de transporte e movimentação
- Compressores de ar-condicionado veicular

Na Magneto Brasil, desenvolvemos embreagens eletromagnéticas customizadas para cada aplicação, garantindo a melhor relação entre performance, durabilidade e custo-benefício.`,
    category: "Tecnologia",
    categorySlug: "tecnologia",
    image: "/images/produtos/produto-23.png",
    author: "Equipe Magneto Brasil",
    date: "2025-12-15",
    readTime: "8 min",
  },
  {
    title: "Freio eletromagnético fail-safe: por que a segurança é prioridade",
    slug: "freio-eletromagnetico-fail-safe-seguranca",
    excerpt: "Descubra como os freios fail-safe garantem segurança em elevadores, guindastes e outras aplicações críticas onde a falha não é uma opção.",
    content: `Em aplicações onde a segurança de pessoas e equipamentos está em jogo, o freio eletromagnético fail-safe é a solução mais confiável do mercado. Seu princípio de funcionamento garante que a frenagem ocorra automaticamente em caso de falha elétrica.

## O que é um freio fail-safe?

Um freio fail-safe, também chamado de spring-applied ou power-off, utiliza molas para aplicar a força de frenagem. Quando energizado, a bobina eletromagnética comprime as molas, liberando o eixo para girar. Na ausência de energia, as molas atuam automaticamente, aplicando o freio.

Isso significa que em qualquer situação de falha elétrica — queda de energia, rompimento de cabo, falha no controlador — o freio é ativado automaticamente, segurando a carga com segurança.

## Diferença entre freio power-off e power-on

| Característica | Fail-safe (Power-off) | Power-on |
|---|---|---|
| Estado sem energia | Freio aplicado | Freio liberado |
| Segurança | Máxima | Padrão |
| Aplicação | Elevadores, guindastes | Máquinas em geral |
| Consumo | Consome energia para liberar | Consome energia para frear |

## Normas e certificações

Para aplicações de segurança crítica, os freios devem atender a normas específicas:

- **ABNT NBR 16042**: Norma brasileira para elevadores
- **EN 81-20/50**: Norma europeia para elevadores
- **SIL 3**: Nível de integridade de segurança para sistemas instrumentados

## Aplicações típicas

Os freios fail-safe são obrigatórios em:

- Elevadores de passageiros e carga
- Guindastes e pontes rolantes
- Plataformas elevatórias
- Servomotores em robótica
- Equipamentos de mineração

Na Magneto Brasil, todos os nossos freios para aplicações de segurança passam por rigorosos testes de qualidade e são certificados conforme as normas aplicáveis.`,
    category: "Tecnologia",
    categorySlug: "tecnologia",
    image: "/images/produtos/produto-30.png",
    author: "Equipe Magneto Brasil",
    date: "2025-11-28",
    readTime: "6 min",
  },
  {
    title: "Embreagens para plantadeiras: tecnologia no campo",
    slug: "embreagens-plantadeiras-tecnologia-campo",
    excerpt: "Saiba como as embreagens eletromagnéticas revolucionaram o plantio de precisão no agronegócio brasileiro, garantindo uniformidade e produtividade.",
    content: `O agronegócio brasileiro é um dos mais avançados do mundo, e a tecnologia de embreagens eletromagnéticas desempenha papel fundamental na precisão do plantio. Entenda como esses componentes contribuem para a produtividade no campo.

## O papel da embreagem na plantadeira

Em uma plantadeira de precisão, as embreagens eletromagnéticas controlam o acionamento dos dosadores de sementes e fertilizantes. Cada linha de plantio pode ser ativada ou desativada individualmente, permitindo:

- **Plantio em taxa variável**: Ajuste da quantidade de sementes por metro conforme o mapa de fertilidade do solo
- **Desligamento automático de linhas**: Ao passar sobre áreas já plantadas, evitando desperdício
- **Controle de seção**: Desliga grupos de linhas em bordas e manobras

## Desafios do ambiente agrícola

O ambiente de trabalho de uma embreagem agrícola é extremamente severo:

- **Poeira intensa**: Particulado de solo e resíduos de cultura
- **Vibração constante**: Terrenos irregulares e altas velocidades de operação
- **Variações de temperatura**: De manhãs frias a tardes de calor intenso
- **Umidade**: Orvalho, chuva e irrigação

Por isso, as embreagens Magneto Brasil para plantadeiras são projetadas com grau de proteção IP54 e materiais resistentes à corrosão.

## Especificações importantes

Ao selecionar uma embreagem para plantadeira, considere:

1. **Torque**: Deve ser suficiente para acionar o dosador com margem de segurança
2. **Tensão**: Compatível com o sistema elétrico do trator (geralmente 12V DC)
3. **Resposta**: Tempo de acoplamento rápido para precisão no plantio
4. **Durabilidade**: Capacidade para milhares de hectares por safra
5. **Compatibilidade**: Dimensional e elétrica com a plantadeira

## Resultados no campo

Plantadeiras equipadas com embreagens eletromagnéticas de qualidade apresentam:

- Até 5% de aumento na produtividade por uniformidade de plantio
- Redução de 15% no consumo de sementes por eliminação de sobreposição
- Menor necessidade de manutenção durante a safra
- Maior velocidade de operação mantendo a qualidade

A Magneto Brasil é fornecedora dos principais fabricantes de plantadeiras do Brasil, com soluções customizadas para cada modelo e aplicação.`,
    category: "Aplicações",
    categorySlug: "aplicacoes",
    image: "/images/produtos/produto-14.png",
    author: "Equipe Magneto Brasil",
    date: "2025-11-10",
    readTime: "7 min",
  },
  {
    title: "Manutenção preventiva em freios eletromagnéticos: checklist completo",
    slug: "manutencao-preventiva-freios-eletromagneticos",
    excerpt: "Um guia prático com checklist de manutenção preventiva para maximizar a vida útil e segurança dos seus freios eletromagnéticos industriais.",
    content: `A manutenção preventiva de freios eletromagnéticos é essencial para garantir a segurança operacional e maximizar a vida útil do equipamento. Neste artigo, apresentamos um checklist completo para manter seus freios em condições ideais.

## Por que a manutenção preventiva é importante?

Freios eletromagnéticos são componentes de segurança. Uma falha pode resultar em:

- Acidentes com operadores e pessoas próximas
- Danos ao equipamento e à carga
- Paradas não programadas da produção
- Multas e interdições por órgãos fiscalizadores

A manutenção preventiva regular evita esses problemas e reduz significativamente os custos operacionais.

## Checklist de inspeção mensal

### Inspeção visual
- Verificar desgaste das pastilhas de fricção
- Inspecionar a superfície do disco de frenagem
- Conferir a integridade dos cabos e conexões elétricas
- Verificar acúmulo de poeira ou resíduos no entreferro

### Medições
- Medir o entreferro com calibrador de folga
- Verificar a resistência da bobina com multímetro
- Conferir a tensão de alimentação no borne do freio
- Medir a corrente consumida pela bobina

### Testes funcionais
- Testar o tempo de resposta de frenagem
- Verificar o torque de frenagem com dinamômetro
- Simular falha de energia para testar atuação fail-safe
- Conferir o funcionamento dos sensores de desgaste (se aplicável)

## Intervalos de manutenção recomendados

| Ação | Intervalo |
|---|---|
| Inspeção visual | Mensal |
| Medição de entreferro | Trimestral |
| Teste de torque | Semestral |
| Substituição de pastilhas | Conforme desgaste |
| Revisão completa | Anual |

## Sinais de alerta

Fique atento a estes sinais que indicam necessidade de manutenção imediata:

1. **Ruído anormal** durante a frenagem
2. **Tempo de resposta** maior que o especificado
3. **Aquecimento excessivo** da bobina
4. **Torque de frenagem** insuficiente
5. **Cheiro de queimado** (indica superaquecimento das pastilhas)

## Dica importante

Mantenha um registro de todas as manutenções realizadas, incluindo medições e substituição de peças. Esse histórico é essencial para o planejamento de manutenção preditiva e para atender auditorias de segurança.

A equipe técnica da Magneto Brasil está disponível para orientar sobre intervalos de manutenção específicos para cada modelo e aplicação.`,
    category: "Manutenção",
    categorySlug: "manutencao",
    image: "/images/produtos/produto-32.png",
    author: "Equipe Magneto Brasil",
    date: "2025-10-22",
    readTime: "9 min",
  },
  {
    title: "Magneto Brasil na AGRISHOW 2025: inovações e lançamentos",
    slug: "magneto-brasil-agrishow-2025",
    excerpt: "Confira os destaques da participação da Magneto Brasil na maior feira de tecnologia agrícola da América Latina, incluindo novos produtos e parcerias.",
    content: `A Magneto Brasil marcou presença na AGRISHOW 2025, a maior feira de tecnologia agrícola da América Latina, realizada em Ribeirão Preto/SP. O evento foi uma oportunidade de apresentar nossas últimas inovações e fortalecer parcerias com os principais players do agronegócio.

## Destaques do nosso estande

### Nova linha de embreagens para plantadeiras

Apresentamos a evolução da nossa linha de embreagens para plantadeiras, com destaque para:

- Novo modelo com torque ampliado de 500 Nm para 650 Nm
- Versão com encoder integrado para monitoramento de rotação
- Acabamento com tratamento anticorrosivo de última geração

### Embreagens para colheitadeiras

A linha de embreagens para colheitadeiras ganhou novos modelos compatíveis com as últimas plataformas dos fabricantes John Deere, Case IH e New Holland.

## Parcerias estratégicas

Durante a AGRISHOW, firmamos novas parcerias com:

- Três novos fabricantes de implementos agrícolas
- Distribuidores regionais para atendimento mais ágil no interior
- Empresas de agricultura de precisão para integração com tecnologias 4.0

## Números da feira

- Mais de 200 reuniões técnicas realizadas
- 50+ novos contatos comerciais qualificados
- Demonstrações práticas com equipamentos em operação

## Próximos eventos

A Magneto Brasil estará presente nos seguintes eventos em 2026:

- **FEIMEC** — Feira Internacional de Máquinas e Equipamentos (São Paulo/SP)
- **AGRISHOW 2026** — Ribeirão Preto/SP
- **FENASUCRO** — Feira do Setor Sucroenergético (Sertãozinho/SP)

Acompanhe nossas redes sociais para novidades e informações sobre nossa participação em eventos.`,
    category: "Novidades",
    categorySlug: "novidades",
    image: "/images/produtos/produto-18.png",
    author: "Equipe Magneto Brasil",
    date: "2025-10-05",
    readTime: "5 min",
  },
  {
    title: "Acoplamento hidráulico vs. acoplamento de lâminas: qual escolher?",
    slug: "acoplamento-hidraulico-vs-laminas",
    excerpt: "Compare os dois principais tipos de acoplamentos industriais e descubra qual é a melhor opção para sua aplicação específica.",
    content: `Na transmissão de potência industrial, a escolha do acoplamento correto entre motor e carga é fundamental para a eficiência e longevidade do sistema. Neste artigo, comparamos os dois principais tipos: hidráulico e de lâminas.

## Acoplamento hidráulico

O acoplamento hidráulico (ou turbo-acoplamento) transmite torque através de um fluido de trabalho, sem conexão mecânica rígida entre entrada e saída.

### Vantagens
- Partida suave com redução de picos de corrente
- Proteção natural contra sobrecarga (escorregamento)
- Absorção de choques e vibrações torsionais
- Sem necessidade de alinhamento preciso

### Limitações
- Escorregamento de 2-3% (perda de eficiência)
- Geração de calor no fluido de trabalho
- Manutenção do fluido (troca periódica)
- Tamanho relativamente grande

### Aplicações ideais
- Ventiladores e exaustores de grande porte
- Bombas centrífugas
- Transportadores de correia com partida pesada
- Motores de alta potência

## Acoplamento de lâminas

O acoplamento de lâminas utiliza discos flexíveis de aço inoxidável para transmitir torque enquanto compensa desalinhamentos entre eixos.

### Vantagens
- Eficiência de transmissão próxima de 100%
- Zero manutenção e zero lubrificação
- Operação em altíssimas rotações (até 12.000 RPM)
- Vida útil praticamente ilimitada (sem peças de desgaste)

### Limitações
- Não oferece proteção contra sobrecarga
- Requer alinhamento razoável na instalação
- Não absorve grandes choques torsionais
- Rigidez torsional pode propagar vibrações

### Aplicações ideais
- Turbinas a vapor e gás
- Bombas de alta velocidade
- Compressores centrífugos
- Geradores e turbomáquinas

## Tabela comparativa

| Critério | Hidráulico | Lâminas |
|---|---|---|
| Eficiência | 97-98% | ~100% |
| Rotação máx. | 3.600 RPM | 12.000+ RPM |
| Manutenção | Periódica | Nenhuma |
| Proteção sobrecarga | Sim | Não |
| Partida suave | Sim | Não |
| Vida útil | 10-15 anos | 20+ anos |

## Recomendação

A escolha depende da sua aplicação:

- **Escolha hidráulico** quando precisa de partida suave, proteção contra sobrecarga e absorção de vibrações
- **Escolha lâminas** quando precisa de máxima eficiência, zero manutenção e operação em altas rotações

A Magneto Brasil oferece ambas as soluções: acoplamentos hidráulicos FLUIDOMAT e acoplamentos de lâminas EUROFLEX. Nossa equipe técnica pode ajudar na seleção do melhor tipo para sua aplicação.`,
    category: "Tecnologia",
    categorySlug: "tecnologia",
    image: "/images/produtos/produto-12.png",
    author: "Equipe Magneto Brasil",
    date: "2025-09-18",
    readTime: "8 min",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter((p) => p.categorySlug === categorySlug);
}
