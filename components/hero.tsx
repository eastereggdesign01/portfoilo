"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { site, stats } from "@/content/site";

export function Hero() {
  const reduced = useReducedMotion();

  const rise = (i: number) => ({
    "data-reveal": true,
    initial: reduced ? { opacity: 1 } : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="noise relative overflow-hidden pt-36 pb-20 md:pt-48 md:pb-28">
      {/* 배경 그라디언트 blob — 색을 아껴 쓰되 깊이를 만듭니다 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[38rem] w-[62rem] -translate-x-1/2 rounded-full opacity-60 blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--color-accent) 42%, transparent), transparent)",
        }}
      />

      <div className="container-x">
        {site.availability.open && (
          <motion.div {...rise(0)} className="mb-8">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] py-1.5 pr-4 pl-3 text-sm text-[var(--color-muted)]">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              {site.availability.label}
            </span>
          </motion.div>
        )}

        <h1 className="text-display max-w-5xl">
          {site.headline.map((line, i) => (
            <motion.span key={line} {...rise(i + 1)} className="block">
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          {...rise(site.headline.length + 1)}
          className="mt-8 max-w-xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg"
        >
          {site.subline}
        </motion.p>

        <motion.div
          {...rise(site.headline.length + 2)}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            href="#contact"
            className="rounded-full bg-[var(--color-fg)] px-6 py-3 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-85"
          >
            프로젝트 문의하기
          </Link>
          <Link
            href="#work"
            className="rounded-full border border-[var(--color-line)] px-6 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-raised)]"
          >
            작업 보기
          </Link>
        </motion.div>

        {/* 숫자는 형용사 열 개보다 강합니다 */}
        <motion.dl
          {...rise(site.headline.length + 3)}
          className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[var(--color-surface)] px-6 py-7">
              <dt className="text-sm text-[var(--color-faint)]">{stat.label}</dt>
              <dd className="mt-1.5 font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
