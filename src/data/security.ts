/**
 * Security & compliance points, with the text in English and Italian.
 *
 * `confirmed: true` items come from the product itself (DASHBOARD.md).
 * `confirmed: false` items are placeholders: check each claim with the MaxMed
 * team, edit the text to match reality, then set `confirmed: true`.
 * Unconfirmed items show a "To confirm" tag on the page.
 */
export const securityPoints = [
  {
    icon: "people",
    en: {
      title: "Access by role",
      text: "Admins, operators, doctors and managers each see only what their role allows.",
    },
    it: {
      title: "Accesso per ruolo",
      text: "Amministratori, operatori, medici e manager vedono solo ciò che il loro ruolo consente.",
    },
    confirmed: true,
  },
  {
    icon: "key",
    en: {
      title: "Contracts signed with a one-time code",
      text: "Every contract is confirmed with a code sent by SMS or email, with no paper involved.",
    },
    it: {
      title: "Contratti firmati con codice monouso",
      text: "Ogni contratto è confermato con un codice inviato via SMS o email, senza carta.",
    },
    confirmed: true,
  },
  {
    icon: "credit-card",
    en: {
      title: "Payments through Stripe",
      text: "Card payments and doctor payouts run through Stripe and Stripe Connect.",
    },
    it: {
      title: "Pagamenti tramite Stripe",
      text: "I pagamenti con carta e i compensi dei medici passano da Stripe e Stripe Connect.",
    },
    confirmed: true,
  },
  {
    icon: "shield",
    en: {
      title: "GDPR compliant",
      text: "[Confirm: GDPR compliance, data processing agreement (DPA) with each facility, DPO contact.]",
    },
    it: {
      title: "Conforme al GDPR",
      text: "[Da confermare: conformità GDPR, accordo sul trattamento dei dati (DPA) con ogni struttura, contatto del DPO.]",
    },
    confirmed: false,
  },
  {
    icon: "flag-eu",
    en: {
      title: "Data hosted in the EU",
      text: "[Confirm: where patient data is stored (Italy / EU) and with which provider.]",
    },
    it: {
      title: "Dati ospitati nell'UE",
      text: "[Da confermare: dove sono conservati i dati dei pazienti (Italia / UE) e con quale fornitore.]",
    },
    confirmed: false,
  },
  {
    icon: "locked",
    en: {
      title: "Encrypted end to end",
      text: "[Confirm: encryption of video calls and stored data, plus any certifications (e.g. ISO 27001).]",
    },
    it: {
      title: "Crittografia end-to-end",
      text: "[Da confermare: crittografia delle videochiamate e dei dati salvati, ed eventuali certificazioni (es. ISO 27001).]",
    },
    confirmed: false,
  },
];
