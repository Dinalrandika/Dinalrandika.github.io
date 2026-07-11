import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ExternalLink, Mail, Menu, MessageCircle, X } from "lucide-react";

const projects = [
  {
    name: "Arrichiello",
    url: "https://arrichiello.it/",
    image: "/assets/showcase-arrichiello.avif",
    alt: {
      it: "Homepage Arrichiello con materiali e finiture per interni",
      en: "Arrichiello homepage featuring interior materials and finishes",
    },
    category: { it: "Showroom e interior design", en: "Showroom and interior design" },
    summary: {
      it: "Un’esperienza digitale premium per raccontare oltre cinquant’anni di competenza, due showroom e un servizio completo per architetti e privati.",
      en: "A premium digital experience presenting more than fifty years of expertise, two showrooms, and a complete service for architects and homeowners.",
    },
    result: {
      it: "Struttura editoriale, navigazione chiara e percorsi di contatto per Casoria e Napoli.",
      en: "Editorial structure, clear navigation, and direct contact paths for the Casoria and Naples showrooms.",
    },
    tags: ["Framer", "Responsive", "UX"],
  },
  {
    name: "Around Tuscany Osteria",
    url: "https://aroundtuscanyosteria.it/en/",
    image: "/assets/showcase-around-tuscany.avif",
    alt: {
      it: "Homepage Around Tuscany Osteria con sala del ristorante",
      en: "Around Tuscany Osteria homepage showing the restaurant dining room",
    },
    category: { it: "Ristorante ed eventi", en: "Restaurant and events" },
    summary: {
      it: "Un sito immersivo per un’osteria toscana con ristorante, terrazza sul lago, menu, matrimoni ed eventi privati.",
      en: "An immersive website for a Tuscan osteria with dining, a lake-view terrace, menus, weddings, and private events.",
    },
    result: {
      it: "Esperienza bilingue, storytelling visivo e percorso diretto verso prenotazioni e richieste evento.",
      en: "Bilingual experience, visual storytelling, and a direct path to bookings and event enquiries.",
    },
    tags: ["Framer", "IT / EN", "Booking"],
  },
  {
    name: "Piserchia Eventi",
    url: "https://bewildered-line-651237.framer.app/",
    image: "/assets/showcase-piserchia.avif",
    alt: {
      it: "Homepage Piserchia Eventi con wedding planner",
      en: "Piserchia Eventi homepage featuring the wedding planner",
    },
    category: { it: "Wedding ed event planner", en: "Wedding and event planner" },
    summary: {
      it: "Una presenza elegante e personale per comunicare il metodo della planner, i servizi e la fiducia necessaria prima del primo contatto.",
      en: "An elegant, personal presence communicating the planner’s approach, services, and the trust needed before the first conversation.",
    },
    result: {
      it: "Gerarchia più calma, identità riconoscibile e call to action costruite intorno alla consulenza.",
      en: "Calmer hierarchy, recognizable identity, and calls to action built around the consultation journey.",
    },
    tags: ["Framer", "Brand tone", "Contact flow"],
  },
  {
    name: "Il Profeta Firenze",
    url: "https://www.ristoranteilprofetafirenze.com/",
    image: "/assets/showcase-il-profeta.avif",
    alt: {
      it: "Homepage Il Profeta Firenze con piatto toscano",
      en: "Il Profeta Firenze homepage featuring a Tuscan dish",
    },
    category: { it: "Ristorante storico a Firenze", en: "Historic Florence restaurant" },
    summary: {
      it: "Un racconto digitale per un ristorante fiorentino attivo dal 1979, noto per la cucina toscana e la leggendaria Bontà del Profeta.",
      en: "A digital story for a Florence restaurant active since 1979, known for Tuscan cooking and its legendary Bontà del Profeta.",
    },
    result: {
      it: "Storia, piatti, orari e prenotazione riuniti in un percorso chiaro anche per il pubblico internazionale.",
      en: "Story, dishes, opening hours, and reservations brought together in a clear path for international visitors.",
    },
    tags: ["Framer", "Restaurant UX", "Reservation"],
  },
  {
    name: "Le Delizie in Tavola",
    url: "https://primary-spots-545945.framer.app/",
    image: "/assets/showcase-delizie.avif",
    alt: {
      it: "Homepage Le Delizie in Tavola con produzione di cibo italiano",
      en: "Le Delizie in Tavola homepage featuring Italian food production",
    },
    category: { it: "Food brand e catalogo", en: "Food brand and catalogue" },
    summary: {
      it: "Una direzione visiva contemporanea per valorizzare qualità italiana, produzione, catalogo e presenza internazionale del brand.",
      en: "A contemporary visual direction highlighting Italian quality, production, catalogue, and the brand’s international presence.",
    },
    result: {
      it: "Hero ad alto impatto, navigazione bilingue e accesso immediato al catalogo e ai contatti.",
      en: "High-impact hero, bilingual navigation, and immediate access to the catalogue and contact details.",
    },
    tags: ["Framer", "Food brand", "IT / EN"],
  },
  {
    name: "Puteca Osteria",
    url: "https://www.putecaosteria.com/",
    image: "/assets/showcase-puteca.avif",
    alt: {
      it: "Homepage Puteca Osteria con piatti e offerte",
      en: "Puteca Osteria homepage featuring dishes and offers",
    },
    category: { it: "Osteria e braceria", en: "Osteria and steakhouse" },
    summary: {
      it: "Una vetrina energica per offerte, menu, eventi e prenotazione tavolo, costruita intorno alle immagini e all’identità del locale.",
      en: "An energetic showcase for offers, menus, events, and table bookings, built around the venue’s imagery and identity.",
    },
    result: {
      it: "Contenuti promozionali facili da scoprire e percorsi diretti verso evento, menu e prenotazione.",
      en: "Promotional content that is easy to discover, with direct paths to events, menus, and table booking.",
    },
    tags: ["Framer", "Offers", "Booking"],
  },
];

const content = {
  it: {
    nav: ["Home", "Progetti", "Prezzi", "Chi sono", "Contatti"],
    heroEyebrow: "Web design pratico per attività che vogliono crescere",
    heroTitle: "Il tuo sito può fare di più.",
    heroText: "Creo siti Framer e WordPress moderni, veloci e pensati per trasformare visite in prenotazioni, richieste e clienti reali.",
    start: "Parliamo del progetto",
    explore: "Scorri per esplorare",
    introKicker: "Non basta essere online",
    introTitle: "Un sito deve spiegare bene, creare fiducia e rendere semplice il prossimo passo.",
    introText: "Lavoro soprattutto con ristoranti, hotel, bar e attività di servizio. Parto dai problemi reali: menu difficili da trovare, prenotazioni confuse, pagine lente su mobile o un’identità che online non rende quanto dal vivo.",
    projectsKicker: "Lavori selezionati",
    projectsTitle: "Progetti costruiti intorno al business.",
    objective: "Obiettivo",
    outcome: "Risultato",
    visit: "Visita il sito",
    liveProject: "progetto live",
    demoKicker: "Parma, partiamo da una demo",
    demoTitle: "Prima ti mostro una direzione concreta. Poi decidiamo se costruirla davvero.",
    demoText: "Per ristoranti, hotel e bar selezionati di Parma preparo una prima demo visiva senza impegno. È un modo semplice per vedere il potenziale prima di parlare di un progetto completo.",
    demoSteps: ["Scelgo un’attività con potenziale", "Creo una homepage dimostrativa", "La presento direttamente al titolare", "Se piace, definiamo contenuti, prezzo e lancio"],
    demoCta: "Richiedi una demo",
    aboutKicker: "La persona dietro il lavoro",
    aboutTitle: "Ciao, sono Dinal.",
    aboutText: [
      "Ho una formazione in software engineering e oggi lavoro su progetti web reali in Italia. Costruisco soprattutto con Framer e WordPress, ma conosco anche HTML, CSS, JavaScript, React, Node.js e database.",
      "Il mio vantaggio non è fingere di sapere tutto. È saper entrare nei problemi pratici: sistemi di prenotazione, moduli, WhatsApp, responsive design, menu, domini, hosting e modifiche urgenti che per una piccola attività fanno davvero la differenza.",
    ],
    skills: ["Framer e WordPress", "Elementor, Divi e WooCommerce", "HTML, CSS, JavaScript e React", "Booking, moduli e WhatsApp", "DNS, domini e hosting", "Supporto dopo il lancio"],
    pricingKicker: "Investimento chiaro",
    pricingTitle: "Quanto può costare il tuo sito.",
    pricingIntro: "Prezzi di partenza realistici per un freelance. Il preventivo finale dipende da contenuti, integrazioni e tempistiche.",
    popular: "Più scelto",
    from: "Da",
    choose: "Parliamone",
    plans: [
      ["Sito Essenziale", "€790", "Per una piccola attività che ha bisogno di una presenza chiara e professionale.", ["Homepage personalizzata", "Design responsive", "Contatto o WhatsApp", "SEO tecnico di base", "2 revisioni"]],
      ["Sito Business", "€1.290", "Per ristoranti, hotel, bar e servizi che devono presentare più contenuti e convertire.", ["Fino a 5 pagine", "Menu, servizi o camere", "Booking o moduli", "Italiano + inglese", "SEO base e analytics", "30 giorni di supporto"], true],
      ["Esperienza Premium", "€1.890", "Per un progetto più visivo, personalizzato e pronto a distinguersi.", ["Fino a 7 pagine", "Animazioni su misura", "CMS o contenuti dinamici", "Integrazioni avanzate", "Performance", "45 giorni di supporto"]],
    ],
    pricingNote: "I prezzi sono indicativi. Possiamo modificare il pacchetto insieme durante il progetto; ogni variazione viene concordata prima della consegna finale.",
    faqKicker: "Domande frequenti",
    faqTitle: "Prima di iniziare.",
    faqs: [
      ["Quanto tempo serve?", "Una landing page richiede normalmente 1–2 settimane. Un sito business richiede circa 3–5 settimane, in base ai contenuti e alle revisioni."],
      ["Devo avere già testi e foto?", "No. Posso aiutarti a organizzare i contenuti, usare il materiale esistente e indicarti cosa serve per completare il sito."],
      ["Posso modificare il sito dopo?", "Sì. Posso costruire sezioni facili da aggiornare e offrire manutenzione quando preferisci delegare."],
      ["Lavori solo a Parma?", "No. Lavoro con clienti in Italia e da remoto. Parma è il focus della mia iniziativa demo per ristoranti, hotel e bar locali."],
      ["Cosa succede se la demo non mi piace?", "La demo iniziale per le attività selezionate non crea obblighi. Se la direzione interessa, la miglioriamo insieme e definiamo il progetto completo."],
    ],
    contactKicker: "Pronto per il prossimo passo?",
    contactTitle: "Raccontami la tua attività.",
    contactText: "Dimmi cosa non funziona oggi o cosa vuoi ottenere. Ti rispondo con un primo consiglio pratico, senza presentazioni complicate.",
    email: "Scrivimi via email",
    emailSubject: "Richiesta progetto web",
    whatsapp: "Scrivimi su WhatsApp",
    profileAlt: "Dinal Randika, web designer e developer",
    footer: "Web design da Parma · disponibile in Italia e da remoto",
  },
  en: {
    nav: ["Home", "Projects", "Pricing", "About", "Contact"],
    heroEyebrow: "Practical web design for businesses ready to grow",
    heroTitle: "Your website can do more.",
    heroText: "I create modern, fast Framer and WordPress websites designed to turn visits into bookings, enquiries, and real customers.",
    start: "Start a project",
    explore: "Scroll to explore",
    introKicker: "Being online is not enough",
    introTitle: "A website should explain clearly, build trust, and make the next step easy.",
    introText: "I mainly work with restaurants, hotels, bars, and service businesses. I start from real problems: hard-to-find menus, confusing bookings, slow mobile pages, or an online identity that feels weaker than the real business.",
    projectsKicker: "Selected work",
    projectsTitle: "Projects built around the business.",
    objective: "Objective",
    outcome: "Outcome",
    visit: "Visit website",
    liveProject: "live project",
    demoKicker: "Parma, start with a demo",
    demoTitle: "First I show you a concrete direction. Then we decide whether to build it.",
    demoText: "For selected restaurants, hotels, and bars in Parma, I prepare an initial visual demo with no obligation. It is a simple way to see the potential before discussing a full project.",
    demoSteps: ["Select a business with potential", "Create a demonstration homepage", "Present it directly to the owner", "If it works, agree content, price, and launch"],
    demoCta: "Request a demo",
    aboutKicker: "The person behind the work",
    aboutTitle: "Hi, I’m Dinal.",
    aboutText: [
      "I have a software engineering background and now work on real web projects in Italy. I build mainly with Framer and WordPress, while also working with HTML, CSS, JavaScript, React, Node.js, and databases.",
      "My advantage is not pretending to know everything. It is being useful with practical problems: booking systems, forms, WhatsApp, responsive design, menus, domains, hosting, and urgent changes that genuinely matter to a small business.",
    ],
    skills: ["Framer and WordPress", "Elementor, Divi, and WooCommerce", "HTML, CSS, JavaScript, and React", "Bookings, forms, and WhatsApp", "DNS, domains, and hosting", "Post-launch support"],
    pricingKicker: "Clear investment",
    pricingTitle: "What your website can cost.",
    pricingIntro: "Realistic freelancer starting prices. The final quote depends on content, integrations, and timeline.",
    popular: "Most popular",
    from: "From",
    choose: "Let’s talk",
    plans: [
      ["Essential Site", "€790", "For a small business that needs a clear and professional online presence.", ["Custom homepage", "Responsive design", "Contact or WhatsApp", "Basic technical SEO", "2 revision rounds"]],
      ["Business Site", "€1,290", "For restaurants, hotels, bars, and services that need more content and stronger conversion paths.", ["Up to 5 pages", "Menus, services, or rooms", "Booking or forms", "Italian + English", "Basic SEO and analytics", "30 days of support"], true],
      ["Premium Experience", "€1,890", "For a more visual, tailored project designed to stand apart.", ["Up to 7 pages", "Custom animations", "CMS or dynamic content", "Advanced integrations", "Performance optimization", "45 days of support"]],
    ],
    pricingNote: "Prices are indicative. We can adjust the package together during the project; every change is agreed before final delivery.",
    faqKicker: "Frequently asked questions",
    faqTitle: "Before we start.",
    faqs: [
      ["How long does it take?", "A landing page normally takes 1–2 weeks. A business website takes around 3–5 weeks, depending on content and revisions."],
      ["Do I need text and photos already?", "No. I can help organize the content, work with existing material, and explain what is still needed."],
      ["Can I update the website later?", "Yes. I can build easy-to-update sections and offer maintenance when you prefer to delegate."],
      ["Do you only work in Parma?", "No. I work with clients across Italy and remotely. Parma is the focus of my local demo initiative for restaurants, hotels, and bars."],
      ["What if I do not like the demo?", "The initial demo for selected businesses creates no obligation. If the direction is useful, we refine it together and define the full project."],
    ],
    contactKicker: "Ready for the next step?",
    contactTitle: "Tell me about your business.",
    contactText: "Tell me what is not working today or what you want to achieve. I will reply with a practical first recommendation, without a complicated sales presentation.",
    email: "Send me an email",
    emailSubject: "Website project enquiry",
    whatsapp: "Message me on WhatsApp",
    profileAlt: "Dinal Randika, web designer and developer",
    footer: "Web design from Parma · available across Italy and remotely",
  },
};

const sectionIds = ["home", "projects", "pricing", "about", "contact"];

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Dinal Randika home">
      <span className="brand-mark"><img src="/assets/dinal-logo.png" alt="" /></span>
      <span>Dinal Randika</span>
    </a>
  );
}

function BrowserFrame({ project, index, lang, liveProject }) {
  return (
    <div className="browser-shell">
      <div className="browser-bar"><span /><span /><span /><small>{String(index + 1).padStart(2, "0")} · {liveProject}</small></div>
      <img src={project.image} alt={project.alt[lang]} loading={index < 2 ? "eager" : "lazy"} decoding="async" />
    </div>
  );
}

export function App() {
  const [lang, setLang] = useState("it");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === "it"
      ? "Dinal Randika — Web designer e developer a Parma"
      : "Dinal Randika — Web designer and developer in Parma";
  }, [lang]);

  const selectLanguage = (nextLanguage) => {
    setLang(nextLanguage);
    setMenuOpen(false);
  };

  return (
    <main id="home">
      <header className="site-header">
        <Brand />
        <nav className={menuOpen ? "nav nav--open" : "nav"} aria-label="Primary navigation">
          {t.nav.map((label, index) => <a key={label} href={"#" + sectionIds[index]} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="header-tools">
          <div className="language-switch" aria-label="Language selection">
            <button className={lang === "it" ? "active" : ""} onClick={() => selectLanguage("it")} aria-pressed={lang === "it"}>IT</button>
            <button className={lang === "en" ? "active" : ""} onClick={() => selectLanguage("en")} aria-pressed={lang === "en"}>EN</button>
          </div>
          <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-glow hero-glow--one" /><div className="hero-glow hero-glow--two" />
        <div className="hero-content section-shell">
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1 id="hero-title">{t.heroTitle}</h1>
          <p className="hero-copy">{t.heroText}</p>
          <a className="primary-button" href="#contact">{t.start} <ArrowRight size={18} /></a>
        </div>
        <a className="scroll-cue" href="#intro">{t.explore} <ArrowDown size={16} /></a>
      </section>

      <section id="intro" className="intro section-shell">
        <p className="section-label">{t.introKicker}</p>
        <div><h2>{t.introTitle}</h2><p>{t.introText}</p></div>
      </section>

      <section id="projects" className="projects section-shell" aria-labelledby="projects-title">
        <div className="section-heading"><p className="section-label">{t.projectsKicker}</p><h2 id="projects-title">{t.projectsTitle}</h2></div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project" key={project.name}>
              <div className="project-copy">
                <p className="project-index">{String(index + 1).padStart(2, "0")} / 06</p>
                <p className="project-category">{project.category[lang]}</p>
                <h3>{project.name}</h3>
                <div className="project-detail"><span>{t.objective}</span><p>{project.summary[lang]}</p></div>
                <div className="project-detail"><span>{t.outcome}</span><p>{project.result[lang]}</p></div>
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a className="text-link" href={project.url} target="_blank" rel="noreferrer">{t.visit} <ExternalLink size={16} /></a>
              </div>
              <BrowserFrame project={project} index={index} lang={lang} liveProject={t.liveProject} />
            </article>
          ))}
        </div>
      </section>

      <section className="demo-section">
        <div className="demo-grid section-shell">
          <div className="demo-copy">
            <p className="section-label">{t.demoKicker}</p><h2>{t.demoTitle}</h2><p>{t.demoText}</p>
            <a className="light-button" href="#contact">{t.demoCta} <ArrowRight size={18} /></a>
          </div>
          <ol className="demo-steps">{t.demoSteps.map((step, index) => <li key={step}><span>0{index + 1}</span><p>{step}</p></li>)}</ol>
        </div>
      </section>

      <section id="about" className="about section-shell" aria-labelledby="about-title">
        <div className="portrait-wrap"><img src="/assets/dinal-profile.avif" alt={t.profileAlt} loading="lazy" decoding="async" /></div>
        <div className="about-copy">
          <p className="section-label">{t.aboutKicker}</p><h2 id="about-title">{t.aboutTitle}</h2>
          {t.aboutText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="skill-list">{t.skills.map((skill) => <span key={skill}><Check size={15} />{skill}</span>)}</div>
        </div>
      </section>

      <section id="pricing" className="pricing section-shell" aria-labelledby="pricing-title">
        <div className="section-heading pricing-heading">
          <p className="section-label">{t.pricingKicker}</p>
          <div><h2 id="pricing-title">{t.pricingTitle}</h2><p>{t.pricingIntro}</p></div>
        </div>
        <div className="pricing-grid">
          {t.plans.map(([name, price, description, items, popular]) => (
            <article className={popular ? "price-card price-card--popular" : "price-card"} key={name}>
              {popular && <span className="popular-label">{t.popular}</span>}
              <h3>{name}</h3><p>{description}</p>
              <div className="price"><span>{t.from}</span><strong>{price}</strong></div>
              <ul>{items.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul>
              <a href="#contact">{t.choose} <ArrowRight size={16} /></a>
            </article>
          ))}
        </div>
        <p className="pricing-note">{t.pricingNote}</p>
      </section>

      <section className="faq section-shell" aria-labelledby="faq-title">
        <div className="faq-heading"><p className="section-label">{t.faqKicker}</p><h2 id="faq-title">{t.faqTitle}</h2></div>
        <div className="faq-list">
          {t.faqs.map(([question, answer], index) => (
            <details key={question}><summary><span>0{index + 1}</span>{question}<ArrowDown size={18} /></summary><p>{answer}</p></details>
          ))}
        </div>
      </section>

      <section id="contact" className="contact" aria-labelledby="contact-title">
        <div className="contact-inner section-shell">
          <p className="section-label">{t.contactKicker}</p><h2 id="contact-title">{t.contactTitle}</h2><p>{t.contactText}</p>
          <div className="contact-actions">
            <a className="light-button" href={`mailto:dinalrandika@icloud.com?subject=${encodeURIComponent(t.emailSubject)}`}><Mail size={18} />{t.email}</a>
            <a className="ghost-button" href="https://wa.me/393393515742" target="_blank" rel="noreferrer"><MessageCircle size={18} />{t.whatsapp}</a>
          </div>
          <div className="contact-details"><a href="mailto:dinalrandika@icloud.com">dinalrandika@icloud.com</a><a href="tel:+393393515742">+39 339 351 5742</a></div>
        </div>
      </section>

      <footer className="site-footer section-shell"><Brand /><p>{t.footer}</p><a href="#home" aria-label="Back to top"><ArrowUpRight size={19} /></a></footer>
    </main>
  );
}
