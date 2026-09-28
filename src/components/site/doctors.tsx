import { Divider, Frame } from "@/components/site/frame";
import { DoctorForm } from "@/components/site/doctor-form";
import { GreenCheck } from "@/components/site/green-check";
import { DoctorReportsMockup } from "@/components/site/doctor-reports-mockup";

const benefits = [
  {
    title: "Paid for every hour",
    text: "Your hours are tracked from the moment you start a shift, with a reminder after 5 minutes of inactivity.",
  },
  {
    title: "A clear report every month",
    text: "Hours, hourly rate and total for the month, ready to view or download.",
  },
  {
    title: "Paid your way",
    text: "Receive payouts by bank transfer or through Stripe Connect.",
  },
  {
    title: "Your schedule, your call",
    text: "Set your availability, see colleagues' schedules and take consultations from the queue.",
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="scroll-mt-[68px]">
      <Frame>
        <div className="grid gap-px bg-hairline lg:grid-cols-2">
          <div className="bg-white px-5 py-16 sm:px-10 sm:py-20">
            <p className="font-mono text-[13px] font-medium tracking-wider text-[#e5533d] uppercase">
              For doctors
            </p>
            <h2 className="mt-4 text-[34px] leading-[1.1] font-semibold tracking-[-0.045em] text-balance text-ink sm:text-[44px]">
              Consult from anywhere. Get paid for every hour.
            </h2>
            <ul className="mt-10 space-y-6">
              {benefits.map((b) => (
                <li key={b.title} className="flex gap-3.5">
                  {/* mt-1 centres the 20px tick on the 28px title line. */}
                  <GreenCheck className="mt-1" />
                  <div>
                    <p className="text-base leading-7 font-semibold tracking-[-0.015em] text-ink">{b.title}</p>
                    <p className="text-[15px] leading-6 tracking-[-0.005em] text-body">{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden place-items-center bg-[#eef3fb] p-10 lg:grid">
            <DoctorReportsMockup />
          </div>
        </div>
      </Frame>

      <Divider />
      <Frame className="px-5 py-10 sm:px-10">
        <p className="mb-6 text-xl leading-7 font-semibold tracking-[-0.02em] text-ink">
          Apply to join the MaxMed network
        </p>
        <DoctorForm />
      </Frame>
      <Divider />
    </section>
  );
}
