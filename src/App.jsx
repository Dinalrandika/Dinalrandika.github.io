import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarCheck2,
  Code2,
  ExternalLink,
  Globe2,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  ShoppingBag,
  Utensils,
  X,
} from "lucide-react";

const projects = [
  {
    name: "Arrichiello",
    url: "https://arrichiello.it/",
    image: "/assets/showcase-arrichiello.avif",
    group: "brands",
    alt: {
      it: "Homepage mobile Arrichiello con materiali e finiture per interni",
      en: "Arrichiello mobile homepage featuring interior materials and finishes",
    },
    category: { it: "Showroom e interior design", en: "Showroom and interior design" },
    summary: {
      it: "Un’esperienza digitale premium per raccontare oltre cinquant’anni di competenza, due showroom e un servizio completo.",
      en: "A premium digital experience presenting more than fifty years of expertise, two showrooms, and a complete service.",
    },
    result: {
      it: "Struttura editoriale, navigazione chiara e percorsi di contatto per le due sedi.",
      en: "Editorial structure, clear navigation, and direct contact paths for both showrooms.",
    },
    tags: ["Framer", "Responsive", "UX"],
  },
  {
    name: "Around Tuscany Osteria",
    url: "https://aroundtuscanyosteria.it/en/",
    image: "/assets/showcase-around-tuscany.avif",
    group: "restaurants",
    alt: {
      it: "Homepage mobile Around Tuscany Osteria con vista sul lago",
      en: "Around Tuscany Osteria mobile homepage showing the lake view",
    },
    category: { it: "Ristorante ed eventi", en: "Restaurant and events" },
    summary: {
      it: "Un sito immersivo per un’osteria toscana con ristorante, terrazza sul lago, menu, matrimoni ed eventi privati.",
      en: "An immersive website for a Tuscan osteria with dining, a lake-view terrace, menus, weddings, and private events.",
    },
    result: {
      it: "Esperienza bilingue e percorsi diretti verso prenotazioni e richieste evento.",
      en: "A bilingual experience with direct paths to bookings and event enquiries.",
    },
    tags: ["Framer", "IT / EN", "Booking"],
  },
  {
    name: "Piserchia Eventi",
    url: "https://bewildered-line-651237.framer.app/",
    image: "/assets/showcase-piserchia.avif",
    group: "events",
    alt: {
      it: "Homepage mobile Piserchia Eventi con wedding planner",
      en: "Piserchia Eventi mobile homepage featuring the wedding planner",
    },
    category: { it: "Wedding ed event planner", en: "Wedding and event planner" },
    summary: {
      it: "Una presenza elegante e personale per comunicare il metodo della planner, i servizi e la fiducia prima del contatto.",
      en: "An elegant, personal presence communicating the planner’s approach, services, and trust before the first conversation.",
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
    group: "restaurants",
    alt: {
      it: "Homepage mobile Il Profeta Firenze con piatto toscano",
      en: "Il Profeta Firenze mobile homepage featuring a Tuscan dish",
    },
    category: { it: "Ristorante storico a Firenze", en: "Historic Florence restaurant" },
    summary: {
      it: "Un racconto digitale per un ristorante fiorentino attivo dal 1979, noto per la cucina toscana.",
      en: "A digital story for a Florence restaurant active since 1979 and known for Tuscan cooking.",
    },
    result: {
      it: "Storia, piatti, orari e prenotazione riuniti in un percorso chiaro anche per il pubblico internazionale.",
      en: "Story, dishes, opening hours, and reservations brought together for international visitors.",
    },
    tags: ["Framer", "Restaurant UX", "Reservation"],
  },
  {
    name: "Le Delizie in Tavola",
    url: "https://primary-spots-545945.framer.app/",
    image: "/assets/showcase-delizie.avif",
    group: "brands",
    alt: {
      it: "Homepage mobile Le Delizie in Tavola con produzione di cibo italiano",
      en: "Le Delizie in Tavola mobile homepage featuring Italian food production",
    },
    category: { it: "Food brand e catalogo", en: "Food brand and catalogue" },
    summary: {
      it: "Una direzione visiva contemporanea per valorizzare qualità italiana, produzione, catalogo e presenza internazionale.",
      en: "A contemporary visual direction highlighting Italian quality, production, catalogue, and international presence.",
    },
    result: {
      it: "Hero ad alto impatto, navigazione bilingue e accesso immediato a catalogo e contatti.",
      en: "A high-impact hero, bilingual navigation, and immediate access to the catalogue and contact details.",
    },
    tags: ["Framer", "Food brand", "IT / EN"],
  },
  {
    name: "Puteca Osteria",
    url: "https://www.putecaosteria.com/",
    image: "/assets/showcase-puteca.avif",
    group: "restaurants",
    alt: {
      it: "Homepage mobile Puteca Osteria con piatti e offerte",
      en: "Puteca Osteria mobile homepage featuring dishes and offers",
    },
    category: { it: "Osteria e braceria", en: "Osteria and steakhouse" },
    summary: {
      it: "Una vetrina energica per offerte, menu, eventi e prenotazione tavolo, costruita intorno all’identità del locale.",
      en: "An energetic showcase for offers, menus, events, and table bookings, built around the venue’s identity.",
    },
    result: {
      it: "Contenuti promozionali facili da scoprire e percorsi diretti verso evento, menu e prenotazione.",
      en: "Promotional content that is easy to discover, with direct paths to events, menus, and table booking.",
    },
    tags: ["Framer", "Offers", "Booking"],
  },
];

const serviceIcons = [Layers3, Utensils, CalendarCheck2, MonitorSmartphone, ShoppingBag, Globe2];

const content = {
  it: {
    nav: [
      ["Home", "home"],
      ["Chi sono", "about"],
      ["Servizi", "services"],
      ["Progetti", "projects"],
    ],
    contactNav: "Contatti",
    primaryNavLabel: "Navigazione principale",
    languageLabel: "Selezione lingua",
    menuLabel: "Apri o chiudi la navigazione",
    heroRole: "Web Designer & Developer",
    heroStatement: "Il tuo sito può fare di più.",
    heroText: "Creo siti Framer e WordPress pratici e curati per ristoranti, hotel, bar e attività di servizio in Italia.",
    start: "Parliamo del progetto",
    workCta: "Guarda i progetti",
    proof: "Framer & WordPress · 6 progetti live · disponibile in tutta Italia e da remoto",
    scroll: "Scopri il mio lavoro",
    aboutTitle: "Chi sono",
    aboutSubtitle: "Conosciamoci",
    aboutLead: "Sono Dinal, un web developer che preferisce risolvere problemi reali invece di vendere promesse perfette.",
    aboutText: [
      "Ho una formazione in software engineering e sono entrato nel web attraverso progetti reali per attività in Italia. Oggi costruisco soprattutto con Framer e WordPress, unendo esecuzione tecnica e attenzione alle esigenze del business.",
      "Il lavoro concreto spesso significa sistemare un menu difficile da trovare, una prenotazione confusa, un modulo che non funziona su mobile, un collegamento WhatsApp o un dominio da configurare. È proprio lì che mi piace essere utile.",
    ],
    aboutCta: "Vedi cosa ho costruito",
    servicesTitle: "Cosa faccio",
    servicesSubtitle: "Servizi pratici",
    services: [
      ["Siti Framer & WordPress", "Progetto e costruisco siti chiari, veloci e facili da gestire, scegliendo lo strumento giusto per il progetto."],
      ["Ristorazione & hospitality", "Pagine per menu, camere, offerte ed eventi con percorsi semplici verso prenotazione e contatto."],
      ["Booking, moduli & WhatsApp", "Rendo il prossimo passo evidente: prenotare, chiedere informazioni o aprire una conversazione diretta."],
      ["Frontend responsive", "HTML, CSS, JavaScript e React per layout che restano solidi e leggibili su ogni schermo."],
      ["WooCommerce & manutenzione", "Supporto WordPress, Elementor, Divi, piccoli e-commerce, correzioni e aggiornamenti pratici."],
      ["Domini, hosting & lancio", "Aiuto con DNS, dominio, hosting, test finali e le piccole cose tecniche che possono bloccare una pubblicazione."],
    ],
    projectsTitle: "Progetti",
    projectsSubtitle: "Una selezione del mio lavoro",
    projectsIntro: "Sei progetti reali, costruiti attorno al carattere e alle necessità di ogni attività.",
    filters: [["Tutti", "all"], ["Ristoranti", "restaurants"], ["Brand", "brands"], ["Eventi", "events"]],
    result: "Risultato",
    visit: "Visita il sito",
    contactTitle: "Contattami",
    contactSubtitle: "Lavoriamo insieme",
    contactIntro: "Raccontami la tua attività, cosa non funziona oggi e cosa vuoi ottenere. Ti rispondo con un primo consiglio pratico.",
    form: {
      name: "Nome",
      email: "Email",
      service: "Servizio",
      select: "Seleziona un servizio",
      services: ["Sito per ristorante o hotel", "Sito Framer", "Sito WordPress", "Landing page", "Manutenzione o correzioni", "Altro"],
      message: "Messaggio",
      messagePlaceholder: "Parlami della tua attività e del risultato che vuoi ottenere.",
      submit: "Prepara l’email",
      note: "Il pulsante apre la tua app email con il messaggio già compilato.",
      subject: "Richiesta progetto web",
    },
    email: "Email diretta",
    whatsapp: "Scrivimi su WhatsApp",
    whatsappMessage: "Ciao Dinal, vorrei parlare del sito web della mia attività. Il nome dell’attività è: ",
    footerCta: "Lavoriamo insieme —",
    footerEmail: "Inviami un’email",
    footerNote: "Web design pratico per attività vere.",
    profileAlt: "Dinal Randika, web designer e developer",
    backToTop: "Torna all’inizio",
  },
  en: {
    nav: [
      ["Home", "home"],
      ["About", "about"],
      ["Services", "services"],
      ["Projects", "projects"],
    ],
    contactNav: "Contact",
    primaryNavLabel: "Primary navigation",
    languageLabel: "Language selection",
    menuLabel: "Open or close navigation",
    heroRole: "Web Designer & Developer",
    heroStatement: "Your website can do more.",
    heroText: "I build practical, carefully designed Framer and WordPress websites for restaurants, hotels, bars, and service businesses in Italy.",
    start: "Start a project",
    workCta: "View selected work",
    proof: "Framer & WordPress · 6 live projects · available across Italy and remotely",
    scroll: "Explore my work",
    aboutTitle: "About me",
    aboutSubtitle: "Get to know me",
    aboutLead: "I’m Dinal, a web developer who would rather solve real problems than sell a perfect story.",
    aboutText: [
      "I have a software engineering background and moved into web work through real projects for businesses in Italy. Today I build mainly with Framer and WordPress, combining technical execution with an understanding of what the business actually needs.",
      "The practical work often means fixing a hard-to-find menu, a confusing booking flow, a form that breaks on mobile, a WhatsApp path, or a domain that needs configuring. That is exactly where I like to be useful.",
    ],
    aboutCta: "See what I’ve built",
    servicesTitle: "What I do",
    servicesSubtitle: "Practical services",
    services: [
      ["Framer & WordPress websites", "I design and build clear, fast, manageable websites, choosing the right tool for the project."],
      ["Restaurants & hospitality", "Pages for menus, rooms, offers, and events with simple paths to booking and contact."],
      ["Bookings, forms & WhatsApp", "I make the next step obvious: book, ask a question, or start a direct conversation."],
      ["Responsive frontend", "HTML, CSS, JavaScript, and React for layouts that stay solid and readable on every screen."],
      ["WooCommerce & maintenance", "WordPress, Elementor, Divi, small e-commerce, fixes, and practical ongoing updates."],
      ["Domains, hosting & launch", "Help with DNS, domains, hosting, final testing, and the technical details that can block a launch."],
    ],
    projectsTitle: "Projects",
    projectsSubtitle: "Some of my work",
    projectsIntro: "Six real projects, each built around the character and practical needs of the business.",
    filters: [["All", "all"], ["Restaurants", "restaurants"], ["Brands", "brands"], ["Events", "events"]],
    result: "Outcome",
    visit: "Visit website",
    contactTitle: "Get in touch",
    contactSubtitle: "Let’s work together",
    contactIntro: "Tell me about your business, what is not working today, and what you want to achieve. I will reply with a practical first recommendation.",
    form: {
      name: "Name",
      email: "Email",
      service: "Service",
      select: "Select a service",
      services: ["Restaurant or hotel website", "Framer website", "WordPress website", "Landing page", "Maintenance or fixes", "Other"],
      message: "Message",
      messagePlaceholder: "Tell me about your business and the result you want to achieve.",
      submit: "Prepare email",
      note: "This button opens your email app with the details already filled in.",
      subject: "Website project enquiry",
    },
    email: "Direct email",
    whatsapp: "Message me on WhatsApp",
    whatsappMessage: "Hi Dinal, I would like to discuss a website for my business. The business name is: ",
    footerCta: "Let’s work together —",
    footerEmail: "Send me an email",
    footerNote: "Practical web design for real businesses.",
    profileAlt: "Dinal Randika, web designer and developer",
    backToTop: "Back to top",
  },
};

const sectionIds = ["home", "about", "services", "projects", "contact"];

function Wordmark() {
  return <a className="wordmark" href="#home" aria-label="Dinal home">Dinal</a>;
}

function SectionHeading({ title, subtitle, id }) {
  return (
    <div className="section-heading reveal" data-reveal>
      <h2 id={id}>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

function ProjectCard({ project, index, lang, labels }) {
  return (
    <article className="project-card reveal" data-reveal style={{ "--reveal-delay": `${(index % 3) * 55}ms` }}>
      <a className="project-image" href={project.url} target="_blank" rel="noreferrer" aria-label={`${labels.visit}: ${project.name}`}>
        <img
          src={project.image}
          alt={project.alt[lang]}
          width="900"
          height="1200"
          sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1050px) 45vw, 29vw"
          loading="lazy"
          decoding="async"
        />
        <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
      </a>
      <div className="project-body">
        <div className="project-topline">
          <div>
            <p className="project-category">{project.category[lang]}</p>
            <h3>{project.name}</h3>
          </div>
          <a className="project-arrow" href={project.url} target="_blank" rel="noreferrer" aria-label={`${labels.visit}: ${project.name}`}>
            <ArrowUpRight size={19} />
          </a>
        </div>
        <p className="project-summary">{project.summary[lang]}</p>
        <p className="project-result"><span>{labels.result}</span>{project.result[lang]}</p>
        <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <a className="project-link" href={project.url} target="_blank" rel="noreferrer">{labels.visit}<ExternalLink size={15} /></a>
      </div>
    </article>
  );
}

export function App() {
  const [lang, setLang] = useState("it");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeFilter, setActiveFilter] = useState("all");
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const t = content[lang];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((project) => project.group === activeFilter);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === "it"
      ? "Dinal Randika — Web designer e developer in Italia"
      : "Dinal Randika — Web designer and developer in Italy";
  }, [lang]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== "Escape" || !menuOpen) return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: "-24% 0px -64% 0px", threshold: 0 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const hash = window.location.hash.slice(1);
    const target = hash ? document.getElementById(hash) : null;
    if (!target) return undefined;
    const frame = requestAnimationFrame(() => target.scrollIntoView({ block: "start", behavior: "auto" }));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]:not(.is-visible)");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [activeFilter]);

  useEffect(() => {
    const onScroll = () => setHeaderScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const whatsappHref = `https://wa.me/393393515742?text=${encodeURIComponent(t.whatsappMessage)}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `${t.form.name}: ${data.get("name")}`,
      `${t.form.email}: ${data.get("email")}`,
      `${t.form.service}: ${data.get("service")}`,
      "",
      `${t.form.message}:`,
      data.get("message"),
    ].join("\n");
    window.location.href = `mailto:dinalrandika@icloud.com?subject=${encodeURIComponent(t.form.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main>
      <header className={headerScrolled ? "site-header site-header--scrolled" : "site-header"}>
        <Wordmark />
        <nav id="site-navigation" className={menuOpen ? "nav nav--open" : "nav"} aria-label={t.primaryNavLabel}>
          {t.nav.map(([label, id]) => (
            <a key={id} href={`#${id}`} className={activeSection === id ? "active" : ""} aria-current={activeSection === id ? "page" : undefined} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-mobile-contact" href="#contact" onClick={closeMenu}>{t.contactNav}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label={t.languageLabel}>
            <button className={lang === "it" ? "active" : ""} aria-pressed={lang === "it"} onClick={() => { setLang("it"); closeMenu(); }}>IT</button>
            <button className={lang === "en" ? "active" : ""} aria-pressed={lang === "en"} onClick={() => { setLang("en"); closeMenu(); }}>EN</button>
          </div>
          <a className={activeSection === "contact" ? "header-contact active" : "header-contact"} href="#contact">{t.contactNav}</a>
          <button ref={menuButtonRef} className="menu-button" type="button" aria-label={t.menuLabel} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <section id="home" className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content section-shell">
          <div className="hero-portrait hero-enter hero-enter--1">
            <img src="/assets/dinal-profile.avif" alt={t.profileAlt} width="1086" height="1448" fetchPriority="high" />
          </div>
          <h1 id="hero-title" className="hero-name hero-enter hero-enter--2">Dinal Randika</h1>
          <p className="hero-role hero-enter hero-enter--3">{t.heroRole}</p>
          <p className="hero-copy hero-enter hero-enter--4"><strong>{t.heroStatement}</strong> {t.heroText}</p>
          <div className="hero-actions hero-enter hero-enter--5">
            <a className="button button--outline" href="#contact">{t.start}<ArrowRight size={17} /></a>
            <a className="text-button" href="#projects">{t.workCta}<ArrowDown size={16} /></a>
          </div>
          <p className="hero-proof hero-enter hero-enter--6">{t.proof}</p>
        </div>
        <a className="scroll-cue" href="#about"><span>{t.scroll}</span><ArrowDown size={16} /></a>
      </section>

      <section id="about" className="about section-shell" aria-labelledby="about-title">
        <SectionHeading id="about-title" title={t.aboutTitle} subtitle={t.aboutSubtitle} />
        <div className="about-copy reveal" data-reveal>
          <p className="about-lead">{t.aboutLead}</p>
          {t.aboutText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <a className="button button--outline" href="#projects">{t.aboutCta}<ArrowRight size={17} /></a>
        </div>
      </section>

      <section id="services" className="services section-shell" aria-labelledby="services-title">
        <SectionHeading id="services-title" title={t.servicesTitle} subtitle={t.servicesSubtitle} />
        <div className="service-grid">
          {t.services.map(([title, description], index) => {
            const Icon = serviceIcons[index];
            return (
              <article className="service-card reveal" data-reveal style={{ "--reveal-delay": `${(index % 3) * 55}ms` }} key={title}>
                <span className="service-icon"><Icon size={22} strokeWidth={1.8} /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="projects" className="projects section-shell" aria-labelledby="projects-title">
        <SectionHeading id="projects-title" title={t.projectsTitle} subtitle={t.projectsSubtitle} />
        <p className="projects-intro reveal" data-reveal>{t.projectsIntro}</p>
        <div className="project-filters reveal" data-reveal aria-label={t.projectsTitle}>
          {t.filters.map(([label, value]) => (
            <button key={value} type="button" className={activeFilter === value ? "active" : ""} aria-pressed={activeFilter === value} onClick={() => setActiveFilter(value)}>{label}</button>
          ))}
        </div>
        <div className="project-grid">
          {filteredProjects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} lang={lang} labels={t} />)}
        </div>
      </section>

      <section id="contact" className="contact section-shell" aria-labelledby="contact-title">
        <SectionHeading id="contact-title" title={t.contactTitle} subtitle={t.contactSubtitle} />
        <p className="contact-intro reveal" data-reveal>{t.contactIntro}</p>
        <div className="contact-layout">
          <form className="contact-form reveal" data-reveal onSubmit={handleSubmit}>
            <label htmlFor="name">{t.form.name}</label>
            <input id="name" name="name" type="text" autoComplete="name" required />
            <label htmlFor="email">{t.form.email}</label>
            <input id="email" name="email" type="email" autoComplete="email" required />
            <label htmlFor="service">{t.form.service}</label>
            <select id="service" name="service" defaultValue="" required>
              <option value="" disabled>{t.form.select}</option>
              {t.form.services.map((service) => <option key={service} value={service}>{service}</option>)}
            </select>
            <label htmlFor="message">{t.form.message}</label>
            <textarea id="message" name="message" rows="6" placeholder={t.form.messagePlaceholder} required />
            <button className="form-submit" type="submit">{t.form.submit}<ArrowUpRight size={18} /></button>
            <p className="form-note">{t.form.note}</p>
          </form>
          <aside className="contact-direct reveal" data-reveal>
            <p>{t.email}</p>
            <a href="mailto:dinalrandika@icloud.com"><Mail size={18} />dinalrandika@icloud.com</a>
            <p>WhatsApp</p>
            <a href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={18} />+39 339 351 5742</a>
            <p>LinkedIn</p>
            <a href="https://linkedin.com/in/dinal-randika-88038b219" target="_blank" rel="noreferrer"><BriefcaseBusiness size={18} />Dinal Randika</a>
            <a className="whatsapp-button" href={whatsappHref} target="_blank" rel="noreferrer">{t.whatsapp}<ArrowRight size={17} /></a>
          </aside>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-cta section-shell">
          <h2>{t.footerCta}</h2>
          <a href="mailto:dinalrandika@icloud.com">{t.footerEmail}<ArrowUpRight size={19} /></a>
        </div>
        <div className="footer-bottom section-shell">
          <Wordmark />
          <p>© {new Date().getFullYear()} Dinal Randika · {t.footerNote}</p>
          <div className="social-links">
            <a href="https://github.com/Dinalrandika" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={18} /></a>
            <a href="https://linkedin.com/in/dinal-randika-88038b219" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={18} /></a>
            <a href="#home" aria-label={t.backToTop}><ArrowUpRight size={18} /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
