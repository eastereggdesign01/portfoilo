"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/content/site";
import { ThemeToggle } from "./theme-toggle";

const items = [
  { href: "/#work", label: "작업" },
  { href: "/#services", label: "서비스" },
  { href: "/#about", label: "소개" },
];

export function Nav() {
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reduced ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-3 z-50 flex justify-center px-4 md:top-5"
    >
      <nav
        className={`flex w-full max-w-3xl items-center gap-2 rounded-full border px-2.5 py-2 transition-all duration-300 ${
          scrolled
            ? "glass border-[var(--color-line)] shadow-[0_8px_32px_rgba(0,0,0,0.28)]"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="ml-2 mr-auto flex items-center gap-2 text-sm font-medium tracking-tight"
        >
          <span className="size-2 rounded-full bg-[var(--color-accent)]" aria-hidden />
          {site.name}
        </Link>

        <ul className="hidden items-center gap-1 sm:flex">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm text-[var(--color-muted)] transition-colors hover:bg-[var(--color-raised)] hover:text-[var(--color-fg)]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <ThemeToggle />

        <Link
          href="/#contact"
          className="hidden rounded-full bg-[var(--color-fg)] px-4 py-1.5 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-85 sm:block"
        >
          프로젝트 문의
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="메뉴 열기"
          className="grid size-8 place-items-center rounded-full text-[var(--color-muted)] sm:hidden"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d={open ? "M6 6l12 12M18 6L6 18" : "M4 8h16M4 16h16"}
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="glass absolute inset-x-4 top-16 rounded-2xl border p-2 sm:hidden">
          {[...items, { href: "/#contact", label: "프로젝트 문의" }].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-[var(--color-muted)] transition-colors hover:bg-[var(--color-raised)] hover:text-[var(--color-fg)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </motion.header>
  );
}
