"use client";

import { useMemo, useState } from "react";
import { Section } from "./section";
import { Reveal } from "./reveal";

/**
 * 읽는 것보다 만져보는 게 강합니다.
 * 디자인 토큰을 슬라이더로 바꾸면 컴포넌트와 CSS가 동시에 반응합니다 —
 * "디자인과 코드를 한 소스로 다룬다"는 말을 문장 대신 보여주는 섹션.
 */

const controls = [
  { key: "hue", label: "Accent hue", min: 0, max: 360, step: 1, unit: "°" },
  { key: "radius", label: "Radius", min: 0, max: 28, step: 1, unit: "px" },
  { key: "density", label: "Density", min: 8, max: 28, step: 1, unit: "px" },
] as const;

type Key = (typeof controls)[number]["key"];

export function Playground() {
  const [values, setValues] = useState<Record<Key, number>>({
    hue: 258,
    radius: 14,
    density: 16,
  });
  const [copied, setCopied] = useState(false);

  const accent = `oklch(0.62 0.19 ${values.hue})`;
  const accentSoft = `oklch(0.62 0.19 ${values.hue} / 0.14)`;

  const css = useMemo(
    () =>
      `:root {\n  --accent: ${accent};\n  --radius-md: ${values.radius}px;\n  --space-4: ${values.density}px;\n}`,
    [accent, values.radius, values.density],
  );

  async function copy() {
    try {
      await navigator.clipboard.writeText(css);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // 클립보드 권한이 없으면 조용히 넘어갑니다 — 코드 블록은 그대로 보입니다.
    }
  }

  return (
    <Section
      eyebrow="Playground"
      title="토큰을 바꾸면 컴포넌트가 따라옵니다."
      lead="제가 만드는 디자인 시스템이 어떻게 동작하는지 직접 만져보세요. 슬라이더를 움직이면 아래 미리보기와 CSS가 같은 소스에서 동시에 갱신됩니다."
    >
      <Reveal>
        <div className="grid gap-5 lg:grid-cols-[minmax(0,20rem)_1fr]">
          {/* 컨트롤 */}
          <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
            <div className="space-y-6">
              {controls.map((c) => (
                <div key={c.key}>
                  <div className="mb-2.5 flex items-baseline justify-between">
                    <label htmlFor={c.key} className="text-sm text-[var(--color-muted)]">
                      {c.label}
                    </label>
                    <output
                      htmlFor={c.key}
                      className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-faint)]"
                    >
                      {values[c.key]}
                      {c.unit}
                    </output>
                  </div>
                  <input
                    id={c.key}
                    type="range"
                    min={c.min}
                    max={c.max}
                    step={c.step}
                    value={values[c.key]}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, [c.key]: Number(e.target.value) }))
                    }
                    className="w-full accent-[var(--color-accent)]"
                    style={{ accentColor: accent }}
                  />
                </div>
              ))}
            </div>

            <pre className="mt-7 overflow-x-auto rounded-xl bg-[var(--color-raised)] p-4 font-[family-name:var(--font-mono)] text-[11px] leading-relaxed text-[var(--color-muted)]">
              <code>{css}</code>
            </pre>
            <button
              type="button"
              onClick={copy}
              className="mt-3 w-full rounded-xl border border-[var(--color-line)] py-2.5 text-sm transition-colors hover:bg-[var(--color-raised)]"
            >
              {copied ? "복사했습니다" : "CSS 복사"}
            </button>
          </div>

          {/* 라이브 미리보기 */}
          <div
            className="noise relative grid place-items-center overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8"
            style={{ backgroundImage: `radial-gradient(60rem 24rem at 50% -20%, ${accentSoft}, transparent)` }}
          >
            <div
              className="relative w-full max-w-sm border border-[var(--color-line)] bg-[var(--color-bg)]"
              style={{
                borderRadius: values.radius + 6,
                padding: values.density + 8,
              }}
            >
              <div className="flex items-center gap-3" style={{ marginBottom: values.density }}>
                <div
                  className="grid size-9 shrink-0 place-items-center text-sm font-semibold text-white"
                  style={{ background: accent, borderRadius: values.radius }}
                  aria-hidden
                >
                  A
                </div>
                <div>
                  <p className="text-sm font-medium">Atlas 워크스페이스</p>
                  <p className="text-xs text-[var(--color-faint)]">멤버 12명</p>
                </div>
              </div>

              <div
                className="h-1.5 w-full overflow-hidden bg-[var(--color-raised)]"
                style={{ borderRadius: values.radius }}
              >
                <div className="h-full w-[68%]" style={{ background: accent }} />
              </div>
              <p className="mt-2 text-xs text-[var(--color-faint)]">이관 진행률 68%</p>

              <div className="flex gap-2" style={{ marginTop: values.density + 4 }}>
                <button
                  type="button"
                  className="flex-1 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  style={{
                    background: accent,
                    borderRadius: values.radius,
                    padding: `${Math.round(values.density * 0.6)}px`,
                  }}
                >
                  초대하기
                </button>
                <button
                  type="button"
                  className="flex-1 border border-[var(--color-line)] text-sm font-medium transition-colors hover:bg-[var(--color-raised)]"
                  style={{
                    borderRadius: values.radius,
                    padding: `${Math.round(values.density * 0.6)}px`,
                  }}
                >
                  설정
                </button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
