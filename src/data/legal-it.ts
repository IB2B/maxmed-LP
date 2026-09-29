/**
 * Italian legal pages, copied verbatim from www.maxmed.it (/privacy, /terms, /cookie-policy).
 * These are the legally binding texts. Section ids match the English translation in legal.ts.
 */
import type { LegalBlock, LegalDoc } from "./legal";

const OWNER: LegalBlock = {
  lines: ["MaxMed S.r.l.", "Via Giorgio Oprandi, 1", "24065 Lovere (BG), Italia", "Email: info@maxmed.it"],
};

export const privacyIt: LegalDoc = {
  eyebrow: "Informativa Privacy",
  title: "Informativa sul Trattamento dei Dati Personali",
  subtitle: "(ai sensi degli artt. 13 e 14 del Regolamento UE 2016/679 – GDPR)",
  sections: [
    {
      id: "controller",
      title: "Titolare del trattamento",
      blocks: [
        "Il Titolare del trattamento dei dati personali è:",
        OWNER,
        '(di seguito "MaxMed" o "Titolare")',
        "MaxMed è titolare del trattamento dei dati personali e dei dati sanitari trattati nell'ambito dell'erogazione del servizio di Telemedicina strutturata tramite la propria piattaforma digitale.",
      ],
    },
    {
      id: "service",
      title: "Natura del servizio e contesto del trattamento",
      blocks: [
        "La piattaforma MaxMed è un'infrastruttura digitale finalizzata alla gestione strutturata del processo clinico che comprende:",
        {
          list: [
            "Raccolta di anamnesi",
            "Televisita con Medico accreditato",
            "Formulazione di diagnosi",
            "Emissione di prescrizione clinica",
            "Conservazione documentazione sanitaria",
          ],
        },
        "Il paziente accede al servizio tramite un Operatore sanitario accreditato, con il quale mantiene il rapporto professionale diretto. Il Medico interviene esclusivamente per la formulazione della diagnosi e della prescrizione clinica nell'ambito del processo organizzato dalla piattaforma.",
      ],
    },
    {
      id: "data",
      title: "Tipologia di dati trattati",
      blocks: [
        "Nell'ambito del servizio vengono trattati:",
        { heading: "3.1 Dati identificativi e anagrafici" },
        { list: ["Nome e cognome", "Data e luogo di nascita", "Codice fiscale", "Recapiti telefonici ed email", "Indirizzo"] },
        { heading: "3.2 Dati sanitari (categorie particolari ex art. 9 GDPR)" },
        {
          list: [
            "Informazioni anamnestiche",
            "Sintomatologia",
            "Referti medici",
            "Esami diagnostici (analisi, radiografie, TAC, risonanze ecc.)",
            "Documentazione clinica caricata",
            "Diagnosi",
            "Prescrizioni mediche",
            "Eventuali registrazioni delle televisite (ove attivate)",
          ],
        },
        "Si tratta di dati appartenenti a categorie particolari ai sensi dell'art. 9 del GDPR.",
      ],
    },
    {
      id: "purposes",
      title: "Finalità del trattamento",
      blocks: [
        "I dati personali sono trattati per le seguenti finalità:",
        {
          list: [
            "Erogazione del servizio sanitario in modalità digitale",
            "Formulazione di diagnosi e prescrizione clinica",
            "Conservazione della documentazione sanitaria",
            "Adempimento di obblighi normativi in materia sanitaria",
            "Tutela medico-legale dei professionisti coinvolti",
            "Gestione amministrativa e organizzativa del servizio",
            "Prevenzione di abusi, utilizzi impropri o accessi non autorizzati",
          ],
        },
      ],
    },
    {
      id: "legal-basis",
      title: "Base giuridica del trattamento",
      blocks: [
        "Il trattamento è lecito ai sensi di:",
        {
          list: [
            "Art. 9, par. 2, lett. h) GDPR – trattamento necessario per finalità di diagnosi, assistenza o terapia sanitaria",
            "Art. 6, par. 1, lett. b) GDPR – esecuzione di un servizio richiesto dall'interessato",
            "Art. 6, par. 1, lett. c) GDPR – adempimento di obblighi legali",
          ],
        },
      ],
    },
    {
      id: "security",
      title: "Modalità del trattamento e misure di sicurezza",
      blocks: [
        "Il trattamento avviene mediante strumenti informatici e telematici, nel rispetto dei principi di:",
        { list: ["Liceità", "Correttezza", "Trasparenza", "Minimizzazione", "Integrità", "Riservatezza"] },
        "La piattaforma implementa:",
        {
          list: [
            "Sistemi di autenticazione forte",
            "Autorizzazioni differenziate per ruolo e funzione clinica",
            "Tracciabilità delle operazioni (registro attività)",
            "Marcatura temporale delle operazioni",
            "Sistemi di cifratura e protezione dei dati",
            "Sistemi di backup e disaster recovery",
          ],
        },
      ],
    },
    {
      id: "retention",
      title: "Conservazione dei dati e finalità medico-legali",
      blocks: [
        "La documentazione sanitaria trattata tramite la piattaforma è conservata per il periodo previsto dalla normativa vigente in materia sanitaria e responsabilità professionale, attualmente pari a 10 (dieci) anni, salvo eventuali obblighi di conservazione ulteriori previsti dalla legge.",
        "La conservazione è finalizzata a:",
        {
          list: [
            "Garantire la continuità documentale dell'atto sanitario",
            "Consentire la ricostruzione del percorso clinico",
            "Tutelare i professionisti coinvolti sotto il profilo medico-legale",
            "Adempiere agli obblighi normativi",
          ],
        },
        "Decorso il termine di conservazione, i dati saranno cancellati o anonimizzati salvo ulteriori obblighi di legge.",
      ],
    },
    {
      id: "recordings",
      title: "Registrazione delle televisite",
      blocks: [
        "Qualora la piattaforma preveda la registrazione delle televisite:",
        {
          list: [
            "La registrazione avviene esclusivamente per finalità cliniche e medico-legali",
            "La registrazione costituisce parte integrante della documentazione sanitaria",
            "Il paziente viene informato preventivamente dell'eventuale registrazione",
            "La registrazione è conservata nei medesimi termini previsti per la documentazione clinica",
          ],
        },
        "La registrazione non può essere utilizzata per finalità diverse da quelle strettamente connesse alla tutela sanitaria e legale.",
      ],
    },
    {
      id: "sharing",
      title: "Comunicazione dei dati",
      blocks: [
        "I dati possono essere comunicati esclusivamente a:",
        {
          list: [
            "Operatori sanitari accreditati coinvolti nel processo clinico",
            "Medici accreditati per la formulazione della diagnosi e prescrizione",
            "Autorità competenti nei casi previsti dalla legge",
            "Fornitori tecnologici che operano per conto del Titolare e vincolati da obblighi contrattuali di riservatezza",
          ],
        },
        "I dati non sono oggetto di diffusione.",
      ],
    },
    {
      id: "transfers",
      title: "Trasferimento dei dati all'estero",
      blocks: [
        "I dati non sono trasferiti al di fuori dell'Unione Europea. Qualora ciò si rendesse necessario, il trasferimento avverrà nel rispetto delle garanzie previste dal GDPR.",
      ],
    },
    {
      id: "rights",
      title: "Diritti dell'interessato",
      blocks: [
        "L'interessato può esercitare i diritti previsti dagli artt. 15–22 GDPR:",
        {
          list: [
            "Diritto di accesso ai propri dati",
            "Diritto di rettifica",
            "Diritto alla cancellazione (nei limiti di legge)",
            "Diritto di limitazione del trattamento",
            "Diritto alla portabilità dei dati",
            "Diritto di opposizione (nei limiti di legge)",
            "Diritto di reclamo al Garante per la Protezione dei Dati Personali",
          ],
        },
        "Le richieste possono essere inviate a: info@maxmed.it",
      ],
    },
  ],
};

export const termsIt: LegalDoc = {
  eyebrow: "Documentazione Legale",
  title: "Termini e Condizioni di Utilizzo del Sito",
  subtitle: "www.maxmed.it",
  sections: [
    {
      id: "general",
      title: "Informazioni generali",
      blocks: [
        'Il sito www.maxmed.it (di seguito "Sito") è di proprietà di:',
        OWNER,
        '(di seguito "MaxMed" o "Società")',
        "L'accesso e la navigazione del Sito implicano l'accettazione integrale dei presenti Termini e Condizioni.",
      ],
    },
    {
      id: "purpose",
      title: "Oggetto del Sito",
      blocks: [
        "Il Sito ha finalità:",
        {
          list: [
            "Informative",
            "Descrittive dei servizi offerti da MaxMed",
            "Di raccolta candidature per l'accreditamento di Operatori sanitari",
            "Di accesso alla piattaforma digitale dedicata",
          ],
        },
        "Il Sito non eroga direttamente prestazioni sanitarie.",
      ],
    },
    {
      id: "use",
      title: "Modalità di utilizzo",
      blocks: [
        "L'utente si impegna a:",
        {
          list: [
            "Utilizzare il Sito in modo conforme alla legge",
            "Non utilizzare il Sito per finalità illecite",
            "Non tentare accessi non autorizzati",
            "Non interferire con il funzionamento tecnico",
          ],
        },
        "È vietato qualsiasi utilizzo che possa arrecare danno alla Società o a terzi.",
      ],
    },
    {
      id: "ip",
      title: "Proprietà intellettuale",
      blocks: [
        "Tutti i contenuti del Sito, inclusi:",
        { list: ["Testi", "Loghi", "Marchi", "Immagini", "Struttura grafica", "Codice"] },
        "sono di proprietà esclusiva di MaxMed S.r.l. o concessi in licenza.",
        "È vietata la riproduzione, distribuzione o utilizzo non autorizzato.",
      ],
    },
    {
      id: "liability",
      title: "Limitazione di responsabilità",
      blocks: [
        "Le informazioni presenti sul Sito hanno natura esclusivamente informativa.",
        "MaxMed:",
        {
          list: [
            "Non garantisce l'assenza di errori o omissioni",
            "Non è responsabile per danni derivanti dall'utilizzo delle informazioni pubblicate",
            "Non è responsabile per interruzioni temporanee del servizio",
          ],
        },
        "Il Sito può contenere collegamenti a siti esterni, per i quali MaxMed non assume responsabilità.",
      ],
    },
    {
      id: "onboarding",
      title: "Candidatura e onboarding",
      blocks: [
        "La compilazione del modulo di richiesta di accreditamento:",
        {
          list: [
            "Non costituisce automaticamente accettazione",
            "Non determina instaurazione di rapporto contrattuale",
          ],
        },
        "L'eventuale rapporto contrattuale si perfeziona solo a seguito di approvazione da parte del Comitato Direttivo e Tecnico-Scientifico e successiva accettazione elettronica delle condizioni contrattuali.",
      ],
    },
    {
      id: "data-protection",
      title: "Protezione dei dati personali",
      blocks: [
        "Il trattamento dei dati personali raccolti tramite il Sito è disciplinato dalla Privacy Policy pubblicata nella relativa sezione.",
      ],
    },
    {
      id: "security",
      title: "Sicurezza informatica",
      blocks: [
        "MaxMed adotta misure tecniche idonee a garantire la sicurezza del Sito. Tuttavia, non può garantire l'assenza assoluta di vulnerabilità tecniche non dipendenti dalla propria volontà.",
      ],
    },
    {
      id: "changes",
      title: "Modifiche ai Termini",
      blocks: [
        "MaxMed si riserva il diritto di modificare in qualsiasi momento i presenti Termini. Le modifiche saranno pubblicate sul Sito e avranno efficacia dalla data di pubblicazione.",
      ],
    },
    {
      id: "law",
      title: "Legge applicabile e foro competente",
      blocks: [
        "I presenti Termini sono regolati dalla legge italiana. Per qualsiasi controversia è competente il Foro italiano territorialmente competente.",
      ],
    },
  ],
};

export const cookiesIt: LegalDoc = {
  eyebrow: "Cookie Policy",
  title: "Cookie Policy",
  subtitle: "Sito www.maxmed.it (ai sensi del Reg. UE 2016/679 e normativa italiana vigente)",
  sections: [
    {
      id: "what",
      title: "Cosa sono i cookie",
      blocks: [
        "I cookie sono piccoli file di testo che i siti web visitati inviano al dispositivo dell'utente (computer, smartphone, tablet), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti in occasione di visite successive.",
        "I cookie consentono di migliorare l'esperienza di navigazione, garantire il funzionamento tecnico del sito e raccogliere informazioni statistiche.",
      ],
    },
    {
      id: "controller",
      title: "Titolare del trattamento",
      blocks: ["Il Titolare del trattamento dei dati raccolti tramite cookie è:", OWNER],
    },
    {
      id: "types",
      title: "Tipologie di cookie utilizzati",
      blocks: [
        "Il sito può utilizzare le seguenti categorie di cookie:",
        { heading: "3.1 Cookie tecnici (necessari)" },
        "Sono indispensabili per il corretto funzionamento del sito. Esempi:",
        { list: ["Cookie di sessione", "Cookie di autenticazione", "Cookie per gestione preferenze", "Cookie di sicurezza"] },
        "Base giuridica: legittimo interesse del Titolare (art. 6, par. 1, lett. f GDPR)",
        "Non richiedono consenso preventivo.",
        { heading: "3.2 Cookie analitici (statistici)" },
        "Utilizzati per raccogliere informazioni aggregate e anonime sul numero di utenti e sulle modalità di utilizzo del sito.",
        "Se anonimizzati correttamente, sono equiparati ai cookie tecnici. Se non anonimizzati, richiedono consenso.",
        "Base giuridica: consenso dell'utente (art. 6, par. 1, lett. a GDPR)",
        { heading: "3.3 Cookie di profilazione (eventuali)" },
        "Qualora il sito utilizzi strumenti di profilazione o marketing (es. tracciamento campagne, remarketing), tali cookie:",
        { list: ["Analizzano comportamenti", "Creano profili", "Personalizzano contenuti"] },
        "Sono installati solo previo consenso esplicito.",
      ],
    },
    {
      id: "consent",
      title: "Modalità di gestione del consenso",
      blocks: [
        "Al primo accesso al sito, l'utente visualizza un banner che consente di:",
        { list: ["Accettare tutti i cookie", "Rifiutare tutti i cookie non necessari", "Personalizzare le preferenze"] },
        "Il consenso può essere modificato in qualsiasi momento tramite apposita funzione disponibile nel sito.",
      ],
    },
    {
      id: "duration",
      title: "Durata dei cookie",
      blocks: [
        "I cookie possono essere:",
        {
          list: [
            "Di sessione: si cancellano alla chiusura del browser",
            "Persistenti: restano memorizzati fino alla scadenza prevista",
          ],
        },
        "La durata varia in base alla tipologia.",
      ],
    },
    {
      id: "sharing",
      title: "Comunicazione dei dati",
      blocks: [
        "I dati raccolti tramite cookie possono essere trattati da:",
        { list: ["Fornitori tecnici del sito", "Provider di servizi statistici", "Hosting provider"] },
        "Tali soggetti operano come responsabili del trattamento.",
      ],
    },
    {
      id: "transfers",
      title: "Trasferimento dati extra UE",
      blocks: [
        "Qualora siano utilizzati servizi che comportano trasferimento di dati verso Paesi extra UE, il trasferimento avverrà nel rispetto delle garanzie previste dal GDPR (es. clausole contrattuali standard).",
      ],
    },
    {
      id: "rights",
      title: "Diritti dell'utente",
      blocks: [
        "L'utente può esercitare i diritti previsti dagli artt. 15–22 GDPR contattando il Titolare.",
        "È inoltre possibile proporre reclamo al Garante per la Protezione dei Dati Personali.",
      ],
    },
    {
      id: "disable",
      title: "Come disabilitare i cookie",
      blocks: [
        "Oltre alle opzioni fornite dal banner, è possibile gestire le preferenze sui cookie direttamente dal browser:",
        {
          list: [
            "Chrome: Impostazioni → Privacy e sicurezza → Cookie",
            "Firefox: Opzioni → Privacy e sicurezza → Cookie",
            "Safari: Preferenze → Privacy → Cookie",
            "Edge: Impostazioni → Privacy → Cookie",
          ],
        },
        "Nota: la disabilitazione di alcuni cookie potrebbe compromettere la corretta navigazione del sito.",
      ],
    },
  ],
};
