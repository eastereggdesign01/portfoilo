import { services, process } from "@/content/site";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="무엇을 어디까지 하는지."
      lead="기술 스택을 아이콘으로 나열하는 대신, 맡길 수 있는 일의 범위와 기간을 적었습니다. 견적을 가늠하시는 데 쓰세요."
    >
      <ul className="grid gap-px overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-3">
        {services.map((service, i) => (
          <Reveal as="li" key={service.title} delay={i * 0.08}>
            <div className="flex h-full flex-col bg-[var(--color-surface)] p-7 md:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-medium tracking-tight">{service.title}</h3>
                <span className="shrink-0 font-[family-name:var(--font-mono)] text-xs text-[var(--color-faint)]">
                  {service.duration}
                </span>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-muted)]">
                {service.body}
              </p>
              <ul className="mt-auto space-y-2 pt-7">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2.5 text-sm text-[var(--color-muted)]">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0 text-[var(--color-accent)]">
                      <path d="M4 12.5l5 5L20 6.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ul>

      {/* 진행 방식 — 프리랜스 문의에서 가장 자주 나오는 불안을 미리 해소합니다 */}
      <Reveal className="mt-5">
        <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-7 md:p-9">
          <p className="eyebrow">How we work</p>
          <ol className="mt-7 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <li key={p.step}>
                <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent)]">
                  {p.step}
                </span>
                <h4 className="mt-2.5 text-base font-medium">{p.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </Section>
  );
}
