import Link from "next/link";
import { featured } from "@/content/projects";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function WorkGrid() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="개수보다 깊이."
      lead="제가 무엇을 골랐고 무엇을 버렸는지까지 적었습니다. 결과 화면만 보는 것보다 훨씬 많은 게 보이실 겁니다."
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {featured.map((project, i) => (
          <Reveal
            as="li"
            key={project.slug}
            delay={i * 0.08}
            // 첫 번째 케이스는 히어로급으로 크게 — 작업물이 곧 비주얼입니다
            className={i === 0 ? "md:col-span-2" : ""}
          >
            <Link
              href={`/work/${project.slug}`}
              className="group relative block h-full overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-7 transition-all duration-500 hover:border-[color-mix(in_oklab,var(--color-accent)_45%,transparent)] md:p-9"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-70 transition-opacity duration-500 group-hover:opacity-100 ${project.accent}`}
              />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-faint)]">
                    {project.year}
                  </span>
                  <span className="h-px flex-1 bg-[var(--color-line)]" />
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-faint)]">
                    {project.duration}
                  </span>
                </div>

                <h3 className="mt-7 font-[family-name:var(--font-display)] text-2xl tracking-tight md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[var(--color-muted)]">
                  {project.tagline}
                </p>

                {/* 케이스 카드에서도 숫자를 미리 보여줍니다 */}
                <dl className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
                  {project.results.slice(0, i === 0 ? 3 : 2).map((r) => (
                    <div key={r.label}>
                      <dd className="font-[family-name:var(--font-display)] text-xl tracking-tight">
                        {r.value}
                      </dd>
                      <dt className="mt-0.5 text-xs text-[var(--color-faint)]">{r.label}</dt>
                    </div>
                  ))}
                </dl>

                <div className="mt-auto flex items-center justify-between pt-9">
                  <ul className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-[var(--color-line)] px-2.5 py-1 text-xs text-[var(--color-muted)]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <span className="flex items-center gap-1.5 text-sm font-medium transition-transform duration-300 group-hover:translate-x-1">
                    자세히
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
