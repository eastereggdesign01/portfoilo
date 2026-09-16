import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type Props = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, lead, children, className = "" }: Props) {
  return (
    <section id={id} className={`border-t border-[var(--color-line)] py-20 md:py-28 ${className}`}>
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="text-section mt-4 max-w-3xl">{title}</h2>
          {lead && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-muted)]">
              {lead}
            </p>
          )}
        </Reveal>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
