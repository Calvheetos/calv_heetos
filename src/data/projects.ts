export type Project = {
  title: string;
  projectType: string[];
  date: string;
  collaborators: string[];
  tags: string[];
  notes: string;
  id: string;
  image: string;
  images?: string[];
  banner?: string;
  url?: string;
  share?: string;
  info_pt: string;
  info_en: string;
};

export const projectsData: Project[] = [
  {
    title: "Marina Abramovic",
    projectType: ["VISUAL IDENTITY"],
    date: "MAY 3 | 2021",
    collaborators: ["@DIANAA.PSR"],
    tags: ["MARINA ABRAMOVIC", "IDENTITY", "ESAD.CR", "2021"],
    notes: "'21",
    id: "000 000 000 305 21",
    image: "/assets/fotos/foto (1).png",
    banner: "projects/01_MARINA_ABRAMOVIC/Frame_1.png",
    images: [
      "projects/01_MARINA_ABRAMOVIC/Frame 1.png",
      "projects/01_MARINA_ABRAMOVIC/Frame 2.png",
      "projects/01_MARINA_ABRAMOVIC/Frame 3.png",
      "projects/01_MARINA_ABRAMOVIC/Frame 4.png",
      "projects/01_MARINA_ABRAMOVIC/Frame 5.png",
      "projects/01_MARINA_ABRAMOVIC/Frame 6.png",
      "projects/01_MARINA_ABRAMOVIC/Frame 7.png",
      "projects/01_MARINA_ABRAMOVIC/Frame 8.png",
      "projects/01_MARINA_ABRAMOVIC/Frame 9.png",
    ],
    info_pt:
      "No âmbito da licenciatura em Design Gráfico e Multimédia na ESAD.CR – Escola Superior de Artes e Design, desenvolvi um projeto de identidade visual inspirado na obra e no universo conceptual de Marina Abramovic, com base no documentário The Artist Is Present (2012) e numa investigação aprofundada sobre o seu percurso artístico. Este exercício consistiu na criação de uma marca visual que traduzisse graficamente os principais valores da artista — como a entrega emocional, a dor, a resistência, a espiritualidade e a relação entre corpo e mente — num sistema visual coeso, contemporâneo e profundamente conceptual.\n\nO projeto incluiu o desenvolvimento de logótipo, assinaturas visuais, estacionário, sistema de declinações e um conjunto de aplicações complementares, nomeadamente capas de catálogo, materiais promocionais e sinalética de exposição. Foi também elaborado um manual de normas gráficas, com grelhas de construção, definições tipográficas, paleta cromática, aplicações sobre fundos, áreas de proteção e regras de utilização. A investigação realizada permitiu uma abordagem sensível e crítica, procurando que a identidade gráfica funcionasse como uma extensão simbólica da presença, da resistência e da energia feminina que caracterizam a obra performativa de Abramovic.",
    info_en:
      "As part of the BA in Graphic and Multimedia Design at ESAD.CR – School of Arts and Design, I developed a visual identity project inspired by the work and conceptual universe of Marina Abramovic. The project was based on the documentary The Artist Is Present (2012), as well as in-depth research into the artist’s career and artistic philosophy. The main objective was to create a visual brand that graphically conveyed the core values of Abramovic’s work — emotional commitment, pain, endurance, spirituality, and the intimate connection between body and mind — through a coherent, contemporary, and highly conceptual visual system.\n\nThe project involved the development of a logo, visual signatures, stationery, a system of variations, and a set of complementary applications including exhibition catalogue covers, promotional materials, and signage. A detailed graphic standards manual was also produced, featuring construction grids, typographic definitions, colour palette, applications on backgrounds, protection areas, and usage guidelines. The research-led approach enabled a sensitive and critical interpretation, aiming to make the proposed visual identity a symbolic extension of the presence, endurance, and feminine energy that define Abramovic’s performative work.",
  },
  {
    title: "FESTIVAL IMPULSO",
    projectType: ["VISUAL IDENTITY"],
    date: "2022",
    collaborators: ["@PAT.UNKNOWN"],
    tags: ["FESTIVAL IMPULSO", "IDENTITY", "ESAD.CR", "2022"],
    notes: "'22",
    id: "000 000 000 000 22",
    image: "/assets/fotos/foto (1).png",
    banner: "projects/02_FESTIVAL_IMPULSO/Hpreto copy.png",
    images: [
      "projects/02_FESTIVAL_IMPULSO/credenciais final copy.png",
      "projects/02_FESTIVAL_IMPULSO/GUIA MOCKUP FINAL copy.png",
      "projects/02_FESTIVAL_IMPULSO/Hpreto copy.png",
      "projects/02_FESTIVAL_IMPULSO/VERTICAL_2.png",
      "projects/02_FESTIVAL_IMPULSO/Vpreto copy.png",
      "projects/02_FESTIVAL_IMPULSO/WARM UP 2.png",
    ],
    info_pt:
      "Em parceria com a Patrícia Mota, desenvolvi a identidade visual para o Festival Impulso 2022, um evento multidisciplinar que promove música alternativa, cinema independente e artes visuais. Este projeto foi realizado no âmbito da licenciatura em Design Gráfico e Multimédia na ESAD.CR – Escola Superior de Artes e Design, nas Caldas da Rainha. O nosso desafio consistiu em criar uma linguagem visual forte, original e coerente, capaz de comunicar eficazmente a diversidade e a energia do festival, adaptando-se a diferentes formatos e plataformas.\n\nAo longo do processo, criámos o logótipo e as suas variações cromáticas, cartazes para os artistas e bandas (em formatos horizontal, vertical e para eventos warm-up), flyers com os horários e planta do evento, bem como a comunicação gráfica para redes sociais como o Instagram e o Facebook.\n\nDesenvolvemos ainda peças físicas como bilhetes, pulseiras, credenciais, copos reutilizáveis e artigos de merchandising. Este projeto permitiu-me aplicar e consolidar competências em direção artística, branding e design para eventos, sempre com uma abordagem colaborativa e focada em soluções visuais estratégicas. O resultado refletiu o espírito contemporâneo e descentralizador do Festival Impulso, contribuindo para a sua presença marcante no panorama cultural português.",
    info_en:
      "In collaboration with Patrícia Mota, I developed the visual identity for Festival Impulso 2022, a multidisciplinary event that promotes alternative music, independent cinema, and visual arts. This project was carried out as part of the undergraduate degree in Graphic and Multimedia Design at ESAD.CR – School of Arts and Design, in Caldas da Rainha. Our challenge was to create a strong, original, and cohesive visual language, capable of effectively conveying the diversity and energy of the festival while adapting to various formats and platforms.\n\nThroughout the process, we designed the logo and its colour variations, posters for artists and bands (in horizontal, vertical, and warm-up formats), flyers with schedules and event maps, as well as graphic assets for social media platforms such as Instagram and Facebook.\n\nWe also produced physical materials including tickets, wristbands, passes, reusable cups, and merchandise items. This project allowed me to apply and strengthen skills in art direction, branding, and event design, always with a collaborative approach and a focus on strategic visual solutions. The outcome reflected the contemporary and decentralised spirit of Festival Impulso, contributing to its distinctive presence within the Portuguese cultural scene.",
  },
  {
    title: "ROOTKEY",
    projectType: ["VISUAL IDENTITY", "BRANDING"],
    date: "JAN 4 | 2023",
    collaborators: ["@BLENDBYTE"],
    tags: ["ROOTKEY", "IDENTITY", "BRANDING", "BLENDBYTE", "2023"],
    notes: "'23",
    id: "000 000 000 401 23",
    image: "/assets/fotos/foto (1).png",
    share: "Adicionar link para o site da BB e para o Site da ROOT",
    info_pt:
      "No início do meu estágio curricular na empresa Blendbyte, em 2023, fui desafiada a desenvolver o branding para uma nova marca na área da cibersegurança: a ROOTKey. Este projeto revelou-se um dos mais exigentes da minha formação até à data, não só pela complexidade do tema, com o qual inicialmente tinha pouca familiaridade, mas também pela responsabilidade de criar uma identidade forte e diferenciadora num sector altamente técnico e competitivo.\n\nO processo começou com uma fase intensa de investigação sobre conceitos-chave da cibersegurança e sobre o posicionamento estratégico da ROOTKey, uma empresa focada em soluções de segurança digital e proteção de dados. Com base nesse conhecimento, desenvolvi a identidade visual da marca, procurando traduzir graficamente os valores de confiança, tecnologia e inovação. A proposta incluiu o design do logótipo, definição da paleta cromática, escolha tipográfica, bem como aplicações para suportes digitais e institucionais. Este projeto exigiu uma comunicação constante com o cliente, e uma abordagem estratégica e sensível ao detalhe.",
    info_en:
      "At the beginning of my internship at the agency Blendbyte, in 2023, I was challenged to develop the branding for a new cybersecurity brand: ROOTKey. This project proved to be one of the most demanding of my academic journey so far, not only due to the complexity of the subject — with which I initially had little familiarity — but also because of the responsibility of creating a strong and distinctive identity in a highly technical and competitive sector.\n\nThe process began with an intensive research phase into key cybersecurity concepts and the strategic positioning of ROOTKey, a company focused on digital security and data protection solutions. Based on this knowledge, I developed the brand’s visual identity, aiming to translate the values of trust, technology, and innovation into a cohesive graphic system. The proposal included logo design, definition of the colour palette, typographic choices, and applications for both digital and institutional formats. This project required constant communication with the client, as well as a strategic and detail-oriented approach throughout.",
  },
  {
    title: "Blendbyte",
    projectType: ["REBRANDING"],
    date: "MARCH 3 | 2023",
    collaborators: ["@BLENDBYTE"],
    tags: ["BLENDBYTE", "IDENTITY", "REBRANDING", "2023"],
    notes: "'23",
    id: "000 000 000 303 23",
    image: "/assets/fotos/foto (1).png",
    share: "Adicionar link para o site da BB",
    info_pt:
      "Pouco depois de ter iniciado o desenvolvimento da identidade visual da ROOTKey, fui desafiada a criar uma proposta de rebranding para a própria Blendbyte, a agência onde estava a realizar o meu estágio curricular. Este convite surgiu da vontade da equipa em explorar uma nova linguagem visual mais alinhada com o posicionamento atual da marca e com a sua evolução enquanto empresa criativa especializada em branding, marketing digital e produção de conteúdos.\n\nA proposta partiu de uma análise crítica à identidade existente, considerando a maturidade da empresa, os seus valores, público-alvo e presença digital. Desenvolvi um conceito gráfico renovado que procurava reforçar a personalidade jovem, criativa e estratégica da Blendbyte, propondo um novo logótipo, sistema visual, cores, tipografia e aplicações em diferentes suportes — desde redes sociais e website até materiais institucionais e merch. Este projeto foi particularmente desafiante por se tratar de uma marca com a qual já estava diretamente envolvida enquanto colaboradora, exigindo distanciamento crítico, capacidade de escuta e uma abordagem conceptual sólida.",
    info_en:
      "Shortly after beginning the development of ROOTKey’s visual identity, I was invited to create a rebranding proposal for Blendbyte itself — the agency where I was undertaking my internship. This opportunity arose from the team’s desire to explore a new visual language that would better reflect the brand’s current positioning and its evolution as a creative company specialising in branding, digital marketing, and content production.\n\nThe proposal was based on a critical analysis of the existing identity, taking into account the company’s maturity, values, target audience, and digital presence. I developed a renewed visual concept aimed at reinforcing Blendbyte’s young, creative, and strategic personality, presenting a new logo, visual system, colour palette, typography, and applications across a variety of formats — from social media and website to institutional materials and merchandise. This project was particularly challenging due to my direct involvement with the brand as a collaborator, requiring critical distance, active listening, and a solid conceptual approach.",
  },
  {
    title: "CLIMATE CHANGE",
    projectType: ["POSTER"],
    date: "NOV 25 | 2021",
    collaborators: [],
    tags: ["IDENTITY", "REBRANDING", "ESAD.CR", "2021"],
    notes: "'21",
    id: "000 000 000 002 511 21",
    image: "/assets/fotos/foto (1).png",
    banner: "projects/05_CLIMATE_CHANGE/final mupi-02 copy.png",
    images: [
      "projects/05_CLIMATE_CHANGE/2mockup copy.png",
      "projects/05_CLIMATE_CHANGE/fotomontagem copy.png",
    ],
    info_pt:
      "No âmbito da unidade curricular de Projeto de Design Gráfico 3, no 3.º ano da licenciatura na ESAD.CR, desenvolvi o projeto “Revolução Final”, uma proposta crítica sobre o impacto da publicidade no espaço urbano e no nosso modo de vida. A intervenção partiu de uma análise ao excesso de mensagens publicitárias no quotidiano e à forma como estas contribuem para a normalização de comportamentos insustentáveis, sobretudo no contexto de consumo de combustíveis fósseis e da crise ambiental.\n\nInspirada por movimentos como os Subvertisers e os Brandalists, criei uma peça gráfica que subverte o layout habitual dos painéis de preços dos postos de combustível. No lugar dos valores de gasóleo e gasolina, a peça apresenta a mensagem “VAI DE BIKE”, composta com uma tipografia digital semelhante à usada nesses contextos. O design mantém as cores e estrutura gráfica originais — azul, amarelo e verde — para garantir imediata familiaridade visual, ao mesmo tempo que desafia a leitura esperada e promove uma reflexão direta e acessível sobre alternativas de mobilidade mais sustentáveis.\n\nA intervenção foi instalada num mupi urbano e fotografada no local (mockup), reforçando o seu impacto real e performativo. Este projeto desafiou-me a cruzar design gráfico, ativismo e consciência ambiental, assumindo o papel do designer enquanto agente interventivo na sociedade.",
    info_en:
      "As part of the Graphic Design Project 3 course in the third year of my degree at ESAD.CR, I developed “Final Revolution” — a critical design project addressing the impact of advertising on urban space and our way of life. The intervention was based on an analysis of the overwhelming presence of advertising in our daily environment and how it contributes to the normalisation of unsustainable behaviours, particularly in the context of fossil fuel consumption and the environmental crisis.\n\nInspired by movements such as the Subvertisers and Brandalists, I created a graphic piece that subverts the familiar layout of petrol station price boards. Instead of displaying fuel prices, the piece features the message “VAI DE BIKE” (“Go by Bike”), composed in a digital typeface that mimics those typically used in such contexts. The design retains the original colours and graphic structure — blue, yellow, and green — to ensure immediate visual recognition, while simultaneously disrupting expectations and encouraging a direct and accessible reflection on more sustainable modes of transport.\n\nThe intervention was placed in an urban mupi and photographed on-site (mock-up), reinforcing its performative and real-world impact. This project challenged me to merge graphic design, activism, and environmental awareness, affirming the role of the designer as an active agent in social and cultural transformation.",
  },
  {
    title: "“THIS IS A MESS”",
    projectType: ["POSTER"],
    date: "NOV 25 | 2021",
    collaborators: [],
    tags: ["IDENTITY", "REBRANDING", "ESAD.CR", "2021"],
    notes: "'21",
    id: "000 000 000 002 511 21",
    image: "/assets/fotos/foto (1).png",
    banner: "projects/06_THIS_IS_A_MESS/Frame 23.png",
    images: [
      "projects/06_THIS_IS_A_MESS/Frame 23.png",
      "projects/06_THIS_IS_A_MESS/Frame 24.png",
      "projects/06_THIS_IS_A_MESS/Frame 25.png",
      "projects/06_THIS_IS_A_MESS/Frame 26.png",
      "projects/06_THIS_IS_A_MESS/Frame 27.png",
      "projects/06_THIS_IS_A_MESS/Frame 29.png",
      "projects/06_THIS_IS_A_MESS/Frame 30.png",
      "projects/06_THIS_IS_A_MESS/Frame 31.png",
    ],
    info_pt:
      "Durante a licenciatura em Design Gráfico e Multimédia na ESAD.CR, desenvolvi um projeto dedicado à criação de capas de discos de vinil e à construção de um mockup original, feito a partir de uma fotografia real. O objetivo foi apresentar as capas de forma realista e apelativa.\n\nAs capas foram pensadas com uma abordagem autoral, alinhadas com o estilo musical dos artistas, explorando composição, cor e tipografia. O mockup foi desenvolvido para simular com precisão a presença física do vinil/cartaz em contexto expositivo ou digital.\n\nEste projeto permitiu-me reforçar competências em design editorial, direção de arte e edição de imagem, aliando técnica e criatividade na apresentação de produtos culturais.",
    info_en:
      "During my degree in Graphic and Multimedia Design at ESAD.CR, I developed a project focused on creating vinyl record covers and building an original mock-up based on a real photograph. The aim was to present the covers in a realistic and visually appealing way.\n\nEach cover was designed with an authorial approach, aligned with the musical style of the artists, exploring composition, colour, and typography. The mock-up was created to accurately simulate the physical presence of the vinyl or poster in both exhibition and digital contexts.\n\nThis project allowed me to strengthen my skills in editorial design, art direction, and image editing, combining technique and creativity in the presentation of cultural products.",
  },
  {
    title: "PESCANSECO FUNDEIRO",
    projectType: ["POSTER"],
    date: "MAY 28 | 2025",
    collaborators: [],
    tags: ["IDENTITY", "POSTER", "TERRINHA", "2025"],
    notes: "'25",
    id: "000 000 001 105 25",
    image: "/assets/fotos/foto (1).png",
    banner: "projects/07_PF_2025/4 copy.png",
    images: [
      "projects/07_PF_2025/6 copy.png",
      "projects/07_PF_2025/Frame 32.png",
      "projects/07_PF_2025/Frame 33.png",
      "projects/07_PF_2025/Frame 34.png",
    ],
    info_pt:
      "Em 2025, fui responsável pela criação do cartaz e da identidade visual da festa da aldeia de Pescanseco Fundeiro, um pequeno lugar do interior português com uma comunidade fortemente enraizada nas tradições locais. Mais do que um cartaz, o projeto evoluiu para um sistema gráfico completo, pensado para comunicar o espírito da festa de forma autêntica, bem-humorada e próxima das pessoas da terra.\n\nDesenvolvi uma nova identidade visual que respeita as raízes da aldeia, mas que trouxe também um toque de renovação e dinamismo. Para o merchandising, recuperei elementos de camisolas e t-shirts de anos anteriores e integrei-os numa nova linha visual, criando continuidade entre o passado e o presente. A comunicação gráfica recorreu a expressões típicas das pessoas mais velhas da aldeia, dando ao projeto um tom bem-humorado, familiar e genuíno, facilmente reconhecido por quem vive ou visita Pescanseco.\n\nEste projeto permitiu-me aplicar design gráfico em contexto real e comunitário, explorando a ligação entre identidade, memória coletiva e celebração popular.",
    info_en:
      "In 2025, I was responsible for creating the poster and visual identity for the village festival of Pescanseco Fundeiro, a small rural community in the Portuguese countryside with deep-rooted local traditions. More than just a poster, the project evolved into a complete graphic system designed to communicate the spirit of the festival in an authentic, humorous, and down-to-earth way.\n\nI developed a new visual identity that respected the village’s heritage while introducing a sense of renewal and vibrancy. For the merchandising, I brought back elements from old T-shirts and jumpers from previous editions and merged them into a refreshed visual line, creating continuity between past and present. The graphic language drew on typical expressions used by the village’s older generations, giving the project a humorous, familiar, and genuine tone that resonated with both locals and visitors.\n\nThis project allowed me to apply graphic design in a real and community-based context, exploring the connection between identity, collective memory, and popular celebration.",
  },
  {
    title: "PESCANSECO FUNDEIRO",
    projectType: ["POSTER"],
    date: "JUNE 24 | 2024",
    collaborators: [],
    tags: ["IDENTITY", "POSTER", "TERRINHA", "2024"],
    notes: "'24",
    id: "000 000 002 306 24",
    image: "/assets/fotos/foto (1).png",
    banner: "projects/08_PF_2024/Frame 41.png",
    images: [
      "projects/08_PF_2024/Frame 35.png",
      "projects/08_PF_2024/Frame 36.png",
      "projects/08_PF_2024/Frame 37.png",
      "projects/08_PF_2024/Frame 38.png",
      "projects/08_PF_2024/Frame 39.png",
      "projects/08_PF_2024/Frame 41.png",
    ],
    info_pt:
      "Em 2024, fui convidada a criar os cartazes da festa da aldeia de Pescanseco Fundeiro, dando início a uma colaboração que se repetiria no ano seguinte. Neste primeiro projeto, optei por construir uma linguagem visual intimista e afetiva, incorporando fotografias antigas de habitantes da aldeia, de familiares ou de pessoas que, de uma forma ou de outra, mantêm ligação com este lugar. O objetivo era valorizar a memória coletiva e criar um cartaz que despertasse reconhecimento e alguma emoção junto da comunidade.\n\nA composição gráfica foi pensada para equilibrar o lado visual contemporâneo com a estética das imagens antigas, respeitando de certa forma a textura, o enquadramento e a autenticidade dos registos fotográficos. A identidade do cartaz assentou numa abordagem mais complexa mas carregada de significado, tornando-se um ponto de partida para o reforço da ligação entre design e comunidade local.\n\nEste projeto marcou o início de uma relação contínua com Pescanseco Fundeiro e permitiu-me explorar o design gráfico como ferramenta de memória, afeto e celebração popular.",
    info_en:
      "In 2024, I was invited to design the posters for the village festival of Pescanseco Fundeiro, marking the beginning of a collaboration that would continue the following year. In this first project, I chose to develop a visual language that was intimate and emotionally resonant, incorporating old photographs of local residents, their relatives, or people with a lasting connection to the village. The goal was to honour collective memory and create a poster that would evoke recognition and emotion within the community.\n\nThe graphic composition was designed to balance a contemporary visual approach with the aesthetic of vintage imagery, preserving the texture, framing, and authenticity of the original photographs. The visual identity of the poster followed a more layered and meaningful approach, becoming a starting point for reinforcing the bond between design and the local community.\n\nThis project marked the beginning of an ongoing relationship with Pescanseco Fundeiro and allowed me to explore graphic design as a tool for memory, emotion, and cultural celebration.",
  },
  {
    title: "Autumn Beer Festival – Vale do Peso",
    projectType: ["LOGO/POSTER"],
    date: "AUGUST 20 | 2024",
    collaborators: [],
    tags: ["IDENTITY", "POSTER", "VALE DO PESO", "2024"],
    notes: "'24",
    id: "000 000 002 008 24",
    image: "/assets/fotos/foto (1).png",
    banner: "projects/09_Autumn_Beer_Festival/Frame 42(1).png",
    images: [
      "projects/09_Autumn_Beer_Festival/Frame 42(1).png",
      "projects/09_Autumn_Beer_Festival/Frame 43(1).png",
      "projects/09_Autumn_Beer_Festival/Frame 44(1).png",
      "projects/09_Autumn_Beer_Festival/Frame 45(1).png",
      "projects/09_Autumn_Beer_Festival/Frame 46(1).png",
    ],
    info_pt:
      "Em 2024, fui convidada a desenvolver uma proposta de logótipo e cartaz para o Autumn Beer Festival – Vale do Peso, um evento que celebra a cerveja artesanal, a música e o espírito comunitário no coração do Alentejo. A proposta procurou criar uma identidade visual simples mas distintiva, que transmitisse o carácter descontraído e autêntico do festival, com uma forte ligação ao imaginário da cerveja.\n\nO logótipo foi concebido para surgir integrado numa carica, remetendo de forma directa e visualmente eficaz ao universo da cerveja artesanal. Já o cartaz foi desenhado como se fosse um rótulo de cerveja, explorando o formato, a composição tipográfica e os elementos decorativos típicos desse tipo de embalagem, criando assim uma ligação imediata entre o conteúdo do evento e o seu design gráfico.",
    info_en:
      "In 2024, I was invited to develop a logo and poster proposal for the Autumn Beer Festival – Vale do Peso, an event that celebrates craft beer, music, and community spirit in the heart of the Alentejo. The aim was to create a simple yet distinctive visual identity that reflected the relaxed and authentic character of the festival, while strongly referencing the visual world of beer culture.\n\nThe logo was designed to appear within a bottle cap, offering a direct and visually effective connection to the craft beer universe. The poster was created to resemble a beer label, exploring the shape, typographic composition, and decorative elements typically found on beer packaging, establishing an immediate link between the event’s content and its graphic design.",
  },
  {
    title: "Palheiro by J. Abade",
    projectType: ["LOGO/POSTER"],
    date: "MARCH 17 | 2024",
    collaborators: [],
    tags: ["IDENTITY", "POSTER", "VALE DO PESO", "2024"],
    notes: "'24",
    id: "000 000 001 703 24",
    image: "/assets/fotos/foto (1).png",
    banner: "projects/10_Palheiro/Slide 16_9 - 10 copy.png",
    images: [
      "projects/10_Palheiro/Asset 1@4x copy.png",
      "projects/10_Palheiro/B_Frente copy.png",
      "projects/10_Palheiro/B_Tras copy.png",
      "projects/10_Palheiro/FRENTE )1 copy.jpg",
      "projects/10_Palheiro/P_Frente copy.png",
      "projects/10_Palheiro/P_Tras copy.png",
      "projects/10_Palheiro/Slide 16_9 - 11 copy.png",
      "projects/10_Palheiro/tras copy.tif",
    ],
    info_pt:
      "Em 2024, criei a identidade gráfica para o Palheiro by J. Abade, uma proposta desenvolvida no contexto do Festival da Tubra, realizado em Vale do Peso. A imagem foi pensada para ser aplicada em t-shirts, funcionando como símbolo visual do evento e reforçando o ambiente de convívio e tradição que caracteriza esta celebração local.\n\nA proposta uniu dois elementos centrais: a “tasca” e a tubra, representando visualmente o espírito rústico e descontraído do festival. O logótipo combina garrafas, copos suspensos e a própria tubra numa composição estilizada a preto e branco, com um impacto gráfico forte e uma leitura imediata. A imagem foi aplicada de forma integrada nas t-shirts — tanto na frente como nas costas — criando um objeto visual coerente, marcante e alinhado com o tom informal e irreverente do evento.\n\nEste projeto permitiu-me cruzar a identidade visual, ilustração vetorial e design aplicado ao vestuário, explorando o potencial gráfico de símbolos culturais locais e da sua apropriação festiva.",
    info_en:
      "In 2024, I created the visual identity for Palheiro by J. Abade, a project developed within the context of the Festival da Tubra, held in Vale do Peso. The design was intended for application on t-shirts, serving as a visual symbol of the event and reinforcing the sense of community and tradition that defines this local celebration.\n\nThe concept brought together two central elements: the traditional tavern (“tasca”) and the tubra, visually representing the rustic and laid-back spirit of the festival. The logo features bottles, hanging glasses, and the tubra itself in a stylised black-and-white composition, with strong graphic impact and immediate readability. The design was applied across both the front and back of the t-shirts, creating a coherent and striking visual object aligned with the informal and irreverent tone of the event.\n\nThis project allowed me to combine visual identity, vector illustration, and apparel design, exploring the graphic potential of local cultural symbols and their festive reinterpretation.",
  },
  {
    title: "KRIOLO",
    projectType: ["ART DIRECTION STRATEGY"],
    date: "MARCH 22 | 2021",
    collaborators: [],
    tags: ["A.D.", "POSTER", "KRIOLO", "2021"],
    notes: "'21",
    id: "000 000 002 203 21",
    image: "/assets/fotos/foto (1).png",
    banner: "projects/11_KRIOLO/POSTER copy.pdf",
    images: [
      "projects/11_KRIOLO/CD copy.pdf",
      "projects/11_KRIOLO/DENTRO copy.png",
      "projects/11_KRIOLO/DIJIPACK_FINAL copy.pdf",
      "projects/11_KRIOLO/FORA_branco copy.png",
      "projects/11_KRIOLO/FORA_c_lombada copy.png",
      "projects/11_KRIOLO/iiimsd  copy.png",
      "projects/11_KRIOLO/kkkkmsd  copy.png",
    ],
    info_pt:
      "No âmbito da unidade curricular de Projeto de Design Gráfico II, desenvolvi o projeto Visual Listening, um exercício que propunha a representação gráfica de uma peça musical a partir de uma escuta atenta e analítica. O objetivo era traduzir visualmente, de forma concreta ou abstrata, uma seleção sonora, explorando ritmo, amplitude, textura, densidade e outros atributos do som como linguagem gráfica.\n\nEscolhi uma faixa musical e identifiquei um excerto de 30 segundos, sobre o qual construí uma partitura visual, aplicando formas gráficas e vetoriais sincronizadas com os elementos sonoros. A proposta incluiu também o design de um digipack, composto por capa, disco e booklet, desenvolvido com preocupações técnicas específicas como sobreposição de layers, marcações de corte, acabamento e cor. A imagem e o som fundiram-se num objeto visual que procura evocar a experiência auditiva de forma sensorial e sequencial.",
    info_en:
      "As part of the Graphic Design II course, I developed the Visual Listening project — an exercise that proposed the graphic representation of a musical piece through close and analytical listening. The aim was to visually translate a sound selection, either in a concrete or abstract way, by exploring rhythm, amplitude, texture, density, and other sound attributes as graphic language.\n\nI selected a music track and identified a 30-second excerpt, on which I built a visual score, using graphic and vector-based forms synchronised with the sonic elements. The project also included the design of a digipack, composed of a cover, disc, and booklet, developed with specific technical considerations such as layer overlaps, cut marks, finishes, and colour treatment. The result is a visual object where image and sound merge, seeking to evoke the listening experience in a sensorial and sequential manner.",
  },
  {
    title: "TOCCO’S PRESENTATION IN CHINA",
    projectType: ["BOOKLET"],
    date: "OCT 23 | 2024",
    collaborators: ["@anabeatrizalves"],
    tags: ["BOOKLET", "PRESS", "TOCCO", "2024"],
    notes: "'24",
    id: "000 000 002 310 24",
    image: "/assets/fotos/foto (1).png",
    banner: "projects/12_TOCCOS_PRESENTATION_IN_CHINA/Frame 56.png",
    images: [
      "projects/12_TOCCOS_PRESENTATION_IN_CHINA/Frame 56.png",
      "projects/12_TOCCOS_PRESENTATION_IN_CHINA/Frame 57.png",
      "projects/12_TOCCOS_PRESENTATION_IN_CHINA/Frame 58.png",
      "projects/12_TOCCOS_PRESENTATION_IN_CHINA/Frame 59.png",
      "projects/12_TOCCOS_PRESENTATION_IN_CHINA/Frame 60.png",
      "projects/12_TOCCOS_PRESENTATION_IN_CHINA/Frame 61.png",
      "projects/12_TOCCOS_PRESENTATION_IN_CHINA/Frame 62.png",
      "projects/12_TOCCOS_PRESENTATION_IN_CHINA/Frame 63.png",
      "projects/12_TOCCOS_PRESENTATION_IN_CHINA/Frame 64.png",
      "projects/12_TOCCOS_PRESENTATION_IN_CHINA/Frame 65.png",
    ],
    url: "https://tocco.earth",
    info_pt:
      "Em 2024, colaborei com @anabeatrizalves no desenvolvimento gráfico de uma publicação institucional para a TOCCO, uma plataforma B2B sediada em Paris que promove a transição para materiais regenerativos e de baixo carbono através da tecnologia e da curadoria estratégica. Este projeto editorial foi desenvolvido especificamente para a apresentação internacional da TOCCO na China, integrada numa seleção de iniciativas de design e inovação em materiais sustentáveis.\n\nA publicação — com design editorial bilingue (inglês e mandarim) — teve como objetivo posicionar a TOCCO como um ecossistema global para materiais de nova geração, destacando os seus quatro pilares principais: marketplace, agência de inovação, centro de media e kits de amostras. A minha participação centrou-se na paginação, estruturação da informação, organização visual e refinamento de elementos gráficos, assegurando coerência com a identidade da marca e com o tom sofisticado exigido por um público internacional.\n\nEste projeto permitiu-me trabalhar num produto editorial exigente, que cruza design, sustentabilidade e inovação, concebido para uma rede global de designers, marcas e agentes transformadores na área dos materiais.",
    info_en:
      "In 2024, I collaborated with @anabeatrizalves on the graphic development of an institutional publication for TOCCO, a Paris-based B2B platform that promotes the transition to regenerative and low-carbon materials through technology and strategic curation. This editorial project was developed specifically for TOCCO’s international presentation in China, as part of a curated selection of design and material innovation initiatives.\n\nThe publication — featuring a bilingual editorial design (English and Mandarin) — aimed to position TOCCO as a global ecosystem for next-generation materials, highlighting its four core pillars: marketplace, innovation agency, media hub, and sample kits. My role focused on layout design, information structure, visual organisation, and refinement of graphic details, ensuring consistency with the brand’s identity and the sophisticated tone required for an international audience.\n\nThis project allowed me to work on a demanding editorial product that merges design, sustainability, and innovation, conceived for a global network of designers, brands, and transformative actors in the field of materials.",
  },
  {
    title: "KAIZEN",
    projectType: ["INDEPENDENT PUBLICATION"],
    date: "DEZ 19 | 2024",
    collaborators: ["@___.___beatriz"],
    tags: ["BOOKLET", "PRESS", "TOCCO", "2024"],
    notes: "'24",
    id: "000 000 002 310 24",
    image: "/assets/fotos/foto (1).png",
    banner: "projects/13_KAIZEN/Frame 66.png",
    images: [
      "projects/13_KAIZEN/Frame 66.png",
      "projects/13_KAIZEN/Frame 67.png",
      "projects/13_KAIZEN/Frame 68.png",
      "projects/13_KAIZEN/Frame 69.png",
      "projects/13_KAIZEN/Frame 70.png",
      "projects/13_KAIZEN/Frame 71.png",
      "projects/13_KAIZEN/Frame 72.png",
    ],
    url: "https://linktr.ee/K_AIZEN?fbclid=PAZXh0bgNhZW0CMTEAAacO3dLpS3BTLyo4GaTpoJJtmq1Oyu_K7-Cx0liZHTGzeh4lN9SkhlX04elGiw_aem_M3jZ0_pTICrncrJUvKPNcg",
    info_pt:
      "Em 2024, no âmbito do Mestrado em Design de Comunicação da ESAD — Escola Superior de Artes e Design do Porto, desenvolvi em colaboração com Beatriz Soeiro o projeto editorial KAIZEN Vol. 01, sob coordenação de @andrecruz.studio e com o apoio de @studio_andrew_howard. Este é o primeiro volume de uma série de compilações de notícias que analisam criticamente dinâmicas políticas, sociais e culturais contemporâneas, com maior foco no jornal enquanto meio de comunicação.\n\nNeste volume inaugural, explorámos a controvérsia em torno da nova identidade visual da República Portuguesa, proposta pelo Studio Eduardo Aires, que serviu de ponto de partida para uma reflexão mais profunda sobre as chamadas “guerras ideológicas” em Portugal. Através deste projeto, reparámos como o design é palco simbólico de disputas políticas, e a forma como os media são utilizados para negociar poder e influenciar a sociedade.\n\nO sucesso do projeto em contexto académico levou-nos à sua produção em maior escala, com distribuição em espaços de referência como a Matéria Prima (Porto) e a Snob (Lisboa), estando também disponível por encomenda através do linktr.ee/K_AIZEN. Em Dezembro de 2024, realizámos dois lançamentos públicos, um no Porto e outro em Lisboa, reforçando a dimensão editorial e cultural do projeto.\n\nKAIZEN Vol. 01 afirma-se como um exercício de design crítico, edição e intervenção gráfica, posicionando o design editorial como ferramenta ativa de análise e comentário social.",
    info_en:
      "In 2024, as part of the Master’s in Communication Design at ESAD — Escola Superior de Artes e Design do Porto, I developed the editorial project KAIZEN Vol. 01 in collaboration with Beatriz Soeiro, under the coordination of @andrecruz.studio and with the support of @studio_andrew_howard. This is the first volume in a series of news compilations that critically examine contemporary political, social, and cultural dynamics, with a particular focus on the newspaper as a communication medium.\n\nIn this inaugural volume, we explored the controversy surrounding the new visual identity of the Portuguese Republic, designed by Studio Eduardo Aires. This debate served as a starting point for a broader reflection on the so-called “ideological wars” in Portugal. Through this project, we recognised how design becomes a symbolic stage for political disputes and how the media are used to negotiate power and influence society.\n\nThe project’s success in an academic setting led us to produce it on a larger scale, with distribution in reference spaces such as Matéria Prima (Porto) and Snob (Lisbon). It is also available for order via linktr.ee/K_AIZEN. In December 2024, we held two public launches — one in Porto and one in Lisbon — reinforcing the project’s editorial and cultural dimension.\n\nKAIZEN Vol. 01 stands as an exercise in critical design, editing, and graphic intervention, positioning editorial design as an active tool for analysis and social commentary.",
  },
  {
    title: "TOCCO’S POST",
    projectType: ["POST"],
    date: "OCT 23 | 2024",
    collaborators: ["@anabeatrizalves"],
    tags: ["POST", "TOCCO", "2025"],
    notes: "'25",
    id: "000 000 002 001 25",
    image: "/assets/fotos/foto (1).png",
    banner: "projects/14_TOCCOS_POST/Frame 1.png",
    images: [
      "projects/14_TOCCOS_POST/Frame 1.png",
      "projects/14_TOCCOS_POST/Frame 73.png",
      "projects/14_TOCCOS_POST/Frame 74.png",
      "projects/14_TOCCOS_POST/Frame 75.png",
      "projects/14_TOCCOS_POST/Frame 76.png",
      "projects/14_TOCCOS_POST/Frame 77.png",
      "projects/14_TOCCOS_POST/Frame 78.png",
      "projects/14_TOCCOS_POST/Frame 79.png",
      "projects/14_TOCCOS_POST/Frame 80.png",
      "projects/14_TOCCOS_POST/Frame 81.png",
      "projects/14_TOCCOS_POST/Frame 82.png",
      "projects/14_TOCCOS_POST/Frame 83.png",
      "projects/14_TOCCOS_POST/Frame 84.png",
      "projects/14_TOCCOS_POST/Frame 85.png",
      "projects/14_TOCCOS_POST/Frame 86.png",
    ],
    share: "https://tocco.earth",
    info_pt:
      "Em 2025, voltei a colaborar com a @anabeatrizalves num novo projeto para a TOCCO, desta vez dedicado à criação de conteúdos visuais para redes sociais, no contexto da comunicação do TOCCO Awards Trophy Partner. Este trabalho consistiu na produção de publicações digitais, focadas na apresentação e valorização do parceiro responsável pelo design e fabrico dos troféus dos TOCCO Awards.\n\nA proposta gráfica foi pensada para garantir coerência com a identidade visual da marca TOCCO, assegurando uma comunicação clara, elegante e ajustada às diferentes plataformas digitais. Embora de menor escala, este projeto exigiu atenção ao detalhe, respeito pela linguagem da marca e agilidade na execução — reforçando a continuidade de uma colaboração sólida com a equipa da TOCCO.",
    info_en:
      "In 2025, I once again collaborated with @anabeatrizalves on a new project for TOCCO, this time focused on creating visual content for social media, in the context of promoting the TOCCO Awards Trophy Partner. The work involved producing digital posts to highlight and celebrate the partner responsible for the design and production of the TOCCO Awards trophies.\n\nThe visual approach was carefully designed to ensure consistency with TOCCO’s brand identity, delivering clear and refined communication tailored to different digital platforms. Although smaller in scale, this project required attention to detail, sensitivity to the brand’s tone of voice, and swift execution — further reinforcing a strong and ongoing collaboration with the TOCCO team.",
  },
];
