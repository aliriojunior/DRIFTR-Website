(() => {
  const STORAGE_KEY = 'driftr-language';
  const DEFAULT_LANGUAGE = 'en';
  const translations = {
    en: {
      'language.label': 'Language', 'a11y.skip': 'Skip to content', 'a11y.home': 'DRIFTR home',
      'a11y.mainNav': 'Main navigation', 'a11y.footerNav': 'Footer navigation',
      'a11y.openNav': 'Open navigation', 'a11y.closeNav': 'Close navigation',
      'nav.features': 'Features', 'nav.layouts': 'Layouts', 'nav.pricing': 'Pricing', 'nav.download': 'Download',
      'hero.eyebrow': 'Built for Windows',
      'hero.title1': 'One window.', 'hero.title2': 'Every world.',
      'hero.description': 'Run your worlds side by side. Independent sessions. One focused workspace.',
      'hero.download': 'Download for Windows', 'hero.plans': 'View plans',
      'hero.availability': 'Windows release coming soon', 'hero.artLabel': 'Official DRIFTR icon',
      'hero.artAlt': "DRIFTR's illuminated blue D emblem", 'hero.sessions': 'Independent sessions',
      'hero.explore': 'Explore the workspace',
      'showcase.eyebrow': 'The workspace', 'showcase.title1': 'Your worlds.', 'showcase.title2': 'Side by side.',
      'showcase.description': 'Keep multiple sessions visible, organized, and ready inside one focused desktop workspace.',
      'showcase.frameMode': 'QUAD · 4 SESSIONS',
      'showcase.imageAlt': 'DRIFTR desktop app showing four independent game sessions in QUAD layout',
      'showcase.caption': 'Four distinct views. One place to keep your attention.', 'showcase.layoutLabel': 'QUAD LAYOUT',
      'features.eyebrow': 'Designed for focus', 'features.title1': 'More worlds.',
      'features.title2': 'Less window juggling.', 'features.isolatedTitle': 'Isolated sessions',
      'features.isolatedText': 'Separate session environments keep each world in its own lane.',
      'features.profilesTitle': 'Persistent profiles',
      'features.profilesText': 'Profiles retain their own browser and session data where supported.',
      'features.layoutsTitle': 'Flexible layouts',
      'features.layoutsText': 'Move between SOLO, DUO, SIDE BY SIDE, and QUAD as your setup changes.',
      'features.focusTitle': 'Focused workspace',
      'features.focusText': 'Manage multiple worlds without juggling separate browser windows.',
      'layouts.eyebrow': 'Choose your view', 'layouts.title1': 'A layout for', 'layouts.title2': 'every rhythm.',
      'layouts.description': 'Start with one. Split into two. Go all the way to four. DRIFTR keeps the workspace structured around how you want to play.',
      'layouts.sideNote': 'SIDE BY SIDE is available when two equal views make the most sense.',
      'common.oneSession': '1 session', 'common.twoSessions': '2 sessions', 'common.fourSessions': '4 sessions',
      'common.upToFour': 'Up to 4 sessions', 'common.oneDevice': '1 device',
      'common.comingSoon': 'Coming soon', 'common.iconAlt': 'DRIFTR icon',
      'pricing.eyebrow': 'Simple pricing', 'pricing.title1': 'Pick your', 'pricing.title2': 'pace.',
      'pricing.description': 'One device. No invented extras. Choose the session count and billing rhythm that fit you.',
      'pricing.free': 'Free', 'pricing.noCharge': 'No charge', 'pricing.monthly': 'Pro monthly',
      'pricing.annual': 'Pro annual', 'pricing.perMonth': 'per month', 'pricing.perYear': 'per year',
      'pricing.availableSoon': 'Available soon', 'pricing.bestValue': 'Best value',
      'pricing.saving': 'Save R$ 19,80 vs. monthly',
      'pricing.note': 'Annual comparison: 12 × R$ 9,90 = R$ 118,80. Annual plan = R$ 99,00.',
      'download.eyebrow': 'Windows desktop', 'download.title': 'DRIFTR for Windows.',
      'download.description': "The first public release is on the way. Download DRIFTR here when it's ready.",
      'download.productType': 'Windows Desktop', 'download.platformLabel': 'Platform',
      'download.applicationLabel': 'Application', 'download.releaseLabel': 'Release',
      'footer.privacy': 'Privacy', 'footer.terms': 'Terms', 'footer.home': 'Home',
      'legal.back': '← Back to home', 'legal.eyebrow': 'Legal', 'legal.updated': 'Last updated: October 2, 2026',
      'privacy.title1': 'Privacy', 'privacy.title2': 'Policy.',
      'privacy.intro': 'This policy explains at a high level how DRIFTR may process information when you use its software, website, accounts, licensing, and subscription services. The product is in an early stage, and this policy may be updated as those services evolve.',
      'privacy.s1Title': '1. Information we may process',
      'privacy.s1p1': 'DRIFTR may process account information used for authentication and licensing, such as account identifiers and sign-in details. We may also process device and license information needed to activate the software, associate a license with a device, and enforce plan limits.',
      'privacy.s1p2': 'Operational and security information—such as app version, error details, timestamps, and basic technical events—may be processed to operate, protect, diagnose, and improve the service.',
      'privacy.s2Title': '2. Subscriptions and payments',
      'privacy.s2p1': 'Subscription and payment processing may be handled by third-party payment providers. DRIFTR does not need to store full payment-card details itself when a payment provider processes the transaction. Payment providers handle payment data under their own privacy terms; review the applicable provider’s policy before completing a purchase.',
      'privacy.s3Title': '3. How information is used',
      'privacy.s3p1': 'Information may be used to provide account access, authenticate users, issue and validate licenses, enforce device and session limits, process subscriptions, maintain service reliability, respond to misuse, and improve DRIFTR.',
      'privacy.s4Title': '4. Sharing and service providers',
      'privacy.s4p1': 'Information may be shared with service providers that support functions such as authentication, licensing, infrastructure, error monitoring, and payment processing. Information may also be disclosed when reasonably necessary to protect the service, its users, or to respond to valid legal requirements.',
      'privacy.s5Title': '5. Retention and security',
      'privacy.s5p1': 'Information may be kept for as long as reasonably needed to provide the service, maintain records, resolve disputes, enforce agreements, and meet applicable obligations. Reasonable safeguards may be used, but no online or local system can be guaranteed completely secure.',
      'privacy.s6Title': '6. Your choices',
      'privacy.s6p1': 'You may choose not to provide certain information, although some account, licensing, or subscription features may then be unavailable. Requests concerning your information can be made through the official website listed below.',
      'privacy.s7Title': '7. Updates and contact',
      'privacy.s7p1': 'This policy may change as DRIFTR develops. Material updates will be reflected by the date above. For privacy questions or requests, visit',
      'privacy.s7p2': 'and use the official contact method published there.',
      'terms.title1': 'Terms', 'terms.title2': 'of use.',
      'terms.intro': 'These terms govern access to and use of DRIFTR software, website, accounts, subscriptions, and related services. By using DRIFTR, you agree to these terms. If you do not agree, do not use the service.',
      'terms.s1Title': '1. Software access and license',
      'terms.s1p1': 'DRIFTR grants you a limited, personal, non-exclusive, non-transferable, revocable license to use the software according to your plan and these terms. The software is licensed, not sold. Access may be limited by device and session counts associated with your plan.',
      'terms.s2Title': '2. Accounts and responsibilities',
      'terms.s2p1': 'You are responsible for accurate account information, safeguarding your access credentials, and activity under your account. You may not share access in a way that bypasses plan limits or licensing controls.',
      'terms.s3Title': '3. Plans and subscriptions',
      'terms.s3p1': 'DRIFTR may offer free and paid plans. Current prices, session limits, billing periods, and included access will be shown before purchase. Paid subscriptions may renew for the selected billing period until canceled. Cancellation ends future renewal and does not necessarily provide a refund for a current billing period, except where required or expressly offered.',
      'terms.s4Title': '4. Acceptable use',
      'terms.s4p1': 'You may not misuse DRIFTR, interfere with its operation, evade license or plan controls, attempt unauthorized access, distribute malicious software, violate applicable law, or use the service to infringe the rights of others. You are responsible for complying with the terms of any third-party service you access through DRIFTR.',
      'terms.s5Title': '5. Availability and changes',
      'terms.s5p1': 'DRIFTR may change, suspend, or discontinue features or service availability as the product develops. Continuous or error-free availability is not guaranteed. Updates may be required to continue using the software.',
      'terms.s6Title': '6. Termination',
      'terms.s6p1': 'You may stop using DRIFTR at any time and may cancel a paid subscription through the method made available with your account or purchase. DRIFTR may restrict or terminate access when these terms are violated, when required to protect the service or others, or when the service is discontinued.',
      'terms.s7Title': '7. Intellectual property',
      'terms.s7p1': 'DRIFTR, its software, branding, design, and related materials are protected by intellectual property laws. Except for the limited license above, these terms do not transfer ownership or grant rights to copy, modify, reverse engineer, resell, or distribute DRIFTR except where such restrictions are prohibited by law.',
      'terms.s8Title': '8. Disclaimers and responsibility',
      'terms.s8p1': 'DRIFTR is provided on an “as available” basis to the extent permitted by applicable law. You remain responsible for your use of third-party websites, games, accounts, and services. Nothing in these terms excludes rights or responsibilities that cannot lawfully be excluded.',
      'terms.s9Title': '9. Changes and contact',
      'terms.s9p1': 'These terms may be updated as DRIFTR evolves. The date above identifies the latest version. For questions, visit',
      'terms.s9p2': 'and use the official contact method published there.',
      'meta.home.title': 'DRIFTR — One Window. Every World.',
      'meta.home.description': 'Run multiple isolated browser and game sessions side by side in one focused Windows workspace.',
      'meta.home.ogDescription': 'Independent sessions. One focused workspace. Built for Windows.',
      'meta.privacy.title': 'Privacy Policy — DRIFTR', 'meta.privacy.description': 'DRIFTR privacy policy.',
      'meta.terms.title': 'Terms of Use — DRIFTR', 'meta.terms.description': 'DRIFTR terms of use.'
    },
    'pt-BR': {
      'language.label': 'Idioma', 'a11y.skip': 'Pular para o conteúdo', 'a11y.home': 'Página inicial da DRIFTR',
      'a11y.mainNav': 'Navegação principal', 'a11y.footerNav': 'Navegação do rodapé',
      'a11y.openNav': 'Abrir navegação', 'a11y.closeNav': 'Fechar navegação',
      'nav.features': 'Recursos', 'nav.layouts': 'Layouts', 'nav.pricing': 'Planos', 'nav.download': 'Download',
      'hero.eyebrow': 'Feito para Windows',
      'hero.title1': 'Uma janela.', 'hero.title2': 'Todos os mundos.',
      'hero.description': 'Execute seus mundos lado a lado. Sessões independentes. Um único espaço de trabalho focado.',
      'hero.download': 'Download para Windows', 'hero.plans': 'Ver planos',
      'hero.availability': 'Lançamento para Windows em breve', 'hero.artLabel': 'Ícone oficial da DRIFTR',
      'hero.artAlt': 'Emblema D azul iluminado da DRIFTR', 'hero.sessions': 'Sessões independentes',
      'hero.explore': 'Explore o espaço de trabalho',
      'showcase.eyebrow': 'O espaço de trabalho', 'showcase.title1': 'Seus mundos.', 'showcase.title2': 'Lado a lado.',
      'showcase.description': 'Mantenha várias sessões visíveis, organizadas e prontas em um único espaço de trabalho focado.',
      'showcase.frameMode': 'QUAD · 4 SESSÕES',
      'showcase.imageAlt': 'Aplicativo DRIFTR para desktop exibindo quatro sessões de jogo independentes no layout QUAD',
      'showcase.caption': 'Quatro visões distintas. Um só lugar para manter o foco.', 'showcase.layoutLabel': 'LAYOUT QUAD',
      'features.eyebrow': 'Projetado para foco', 'features.title1': 'Mais mundos.',
      'features.title2': 'Menos janelas para gerenciar.', 'features.isolatedTitle': 'Sessões isoladas',
      'features.isolatedText': 'Ambientes de sessão separados mantêm cada mundo em seu próprio espaço.',
      'features.profilesTitle': 'Perfis persistentes',
      'features.profilesText': 'Os perfis mantêm seus próprios dados de navegador e sessão quando compatível.',
      'features.layoutsTitle': 'Layouts flexíveis',
      'features.layoutsText': 'Alterne entre SOLO, DUO, SIDE BY SIDE e QUAD conforme sua configuração muda.',
      'features.focusTitle': 'Espaço de trabalho focado',
      'features.focusText': 'Gerencie vários mundos sem alternar entre janelas separadas do navegador.',
      'layouts.eyebrow': 'Escolha sua visualização', 'layouts.title1': 'Um layout para', 'layouts.title2': 'cada ritmo.',
      'layouts.description': 'Comece com uma sessão. Divida em duas. Vá até quatro. A DRIFTR mantém o espaço organizado de acordo com a sua forma de jogar.',
      'layouts.sideNote': 'SIDE BY SIDE está disponível quando duas visualizações iguais fazem mais sentido.',
      'common.oneSession': '1 sessão', 'common.twoSessions': '2 sessões', 'common.fourSessions': '4 sessões',
      'common.upToFour': 'Até 4 sessões', 'common.oneDevice': '1 dispositivo',
      'common.comingSoon': 'Em breve', 'common.iconAlt': 'Ícone da DRIFTR',
      'pricing.eyebrow': 'Planos simples', 'pricing.title1': 'Escolha seu', 'pricing.title2': 'ritmo.',
      'pricing.description': 'Um dispositivo. Sem extras inventados. Escolha a quantidade de sessões e o período de cobrança ideal para você.',
      'pricing.free': 'Grátis', 'pricing.noCharge': 'Sem custo', 'pricing.monthly': 'Pro mensal',
      'pricing.annual': 'Pro anual', 'pricing.perMonth': 'por mês', 'pricing.perYear': 'por ano',
      'pricing.availableSoon': 'Disponível em breve', 'pricing.bestValue': 'Melhor valor',
      'pricing.saving': 'Economize R$ 19,80 em relação ao plano mensal',
      'pricing.note': 'Comparação anual: 12 × R$ 9,90 = R$ 118,80. Plano anual = R$ 99,00.',
      'download.eyebrow': 'Windows desktop', 'download.title': 'DRIFTR para Windows.',
      'download.description': 'O primeiro lançamento público está a caminho. Baixe a DRIFTR aqui quando estiver pronta.',
      'download.productType': 'Windows Desktop', 'download.platformLabel': 'Plataforma',
      'download.applicationLabel': 'Aplicativo', 'download.releaseLabel': 'Lançamento',
      'footer.privacy': 'Privacidade', 'footer.terms': 'Termos', 'footer.home': 'Início',
      'legal.back': '← Voltar ao início', 'legal.eyebrow': 'Legal',
      'legal.updated': 'Atualizado em: 2 de outubro de 2026',
      'privacy.title1': 'Política de', 'privacy.title2': 'Privacidade.',
      'privacy.intro': 'Esta política explica, em linhas gerais, como a DRIFTR pode processar informações quando você usa seu software, site, contas, licenciamento e serviços de assinatura. O produto está em estágio inicial, e esta política poderá ser atualizada à medida que esses serviços evoluírem.',
      'privacy.s1Title': '1. Informações que podemos processar',
      'privacy.s1p1': 'A DRIFTR pode processar informações de conta usadas para autenticação e licenciamento, como identificadores de conta e dados de acesso. Também podemos processar informações de dispositivo e licença necessárias para ativar o software, associar uma licença a um dispositivo e aplicar os limites do plano.',
      'privacy.s1p2': 'Informações operacionais e de segurança — como versão do aplicativo, detalhes de erros, datas e horários e eventos técnicos básicos — podem ser processadas para operar, proteger, diagnosticar e melhorar o serviço.',
      'privacy.s2Title': '2. Assinaturas e pagamentos',
      'privacy.s2p1': 'O processamento de assinaturas e pagamentos pode ser realizado por provedores de pagamento terceiros. A DRIFTR não precisa armazenar os dados completos do cartão quando um provedor processa a transação. Os provedores tratam os dados de pagamento segundo seus próprios termos de privacidade; consulte a política do provedor aplicável antes de concluir uma compra.',
      'privacy.s3Title': '3. Como as informações são usadas',
      'privacy.s3p1': 'As informações podem ser usadas para fornecer acesso à conta, autenticar usuários, emitir e validar licenças, aplicar limites de dispositivos e sessões, processar assinaturas, manter a confiabilidade do serviço, responder a usos indevidos e melhorar a DRIFTR.',
      'privacy.s4Title': '4. Compartilhamento e provedores de serviço',
      'privacy.s4p1': 'As informações podem ser compartilhadas com provedores que apoiam funções como autenticação, licenciamento, infraestrutura, monitoramento de erros e processamento de pagamentos. As informações também podem ser divulgadas quando isso for razoavelmente necessário para proteger o serviço, seus usuários ou responder a exigências legais válidas.',
      'privacy.s5Title': '5. Retenção e segurança',
      'privacy.s5p1': 'As informações podem ser mantidas pelo tempo razoavelmente necessário para fornecer o serviço, conservar registros, resolver disputas, aplicar acordos e cumprir obrigações aplicáveis. Medidas de proteção razoáveis podem ser usadas, mas nenhum sistema on-line ou local pode ter segurança total garantida.',
      'privacy.s6Title': '6. Suas escolhas',
      'privacy.s6p1': 'Você pode optar por não fornecer determinadas informações, embora alguns recursos de conta, licenciamento ou assinatura possam ficar indisponíveis. Solicitações relacionadas às suas informações podem ser feitas pelo site oficial indicado abaixo.',
      'privacy.s7Title': '7. Atualizações e contato',
      'privacy.s7p1': 'Esta política pode mudar à medida que a DRIFTR evolui. Atualizações relevantes serão refletidas na data acima. Para dúvidas ou solicitações sobre privacidade, acesse',
      'privacy.s7p2': 'e use o método oficial de contato publicado no site.',
      'terms.title1': 'Termos', 'terms.title2': 'de uso.',
      'terms.intro': 'Estes termos regem o acesso e o uso do software, site, contas, assinaturas e serviços relacionados da DRIFTR. Ao usar a DRIFTR, você concorda com estes termos. Se não concordar, não use o serviço.',
      'terms.s1Title': '1. Acesso ao software e licença',
      'terms.s1p1': 'A DRIFTR concede a você uma licença limitada, pessoal, não exclusiva, intransferível e revogável para usar o software de acordo com seu plano e estes termos. O software é licenciado, não vendido. O acesso pode ser limitado pela quantidade de dispositivos e sessões associada ao seu plano.',
      'terms.s2Title': '2. Contas e responsabilidades',
      'terms.s2p1': 'Você é responsável por fornecer informações corretas da conta, proteger suas credenciais de acesso e pelas atividades realizadas em sua conta. Você não pode compartilhar o acesso de forma que contorne os limites do plano ou os controles de licenciamento.',
      'terms.s3Title': '3. Planos e assinaturas',
      'terms.s3p1': 'A DRIFTR pode oferecer planos gratuitos e pagos. Os preços atuais, limites de sessões, períodos de cobrança e acessos incluídos serão exibidos antes da compra. As assinaturas pagas podem ser renovadas pelo período selecionado até o cancelamento. O cancelamento encerra renovações futuras e não necessariamente gera reembolso do período de cobrança atual, exceto quando exigido ou expressamente oferecido.',
      'terms.s4Title': '4. Uso aceitável',
      'terms.s4p1': 'Você não pode usar a DRIFTR indevidamente, interferir em sua operação, contornar controles de licença ou plano, tentar obter acesso não autorizado, distribuir software malicioso, violar a legislação aplicável nem usar o serviço para infringir direitos de terceiros. Você é responsável por cumprir os termos de qualquer serviço de terceiros acessado pela DRIFTR.',
      'terms.s5Title': '5. Disponibilidade e alterações',
      'terms.s5p1': 'A DRIFTR pode alterar, suspender ou descontinuar recursos ou a disponibilidade do serviço à medida que o produto evolui. A disponibilidade contínua ou livre de erros não é garantida. Atualizações podem ser necessárias para continuar usando o software.',
      'terms.s6Title': '6. Encerramento',
      'terms.s6p1': 'Você pode deixar de usar a DRIFTR a qualquer momento e cancelar uma assinatura paga pelo método disponibilizado em sua conta ou compra. A DRIFTR pode restringir ou encerrar o acesso quando estes termos forem violados, quando necessário para proteger o serviço ou terceiros, ou quando o serviço for descontinuado.',
      'terms.s7Title': '7. Propriedade intelectual',
      'terms.s7p1': 'A DRIFTR, seu software, marca, design e materiais relacionados são protegidos por leis de propriedade intelectual. Com exceção da licença limitada acima, estes termos não transferem propriedade nem concedem direitos para copiar, modificar, realizar engenharia reversa, revender ou distribuir a DRIFTR, salvo quando tais restrições forem proibidas por lei.',
      'terms.s8Title': '8. Isenções e responsabilidade',
      'terms.s8p1': 'A DRIFTR é fornecida “conforme disponível”, na medida permitida pela legislação aplicável. Você continua responsável pelo uso de sites, jogos, contas e serviços de terceiros. Nada nestes termos exclui direitos ou responsabilidades que não possam ser legalmente excluídos.',
      'terms.s9Title': '9. Alterações e contato',
      'terms.s9p1': 'Estes termos podem ser atualizados à medida que a DRIFTR evolui. A data acima identifica a versão mais recente. Em caso de dúvidas, acesse',
      'terms.s9p2': 'e use o método oficial de contato publicado no site.',
      'meta.home.title': 'DRIFTR — One Window. Every World.',
      'meta.home.description': 'Execute várias sessões isoladas de navegador e jogos lado a lado em um único espaço de trabalho focado para Windows.',
      'meta.home.ogDescription': 'Sessões independentes. Um único espaço de trabalho focado. Feito para Windows.',
      'meta.privacy.title': 'Política de Privacidade — DRIFTR',
      'meta.privacy.description': 'Política de privacidade da DRIFTR.',
      'meta.terms.title': 'Termos de Uso — DRIFTR', 'meta.terms.description': 'Termos de uso da DRIFTR.'
    }
  };

  const dictionaryKeys = new Set([...Object.keys(translations.en), ...Object.keys(translations['pt-BR'])]);
  const incompleteDictionaryKeys = [...dictionaryKeys].filter((key) =>
    translations.en[key] === undefined || translations['pt-BR'][key] === undefined
  );

  const page = location.pathname.endsWith('privacy.html') ? 'privacy'
    : location.pathname.endsWith('terms.html') ? 'terms' : 'home';
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  let currentLanguage = DEFAULT_LANGUAGE;

  const getSavedLanguage = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return Object.hasOwn(translations, saved) ? saved : DEFAULT_LANGUAGE;
    } catch { return DEFAULT_LANGUAGE; }
  };
  const text = (key) => translations[currentLanguage][key] ?? translations[DEFAULT_LANGUAGE][key];
  const updateNavigationLabel = () => {
    const label = toggle?.querySelector('[data-nav-label]');
    if (label) label.textContent = text(toggle.getAttribute('aria-expanded') === 'true' ? 'a11y.closeNav' : 'a11y.openNav');
  };

  const applyLanguage = (language, persist = false) => {
    currentLanguage = Object.hasOwn(translations, language) ? language : DEFAULT_LANGUAGE;
    const dictionary = translations[currentLanguage];
    const missing = new Set();
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (dictionary[key] === undefined) missing.add(key); else element.textContent = dictionary[key];
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
      const key = element.dataset.i18nAriaLabel;
      if (dictionary[key] === undefined) missing.add(key); else element.setAttribute('aria-label', dictionary[key]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
      const key = element.dataset.i18nAlt;
      if (dictionary[key] === undefined) missing.add(key); else element.setAttribute('alt', dictionary[key]);
    });
    document.documentElement.lang = currentLanguage;
    document.documentElement.dataset.i18nMissing = String(missing.size);
    document.documentElement.dataset.i18nCoverage = String(incompleteDictionaryKeys.length);
    document.title = dictionary[`meta.${page}.title`];
    document.querySelector('meta[name="description"]')?.setAttribute('content', dictionary[`meta.${page}.description`]);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', dictionary['meta.home.title']);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', dictionary['meta.home.ogDescription']);
    document.querySelectorAll('[data-language]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.language === currentLanguage));
    });
    updateNavigationLabel();
    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, currentLanguage); } catch { /* Storage may be unavailable. */ }
    }
    if (missing.size) console.error('Missing DRIFTR translations:', [...missing]);
  };

  applyLanguage(getSavedLanguage());
  document.querySelectorAll('[data-language]').forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.language, true));
  });

  const setHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
  setHeader();
  window.addEventListener('scroll', setHeader, { passive: true });
  if (toggle && nav) {
    const closeNav = () => {
      toggle.setAttribute('aria-expanded', 'false'); updateNavigationLabel();
      nav.classList.remove('is-open'); document.body.classList.remove('nav-open');
    };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open)); updateNavigationLabel();
      nav.classList.toggle('is-open', open); document.body.classList.toggle('nav-open', open);
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));
    document.addEventListener('keydown', (event) => event.key === 'Escape' && closeNav());
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  }
})();
