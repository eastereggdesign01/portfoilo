"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/content/site";

export function Contact() {
  const reduced = useReducedMotion();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <section
      id="contact"
      className="noise relative overflow-hidden border-t border-[var(--color-line)] py-24 md:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-52 left-1/2 -z-10 h-[34rem] w-[56rem] -translate-x-1/2 rounded-full opacity-55 blur-[130px]"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--color-accent) 45%, transparent), transparent)",
        }}
      />

      <div className="container-x text-center">
        <motion.div
          data-reveal
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">Contact</p>
          <h2 className="text-display-md mx-auto mt-5 max-w-2xl">
            지금 만들고 계신 걸 같이 보죠.
          </h2>
          <p className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-[var(--color-muted)]">
            어떤 문제를 풀고 계신지 한두 문단만 보내주세요. 제가 적임이 아니라고
            판단되면 그렇게 말씀드리고, 가능하면 더 맞는 사람을 소개해 드립니다.
            보통 하루 안에 답장합니다.
          </p>

          <div className="mt-11 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("프로젝트 문의")}`}
              className="rounded-full bg-[var(--color-fg)] px-7 py-3.5 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-85"
            >
              메일 보내기
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="rounded-full border border-[var(--color-line)] px-7 py-3.5 font-[family-name:var(--font-mono)] text-sm transition-colors hover:bg-[var(--color-raised)]"
            >
              {copied ? "주소를 복사했습니다" : site.email}
            </button>
            {site.links.booking && (
              <a
                href={site.links.booking}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--color-line)] px-7 py-3.5 text-sm transition-colors hover:bg-[var(--color-raised)]"
              >
                30분 통화 예약
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
