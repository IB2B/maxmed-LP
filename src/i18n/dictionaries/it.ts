import type { Dictionary } from "./en";

/** Italian copy. Same shape as `en.ts`. */
export const it: Dictionary = {
  meta: {
    title: "MaxMed Telemedicina — Un medico in video, accanto a ogni paziente",
    description:
      "Collega la tua struttura a una rete di medici in video. Triage per codice colore, coda pazienti gestita, prescrizioni digitali e allerte di emergenza in tempo reale.",
  },

  common: {
    bookDemo: "Prenota una demo",
    joinDoctor: "Diventa medico MaxMed",
    logIn: "Accedi",
    home: "MaxMed, home",
    openMenu: "Apri il menu",
    language: "Lingua",
  },

  nav: [
    { label: "Piattaforma", hash: "platform" },
    { label: "Come funziona", hash: "how-it-works" },
    { label: "Per i medici", hash: "doctors" },
    { label: "FAQ", hash: "faq" },
  ],

  hero: {
    title: [
      { text: "Medici,", icon: "doctors" },
      { text: "pazienti", icon: "patients" },
      { text: "e" },
      { text: "visite,", icon: "visits" },
      { text: "tutto in un" },
      { text: "unico", icon: "one" },
      { text: "posto." },
    ],
    intro:
      "MaxMed collega la tua struttura a una rete di medici. Assegna ai pazienti un codice di priorità, prenota televisite e segnala le emergenze in tempo reale.",
    watch: "Guarda",
    watchText: "Scopri come funziona MaxMed, dal triage alla televisita.",
    seeFeatures: "Vedi le funzioni",
    videoTitle: "MaxMed, piattaforma di telemedicina per le strutture sanitarie",
  },

  video: {
    region: "Video",
    play: "Riproduci",
    pause: "Pausa",
    playVideo: "Riproduci il video",
    watchWalkthrough: "Guarda la presentazione",
    floating: "In riproduzione nell'angolo. Clicca per riportarlo qui.",
    backToVideo: "Torna al video",
    closeMini: "Chiudi il mini player",
    seek: "Avanzamento",
    mute: "Disattiva audio",
    unmute: "Attiva audio",
    volume: "Volume",
    fullScreen: "Schermo intero",
    exitFullScreen: "Esci da schermo intero",
  },

  features: {
    eyebrow: "Un'unica console",
    title: "Gestisci la tua struttura da un unico posto",
    subtitle: "Pazienti, medici ed emergenze fianco a fianco, su un solo schermo.",
    replay: "Rivedi",
    items: [
      {
        title: "Televisite in diretta",
        description:
          "Avvia una visita dalla scheda del paziente. Un medico si collega in video e lo stato si aggiorna in tempo reale per entrambi.",
      },
      {
        title: "Triage per codice colore",
        description:
          "I codici rosso, giallo e verde tengono in cima i pazienti più urgenti. I pazienti in attesa vengono assegnati ai medici disponibili.",
      },
      {
        title: "Emergenze in tempo reale",
        description:
          "Un solo tocco avvisa subito un medico. Ogni emergenza si chiude con le note del medico e la registrazione della chiamata viene conservata.",
      },
      {
        title: "Prescrizioni digitali",
        description:
          "Il medico emette la prescrizione durante la visita, collegata al paziente. Le consegne in sospeso sono evidenziate per il tuo team.",
      },
      {
        title: "Prenota in base alla disponibilità",
        description:
          "Un unico calendario per tutte le visite, con la disponibilità dei medici visibile prima di prenotare. I turni dei medici sono registrati in automatico.",
      },
      {
        title: "Registrati e firma online",
        description:
          "Firma il contratto con un codice monouso via SMS o email. Fatture, abbonamento e report mensili sono tutti in un unico posto.",
      },
    ],
  },

  mock: {
    consultation: "Visita",
    generalMedicine: "Medicina generale",
    doctorJoined: "Il medico si è collegato",
    patientQueue: "Coda pazienti",
    waiting: "in attesa",
    patient: "Paziente",
    reason: "Motivo",
    wait: "Attesa",
    chestPain: "Dolore toracico",
    highFever: "Febbre alta",
    followUp: "Controllo",
    skinRash: "Eruzione cutanea",
    assigned: "Assegnato",
    emergency: "Emergenza",
    redCode: "Codice rosso",
    timeline: [
      "Emergenza segnalata dall'operatore",
      "Dr. Bianchi avvisato",
      "Il medico si è collegato",
      "Risolta, note allegate",
    ],
    prescription: "Prescrizione",
    pendingDelivery: "Consegna in sospeso",
    draft: "Bozza",
    doses: ["1 cpr · 3 al giorno · 5 giorni", "1 cps · 1 al giorno · 14 giorni"],
    addMedicine: "Aggiungi farmaco",
    signedAt: "Firmata alle",
    send: "Invia",
    sent: "Inviata",
    sign: "Firma",
    month: "Settembre 2026",
    week: "Settimana",
    days: ["Lun 28", "Mar 29", "Mer 30", "Gio 1", "Ven 2"],
    triage: "Triage",
    doctorFree: "Bianchi libero",
    videoVisit: "Televisita",
    newVisit: "Nuova visita",
    visitTime: "Gio 1 · 11:00 – 12:00",
    book: "Prenota",
    serviceContract: "Contratto di servizio",
    codeSentTo: "Codice inviato via SMS al",
    contractSigned: "Contratto firmato",
    verified: "Verificato",
    requestAccess: "Richiedi l'accesso",
    inReview: "In revisione",
    facility: "Struttura",
    city: "Città",
    sendRequest: "Invia richiesta",
    codeBySms: "Codice inviato via SMS",
    signed: "Firmato",
    firstPatient: "Primo paziente",
    startConsultation: "Avvia la visita",
    drJoined: "Dr. Bianchi collegato",
    live: "In diretta",
    shiftInProgress: "Turno in corso",
    hoursTracked: "Ore registrate in automatico",
    offShift: "Fuori turno",
    ready: "Pronto quando vuoi",
    startShift: "Inizia il turno",
    paymentReports: "Report pagamenti",
    reportMonths: ["Settembre 2026", "Agosto 2026", "Luglio 2026"],
    processing: "In elaborazione",
    paid: "Pagato",
    consultations: "visite",
    emergencies: "emergenze",
    shifts: "turni",
    payoutMethod: "Metodo di pagamento",
    bankTransfer: "Bonifico",
    reportDownloaded: "Report di agosto scaricato",
  },

  screens: {
    eyebrow: "Dentro MaxMed",
    title: "La vera console, schermata per schermata",
    subtitle: "Quello che operatori e medici vedono ogni giorno.",
    counter: "{current} di {total}",
    previous: "Schermata precedente",
    next: "Schermata successiva",
    items: [
      {
        tab: "Pazienti",
        title: "Tutti i pazienti, in un'unica lista",
        description: "Per ogni paziente vedi codice colore, stato, età e l'operatore che l'ha registrato. Avvii una videochiamata o una prescrizione con un clic.",
        alt: "Lista pazienti di MaxMed con codici colore e pulsanti per videochiamata, prescrizione e dettagli",
      },
      {
        tab: "Notifiche",
        title: "Nessun nuovo paziente passa inosservato",
        description: "Quando un paziente viene assegnato, il medico riceve subito un avviso con allarme sonoro.",
        alt: "Notifica MaxMed che avvisa il medico dell'assegnazione di un nuovo paziente",
      },
      {
        tab: "Coda",
        title: "Una coda che si gestisce da sola",
        description: "Le visite programmate in ordine di orario, con la posizione di ogni paziente e il ritardo stimato.",
        alt: "Coda programmata di MaxMed con stato, posizione e ritardo stimato",
      },
      {
        tab: "Visite",
        title: "Ogni visita, archiviata",
        description: "Filtra per stato o data, vedi chi ha richiesto ogni visita e scrivi la prescrizione dalla stessa scheda.",
        alt: "Elenco visite di MaxMed con filtri per stato e data",
      },
      {
        tab: "Calendario",
        title: "Il mese a colpo d'occhio",
        description: "Visite ed emergenze in un unico calendario, colorate per stato, per mese, settimana, giorno o agenda.",
        alt: "Calendario visite di MaxMed in vista mensile con stati colorati",
      },
      {
        tab: "Prescrizioni",
        title: "Prescrizioni firmate con OTP",
        description: "Visualizza, scarica o modifica ogni prescrizione, poi firmala con un codice monouso.",
        alt: "Elenco prescrizioni di MaxMed con azioni visualizza, scarica, modifica e firma con OTP",
      },
      {
        tab: "Per i medici",
        title: "Una dashboard per ogni medico",
        description: "Il medico inizia il turno con un clic e ogni minuto viene registrato per il compenso mensile.",
        alt: "Dashboard medico di MaxMed con timer del turno e ore lavorate oggi e nel mese",
      },
    ],
  },

  details: {
    eyebrow: "I dettagli",
    title: "Altre funzioni che il tuo team userà ogni giorno",
    items: [
      { title: "Inventario delle apparecchiature", description: "Tieni traccia di ogni dispositivo in struttura, con le statistiche di utilizzo." },
      { title: "Competenze del team", description: "Ogni operatore indica le proprie competenze, così ogni paziente va alla persona giusta." },
      { title: "Messaggi con i medici", description: "Scrivi al medico prima o dopo una visita." },
      { title: "Corsi di formazione", description: "Corsi per gli operatori, con presenze e avanzamento registrati lezione per lezione." },
      { title: "Registrazione rapida dei pazienti", description: "Registra un nuovo paziente direttamente dalla dashboard, con un solo modulo." },
      { title: "Onboarding guidato", description: "Il nostro team esamina la tua richiesta, poi un tour guidato ti mostra la console." },
      { title: "Report mensili", description: "Visite e prescrizioni del mese, pronte da scaricare." },
      { title: "Fatture in un unico posto", description: "Fatture di abbonamento e servizi, da consultare o scaricare quando vuoi." },
      { title: "Coupon e borse di studio", description: "Codici sconto sugli abbonamenti e borse di studio che riducono il costo dei corsi." },
      { title: "Pensata per i team italiani", description: "Tutta la console è in italiano, dalle schede pazienti alle fatture." },
    ],
    ctaTitle: "Guardala all'opera con i tuoi pazienti.",
    ctaText: "Mostriamo al tuo team la console operatore, passo dopo passo.",
  },

  how: {
    eyebrow: "Come funziona",
    title: "Operativi in tre passaggi",
    subtitle: "Dalla prima richiesta alla prima televisita.",
    steps: [
      {
        title: "Richiedi l'accesso",
        description: "Raccontaci della tua struttura con un breve modulo. Il nostro team esamina ogni richiesta e ti ricontatta.",
      },
      {
        title: "Firma il contratto online",
        description: "Leggi il contratto e confermalo con un codice monouso via SMS o email. Niente carta, niente appuntamenti.",
      },
      {
        title: "Avvia la prima visita",
        description: "Registra un paziente, assegnagli un codice di priorità e collega un medico in video, direttamente dalla console.",
      },
    ],
  },

  network: {
    eyebrow: "In tutta Italia",
    titleData: "Un'unica rete, dalle Alpi alla Sicilia",
    titleFacts: "Telemedicina per le strutture sanitarie di tutta Italia",
    subtitleData: "Strutture e medici di tutta Italia lavorano già insieme su MaxMed.",
    subtitleFacts: "MaxMed è online: qualsiasi struttura in Italia può portare un medico ai suoi pazienti in video.",
    stats: ["Strutture collegate", "Medici sulla piattaforma", "Televisite"],
    cities: "Città con strutture MaxMed",
    facilities: "strutture",
    mapLabel: "Mappa dell'Italia",
    mapLabelData: "Mappa dell'Italia con strutture MaxMed in {count} città",
    facts: [
      { title: "Pensata per le strutture", text: "Gli operatori registrano i pazienti e collegano un medico da un'unica console." },
      { title: "Medici in video", text: "I medici indicano la loro disponibilità e si collegano alle visite ovunque si trovino." },
      { title: "Tutto in tempo reale", text: "Televisite, triage ed emergenze, in diretta per entrambe le parti." },
      { title: "In italiano", text: "Tutta la console è in italiano, dalle schede pazienti alle fatture." },
    ],
  },

  testimonials: {
    eyebrow: "Le loro parole",
    title: "Cosa dicono i team di cura di MaxMed",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Domande frequenti",
    anythingElse: "Hai altre domande?",
    andAsk: "e chiedicelo.",
    items: [
      {
        q: "Cosa serve per iniziare?",
        a: "Inviaci una richiesta con qualche informazione sulla tua struttura. Il nostro team la esamina, poi firmi il contratto online con un codice monouso inviato via SMS o email. Una volta firmato, i tuoi operatori possono accedere e registrare i pazienti.",
      },
      {
        q: "Chi sono i medici e come si collegano alle visite?",
        a: "I medici di MaxMed indicano la loro disponibilità sulla piattaforma. Quando avvii una visita, il paziente entra in coda, viene assegnato a un medico disponibile che si collega in video. Ogni medico vede i pazienti che gli sono assegnati e lo storico delle sue visite.",
      },
      {
        q: "Cosa succede in caso di emergenza?",
        a: "L'operatore segnala l'emergenza dalla console con un solo tocco. L'emergenza viene classificata per priorità, un medico viene avvisato subito e resta aperta finché il medico non la risolve con le sue note. Le registrazioni delle chiamate vengono conservate, così puoi riascoltarle in seguito.",
      },
      {
        q: "Come funzionano le prescrizioni?",
        a: "Il medico emette la prescrizione durante la visita. È collegata al paziente e compare nel tuo elenco prescrizioni, con le consegne in sospeso evidenziate. Puoi anche scaricare un report mensile delle prescrizioni.",
      },
      {
        q: "Come funziona la fatturazione?",
        a: "La tua struttura paga un abbonamento. Fatture e stato dell'abbonamento sono raccolti in un unico posto nella console, da consultare o scaricare in qualsiasi momento. Agli abbonamenti si possono applicare coupon di sconto.",
      },
      {
        q: "Possiamo seguire l'attività del nostro team?",
        a: "Sì. La console include statistiche filtrabili per data, un calendario con tutte le visite e un conteggio mensile delle visite per paziente, scaricabile.",
      },
      {
        q: "Offrite formazione per il personale?",
        a: "Sì. MaxMed organizza corsi di formazione per gli operatori, con presenze e avanzamento registrati lezione per lezione. Sono disponibili borse di studio per ridurre il costo dei corsi.",
      },
      {
        q: "Possiamo gestire i dispositivi medici su MaxMed?",
        a: "Sì. La sezione apparecchiature tiene l'inventario dei tuoi dispositivi medici, con dettagli e statistiche di utilizzo, accanto a pazienti e visite.",
      },
      {
        q: "La piattaforma è in italiano?",
        a: "Sì. Tutta la console è in italiano, dalle schede pazienti e le visite fino a contratti e fatture.",
      },
    ],
  },

  security: {
    eyebrow: "Sicurezza e privacy",
    title: "Pensata per gestire dati sanitari",
    subtitle: "Come MaxMed protegge i tuoi pazienti, il tuo team e i tuoi pagamenti.",
  },

  demo: {
    eyebrow: "Prenota una demo",
    title: "Scopri MaxMed con il tuo team",
    subtitle: "Lasciaci i tuoi dati e organizziamo una demo per la tua struttura.",
    benefits: [
      "Una presentazione della console operatore, pensata sul vostro modo di lavorare",
      "Come funzionano ogni giorno triage, televisite ed emergenze",
      "Risposte su contratti, fatturazione e avvio del team",
      "Supporto per inviare la richiesta di onboarding",
    ],
  },

  doctors: {
    eyebrow: "Per i medici",
    title: "Visita da dove vuoi. Pagato per ogni ora.",
    benefits: [
      {
        title: "Pagato per ogni ora",
        text: "Le tue ore vengono registrate dall'inizio del turno, con un promemoria dopo 5 minuti di inattività.",
      },
      { title: "Un report chiaro ogni mese", text: "Ore, tariffa oraria e totale del mese, da consultare o scaricare." },
      { title: "Pagato come preferisci", text: "Ricevi i pagamenti con bonifico o tramite Stripe Connect." },
      {
        title: "I tuoi orari, le tue scelte",
        text: "Imposta la tua disponibilità, consulta i turni dei colleghi e prendi le visite dalla coda.",
      },
    ],
    applyTitle: "Candidati per entrare nella rete MaxMed",
  },

  forms: {
    fullName: "Nome e cognome",
    email: "Email",
    phone: "Telefono",
    sending: "Invio in corso…",
    errors: {
      name: "Inserisci il tuo nome.",
      facility: "Inserisci il nome della struttura.",
      email: "Inserisci un'email valida.",
      phone: "Inserisci un numero di telefono valido.",
      facilityType: "Scegli il tipo di struttura.",
      specialty: "Inserisci la tua specializzazione.",
      generic: "Qualcosa è andato storto. Riprova.",
      offline: "Sembra che tu sia offline. Controlla la connessione e riprova.",
    },
    demo: {
      facility: "Nome della struttura",
      workEmail: "Email di lavoro",
      facilityType: "Tipo di struttura",
      choose: "Scegli un'opzione",
      types: {
        "care-home": "RSA / casa di riposo",
        clinic: "Clinica o centro medico",
        pharmacy: "Farmacia",
        "home-care": "Assistenza domiciliare",
        other: "Altro",
      },
      submit: "Prenota la mia demo",
      privacy: "Usiamo questi dati solo per contattarti riguardo a MaxMed.",
      thanks: "Grazie, {name}. Abbiamo ricevuto la tua richiesta.",
      body: "Il nostro team ti contatterà all'indirizzo {email} per organizzare la demo.",
      another: "Invia un'altra richiesta",
    },
    doctor: {
      specialty: "Specializzazione",
      specialtyPlaceholder: "es. Medicina generale",
      submit: "Invia la candidatura",
      privacy: "Usiamo questi dati solo per valutare la tua candidatura.",
      thanks: "Grazie, Dr. {name}. Abbiamo ricevuto la tua candidatura.",
      body: "La valuteremo e ti contatteremo all'indirizzo {email}.",
      another: "Invia un'altra candidatura",
    },
  },

  finalCta: {
    title: "Porta un medico accanto a ogni paziente con MaxMed",
    subtitle: "Prenota una demo e mostriamo al tuo team come funziona, passo dopo passo.",
  },

  footer: {
    tagline: "Telemedicina per le strutture sanitarie. Triage, televisite, emergenze e prescrizioni in un'unica console.",
    getInTouch: "Contattaci",
    nav: "Piè di pagina",
    product: "Prodotto",
    getStarted: "Inizia",
    legal: "Note legali",
    contact: "Contatti",
    links: {
      platform: "Piattaforma",
      details: "I dettagli",
      howItWorks: "Come funziona",
      faq: "FAQ",
      privacy: "Privacy policy",
      terms: "Termini e condizioni",
      cookies: "Cookie policy",
    },
    address: "Via Giorgio Oprandi 1\n24065 Lovere (BG), Italia",
    rights: "Tutti i diritti riservati.",
    emojiBy: "Emoji di",
    licensedUnder: "con licenza",
  },

  legal: {
    onThisPage: "In questa pagina",
    translationNote: "",
    originalLink: "",
    questions: "Domande?",
    writeUs: "Scrivici a",
    orCall: "oppure chiama il",
    meta: {
      privacy: { title: "Informativa Privacy", description: "Come MaxMed S.r.l. tratta i dati personali e sanitari ai sensi del GDPR." },
      terms: { title: "Termini e Condizioni", description: "Termini e condizioni di utilizzo del sito MaxMed." },
      cookies: { title: "Cookie Policy", description: "Come il sito MaxMed utilizza i cookie." },
    },
  },
};
