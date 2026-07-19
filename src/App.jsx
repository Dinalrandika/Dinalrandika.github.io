import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarCheck2,
  CheckCircle2,
  ChevronDown,
  Code2,
  ExternalLink,
  Globe2,
  LayoutTemplate,
  Layers3,
  Menu,
  MonitorSmartphone,
  Rocket,
  Search,
  Send,
  ShoppingBag,
  Utensils,
  X,
} from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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
    role: { it: "Web design e sviluppo Framer", en: "Web design and Framer development" },
    contribution: {
      it: "Ho lavorato sulla struttura responsive, sulla gerarchia editoriale e sui percorsi di contatto dedicati ai due showroom.",
      en: "I worked on the responsive structure, editorial hierarchy, and contact paths for the two showrooms.",
    },
    lesson: {
      it: "Un’offerta ampia diventa più credibile quando contenuti e contatti sono organizzati attorno alle decisioni reali del visitatore.",
      en: "A broad offer becomes more credible when content and contact paths follow the visitor’s real decisions.",
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
    role: { it: "Web design e sviluppo Framer", en: "Web design and Framer development" },
    contribution: {
      it: "Ho organizzato pagine bilingue per ristorante, terrazza, matrimoni ed eventi, mantenendo prenotazione e richiesta informazioni sempre vicine.",
      en: "I organized bilingual pages for dining, the terrace, weddings, and events while keeping booking and enquiries close at hand.",
    },
    lesson: {
      it: "Nell’hospitality la fotografia crea desiderio, ma una prenotazione evidente trasforma quell’interesse in un passo concreto.",
      en: "In hospitality, photography creates desire, but an obvious booking path turns that interest into action.",
    },
    tags: ["Framer", "IT / EN", "Booking"],
  },
  {
    name: "Piserchia Eventi",
    url: "https://piserchiaeventi.com/",
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
    role: { it: "Web design e sviluppo Framer", en: "Web design and Framer development" },
    contribution: {
      it: "Ho tradotto il tono personale della planner in una gerarchia elegante, pagine responsive e un percorso verso la consulenza.",
      en: "I translated the planner’s personal tone into an elegant hierarchy, responsive pages, and a clear path to consultation.",
    },
    lesson: {
      it: "Per un servizio molto personale, il sito deve costruire fiducia prima di chiedere un contatto.",
      en: "For a highly personal service, the website needs to build trust before asking for contact.",
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
    role: { it: "Web design e sviluppo Framer", en: "Web design and Framer development" },
    contribution: {
      it: "Ho riunito storia, cucina, informazioni pratiche e prenotazione in un’esperienza leggibile anche per chi visita Firenze.",
      en: "I brought the story, food, practical information, and reservations into one experience for visitors to Florence.",
    },
    lesson: {
      it: "La storia di un ristorante funziona meglio quando resta collegata alle informazioni che servono per scegliere e prenotare.",
      en: "A restaurant’s story works best when it stays connected to the information people need to choose and book.",
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
    role: { it: "Direzione web e sviluppo Framer", en: "Web direction and Framer development" },
    contribution: {
      it: "Ho costruito una direzione visiva contemporanea con navigazione bilingue e accessi chiari a produzione, catalogo e contatti.",
      en: "I built a contemporary visual direction with bilingual navigation and clear access to production, catalogue, and contact information.",
    },
    lesson: {
      it: "Un’identità forte deve comunque aiutare il visitatore a capire rapidamente prodotti, capacità e prossimo passo.",
      en: "A strong identity still needs to help visitors quickly understand the products, capabilities, and next step.",
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
    role: { it: "Web design e sviluppo Framer", en: "Web design and Framer development" },
    contribution: {
      it: "Ho organizzato offerte, menu, eventi e prenotazione attorno all’energia del locale e a percorsi rapidi da mobile.",
      en: "I organized offers, menus, events, and booking around the venue’s energy and fast mobile paths.",
    },
    lesson: {
      it: "I contenuti che cambiano spesso hanno bisogno di una struttura semplice, altrimenti offerte ed eventi diventano difficili da trovare.",
      en: "Frequently changing content needs a simple structure, or offers and events quickly become hard to find.",
    },
    tags: ["Framer", "Offers", "Booking"],
  },
];

const serviceIcons = [Layers3, Utensils, CalendarCheck2, MonitorSmartphone, ShoppingBag, Globe2];
const processIcons = [Search, LayoutTemplate, Code2, Rocket];
const formEndpoint = "https://formsubmit.co/ajax/dinalrandika@icloud.com";
const formAction = "https://formsubmit.co/dinalrandika@icloud.com";
const productionContactUrl = "https://dinalrandika.github.io/#contact";

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
    processTitle: "Come lavoro",
    processSubtitle: "Un percorso concreto",
    processIntro: "Parto dall’attività e dalle decisioni che il sito deve rendere più semplici. Il design arriva dopo una struttura chiara.",
    process: [
      ["Capire l’attività", "Obiettivi, pubblico, contenuti disponibili e problemi reali: prenotazioni, menu, richieste o vendite."],
      ["Progettare il percorso", "Organizzo pagine, priorità e call to action prima di definire la direzione visiva."],
      ["Costruire e testare", "Sviluppo pagine responsive, provo moduli e contatti e controllo il comportamento sui dispositivi reali."],
      ["Pubblicare e supportare", "Gestisco gli ultimi dettagli tecnici, il lancio e le correzioni pratiche che emergono dopo la pubblicazione."],
    ],
    projectsTitle: "Progetti",
    projectsSubtitle: "Una selezione del mio lavoro",
    projectsIntro: "Sei progetti reali, costruiti attorno al carattere e alle necessità di ogni attività.",
    filters: [["Tutti", "all"], ["Ristoranti", "restaurants"], ["Brand", "brands"], ["Eventi", "events"]],
    result: "Risultato",
    projectDetails: "Il mio contributo",
    role: "Ruolo",
    contribution: "Cosa ho realizzato",
    learned: "Cosa ho imparato",
    visit: "Visita il sito",
    externalNote: "Si apre in una nuova scheda",
    conceptsTitle: "Concept lab",
    conceptsSubtitle: "Direzioni demo per l’hospitality",
    conceptsIntro: "Tre idee che sto sviluppando per mostrare a ristoranti, hotel e bar una prima direzione visiva prima di parlare di un progetto completo. Sono concept demo, non lavori cliente.",
    conceptStatus: "Concept demo · in sviluppo",
    concepts: [
      ["Ristorante indipendente", "Dal menu alla prenotazione", "Una direzione mobile-first che rende cucina, menu, orari e prenotazione immediatamente accessibili.", ["Menu leggibile", "Prenotazione diretta", "Contatto WhatsApp"]],
      ["Boutique hotel", "Dalla camera alla richiesta", "Un’esperienza editoriale per presentare camere, atmosfera, offerte stagionali e richiesta di soggiorno diretto.", ["Camere e servizi", "Offerte stagionali", "Richiesta diretta"]],
      ["Cocktail bar", "Una serata, prima di arrivare", "Un concept più energico per cocktail, eventi, orari e indicazioni, pensato soprattutto per il traffico mobile serale.", ["Drink menu", "Eventi", "Mappa e contatto"]],
    ],
    conceptCta: "Parliamo di una demo per la tua attività",
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
      submit: "Invia la richiesta",
      submitting: "Invio in corso",
      success: "Messaggio inviato. Ti risponderò appena possibile.",
      error: "Non sono riuscito a inviare il messaggio. Usa l’email diretta o WhatsApp.",
      note: "Il messaggio viene consegnato via email senza aprire un’altra applicazione.",
      privacy: "La richiesta viene elaborata tramite FormSubmit esclusivamente per consegnarla alla mia email.",
      subject: "Richiesta progetto web",
    },
    email: "Email diretta",
    whatsapp: "Apri WhatsApp",
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
    processTitle: "How I work",
    processSubtitle: "A practical path",
    processIntro: "I start with the business and the decisions the website needs to make easier. The visual direction comes after the structure is clear.",
    process: [
      ["Understand the business", "Goals, audience, available content, and the real problem: bookings, menus, enquiries, or sales."],
      ["Plan the journey", "I organize pages, priorities, and calls to action before defining the visual direction."],
      ["Build and test", "I develop responsive pages, test forms and contact paths, and check behaviour on real screen sizes."],
      ["Launch and support", "I handle the final technical details, publication, and the practical corrections that appear after launch."],
    ],
    projectsTitle: "Projects",
    projectsSubtitle: "Some of my work",
    projectsIntro: "Six real projects, each built around the character and practical needs of the business.",
    filters: [["All", "all"], ["Restaurants", "restaurants"], ["Brands", "brands"], ["Events", "events"]],
    result: "Outcome",
    projectDetails: "My contribution",
    role: "Role",
    contribution: "What I built",
    learned: "What I learned",
    visit: "Visit website",
    externalNote: "Opens in a new tab",
    conceptsTitle: "Concept lab",
    conceptsSubtitle: "Demo directions for hospitality",
    conceptsIntro: "Three ideas I am developing to show restaurants, hotels, and bars an initial visual direction before discussing a complete project. These are demo concepts, not client work.",
    conceptStatus: "Demo concept · in progress",
    concepts: [
      ["Independent restaurant", "From menu to booking", "A mobile-first direction that keeps the food, menu, opening hours, and reservation path immediately accessible.", ["Readable menu", "Direct booking", "WhatsApp contact"]],
      ["Boutique hotel", "From room to enquiry", "An editorial experience for rooms, atmosphere, seasonal offers, and direct stay enquiries.", ["Rooms and services", "Seasonal offers", "Direct enquiry"]],
      ["Cocktail bar", "The night starts before arrival", "A more energetic concept for drinks, events, opening hours, and directions, designed around evening mobile traffic.", ["Drinks menu", "Events", "Map and contact"]],
    ],
    conceptCta: "Discuss a demo for your business",
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
      submit: "Send enquiry",
      submitting: "Sending",
      success: "Message sent. I will reply as soon as possible.",
      error: "I could not send the message. Please use direct email or WhatsApp.",
      note: "Your message is delivered by email without opening another application.",
      privacy: "The enquiry is processed through FormSubmit solely to deliver it to my email.",
      subject: "Website project enquiry",
    },
    email: "Direct email",
    whatsapp: "Open WhatsApp",
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
  return (
    <a className="wordmark" href="#home" aria-label="Dinal home">
      <span className="wordmark__art" aria-hidden="true" />
    </a>
  );
}

function RollLabel({ children }) {
  return (
    <span className="roll-label">
      <span className="roll-label-stack">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
    </span>
  );
}

const brandIconPaths = {
  github: "/assets/icon-github.svg",
  linkedin: "/assets/icon-linkedin.svg",
  mail: "/assets/icon-mail.svg",
  whatsapp: "/assets/icon-whatsapp.svg",
};

function BrandIcon({ name, className = "" }) {
  return <img className={`brand-icon brand-icon--${name} ${className}`.trim()} src={brandIconPaths[name]} alt="" aria-hidden="true" width="20" height="20" />;
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
      <div className="project-image">
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
      </div>
      <div className="project-body">
        <div className="project-topline">
          <div>
            <p className="project-category">{project.category[lang]}</p>
            <h3>{project.name}</h3>
          </div>
          <span className="project-arrow" aria-hidden="true">
            <ArrowUpRight size={19} />
          </span>
        </div>
        <p className="project-summary">{project.summary[lang]}</p>
        <p className="project-result"><span>{labels.result}</span>{project.result[lang]}</p>
        <details className="project-details">
          <summary>
            <span>{labels.projectDetails}</span>
            <ChevronDown size={17} aria-hidden="true" />
          </summary>
          <div className="project-details__content">
            <p><span>{labels.role}</span>{project.role[lang]}</p>
            <p><span>{labels.contribution}</span>{project.contribution[lang]}</p>
            <p><span>{labels.learned}</span>{project.lesson[lang]}</p>
          </div>
        </details>
        <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <a className="project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`${labels.visit}: ${project.name}. ${labels.externalNote}`}>
          {labels.visit}<ExternalLink size={15} />
          <span className="sr-only">{labels.externalNote}</span>
        </a>
      </div>
    </article>
  );
}

function ConceptCard({ concept, index, labels }) {
  const [type, title, description, points] = concept;

  return (
    <article className={`concept-card concept-card--${index + 1} reveal`} data-reveal style={{ "--reveal-delay": `${index * 65}ms` }}>
      <div className="concept-visual" aria-hidden="true">
        <span className="concept-visual__bar" />
        <span className="concept-visual__headline" />
        <span className="concept-visual__copy" />
        <span className="concept-visual__action" />
        <span className="concept-visual__media" />
      </div>
      <div className="concept-card__body">
        <p className="concept-status">{labels.conceptStatus}</p>
        <p className="concept-type">{type}</p>
        <h3>{title}</h3>
        <p className="concept-description">{description}</p>
        <ul>{points.map((point) => <li key={point}><CheckCircle2 size={15} />{point}</li>)}</ul>
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
  const [formStatus, setFormStatus] = useState("idle");
  const menuButtonRef = useRef(null);
  const heroRef = useRef(null);
  const heroAmbientRef = useRef(null);
  const heroGlowRef = useRef(null);
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

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const target = hash ? document.getElementById(hash) : null;
    if (!target) return undefined;
    const timer = window.setTimeout(() => {
      target.scrollIntoView({ block: "start", behavior: "instant" });
    }, 80);
    return () => window.clearTimeout(timer);
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
  }, [activeFilter, lang]);

  useEffect(() => {
    const onScroll = () => setHeaderScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(() => {
    const hero = heroRef.current;
    const ambient = heroAmbientRef.current;
    const glow = heroGlowRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const precisePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!hero || !ambient || !glow || reduceMotion || !precisePointer) return undefined;

    let bounds = hero.getBoundingClientRect();
    const updateBounds = () => { bounds = hero.getBoundingClientRect(); };
    const moveX = gsap.quickTo(glow, "x", { duration: 0.62, ease: "power3.out" });
    const moveY = gsap.quickTo(glow, "y", { duration: 0.62, ease: "power3.out" });
    const fade = gsap.quickTo(glow, "opacity", { duration: 0.36, ease: "power2.out" });

    gsap.set(glow, {
      x: bounds.width * 0.5,
      y: Math.min(bounds.height * 0.4, 390),
      xPercent: -50,
      yPercent: -50,
      opacity: 0.56,
    });

    const onPointerEnter = () => {
      updateBounds();
      fade(0.82);
    };
    const onPointerMove = (event) => {
      moveX(event.clientX - bounds.left);
      moveY(event.clientY - bounds.top);
    };
    const onPointerLeave = () => fade(0.42);

    hero.addEventListener("pointerenter", onPointerEnter);
    hero.addEventListener("pointermove", onPointerMove, { passive: true });
    hero.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("resize", updateBounds, { passive: true });

    gsap.to(ambient, {
      yPercent: 7,
      opacity: 0.62,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 0.65,
      },
    });

    return () => {
      hero.removeEventListener("pointerenter", onPointerEnter);
      hero.removeEventListener("pointermove", onPointerMove);
      hero.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", updateBounds);
    };
  }, { scope: heroRef });

  const closeMenu = () => setMenuOpen(false);
  const whatsappHref = `https://wa.me/393393515742?text=${encodeURIComponent(t.whatsappMessage)}`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("_honey")) return;

    setFormStatus("submitting");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          service: data.get("service"),
          message: data.get("message"),
          _subject: t.form.subject,
          _template: "table",
          _url: productionContactUrl,
          _next: productionContactUrl,
        }),
      });

      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <main className="portfolio-page">
      <header className={headerScrolled ? "site-header site-header--scrolled" : "site-header"}>
        <Wordmark />
        <nav id="site-navigation" className={menuOpen ? "nav nav--open" : "nav"} aria-label={t.primaryNavLabel}>
          {t.nav.map(([label, id]) => (
            <a key={id} href={`#${id}`} className={activeSection === id ? "active" : ""} aria-current={activeSection === id ? "location" : undefined} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-mobile-contact" href="#contact" onClick={closeMenu}>{t.contactNav}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label={t.languageLabel}>
            <span className={lang === "en" ? "language-indicator language-indicator--en" : "language-indicator"} aria-hidden="true" />
            <button className={lang === "it" ? "active" : ""} aria-pressed={lang === "it"} onClick={() => { setLang("it"); closeMenu(); }}>IT</button>
            <button className={lang === "en" ? "active" : ""} aria-pressed={lang === "en"} onClick={() => { setLang("en"); closeMenu(); }}>EN</button>
          </div>
          <a className={activeSection === "contact" ? "header-contact motion-cta active" : "header-contact motion-cta"} href="#contact"><RollLabel>{t.contactNav}</RollLabel></a>
          <button ref={menuButtonRef} className="menu-button" type="button" aria-label={t.menuLabel} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <section ref={heroRef} id="home" className="hero" aria-labelledby="hero-title">
        <div ref={heroAmbientRef} className="hero-pointer-ambient" aria-hidden="true">
          <span ref={heroGlowRef} className="hero-pointer-ambient__glow" />
          <span className="hero-pointer-ambient__wash" />
        </div>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content section-shell">
          <div className="hero-portrait hero-enter hero-enter--1">
            <img src="/assets/dinal-profile.avif" alt={t.profileAlt} width="1086" height="1448" fetchPriority="high" />
          </div>
          <p className="hero-name hero-enter hero-enter--2">Dinal Randika</p>
          <h1 id="hero-title" className="hero-statement hero-enter hero-enter--3">{t.heroStatement}</h1>
          <p className="hero-role hero-enter hero-enter--4">{t.heroRole}</p>
          <p className="hero-copy hero-enter hero-enter--5">{t.heroText}</p>
          <div className="hero-actions hero-enter hero-enter--6">
            <a className="button button--outline motion-cta" href="#contact"><RollLabel>{t.start}</RollLabel><ArrowRight size={17} /></a>
            <a className="text-button motion-cta motion-cta--down" href="#projects"><RollLabel>{t.workCta}</RollLabel><ArrowDown size={16} /></a>
          </div>
          <p className="hero-proof hero-enter hero-enter--7">{t.proof}</p>
        </div>
        <a className="scroll-cue" href="#about"><span>{t.scroll}</span><ArrowDown size={16} /></a>
      </section>

      <section id="about" className="about section-shell" aria-labelledby="about-title">
        <SectionHeading id="about-title" title={t.aboutTitle} subtitle={t.aboutSubtitle} />
        <div className="about-copy reveal" data-reveal>
          <p className="about-lead">{t.aboutLead}</p>
          {t.aboutText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <a className="button button--outline motion-cta" href="#projects"><RollLabel>{t.aboutCta}</RollLabel><ArrowRight size={17} /></a>
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

      <section id="process" className="process section-shell" aria-labelledby="process-title">
        <SectionHeading id="process-title" title={t.processTitle} subtitle={t.processSubtitle} />
        <p className="process-intro reveal" data-reveal>{t.processIntro}</p>
        <div className="process-accordion">
          {t.process.map(([title, description], index) => {
            const Icon = processIcons[index];
            return (
              <article className="process-step reveal" data-reveal style={{ "--reveal-delay": `${index * 55}ms` }} key={title}>
                <span className="process-icon" aria-hidden="true"><Icon size={21} strokeWidth={1.8} /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
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
          {filteredProjects.map((project, index) => <ProjectCard key={`${activeFilter}-${project.name}`} project={project} index={index} lang={lang} labels={t} />)}
        </div>
      </section>

      <section id="concepts" className="concepts section-shell" aria-labelledby="concepts-title">
        <SectionHeading id="concepts-title" title={t.conceptsTitle} subtitle={t.conceptsSubtitle} />
        <p className="concepts-intro reveal" data-reveal>{t.conceptsIntro}</p>
        <div className="concept-grid">
          {t.concepts.map((concept, index) => <ConceptCard key={concept[0]} concept={concept} index={index} labels={t} />)}
        </div>
        <a className="button button--outline motion-cta concepts-cta reveal" data-reveal href="#contact"><RollLabel>{t.conceptCta}</RollLabel><ArrowRight size={17} /></a>
      </section>

      <section id="contact" className="contact section-shell" aria-labelledby="contact-title">
        <SectionHeading id="contact-title" title={t.contactTitle} subtitle={t.contactSubtitle} />
        <p className="contact-intro reveal" data-reveal>{t.contactIntro}</p>
        <div className="contact-layout">
          <form className="contact-form reveal" data-reveal action={formAction} method="POST" onSubmit={handleSubmit} aria-busy={formStatus === "submitting"}>
            <input className="honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />
            <input type="hidden" name="_subject" value={t.form.subject} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_url" value={productionContactUrl} />
            <input type="hidden" name="_next" value={productionContactUrl} />
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
            <button className="form-submit motion-cta motion-cta--diagonal" type="submit" disabled={formStatus === "submitting"}>
              <RollLabel>{formStatus === "submitting" ? t.form.submitting : t.form.submit}</RollLabel><Send size={18} />
            </button>
            <p className="form-note">{t.form.note}</p>
            <p className="form-privacy">{t.form.privacy}</p>
            {formStatus !== "idle" && formStatus !== "submitting" && (
              <p className={`form-status form-status--${formStatus}`} role="status" aria-live="polite">
                {formStatus === "success" ? t.form.success : t.form.error}
              </p>
            )}
          </form>
          <aside className="contact-direct reveal" data-reveal>
            <p>{t.email}</p>
            <a href="mailto:dinalrandika@icloud.com"><BrandIcon name="mail" />dinalrandika@icloud.com</a>
            <p>WhatsApp</p>
            <a href={whatsappHref} target="_blank" rel="noreferrer"><BrandIcon name="whatsapp" />+39 339 351 5742</a>
            <p>LinkedIn</p>
            <a href="https://linkedin.com/in/dinal-randika-88038b219" target="_blank" rel="noreferrer"><BrandIcon name="linkedin" />Dinal Randika</a>
            <a className="whatsapp-button motion-cta" href={whatsappHref} target="_blank" rel="noreferrer"><BrandIcon name="whatsapp" /><RollLabel>{t.whatsapp}</RollLabel><ArrowRight size={17} /></a>
          </aside>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-cta section-shell">
          <h2>{t.footerCta}</h2>
          <a className="motion-cta motion-cta--diagonal" href="mailto:dinalrandika@icloud.com"><BrandIcon name="mail" /><RollLabel>{t.footerEmail}</RollLabel><ArrowUpRight size={19} /></a>
        </div>
        <div className="footer-bottom section-shell">
          <Wordmark />
          <p>© {new Date().getFullYear()} Dinal Randika · {t.footerNote}</p>
          <div className="social-links">
            <a href="https://github.com/Dinalrandika" target="_blank" rel="noreferrer" aria-label="GitHub"><BrandIcon name="github" /></a>
            <a href="https://linkedin.com/in/dinal-randika-88038b219" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BrandIcon name="linkedin" /></a>
            <a href="#home" aria-label={t.backToTop}><ArrowUpRight size={18} /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
