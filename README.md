# portfoilo

김수빈 — 디자인 엔지니어 포트폴리오 / 프리랜스 수주용 사이트.

Next.js 16 · React 19 · Tailwind CSS 4 · Motion 13 · TypeScript

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 전 페이지 정적 생성
```

## 어디를 고치면 되나

내용은 전부 `content/` 안에 있습니다. 컴포넌트를 건드릴 일은 거의 없습니다.

| 파일 | 내용 |
| --- | --- |
| `content/site.ts` | 이름·한 줄 소개·연락처·링크·가용 상태·서비스·진행 방식·소개글·FAQ |
| `content/projects.ts` | 케이스 스터디. 항목을 추가하면 `/work/<slug>` 페이지가 자동 생성됩니다 |
| `app/globals.css` | 디자인 토큰 (색·타이포 스케일·여백). 액센트 색은 `--color-accent` 하나 |

지금 들어있는 값은 **전부 예시**입니다. 실제 내용으로 바꾸기 전까지는 배포하지 마세요.

## 구조

```
app/
  layout.tsx            메타데이터, 폰트, 테마 부트스트랩, 스킵 링크
  page.tsx              홈 — 섹션 조립만 담당
  work/[slug]/page.tsx  케이스 스터디 상세 (SSG)
  globals.css           토큰 + 베이스 스타일
components/
  reveal.tsx            스크롤 진입 애니메이션 프리미티브 — 사이트 리듬의 대부분
  nav.tsx               플로팅 pill 네비 + 모바일 메뉴
  hero.tsx              가용 상태 배지 · 대형 타이포 · CTA · 지표
  work-grid.tsx         선별 작업 (첫 항목은 2칸)
  playground.tsx        토큰 슬라이더 인터랙티브 데모
  services.tsx          서비스 범위 + 진행 방식 4단계
  about.tsx  faq.tsx  contact.tsx  footer.tsx  clients.tsx
content/
  site.ts  projects.ts
```

## 설계 원칙

- **라이트가 기본, 다크는 토글.** 제품 스크린샷 대부분이 라이트 UI라서, 밝은 배경이어야
  작업물이 페이지에 자연스럽게 얹힙니다. 클라이언트도 대부분 밝은 환경에서 봅니다.
- **두 테마를 따로 설계했습니다.** 라이트는 그림자(`--shadow-card`)로 위계를 만들고,
  다크는 테두리로 만듭니다. blob 불투명도와 노이즈 블렌드 모드도 테마마다 다릅니다.
- **액센트 색은 하나.** 색을 아껴 쓰는 것이 고급스러움의 핵심입니다.
- **모션은 양념.** 진입 fade-up 0.6s, 호버 전환 0.3s 이하. 스크롤을 뺏지 않습니다.
- **`prefers-reduced-motion`을 전부 존중합니다.** 마키·리빌·전환 모두 꺼집니다.
- **JS 없이도 본문이 보입니다.** `<noscript>`가 리빌 요소를 강제로 노출시킵니다.
- **한글 줄바꿈은 `word-break: keep-all`.** 없으면 단어가 중간에서 잘립니다.
- **케이스 스터디에는 버린 안을 적습니다.** 고른 것보다 버린 것에서 실력이 보입니다.

## 배포 전 체크리스트

- [ ] `content/site.ts` · `content/projects.ts`를 실제 내용으로 교체
- [ ] `app/layout.tsx`의 `metadataBase`를 실제 도메인으로 변경
- [ ] OG 이미지 추가 (`app/opengraph-image.tsx` 또는 `public/og.png`)
- [ ] 케이스 스터디 커버 자리에 실제 스크린샷 / 30초 데모 영상 삽입
- [ ] 파비콘 (`app/icon.png`)
- [ ] 예약 링크(`links.booking`)와 이력서 링크 연결 — 비워두면 버튼이 자동으로 사라집니다
- [ ] Lighthouse 확인 (성능·접근성 모두 95+ 목표)

본문 대비는 두 테마 모두 WCAG AA를 넘습니다 (본문 18:1+, 보조 6.6:1+, 라벨 4.8:1).
