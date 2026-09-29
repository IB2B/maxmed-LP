/**
 * Legal pages: English translations of the texts on www.maxmed.it
 * (/privacy, /terms, /cookie-policy). The Italian originals are the legally binding
 * versions and each page links to its original. If MaxMed updates the text on
 * maxmed.it, update the translation here too.
 */

import { cookiesIt, privacyIt, termsIt } from "./legal-it";

/** A paragraph, a bulleted list, a sub-heading, or a group of lines (e.g. an address). */
export type LegalBlock = string | { list: string[] } | { heading: string } | { lines: string[] };

export type LegalSection = { id: string; title: string; blocks: LegalBlock[] };

export type LegalDoc = {
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Link to the binding Italian original; only set on translations. */
  original?: string;
  sections: LegalSection[];
};

const OWNER: LegalBlock = {
  lines: ["MaxMed S.r.l.", "Via Giorgio Oprandi, 1", "24065 Lovere (BG), Italy", "Email: info@maxmed.it"],
};

export const privacy: LegalDoc = {
  eyebrow: "Privacy policy",
  title: "How we handle personal data",
  subtitle: "Information on the processing of personal data under Articles 13 and 14 of EU Regulation 2016/679 (GDPR).",
  original: "https://www.maxmed.it/privacy",
  sections: [
    {
      id: "controller",
      title: "Data controller",
      blocks: [
        "The controller of personal data is:",
        OWNER,
        '(hereinafter "MaxMed" or the "Controller")',
        "MaxMed is the controller of the personal data and health data processed in providing its structured telemedicine service through its digital platform.",
      ],
    },
    {
      id: "service",
      title: "The service and the context of processing",
      blocks: [
        "The MaxMed platform is a digital infrastructure for managing the clinical process in a structured way. It covers:",
        {
          list: [
            "Taking the patient's medical history",
            "Video consultations with an accredited doctor",
            "Making a diagnosis",
            "Issuing clinical prescriptions",
            "Storing health records",
          ],
        },
        "Patients access the service through an accredited healthcare operator, with whom they keep a direct professional relationship. The doctor is involved solely to make the diagnosis and issue the prescription, within the process organised by the platform.",
      ],
    },
    {
      id: "data",
      title: "Data we process",
      blocks: [
        "In providing the service, we process:",
        { heading: "Identification and personal details" },
        {
          list: [
            "First and last name",
            "Date and place of birth",
            "Tax code (codice fiscale)",
            "Phone number and email",
            "Address",
          ],
        },
        { heading: "Health data (special categories under Art. 9 GDPR)" },
        {
          list: [
            "Medical history",
            "Symptoms",
            "Medical reports",
            "Diagnostic tests (lab tests, X-rays, CT scans, MRIs, etc.)",
            "Uploaded clinical documents",
            "Diagnoses",
            "Prescriptions",
            "Recordings of video consultations (where enabled)",
          ],
        },
        "These belong to the special categories of data under Article 9 of the GDPR.",
      ],
    },
    {
      id: "purposes",
      title: "Why we process it",
      blocks: [
        "Personal data is processed for the following purposes:",
        {
          list: [
            "Providing healthcare services digitally",
            "Making diagnoses and issuing prescriptions",
            "Storing health records",
            "Meeting legal obligations in healthcare",
            "Protecting the professionals involved from a medico-legal standpoint",
            "Administering and organising the service",
            "Preventing abuse, misuse and unauthorised access",
          ],
        },
      ],
    },
    {
      id: "legal-basis",
      title: "Legal basis",
      blocks: [
        "Processing is lawful under:",
        {
          list: [
            "Art. 9(2)(h) GDPR: processing necessary for medical diagnosis, care or treatment",
            "Art. 6(1)(b) GDPR: performance of a service requested by the data subject",
            "Art. 6(1)(c) GDPR: compliance with legal obligations",
          ],
        },
      ],
    },
    {
      id: "security",
      title: "How it's processed and kept secure",
      blocks: [
        "Data is processed using IT and electronic tools, following the principles of lawfulness, fairness, transparency, data minimisation, integrity and confidentiality.",
        "The platform uses:",
        {
          list: [
            "Strong authentication",
            "Permissions based on role and clinical function",
            "Traceability of operations (activity log)",
            "Timestamping of operations",
            "Encryption and data protection",
            "Backup and disaster recovery",
          ],
        },
      ],
    },
    {
      id: "retention",
      title: "Retention and medico-legal purposes",
      blocks: [
        "Health records processed through the platform are kept for the period required by current healthcare and professional liability law, currently 10 (ten) years, unless the law requires longer retention.",
        "Records are kept to:",
        {
          list: [
            "Ensure continuity of the clinical record",
            "Allow the clinical pathway to be reconstructed",
            "Protect the professionals involved from a medico-legal standpoint",
            "Meet legal obligations",
          ],
        },
        "Once the retention period ends, data is deleted or anonymised, unless the law requires otherwise.",
      ],
    },
    {
      id: "recordings",
      title: "Recording of video consultations",
      blocks: [
        "Where the platform records video consultations:",
        {
          list: [
            "Recordings are made solely for clinical and medico-legal purposes",
            "Recordings form part of the health record",
            "Patients are informed in advance of any recording",
            "Recordings are kept for the same period as other clinical records",
          ],
        },
        "Recordings may not be used for any purpose other than those strictly related to healthcare and legal protection.",
      ],
    },
    {
      id: "sharing",
      title: "Who we share data with",
      blocks: [
        "Data may be shared only with:",
        {
          list: [
            "Accredited healthcare operators involved in the clinical process",
            "Accredited doctors, to make diagnoses and issue prescriptions",
            "Competent authorities, where required by law",
            "Technology providers acting on the Controller's behalf, bound by contractual confidentiality obligations",
          ],
        },
        "Data is never made public.",
      ],
    },
    {
      id: "transfers",
      title: "Transfers outside the EU",
      blocks: [
        "Data is not transferred outside the European Union. Should this become necessary, any transfer will follow the safeguards set out in the GDPR.",
      ],
    },
    {
      id: "rights",
      title: "Your rights",
      blocks: [
        "You can exercise the rights set out in Articles 15–22 of the GDPR:",
        {
          list: [
            "Right of access to your data",
            "Right to rectification",
            "Right to erasure (within legal limits)",
            "Right to restriction of processing",
            "Right to data portability",
            "Right to object (within legal limits)",
            "Right to lodge a complaint with the Italian Data Protection Authority (Garante per la Protezione dei Dati Personali)",
          ],
        },
        "Requests can be sent to info@maxmed.it.",
      ],
    },
  ],
};

export const terms: LegalDoc = {
  eyebrow: "Terms of service",
  title: "Terms of use of this website",
  subtitle: "The terms that apply when you visit and use www.maxmed.it.",
  original: "https://www.maxmed.it/terms",
  sections: [
    {
      id: "general",
      title: "General information",
      blocks: [
        'The website www.maxmed.it (the "Site") is owned by:',
        OWNER,
        '(hereinafter "MaxMed" or the "Company")',
        "By accessing and browsing the Site, you accept these Terms and Conditions in full.",
      ],
    },
    {
      id: "purpose",
      title: "Purpose of the Site",
      blocks: [
        "The Site is used to:",
        {
          list: [
            "Provide information",
            "Describe the services offered by MaxMed",
            "Collect applications for the accreditation of healthcare operators",
            "Give access to the dedicated digital platform",
          ],
        },
        "The Site does not provide healthcare services directly.",
      ],
    },
    {
      id: "use",
      title: "How you may use the Site",
      blocks: [
        "You agree to:",
        {
          list: [
            "Use the Site in accordance with the law",
            "Not use the Site for unlawful purposes",
            "Not attempt unauthorised access",
            "Not interfere with its technical operation",
          ],
        },
        "Any use that could harm the Company or third parties is prohibited.",
      ],
    },
    {
      id: "ip",
      title: "Intellectual property",
      blocks: [
        "All content on the Site, including text, logos, trademarks, images, graphic layout and code, is the exclusive property of MaxMed S.r.l. or used under licence.",
        "Any unauthorised reproduction, distribution or use is prohibited.",
      ],
    },
    {
      id: "liability",
      title: "Limitation of liability",
      blocks: [
        "The information on the Site is for information purposes only.",
        "MaxMed:",
        {
          list: [
            "Does not guarantee that it is free of errors or omissions",
            "Is not liable for damages arising from the use of the information published",
            "Is not liable for temporary interruptions of service",
          ],
        },
        "The Site may contain links to external websites, for which MaxMed accepts no responsibility.",
      ],
    },
    {
      id: "onboarding",
      title: "Applications and onboarding",
      blocks: [
        "Submitting the accreditation request form:",
        {
          list: [
            "Does not mean you are automatically accepted",
            "Does not create a contractual relationship",
          ],
        },
        "A contractual relationship is only formed once the application is approved by the Management and Technical-Scientific Committee and the contractual terms are then accepted electronically.",
      ],
    },
    {
      id: "data-protection",
      title: "Data protection",
      blocks: [
        "The processing of personal data collected through the Site is governed by our Privacy Policy.",
      ],
    },
    {
      id: "security",
      title: "IT security",
      blocks: [
        "MaxMed takes appropriate technical measures to keep the Site secure. However, it cannot guarantee the complete absence of technical vulnerabilities beyond its control.",
      ],
    },
    {
      id: "changes",
      title: "Changes to these Terms",
      blocks: [
        "MaxMed may change these Terms at any time. Changes will be published on the Site and take effect from the date of publication.",
      ],
    },
    {
      id: "law",
      title: "Governing law and jurisdiction",
      blocks: [
        "These Terms are governed by Italian law. Any dispute falls under the jurisdiction of the competent Italian court.",
      ],
    },
  ],
};

export const cookies: LegalDoc = {
  eyebrow: "Cookie policy",
  title: "How we use cookies",
  subtitle: "Cookie policy for www.maxmed.it, under EU Regulation 2016/679 and current Italian law.",
  original: "https://www.maxmed.it/cookie-policy",
  sections: [
    {
      id: "what",
      title: "What cookies are",
      blocks: [
        "Cookies are small text files that websites send to your device (computer, smartphone, tablet), where they are stored and sent back to the same websites on later visits.",
        "Cookies improve your browsing experience, keep the site working and collect statistics.",
      ],
    },
    {
      id: "controller",
      title: "Data controller",
      blocks: ["The controller of data collected through cookies is:", OWNER],
    },
    {
      id: "types",
      title: "Types of cookies we use",
      blocks: [
        "The site may use the following categories of cookies:",
        { heading: "Technical cookies (necessary)" },
        "Essential for the site to work properly. For example:",
        { list: ["Session cookies", "Authentication cookies", "Preference cookies", "Security cookies"] },
        "Legal basis: the Controller's legitimate interest (Art. 6(1)(f) GDPR). They do not require prior consent.",
        { heading: "Analytics cookies (statistics)" },
        "Used to collect aggregate, anonymous information about the number of visitors and how they use the site.",
        "If properly anonymised, they are treated like technical cookies. If not, they require consent. Legal basis: your consent (Art. 6(1)(a) GDPR).",
        { heading: "Profiling cookies (if any)" },
        "If the site uses profiling or marketing tools (e.g. campaign tracking, remarketing), these cookies analyse behaviour, build profiles and personalise content.",
        "They are only set with your explicit prior consent.",
      ],
    },
    {
      id: "consent",
      title: "Managing your consent",
      blocks: [
        "On your first visit, a banner lets you:",
        {
          list: ["Accept all cookies", "Reject all non-necessary cookies", "Customise your preferences"],
        },
        "You can change your consent at any time using the option provided on the site.",
      ],
    },
    {
      id: "duration",
      title: "How long cookies last",
      blocks: [
        "Cookies can be:",
        {
          list: [
            "Session cookies: deleted when you close your browser",
            "Persistent cookies: stored until they expire",
          ],
        },
        "The duration depends on the type of cookie.",
      ],
    },
    {
      id: "sharing",
      title: "Who processes cookie data",
      blocks: [
        "Data collected through cookies may be processed by:",
        { list: ["The site's technical providers", "Analytics providers", "Hosting providers"] },
        "These parties act as data processors.",
      ],
    },
    {
      id: "transfers",
      title: "Transfers outside the EU",
      blocks: [
        "If services are used that involve transferring data to countries outside the EU, the transfer will follow the safeguards set out in the GDPR (e.g. standard contractual clauses).",
      ],
    },
    {
      id: "rights",
      title: "Your rights",
      blocks: [
        "You can exercise the rights set out in Articles 15–22 of the GDPR by contacting the Controller.",
        "You can also lodge a complaint with the Italian Data Protection Authority (Garante per la Protezione dei Dati Personali).",
      ],
    },
    {
      id: "disable",
      title: "How to disable cookies",
      blocks: [
        "Besides the options in the banner, you can manage cookies directly in your browser:",
        {
          list: [
            "Chrome: Settings → Privacy and security → Cookies",
            "Firefox: Settings → Privacy & Security → Cookies",
            "Safari: Settings → Privacy → Cookies",
            "Edge: Settings → Privacy → Cookies",
          ],
        },
        "Note: disabling some cookies may stop parts of the site from working properly.",
      ],
    },
  ],
};

export const legalDocs = {
  en: { privacy, terms, cookies },
  it: { privacy: privacyIt, terms: termsIt, cookies: cookiesIt },
};
export type LegalPageKey = keyof (typeof legalDocs)["en"];
