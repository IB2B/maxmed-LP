/**
 * Security & compliance points.
 *
 * `confirmed: true` items come from the product itself (DASHBOARD.md).
 * `confirmed: false` items are placeholders: check each claim with the MaxMed
 * team, edit the text to match reality, then set `confirmed: true`.
 * Unconfirmed items show a "To confirm" tag on the page.
 */
export const securityPoints = [
  {
    icon: "people",
    title: "Access by role",
    text: "Admins, operators, doctors and managers each see only what their role allows.",
    confirmed: true,
  },
  {
    icon: "key",
    title: "Contracts signed with a one-time code",
    text: "Every contract is confirmed with a code sent by SMS or email, with no paper involved.",
    confirmed: true,
  },
  {
    icon: "credit-card",
    title: "Payments through Stripe",
    text: "Card payments and doctor payouts run through Stripe and Stripe Connect.",
    confirmed: true,
  },
  {
    icon: "shield",
    title: "GDPR compliant",
    text: "[Confirm: GDPR compliance, data processing agreement (DPA) with each facility, DPO contact.]",
    confirmed: false,
  },
  {
    icon: "flag-eu",
    title: "Data hosted in the EU",
    text: "[Confirm: where patient data is stored (Italy / EU) and with which provider.]",
    confirmed: false,
  },
  {
    icon: "locked",
    title: "Encrypted end to end",
    text: "[Confirm: encryption of video calls and stored data, plus any certifications (e.g. ISO 27001).]",
    confirmed: false,
  },
];
