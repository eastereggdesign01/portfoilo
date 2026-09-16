import { faqs } from "@/content/site";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Faq() {
  return (
    <Section
      eyebrow="FAQ"
      title="문의 전에 궁금하실 것들."
      lead="메일로 가장 자주 받는 질문을 미리 적어뒀습니다. 여기 없는 건 편하게 물어보세요."
    >
      <div className="max-w-3xl divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
        {faqs.map((faq, i) => (
          <Reveal key={faq.q} delay={i * 0.05}>
            {/* 네이티브 details — JS 없이 동작하고 스크린 리더에서도 정확합니다 */}
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[15px] font-medium [&::-webkit-details-marker]:hidden">
                {faq.q}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                  className="shrink-0 text-[var(--color-faint)] transition-transform duration-300 group-open:rotate-45"
                >
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="mt-3 max-w-2xl pr-10 text-[15px] leading-relaxed text-[var(--color-muted)]">
                {faq.a}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
