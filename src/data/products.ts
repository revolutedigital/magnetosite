export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  name: string;
  slug: string;
  sku: string;
  category: string;
  categorySlug: string;
  image: string;
  torque: string;
  voltage: string;
  shortDescription: string;
  description: string;
  features: string[];
  applications: string[];
  specs: ProductSpec[];
}

export interface ProductCategory {
  name: string;
  slug: string;
  description: string;
}

export const categories: ProductCategory[] = [
  { name: "Embreagens", slug: "embreagens", description: "Embreagens eletromagnéticas para aplicações industriais, agrícolas e de transporte." },
  { name: "Freios", slug: "freios", description: "Freios eletromagnéticos para elevadores, máquinas industriais e sistemas de segurança." },
  { name: "Freio-Embreagem", slug: "freio-embreagem", description: "Unidades combinadas freio-embreagem para controle preciso de movimento." },
  { name: "Acoplamentos", slug: "acoplamentos", description: "Acoplamentos hidráulicos e de lâminas para transmissão de potência." },
  { name: "A/C Transporte", slug: "ar-condicionado", description: "Embreagens para compressores de ar-condicionado em ônibus e veículos pesados." },
];

export const products: Product[] = [
  // === EMBREAGENS ===
  {
    name: "Embreagem para Plantadeiras",
    slug: "embreagem-para-plantadeiras",
    sku: "EC-PLT-500",
    category: "Embreagens",
    categorySlug: "embreagens",
    image: "/images/produtos/produto-14.png",
    torque: "500 Nm",
    voltage: "12V DC",
    shortDescription: "Embreagem eletromagnética projetada para sistemas de distribuição de sementes em plantadeiras agrícolas, com acionamento rápido e preciso.",
    description: "A embreagem eletromagnética para plantadeiras é projetada para o acionamento dos sistemas de distribuição de sementes, garantindo precisão na dosagem durante o plantio. Utiliza o princípio eletromagnético de acoplamento por disco seco: ao energizar a bobina com 12V DC, o campo magnético gerado atrai o disco de armadura contra a superfície de fricção, transmitindo o torque do eixo motriz para o sistema de plantio.\n\nDesenvolvida para suportar as condições severas do campo — poeira, vibrações e variação de temperatura — a embreagem conta com vedação reforçada e materiais de alta resistência ao desgaste. Sua durabilidade é reconhecida no mercado agrícola brasileiro há mais de uma década.",
    features: [
      "Acionamento eletromagnético rápido e preciso",
      "Operação a seco — sem necessidade de lubrificação externa",
      "Vedação reforçada contra poeira e umidade do campo",
      "Materiais de fricção de alta durabilidade",
      "Compatível com sistemas elétricos de 12V DC de máquinas agrícolas",
      "Manutenção simplificada com longa vida útil",
    ],
    applications: [
      "Plantadeiras de precisão",
      "Sistemas de distribuição de sementes",
      "Dosadores de adubo",
      "Máquinas agrícolas de plantio direto",
    ],
    specs: [
      { label: "Torque nominal", value: "500 Nm" },
      { label: "Tensão de alimentação", value: "12V DC" },
      { label: "Tipo de acionamento", value: "Eletromagnético monodisco" },
      { label: "Operação", value: "A seco" },
      { label: "SKU", value: "EC-PLT-500" },
    ],
  },
  {
    name: "Embreagem para Colheitadeiras",
    slug: "embreagem-para-colheitadeiras",
    sku: "EC-CLH-2000",
    category: "Embreagens",
    categorySlug: "embreagens",
    image: "/images/produtos/produto-18.png",
    torque: "2000 Nm",
    voltage: "12V DC",
    shortDescription: "Embreagem de alto torque para acionamento de plataformas de corte e sistemas de debulha em colheitadeiras de grãos.",
    description: "Embreagem eletromagnética de alto torque desenvolvida para colheitadeiras, utilizada no acionamento de plataformas de corte, sistemas de debulha e transportadores internos da máquina. Com capacidade de 2000 Nm, suporta as cargas severas típicas da colheita mecanizada de grãos como soja, milho e trigo.\n\nO princípio de funcionamento é o mesmo das embreagens eletromagnéticas clássicas: a energização da bobina gera um campo magnético que aciona o disco de armadura, transmitindo potência do motor ao sistema de trabalho. A desenergização libera o disco instantaneamente, interrompendo a transmissão. A Magneto Brasil é referência no mercado de embreagens para colheitadeiras, com reconhecida durabilidade e resistência.",
    features: [
      "Alto torque de 2000 Nm para cargas severas de colheita",
      "Acoplamento e desacoplamento rápido e controlado",
      "Construção robusta para condições de trabalho intensivo",
      "Vedação contra poeira e resíduos da colheita",
      "Compatível com sistemas de 12V DC de colheitadeiras",
      "Comprovada durabilidade no mercado agrícola brasileiro",
    ],
    applications: [
      "Colheitadeiras de grãos",
      "Plataformas de corte",
      "Sistemas de debulha",
      "Transportadores e elevadores de grãos",
    ],
    specs: [
      { label: "Torque nominal", value: "2000 Nm" },
      { label: "Tensão de alimentação", value: "12V DC" },
      { label: "Tipo de acionamento", value: "Eletromagnético monodisco" },
      { label: "Operação", value: "A seco" },
      { label: "SKU", value: "EC-CLH-2000" },
    ],
  },
  {
    name: "Embreagem Industrial EI-400",
    slug: "embreagem-industrial-ei-400",
    sku: "EI-400",
    category: "Embreagens",
    categorySlug: "embreagens",
    image: "/images/produtos/produto-23.png",
    torque: "400 Nm",
    voltage: "24V DC",
    shortDescription: "Embreagem eletromagnética industrial para transmissão de potência em máquinas e equipamentos de produção.",
    description: "A embreagem industrial EI-400 é projetada para aplicações de transmissão de potência em ambientes industriais, onde é necessário acoplar e desacoplar cargas com precisão e confiabilidade. Ao energizar a bobina com 24V DC, o campo eletromagnético atrai o disco de armadura, transmitindo o torque entre eixos. Ao desenergizar, a transmissão é interrompida instantaneamente.\n\nEste modelo atende a demandas de máquinas de produção que exigem ciclos frequentes de partida e parada, como em linhas de embalagem, máquinas de corte e processos de automação industrial. A operação a seco dispensa lubrificação externa, reduzindo custos de manutenção.",
    features: [
      "Torque de 400 Nm para aplicações industriais de médio porte",
      "Acionamento rápido com ciclos frequentes de operação",
      "Operação a seco — baixa manutenção",
      "Alimentação 24V DC padrão industrial",
      "Construção compacta para integração em máquinas",
      "Alta vida útil em regime de trabalho contínuo",
    ],
    applications: [
      "Linhas de embalagem (packaging)",
      "Máquinas de corte e guilhotinas",
      "Esteiras transportadoras",
      "Equipamentos de automação industrial",
    ],
    specs: [
      { label: "Torque nominal", value: "400 Nm" },
      { label: "Tensão de alimentação", value: "24V DC" },
      { label: "Tipo de acionamento", value: "Eletromagnético monodisco" },
      { label: "Operação", value: "A seco" },
      { label: "SKU", value: "EI-400" },
    ],
  },
  {
    name: "Embreagem de Alta Velocidade",
    slug: "embreagem-de-alta-velocidade",
    sku: "EAV-150",
    category: "Embreagens",
    categorySlug: "embreagens",
    image: "/images/produtos/produto-11.png",
    torque: "150 Nm",
    voltage: "24V DC",
    shortDescription: "Embreagem eletromagnética otimizada para operação em alta rotação, ideal para máquinas de impressão e acabamento gráfico.",
    description: "A embreagem de alta velocidade EAV-150 é projetada para aplicações que exigem acionamento em rotações elevadas com tempo de resposta mínimo. Seu projeto otimizado reduz a inércia das partes móveis, permitindo ciclos rápidos de acoplamento e desacoplamento sem gerar calor excessivo ou desgaste prematuro.\n\nÉ especialmente indicada para máquinas de impressão, acabamento gráfico e equipamentos de conversão de bobinas, onde a precisão de sincronismo em alta velocidade é crítica para a qualidade do produto final. A alimentação em 24V DC permite integração direta com sistemas de controle industrial.",
    features: [
      "Baixa inércia para resposta rápida em alta rotação",
      "Ciclos de operação frequentes sem superaquecimento",
      "Projeto compacto e leve",
      "Torque de 150 Nm em regime de alta velocidade",
      "Alimentação 24V DC com integração a CLP/PLC",
      "Desgaste reduzido em operação contínua",
    ],
    applications: [
      "Máquinas de impressão offset e flexografia",
      "Acabamento gráfico e encadernação",
      "Conversão e rebobinamento de bobinas",
      "Máquinas de corte e vinco",
    ],
    specs: [
      { label: "Torque nominal", value: "150 Nm" },
      { label: "Tensão de alimentação", value: "24V DC" },
      { label: "Tipo de acionamento", value: "Eletromagnético" },
      { label: "Característica", value: "Baixa inércia / alta rotação" },
      { label: "SKU", value: "EAV-150" },
    ],
  },

  // === FREIOS ===
  {
    name: "Freio para Porta de Elevadores",
    slug: "freio-para-porta-de-elevadores",
    sku: "FPE-100",
    category: "Freios",
    categorySlug: "freios",
    image: "/images/produtos/freio-elevador.png",
    torque: "\u2014",
    voltage: "220V AC",
    shortDescription: "Freio eletromagnético de segurança para operadores de porta de elevadores, com princípio fail-safe por mola.",
    description: "O freio para porta de elevadores é um componente de segurança essencial no sistema de abertura e fechamento das portas de cabina e pavimento. Funciona pelo princípio fail-safe: na ausência de energia elétrica, molas mantêm o freio acionado, impedindo o movimento da porta. Quando a bobina é energizada com 220V AC, o campo magnético gerado comprime as molas e libera o mecanismo, permitindo a operação normal da porta.\n\nEste princípio garante que, em caso de falha elétrica, a porta permaneça travada em posição segura, protegendo os passageiros. O freio é projetado para operar com alta frequência de ciclos, compatível com o uso intensivo em edifícios comerciais e residenciais.",
    features: [
      "Princípio fail-safe: freio atua na ausência de energia",
      "Molas de segurança mantêm a porta travada em caso de falha",
      "Alta frequência de ciclos para uso intensivo",
      "Alimentação 220V AC padrão brasileiro",
      "Manutenção simplificada conforme normas de elevadores",
      "Compatível com operadores de porta de diversos fabricantes",
    ],
    applications: [
      "Portas de elevadores de passageiros",
      "Portas de elevadores de carga",
      "Elevadores residenciais e comerciais",
      "Plataformas elevatórias de acessibilidade",
    ],
    specs: [
      { label: "Tensão de alimentação", value: "220V AC" },
      { label: "Princípio de segurança", value: "Fail-safe (mola)" },
      { label: "Frequência de ciclos", value: "Alta (uso intensivo)" },
      { label: "SKU", value: "FPE-100" },
    ],
  },
  {
    name: "Freio Eletromagnético FE-250",
    slug: "freio-eletromagnetico-fe-250",
    sku: "FE-250",
    category: "Freios",
    categorySlug: "freios",
    image: "/images/produtos/produto-30.png",
    torque: "250 Nm",
    voltage: "220V AC",
    shortDescription: "Freio eletromagnético de sapata para aplicações industriais que exigem frenagem segura em 220V AC.",
    description: "O freio eletromagnético FE-250 é um freio de sapata projetado para aplicações industriais que necessitam de frenagem confiável e segura. O sistema utiliza o princípio fail-safe: molas de compressão mantêm as sapatas pressionadas contra o tambor de frenagem quando a bobina está desenergizada, garantindo a parada imediata em caso de falta de energia.\n\nQuando a bobina é energizada com 220V AC, o campo eletromagnético comprime as molas e afasta as sapatas, liberando o eixo para rotação. Este funcionamento é ideal para equipamentos onde a segurança operacional é prioridade, como pontes rolantes e guinchos industriais.",
    features: [
      "Princípio fail-safe com molas de compressão",
      "Frenagem de sapata com contato firme e progressivo",
      "Torque de frenagem de 250 Nm",
      "Alimentação 220V AC",
      "Acionamento instantâneo em caso de falha elétrica",
      "Construção robusta para ambientes industriais severos",
    ],
    applications: [
      "Pontes rolantes e pórticos",
      "Guinchos e talhas industriais",
      "Correias transportadoras",
      "Máquinas-ferramenta",
    ],
    specs: [
      { label: "Torque de frenagem", value: "250 Nm" },
      { label: "Tensão de alimentação", value: "220V AC" },
      { label: "Tipo", value: "Sapata / fail-safe por mola" },
      { label: "SKU", value: "FE-250" },
    ],
  },
  {
    name: "Freio Industrial FI-300",
    slug: "freio-industrial-fi-300",
    sku: "FI-300",
    category: "Freios",
    categorySlug: "freios",
    image: "/images/produtos/produto-31.png",
    torque: "300 Nm",
    voltage: "24V DC",
    shortDescription: "Freio eletromagnético industrial de 300 Nm com alimentação 24V DC para integração com sistemas de automação.",
    description: "O freio industrial FI-300 oferece frenagem eletromagnética com torque de 300 Nm e alimentação em 24V DC, facilitando a integração direta com CLPs, inversores de frequência e sistemas de automação industrial. O princípio fail-safe garante que o freio permaneça acionado por molas quando desenergizado, proporcionando segurança intrínseca.\n\nAo energizar a bobina, o campo magnético comprime as molas e libera o eixo, permitindo a rotação. Este modelo é indicado para aplicações que exigem ciclos frequentes de frenagem e precisão de parada, como servo-acionamentos e máquinas CNC.",
    features: [
      "Torque de 300 Nm para aplicações de médio porte",
      "Alimentação 24V DC para integração com automação",
      "Princípio fail-safe com molas de segurança",
      "Resposta rápida para ciclos frequentes",
      "Compatível com CLPs e inversores de frequência",
      "Compacto para montagem em espaço reduzido",
    ],
    applications: [
      "Servo-acionamentos industriais",
      "Máquinas CNC",
      "Sistemas de posicionamento",
      "Automação industrial",
    ],
    specs: [
      { label: "Torque de frenagem", value: "300 Nm" },
      { label: "Tensão de alimentação", value: "24V DC" },
      { label: "Tipo", value: "Fail-safe por mola" },
      { label: "Integração", value: "CLP / inversores" },
      { label: "SKU", value: "FI-300" },
    ],
  },
  {
    name: "Freio de Segurança FS-500",
    slug: "freio-de-seguranca-fs-500",
    sku: "FS-500",
    category: "Freios",
    categorySlug: "freios",
    image: "/images/produtos/produto-32.png",
    torque: "500 Nm",
    voltage: "24V DC",
    shortDescription: "Freio eletromagnético de segurança de alto torque para aplicações críticas que exigem retenção de carga.",
    description: "O freio de segurança FS-500 é projetado para aplicações críticas onde a retenção de carga e a parada segura são indispensáveis. Com torque de frenagem de 500 Nm e princípio fail-safe, o freio é acionado automaticamente por molas de alta pressão na ausência de energia elétrica, garantindo que cargas suspensas ou eixos em movimento sejam travados imediatamente.\n\nIndicado para guindastes, elevadores de carga, guinchos e sistemas de levantamento, onde uma falha no freio pode resultar em acidentes graves. A alimentação em 24V DC permite controle preciso via sistemas de segurança redundantes.",
    features: [
      "Alto torque de 500 Nm para retenção de cargas pesadas",
      "Princípio fail-safe com molas de alta pressão",
      "Frenagem instantânea em caso de falta de energia",
      "Alimentação 24V DC para controle de segurança",
      "Projetado para aplicações com risco de queda de carga",
      "Compatível com sistemas de segurança redundantes",
    ],
    applications: [
      "Guindastes e pontes rolantes",
      "Elevadores de carga",
      "Guinchos industriais",
      "Sistemas de levantamento e elevação",
    ],
    specs: [
      { label: "Torque de frenagem", value: "500 Nm" },
      { label: "Tensão de alimentação", value: "24V DC" },
      { label: "Tipo", value: "Segurança / fail-safe por mola" },
      { label: "Classe", value: "Retenção de carga" },
      { label: "SKU", value: "FS-500" },
    ],
  },

  // === FREIO-EMBREAGEM ===
  {
    name: "Unidade FE Compacta UFC-200",
    slug: "unidade-fe-compacta-ufc-200",
    sku: "UFC-200",
    category: "Freio-Embreagem",
    categorySlug: "freio-embreagem",
    image: "/images/produtos/produto-41.png",
    torque: "200 Nm",
    voltage: "24V DC",
    shortDescription: "Unidade combinada de freio e embreagem eletromagnéticos em conjunto compacto para máquinas industriais.",
    description: "A unidade freio-embreagem compacta UFC-200 integra um freio e uma embreagem eletromagnéticos em um único conjunto, proporcionando controle preciso de partida, parada e retenção de carga. O sincronismo entre freio e embreagem é coordenado eletronicamente: quando a embreagem é acionada para transmitir torque, o freio é liberado, e vice-versa.\n\nO freio opera pelo princípio fail-safe — na falta de energia, as molas acionam o freio automaticamente. Esta combinação integrada elimina a necessidade de dois componentes separados, economizando espaço e simplificando a montagem em máquinas como prensas, guilhotinas e equipamentos de embalagem.",
    features: [
      "Freio e embreagem integrados em conjunto único",
      "Sincronismo eletrônico entre frenagem e acionamento",
      "Freio fail-safe com molas de segurança",
      "Torque de 200 Nm para máquinas de médio porte",
      "Design compacto para otimização de espaço",
      "Alimentação 24V DC padrão industrial",
    ],
    applications: [
      "Prensas excêntricas",
      "Máquinas de embalagem",
      "Guilhotinas industriais",
      "Máquinas de corte e conformação",
    ],
    specs: [
      { label: "Torque nominal", value: "200 Nm" },
      { label: "Tensão de alimentação", value: "24V DC" },
      { label: "Tipo", value: "Freio-embreagem integrado" },
      { label: "Freio", value: "Fail-safe por mola" },
      { label: "SKU", value: "UFC-200" },
    ],
  },
  {
    name: "Unidade FE Industrial UFI-400",
    slug: "unidade-fe-industrial-ufi-400",
    sku: "UFI-400",
    category: "Freio-Embreagem",
    categorySlug: "freio-embreagem",
    image: "/images/produtos/produto-43.png",
    torque: "400 Nm",
    voltage: "24V DC",
    shortDescription: "Unidade freio-embreagem de alto desempenho para prensas e máquinas industriais de alta produtividade.",
    description: "A unidade freio-embreagem industrial UFI-400 é projetada para máquinas de alta produtividade que exigem ciclos rápidos e precisos de acionamento e frenagem. Com torque de 400 Nm, atende a aplicações de maior porte como prensas mecânicas, máquinas de estampagem e linhas de produção automatizadas.\n\nO conjunto integrado garante sincronismo preciso entre o freio (fail-safe) e a embreagem, controlado por sistemas eletrônicos que monitoram posição e velocidade. A alimentação em 24V DC permite integração com CLPs e controladores de segurança conforme normas industriais.",
    features: [
      "Alto torque de 400 Nm para máquinas de grande porte",
      "Sincronismo preciso para ciclos de alta frequência",
      "Freio fail-safe integrado com molas de segurança",
      "Compatível com controladores de segurança e CLPs",
      "Projeto robusto para regime de trabalho intensivo",
      "Alimentação 24V DC padrão industrial",
    ],
    applications: [
      "Prensas mecânicas e hidráulicas",
      "Máquinas de estampagem",
      "Linhas de produção automatizadas",
      "Equipamentos de conformação de metais",
    ],
    specs: [
      { label: "Torque nominal", value: "400 Nm" },
      { label: "Tensão de alimentação", value: "24V DC" },
      { label: "Tipo", value: "Freio-embreagem integrado" },
      { label: "Freio", value: "Fail-safe por mola" },
      { label: "Integração", value: "CLP / controladores de segurança" },
      { label: "SKU", value: "UFI-400" },
    ],
  },

  // === ACOPLAMENTOS ===
  {
    name: "Acoplamento Hidráulico AH-110",
    slug: "acoplamento-hidraulico-ah-110",
    sku: "AH-110",
    category: "Acoplamentos",
    categorySlug: "acoplamentos",
    image: "/images/produtos/produto-12.png",
    torque: "\u2014",
    voltage: "\u2014",
    shortDescription: "Acoplamento hidráulico (hidrodinâmico) para transmissão suave de potência com proteção contra sobrecarga. Representação FLUIDOMAT.",
    description: "O acoplamento hidráulico AH-110 funciona pelo princípio hidrodinâmico de bomba-turbina: o rotor bomba, acionado pelo motor, gira e cria um fluxo de fluido hidráulico (óleo) dentro da carcaça. Esse fluxo gera movimento no rotor turbina, transmitindo potência ao eixo conduzido de forma suave e progressiva, sem conexão mecânica rígida entre os eixos.\n\nEsta transmissão suave permite que o motor parta em vazio, atingindo a rotação nominal antes de transferir carga ao equipamento acionado. Em caso de sobrecarga, o acoplamento escorrega protegendo o motor e a transmissão. A Magneto Brasil é representante exclusiva da FLUIDOMAT Ltd., uma das maiores fabricantes mundiais de acoplamentos hidráulicos para mineração, cimento e indústrias pesadas.",
    features: [
      "Transmissão suave e progressiva de potência",
      "Proteção intrínseca contra sobrecarga",
      "Partida do motor em vazio — reduz pico de corrente",
      "Sem conexão mecânica rígida — absorve vibrações",
      "Representação exclusiva FLUIDOMAT Ltd. no Brasil",
      "Longa vida útil com manutenção mínima",
    ],
    applications: [
      "Mineração — britadores e moinhos",
      "Indústria de cimento e cal",
      "Correias transportadoras de longa distância",
      "Siderurgia e indústrias pesadas",
    ],
    specs: [
      { label: "Princípio", value: "Hidrodinâmico (bomba-turbina)" },
      { label: "Fluido", value: "Óleo hidráulico" },
      { label: "Proteção", value: "Contra sobrecarga intrínseca" },
      { label: "Representação", value: "FLUIDOMAT Ltd." },
      { label: "SKU", value: "AH-110" },
    ],
  },
  {
    name: "Acoplamento de Lâminas AL-200",
    slug: "acoplamento-de-laminas-al-200",
    sku: "AL-200",
    category: "Acoplamentos",
    categorySlug: "acoplamentos",
    image: "/images/produtos/produto-31b.png",
    torque: "\u2014",
    voltage: "\u2014",
    shortDescription: "Acoplamento flexível de lâminas metálicas de alto desempenho para turbinas a vapor e bombas de alta rotação. Representação EUROFLEX.",
    description: "O acoplamento de lâminas AL-200 utiliza pacotes de lâminas metálicas flexíveis para transmitir torque entre eixos, compensando desalinhamentos angulares, axiais e radiais sem gerar esforços excessivos nos mancais. As lâminas se deformam elasticamente durante a operação, acomodando dilatações térmicas e imperfeições de montagem.\n\nEste tipo de acoplamento é especialmente indicado para equipamentos de alta rotação e alta temperatura, como turbinas a vapor e bombas centrífugas, onde acoplamentos convencionais não suportam as condições de operação. A Magneto Brasil representa a EUROFLEX TRANSMISSIONS, fabricante de acoplamentos de lâminas de alto desempenho que atendem normas API para turbomáquinas.",
    features: [
      "Compensação de desalinhamento angular, axial e radial",
      "Operação em alta rotação e alta temperatura",
      "Sem necessidade de lubrificação — manutenção mínima",
      "Lâminas metálicas de alta resistência à fadiga",
      "Atende normas API para turbomáquinas",
      "Representação EUROFLEX TRANSMISSIONS no Brasil",
    ],
    applications: [
      "Turbinas a vapor",
      "Bombas centrífugas de alta rotação",
      "Geradores e turbogeradores",
      "Compressores industriais",
    ],
    specs: [
      { label: "Princípio", value: "Lâminas metálicas flexíveis" },
      { label: "Compensação", value: "Angular, axial e radial" },
      { label: "Normas", value: "API (turbomáquinas)" },
      { label: "Representação", value: "EUROFLEX TRANSMISSIONS" },
      { label: "SKU", value: "AL-200" },
    ],
  },

  // === A/C TRANSPORTE ===
  {
    name: "Embreagem A/C Ônibus EAC-80",
    slug: "embreagem-ac-onibus-eac-80",
    sku: "EAC-80",
    category: "A/C Transporte",
    categorySlug: "ar-condicionado",
    image: "/images/produtos/produto-14.png",
    torque: "80 Nm",
    voltage: "24V DC",
    shortDescription: "Embreagem eletromagnética para compressores de ar-condicionado de ônibus urbanos e rodoviários.",
    description: "A embreagem eletromagnética EAC-80 é projetada para acionar compressores de ar-condicionado em ônibus urbanos e rodoviários. Quando o sistema de A/C é ativado, a bobina recebe 24V DC e gera um campo magnético que atrai o disco de embreagem contra a polia acionada pelo motor do veículo, colocando o compressor em funcionamento.\n\nQuando o sistema é desativado ou a temperatura desejada é atingida, a bobina é desenergizada, o campo magnético cessa e o disco se afasta da polia por mola de retorno, desacoplando o compressor e reduzindo o consumo de combustível. A Magneto Brasil possui linha completa de embreagens eletromagnéticas para ar-condicionado de ônibus.",
    features: [
      "Acoplamento e desacoplamento rápido do compressor",
      "Alimentação 24V DC — padrão de veículos pesados",
      "Mola de retorno para desacoplamento seguro",
      "Redução de consumo quando A/C está desligado",
      "Compatível com compressores de diversas marcas",
      "Projetada para alta durabilidade em uso rodoviário",
    ],
    applications: [
      "Ônibus urbanos",
      "Ônibus rodoviários e intermunicipais",
      "Micro-ônibus e vans de transporte",
      "Veículos pesados com A/C",
    ],
    specs: [
      { label: "Torque nominal", value: "80 Nm" },
      { label: "Tensão de alimentação", value: "24V DC" },
      { label: "Tipo", value: "Eletromagnética para compressor A/C" },
      { label: "Retorno", value: "Mola" },
      { label: "SKU", value: "EAC-80" },
    ],
  },
  {
    name: "Embreagem A/C Ônibus EAC-120",
    slug: "embreagem-ac-onibus-eac-120",
    sku: "EAC-120",
    category: "A/C Transporte",
    categorySlug: "ar-condicionado",
    image: "/images/produtos/produto-18.png",
    torque: "120 Nm",
    voltage: "24V DC",
    shortDescription: "Embreagem eletromagnética de maior torque para compressores de A/C de ônibus e veículos pesados de grande porte.",
    description: "A embreagem eletromagnética EAC-120 é a versão de maior torque da linha de embreagens para ar-condicionado de transporte, indicada para veículos de grande porte com compressores que demandam mais potência. Com 120 Nm de torque, aciona compressores maiores que atendem sistemas de A/C de alta capacidade em ônibus rodoviários e veículos de grande porte.\n\nO funcionamento segue o mesmo princípio da linha: a bobina energizada com 24V DC gera campo magnético que acopla o disco à polia do motor, acionando o compressor. A desenergização libera o disco por mola de retorno. A maior capacidade de torque garante operação confiável mesmo sob altas temperaturas e cargas térmicas elevadas.",
    features: [
      "Torque de 120 Nm para compressores de alta capacidade",
      "Alimentação 24V DC — padrão de veículos pesados",
      "Operação confiável em altas temperaturas",
      "Mola de retorno para desacoplamento seguro",
      "Indicada para sistemas A/C de alta capacidade frigorífica",
      "Durabilidade comprovada em frotas de transporte",
    ],
    applications: [
      "Ônibus rodoviários de longa distância",
      "Veículos pesados de grande porte",
      "Frotas de transporte de passageiros",
      "Sistemas A/C de alta capacidade",
    ],
    specs: [
      { label: "Torque nominal", value: "120 Nm" },
      { label: "Tensão de alimentação", value: "24V DC" },
      { label: "Tipo", value: "Eletromagnética para compressor A/C" },
      { label: "Retorno", value: "Mola" },
      { label: "SKU", value: "EAC-120" },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return categories.find((c) => c.slug === slug);
}
