/**
 * English copy for the whole site. `it.ts` must have exactly the same shape
 * (TypeScript checks it against this file).
 * Lists that pair with icons, colours or illustrations follow the order used in each component.
 */
export const en = {
  meta: {
    title: "MaxMed Telemedicine — A doctor on video, beside every patient",
    description:
      "Connect your care facility to a network of doctors by video. Risk-code triage, a managed patient queue, digital prescriptions and real-time emergency alerts.",
  },

  common: {
    bookDemo: "Book a demo",
    joinDoctor: "Join as a doctor",
    logIn: "Log in",
    home: "MaxMed, home",
    openMenu: "Open menu",
    language: "Language",
  },

  nav: [
    { label: "Platform", hash: "platform" },
    { label: "How it works", hash: "how-it-works" },
    { label: "For doctors", hash: "doctors" },
    { label: "FAQ", hash: "faq" },
  ],

  hero: {
    /** Words with an `icon` get the coloured icon tile in front of them. */
    title: [
      { text: "Doctors,", icon: "doctors" },
      { text: "patients", icon: "patients" },
      { text: "and" },
      { text: "visits,", icon: "visits" },
      { text: "all in" },
      { text: "one", icon: "one" },
      { text: "place." },
    ],
    intro:
      "MaxMed connects your care facility to a network of doctors. Triage patients by risk code, book video consultations and raise emergencies in real time.",
    watch: "Watch",
    watchText: "See how MaxMed works, from triage to video consultation.",
    seeFeatures: "See features",
    videoTitle: "MaxMed, telemedicine platform for care providers",
  },

  video: {
    region: "Video",
    play: "Play",
    pause: "Pause",
    playVideo: "Play video",
    watchWalkthrough: "Watch the walkthrough",
    floating: "Playing in the corner. Click to bring it back here.",
    backToVideo: "Back to video",
    closeMini: "Close mini player",
    seek: "Seek",
    mute: "Mute",
    unmute: "Unmute",
    volume: "Volume",
    fullScreen: "Full screen",
    exitFullScreen: "Exit full screen",
  },

  features: {
    eyebrow: "One console",
    title: "Run your facility in one place",
    subtitle: "Patients, doctors and emergencies side by side, on one screen.",
    replay: "Replay",
    items: [
      {
        title: "Live video consultations",
        description:
          "Start a consultation from the patient record. A doctor joins on video and the status updates live on both sides.",
      },
      {
        title: "Triage patients by risk code",
        description:
          "Red, yellow and green codes keep the most urgent patients at the top. Waiting patients are assigned to available doctors.",
      },
      {
        title: "Raise emergencies in real time",
        description:
          "One tap alerts a doctor straight away. Every emergency is resolved with notes, and the call recording is kept.",
      },
      {
        title: "Digital prescriptions",
        description:
          "Doctors issue prescriptions during the visit, linked to the patient. Pending deliveries are highlighted for your team.",
      },
      {
        title: "Book around doctor availability",
        description:
          "One calendar for every visit, with doctors' availability visible before you book. Doctor shifts are tracked automatically.",
      },
      {
        title: "Sign up and sign online",
        description:
          "Sign your contract with a one-time code by SMS or email. Invoices, subscription and monthly reports live in one place.",
      },
    ],
  },

  /** Text inside the animated product mockups. */
  mock: {
    consultation: "Consultation",
    generalMedicine: "General medicine",
    doctorJoined: "Doctor joined the call",
    patientQueue: "Patient queue",
    waiting: "waiting",
    patient: "Patient",
    reason: "Reason",
    wait: "Wait",
    chestPain: "Chest pain",
    highFever: "High fever",
    followUp: "Follow-up",
    skinRash: "Skin rash",
    assigned: "Assigned",
    emergency: "Emergency",
    redCode: "Red code",
    timeline: ["Emergency raised by operator", "Dr. Bianchi alerted", "Doctor joined the call", "Resolved, notes attached"],
    prescription: "Prescription",
    pendingDelivery: "Pending delivery",
    draft: "Draft",
    doses: ["1 tab · 3× day · 5 days", "1 cap · 1× day · 14 days"],
    addMedicine: "Add medicine",
    signedAt: "Signed",
    send: "Send",
    sent: "Sent",
    sign: "Sign",
    month: "September 2026",
    week: "Week",
    days: ["Mon 28", "Tue 29", "Wed 30", "Thu 1", "Fri 2"],
    triage: "Triage",
    doctorFree: "Dr. Bianchi free",
    videoVisit: "Video visit",
    newVisit: "New visit",
    visitTime: "Thu 1 · 11:00 – 12:00",
    book: "Book",
    serviceContract: "Service contract",
    codeSentTo: "Code sent by SMS to",
    contractSigned: "Contract signed",
    verified: "Verified",
    requestAccess: "Request access",
    inReview: "In review",
    facility: "Facility",
    city: "City",
    sendRequest: "Send request",
    codeBySms: "Code sent by SMS",
    signed: "Signed",
    firstPatient: "First patient",
    startConsultation: "Start consultation",
    drJoined: "Dr. Bianchi joined",
    live: "Live",
    shiftInProgress: "Shift in progress",
    hoursTracked: "Hours tracked automatically",
    offShift: "Off shift",
    ready: "Ready when you are",
    startShift: "Start shift",
    paymentReports: "Payment reports",
    reportMonths: ["September 2026", "August 2026", "July 2026"],
    processing: "Processing",
    paid: "Paid",
    consultations: "consultations",
    emergencies: "emergencies",
    shifts: "shifts",
    payoutMethod: "Payout method",
    bankTransfer: "Bank transfer",
    reportDownloaded: "August report downloaded",
  },

  /** "Inside the console" screenshots, in the order used by src/components/site/screens.tsx. */
  screens: {
    eyebrow: "Inside MaxMed",
    title: "The real console, screen by screen",
    subtitle: "What your operators and doctors see every day. The console itself is in Italian.",
    counter: "{current} of {total}",
    previous: "Previous screen",
    next: "Next screen",
    items: [
      {
        tab: "Patients",
        title: "Every patient, one list",
        description: "Each patient shows their risk code, status, age and the operator who registered them. Start a video call or a prescription in one click.",
        alt: "MaxMed patient list with risk codes and video call, prescription and details buttons",
      },
      {
        tab: "Alerts",
        title: "Nobody misses a new patient",
        description: "When a patient is assigned, the doctor gets an alert with an alarm straight away.",
        alt: "MaxMed alert telling the doctor a new patient has been assigned",
      },
      {
        tab: "Queue",
        title: "A queue that runs itself",
        description: "Scheduled consultations in time order, with each patient's position and the expected delay.",
        alt: "MaxMed scheduled consultation queue with status, position and estimated delay",
      },
      {
        tab: "Consultations",
        title: "Every consultation, filed",
        description: "Filter by status or date, see who requested each visit and write the prescription from the same card.",
        alt: "MaxMed consultation list with filters by status and date",
      },
      {
        tab: "Calendar",
        title: "The month at a glance",
        description: "Consultations and emergencies on one calendar, coloured by status, by month, week, day or agenda.",
        alt: "MaxMed consultation calendar in month view with coloured statuses",
      },
      {
        tab: "Prescriptions",
        title: "Prescriptions signed by OTP",
        description: "View, download or edit each prescription, then sign it with a one-time code.",
        alt: "MaxMed prescription list with view, download, edit and sign with OTP actions",
      },
      {
        tab: "For doctors",
        title: "A dashboard for every doctor",
        description: "Doctors start their shift in one click, and every minute is tracked for their monthly pay.",
        alt: "MaxMed doctor dashboard with shift timer and hours worked today and this month",
      },
    ],
  },

  details: {
    eyebrow: "The details",
    title: "More features your team will use every day",
    items: [
      { title: "Medical equipment inventory", description: "Keep track of every device on site, with usage statistics." },
      { title: "Team skills directory", description: "Each operator lists their skills, so the right person takes each patient." },
      { title: "Messaging with doctors", description: "Chat with the doctor before or after a consultation." },
      { title: "Training courses", description: "Courses for operators, with attendance and progress tracked per lesson." },
      { title: "Quick patient registration", description: "Register a new patient straight from the dashboard, in one form." },
      { title: "Guided onboarding", description: "Your request is reviewed by our team, then a guided tour shows you around." },
      { title: "Monthly reports", description: "Consultations and prescriptions per month, ready to download." },
      { title: "Invoices in one place", description: "Subscription and service invoices, available to view or download any time." },
      { title: "Coupons and scholarships", description: "Discount codes on subscriptions, and scholarships that cut the cost of courses." },
      { title: "Built for Italian care teams", description: "The whole console is in Italian, from patient records to invoices." },
    ],
    ctaTitle: "See it working with your own patients.",
    ctaText: "We'll walk your team through the operator console, step by step.",
  },

  how: {
    eyebrow: "How it works",
    title: "Up and running in three steps",
    subtitle: "From your first request to your first video consultation.",
    steps: [
      {
        title: "Request access",
        description: "Tell us about your facility in a short form. Our team reviews every request and gets back to you.",
      },
      {
        title: "Sign your contract online",
        description: "Read the contract, then confirm with a one-time code by SMS or email. No paper, no meetings.",
      },
      {
        title: "Start your first consultation",
        description: "Register a patient, give them a risk code and bring in a doctor on video, straight from the console.",
      },
    ],
  },

  network: {
    eyebrow: "Across Italy",
    titleData: "One network, from the Alps to Sicily",
    titleFacts: "Telemedicine for care facilities anywhere in Italy",
    subtitleData: "Care facilities and doctors across Italy already work together on MaxMed.",
    subtitleFacts: "MaxMed is online, so any facility in Italy can bring a doctor to its patients by video.",
    stats: ["Care facilities connected", "Doctors on the platform", "Video consultations"],
    cities: "Cities with MaxMed facilities",
    facilities: "facilities",
    mapLabel: "Map of Italy",
    mapLabelData: "Map of Italy with MaxMed facilities in {count} cities",
    facts: [
      { title: "Built for care facilities", text: "Operators register patients and bring in a doctor from one console." },
      { title: "Doctors on video", text: "Doctors set their availability and join consultations wherever they are." },
      { title: "Handled in real time", text: "Video consultations, triage and emergencies, live on both sides." },
      { title: "In Italian", text: "The whole console is in Italian, from patient records to invoices." },
    ],
  },

  testimonials: {
    eyebrow: "In their words",
    title: "What care teams say about MaxMed",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    anythingElse: "Anything else?",
    andAsk: "and ask us.",
    items: [
      {
        q: "What do we need to get started?",
        a: "Send us a request with a few details about your facility. Our team reviews it, then you sign your contract online with a one-time code sent by SMS or email. Once it's signed, your operators can log in and register patients.",
      },
      {
        q: "Who are the doctors, and how do they join a consultation?",
        a: "Doctors on MaxMed set their availability in the platform. When you start a consultation, the patient goes into the queue, an available doctor is assigned and joins on video. Each doctor sees the patients assigned to them and the history of their consultations.",
      },
      {
        q: "What happens in an emergency?",
        a: "Your operator raises an emergency from the console in one tap. It's marked by priority, a doctor is alerted straight away, and it stays open until the doctor resolves it with notes. Call recordings are kept, so you can play them back later.",
      },
      {
        q: "How do prescriptions work?",
        a: "The doctor issues the prescription during the consultation. It's linked to the patient and shows up in your prescriptions list, with pending deliveries highlighted. You can also download a monthly prescriptions report.",
      },
      {
        q: "How does billing work?",
        a: "Your facility pays a subscription. Your invoices and subscription status are kept in one place in the console, ready to view or download at any time. Discount coupons can be applied to subscriptions.",
      },
      {
        q: "Can we follow our team's activity?",
        a: "Yes. The console has statistics you can filter by date, a calendar with every consultation, and a monthly count of consultations per patient that you can download.",
      },
      {
        q: "Do you offer training for our staff?",
        a: "Yes. MaxMed runs training courses for operators, with attendance and progress tracked lesson by lesson. Scholarships are available to reduce the cost of courses.",
      },
      {
        q: "Can we manage our medical devices in MaxMed?",
        a: "Yes. The equipment section keeps an inventory of your medical devices, with details and usage statistics, next to your patients and consultations.",
      },
      {
        q: "Is the platform in Italian?",
        a: "Yes. The whole console is in Italian, from patient records and consultations to contracts and invoices.",
      },
    ],
  },

  security: {
    eyebrow: "Security & privacy",
    title: "Built to handle patient data",
    subtitle: "How MaxMed protects your patients, your team and your payments.",
  },

  demo: {
    eyebrow: "Book a demo",
    title: "See MaxMed with your own team",
    subtitle: "Leave your details and we'll set up a demo for your facility.",
    benefits: [
      "A walkthrough of the operator console, with your own workflow in mind",
      "How triage, video consultations and emergencies work day to day",
      "Answers on contracts, billing and getting your team started",
      "Help sending your onboarding request",
    ],
  },

  doctors: {
    eyebrow: "For doctors",
    title: "Consult from anywhere. Get paid for every hour.",
    benefits: [
      {
        title: "Paid for every hour",
        text: "Your hours are tracked from the moment you start a shift, with a reminder after 5 minutes of inactivity.",
      },
      { title: "A clear report every month", text: "Hours, hourly rate and total for the month, ready to view or download." },
      { title: "Paid your way", text: "Receive payouts by bank transfer or through Stripe Connect." },
      {
        title: "Your schedule, your call",
        text: "Set your availability, see colleagues' schedules and take consultations from the queue.",
      },
    ],
    applyTitle: "Apply to join the MaxMed network",
  },

  forms: {
    fullName: "Full name",
    email: "Email",
    phone: "Phone",
    sending: "Sending…",
    errors: {
      name: "Please enter your name.",
      facility: "Please enter your facility's name.",
      email: "Please enter a valid email.",
      phone: "Please enter a valid phone number.",
      facilityType: "Please choose a facility type.",
      specialty: "Please enter your specialty.",
      generic: "Something went wrong. Please try again.",
      offline: "You seem to be offline. Please check your connection and try again.",
    },
    demo: {
      facility: "Facility name",
      workEmail: "Work email",
      facilityType: "Type of facility",
      choose: "Choose one",
      types: {
        "care-home": "Care home (RSA)",
        clinic: "Clinic or medical centre",
        pharmacy: "Pharmacy",
        "home-care": "Home care service",
        other: "Other",
      },
      submit: "Book my demo",
      privacy: "We only use these details to contact you about MaxMed.",
      thanks: "Thanks, {name}. Your request is in.",
      body: "Our team will contact you at {email} to set up your demo.",
      another: "Send another request",
    },
    doctor: {
      specialty: "Specialty",
      specialtyPlaceholder: "e.g. General medicine",
      submit: "Apply to join",
      privacy: "We only use these details to review your application.",
      thanks: "Thanks, Dr. {name}. Your application is in.",
      body: "We'll review it and contact you at {email}.",
      another: "Send another application",
    },
  },

  finalCta: {
    title: "Bring a doctor to every patient with MaxMed",
    subtitle: "Book a demo and we'll walk your team through it, step by step.",
  },

  footer: {
    tagline: "Telemedicine for care facilities. Triage, video consultations, emergencies and prescriptions in one console.",
    getInTouch: "Get in touch",
    nav: "Footer",
    product: "Product",
    getStarted: "Get started",
    legal: "Legal",
    contact: "Contact",
    links: {
      platform: "Platform",
      details: "The details",
      howItWorks: "How it works",
      faq: "FAQ",
      privacy: "Privacy policy",
      terms: "Terms of service",
      cookies: "Cookie policy",
    },
    address: "Via Giorgio Oprandi 1\n24065 Lovere (BG), Italy",
    rights: "All rights reserved.",
    emojiBy: "Emoji graphics by",
    licensedUnder: "licensed under",
  },

  legal: {
    onThisPage: "On this page",
    /** Shown on translated legal pages; `{link}` becomes a link to the Italian original. */
    translationNote: "This is an English translation. The {link} is the legally binding version.",
    originalLink: "Italian original",
    questions: "Questions?",
    writeUs: "Write to us at",
    orCall: "or call",
    meta: {
      privacy: { title: "Privacy Policy", description: "How MaxMed S.r.l. processes personal and health data under the GDPR." },
      terms: { title: "Terms of Service", description: "The terms of use of the MaxMed website." },
      cookies: { title: "Cookie Policy", description: "How the MaxMed website uses cookies." },
    },
  },
};

export type Dictionary = typeof en;
