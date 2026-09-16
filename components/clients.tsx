import { clients } from "@/content/site";

/** 로고 마키. 로고 이미지가 생기면 텍스트를 <Image>로 바꾸세요. */
export function Clients() {
  if (clients.length === 0) return null;
  const row = [...clients, ...clients];

  return (
    <section
      aria-label="함께 일한 곳"
      className="relative overflow-hidden border-t border-[var(--color-line)] py-10"
    >
      {/* 양 끝 페이드 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--color-bg)] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--color-bg)] to-transparent"
      />
      <ul className="flex w-max animate-[marquee_38s_linear_infinite] items-center gap-16 px-8 motion-reduce:animate-none">
        {row.map((name, i) => (
          <li
            key={`${name}-${i}`}
            aria-hidden={i >= clients.length}
            className="font-[family-name:var(--font-display)] text-xl tracking-tight whitespace-nowrap text-[var(--color-faint)]"
          >
            {name}
          </li>
        ))}
      </ul>
      <style>{`@keyframes marquee { to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}
