"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** 같은 그룹 안에서 순차 등장시킬 때 쓰는 지연 (초) */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

/**
 * 스크롤 진입 시 20px 아래에서 올라오며 나타납니다.
 * Framer 사이트 특유의 리듬은 이 하나의 프리미티브에서 거의 다 나옵니다.
 * reduced-motion 설정에서는 움직임 없이 그냥 보입니다.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: Props) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      data-reveal
      className={className}
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
