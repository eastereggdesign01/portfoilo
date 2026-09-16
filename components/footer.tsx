import { site } from "@/content/site";

const social = [
  { key: "github", label: "GitHub" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "x", label: "X" },
  { key: "resume", label: "이력서" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  const links = social.filter((s) => site.links[s.key]);

  return (
    <footer className="border-t border-[var(--color-line)] py-10">
      <div className="container-x flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <p className="text-sm text-[var(--color-faint)]">
          © {year} {site.name} · {site.nameEn}
        </p>
        <ul className="flex flex-wrap items-center gap-5">
          {links.map((s) => (
            <li key={s.key}>
              <a
                href={site.links[s.key]}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
