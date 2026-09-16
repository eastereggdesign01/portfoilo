import { about, site } from "@/content/site";
import { Reveal } from "./reveal";
import { Section } from "./section";

const groups = [
  { label: "Design", items: about.stack.design },
  { label: "Code", items: about.stack.code },
  { label: "Etc", items: about.stack.etc },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="디자인과 구현 사이에 핸드오프가 없습니다."
    >
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <Reveal>
          <div className="space-y-5">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 16)} className="text-base leading-[1.75] text-[var(--color-muted)]">
                {p}
              </p>
            ))}
          </div>
          <p className="mt-8 font-[family-name:var(--font-mono)] text-xs text-[var(--color-faint)]">
            {site.location} · {site.role}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="space-y-7">
            {groups.map((g) => (
              <div key={g.label}>
                <dt className="eyebrow">{g.label}</dt>
                <dd className="mt-3 flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1.5 text-sm text-[var(--color-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
