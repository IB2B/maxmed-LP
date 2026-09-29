import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Divider, Frame } from "@/components/site/frame";
import { legalDocs, type LegalBlock, type LegalPageKey } from "@/data/legal";
import { getDictionary, type Locale } from "@/i18n/config";

const link = "text-ink underline decoration-hairline decoration-1 underline-offset-4 hover:decoration-ink";

function Block({ block }: { block: LegalBlock }) {
  if (typeof block === "string") return <p>{block}</p>;
  if ("heading" in block) {
    return <h3 className="pt-3 text-base leading-6 font-semibold tracking-[-0.01em] text-ink">{block.heading}</h3>;
  }
  if ("lines" in block) {
    return (
      <p className="rounded-lg bg-canvas px-4 py-3 text-ink">
        {block.lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </p>
    );
  }
  return (
    <ul className="space-y-2">
      {block.list.map((item) => (
        <li key={item} className="relative pl-5">
          <span aria-hidden className="absolute top-[11px] left-1 size-1 rounded-full bg-faint" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Shared layout for the privacy, terms and cookie pages, split like the FAQ section. */
export function LegalPage({ lang, page }: { lang: Locale; page: LegalPageKey }) {
  const doc = legalDocs[lang][page];
  const t = getDictionary(lang).legal;
  const [noteBefore, noteAfter] = t.translationNote.split("{link}");

  return (
    <div className="flex flex-1 flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Frame className="px-5 py-20 text-center sm:px-10 sm:py-24">
          <p className="font-mono text-[13px] font-medium tracking-wider text-[#e5533d] uppercase">
            {doc.eyebrow}
          </p>
          <h1 className="mx-auto mt-4 max-w-[640px] text-[34px] leading-[1.1] font-semibold tracking-[-0.045em] text-balance text-ink sm:text-[48px]">
            {doc.title}
          </h1>
          <p className="mx-auto mt-5 max-w-[520px] text-[17px] leading-7 tracking-normal text-balance text-body">
            {doc.subtitle}
          </p>
        </Frame>

        <Divider />
        <Frame>
          <div className="grid gap-px bg-hairline lg:grid-cols-[320px_1fr]">
            <aside className="bg-white px-5 py-10 sm:px-10 lg:py-14">
              {/* Stays in view while the sections scroll past. */}
              <div className="lg:sticky lg:top-[124px]">
                <p className="font-mono text-xs font-medium tracking-wider text-mute uppercase">{t.onThisPage}</p>
                <ol className="mt-4 space-y-2.5">
                  {doc.sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-[15px] leading-5 tracking-[-0.01em] text-body transition-colors hover:text-ink"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
                {doc.original && (
                  <p className="mt-8 border-t border-hairline pt-6 text-[13px] leading-5 tracking-[-0.005em] text-mute">
                    {noteBefore}
                    <a href={doc.original} target="_blank" rel="noopener noreferrer" className={link}>
                      {t.originalLink}
                    </a>
                    {noteAfter}
                  </p>
                )}
              </div>
            </aside>

            <div className="bg-white">
              {doc.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-[68px] border-b border-hairline px-5 py-10 sm:px-10 sm:py-12"
                >
                  <h2 className="text-[22px] leading-7 font-semibold tracking-[-0.03em] text-ink">
                    {section.title}
                  </h2>
                  <div className="mt-4 max-w-[620px] space-y-4 text-[15px] leading-6 tracking-[-0.005em] text-body">
                    {section.blocks.map((block, j) => (
                      <Block key={j} block={block} />
                    ))}
                  </div>
                </section>
              ))}

              <div className="px-5 py-10 sm:px-10 sm:py-12">
                <h2 className="text-[22px] leading-7 font-semibold tracking-[-0.03em] text-ink">{t.questions}</h2>
                <p className="mt-3 max-w-[620px] text-[15px] leading-6 tracking-[-0.005em] text-body">
                  {t.writeUs}{" "}
                  <a href="mailto:info@maxmed.it" className={link}>
                    info@maxmed.it
                  </a>{" "}
                  {t.orCall}{" "}
                  <a href="tel:+390350510059" className={link}>
                    +39 0350510059
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </Frame>
        <Divider />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
