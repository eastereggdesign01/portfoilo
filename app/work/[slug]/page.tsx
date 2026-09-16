import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { Reveal } from "@/components/reveal";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    openGraph: { title: project.title, description: project.tagline },
  };
}

export default async function WorkPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="pt-32 pb-24 md:pt-44">
      {/* 헤더 — 역할·기간·팀이 맨 위. 채용자와 클라이언트가 가장 먼저 스캔하는 정보입니다. */}
      <header className="container-x">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          작업 목록
        </Link>

        <h1 className="text-display mt-8 max-w-4xl">{project.title}</h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
          {project.tagline}
        </p>

        <dl className="mt-14 grid grid-cols-2 gap-y-7 border-t border-[var(--color-line)] pt-8 sm:grid-cols-4">
          {[
            { k: "역할", v: project.role },
            { k: "팀", v: project.team },
            { k: "기간", v: project.duration },
            { k: "연도", v: project.year },
          ].map((row) => (
            <div key={row.k}>
              <dt className="eyebrow">{row.k}</dt>
              <dd className="mt-2 text-sm leading-relaxed">{row.v}</dd>
            </div>
          ))}
        </dl>
      </header>

      {/* 커버 — 실제 스크린샷/영상이 생기면 이 블록을 <Image>나 <video>로 교체하세요 */}
      <div className="container-x mt-14">
        <div
          className={`card noise relative aspect-[16/9] overflow-hidden rounded-3xl bg-gradient-to-br ${project.accent}`}
        >
          <div className="absolute inset-0 grid place-items-center">
            <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-faint)]">
              여기에 제품 스크린샷 또는 30초 데모 영상
            </p>
          </div>
        </div>
      </div>

      <div className="container-x mt-20">
        <div className="max-w-3xl space-y-20">
        <Reveal as="section">
          <h2 className="eyebrow">문제</h2>
          <p className="mt-5 text-lg leading-[1.75]">{project.problem}</p>
        </Reveal>

        <Reveal as="section">
          <h2 className="eyebrow">제약</h2>
          <ul className="mt-5 space-y-3">
            {project.constraints.map((c) => (
              <li key={c} className="flex gap-3.5 text-[15px] leading-relaxed text-[var(--color-muted)]">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" aria-hidden />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* 실력이 가장 잘 보이는 섹션 — 고른 안과 버린 안을 나란히 둡니다 */}
        <Reveal as="section">
          <h2 className="eyebrow">의사결정</h2>
          <ol className="mt-7 space-y-9">
            {project.decisions.map((d, i) => (
              <li key={d.title} className="border-l-2 border-[var(--color-line)] pl-6">
                <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-faint)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-xl tracking-tight">{d.title}</h3>
                <p className="mt-3 leading-relaxed text-[var(--color-muted)]">{d.body}</p>
                {d.rejected && (
                  <p className="mt-4 rounded-xl bg-[var(--color-raised)] p-4 text-sm leading-relaxed text-[var(--color-muted)]">
                    <span className="font-medium text-[var(--color-fg)]">버린 안 — </span>
                    {d.rejected}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal as="section">
          <h2 className="eyebrow">결과</h2>
          <dl className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] shadow-[var(--shadow-card)] sm:grid-cols-3">
            {project.results.map((r) => (
              <div key={r.label} className="bg-[var(--color-surface)] px-6 py-7">
                <dd className="font-[family-name:var(--font-display)] text-3xl tracking-tight">
                  {r.value}
                </dd>
                <dt className="mt-1.5 text-sm text-[var(--color-faint)]">{r.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal as="section">
          <h2 className="eyebrow">다시 한다면</h2>
          <p className="mt-5 leading-[1.75] text-[var(--color-muted)]">{project.retro}</p>
        </Reveal>
        </div>
      </div>

      {/* 다음 케이스로 자연스럽게 흘려보냅니다 */}
      <nav className="container-x mt-24 border-t border-[var(--color-line)] pt-10">
        <Link href={`/work/${next.slug}`} className="group block">
          <p className="eyebrow">다음 작업</p>
          <p className="text-section mt-3 transition-transform duration-300 group-hover:translate-x-2">
            {next.title}
          </p>
        </Link>
      </nav>
    </article>
  );
}
