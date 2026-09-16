// 케이스 스터디. 3~4개면 충분합니다. 개수보다 깊이가 중요합니다.
// 각 항목이 /work/[slug] 상세 페이지로 자동 생성됩니다.

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  team: string;
  duration: string;
  tags: string[];
  // 카드 배경 그라디언트. 실제 스크린샷이 생기면 cover 필드로 교체하세요.
  accent: string;
  cover?: string;
  featured?: boolean;
  // ── 상세 페이지 ──
  problem: string;
  constraints: string[];
  // 실력이 가장 잘 드러나는 부분. 버린 선택지와 그 이유를 꼭 적으세요.
  decisions: { title: string; body: string; rejected?: string }[];
  results: { value: string; label: string }[];
  retro: string;
};

export const projects: Project[] = [
  {
    slug: "atlas-design-system",
    title: "Atlas 디자인 시스템",
    tagline: "3개 제품, 40명의 팀이 쓰는 컴포넌트 라이브러리를 처음부터 세웠습니다.",
    year: "2025",
    role: "디자인 시스템 리드 (디자인 + 구현)",
    team: "디자이너 2 · 엔지니어 4",
    duration: "5개월",
    tags: ["Design System", "React", "Figma Variables"],
    accent: "from-indigo-500/25 via-violet-500/10 to-transparent",
    featured: true,
    problem:
      "제품 3개가 각자 만든 버튼이 27종이었습니다. 새 화면 하나 만들 때마다 어떤 버튼을 쓸지 논쟁이 붙었고, 브랜드 리뉴얼 때는 손으로 고쳐야 할 곳이 몇 군데인지 아무도 몰랐습니다.",
    constraints: [
      "기존 제품을 멈추지 않고 점진적으로 이관해야 함",
      "디자이너 2명 중 1명은 코드를 읽지 못함",
      "레거시 제품 하나는 React 17에 묶여 있었음",
    ],
    decisions: [
      {
        title: "피그마 변수를 단일 소스로 두고 코드 토큰을 생성",
        body: "디자이너가 피그마에서 값을 바꾸면 CI가 토큰 JSON을 뽑아 PR을 엽니다. 디자인과 코드가 어긋날 수 없는 구조를 만들었습니다.",
        rejected:
          "코드를 단일 소스로 두는 안도 검토했지만, 코드를 못 읽는 디자이너가 있는 팀에서는 결국 아무도 값을 못 바꾸게 됩니다. 도구가 아니라 팀에 맞춰야 했습니다.",
      },
      {
        title: "한 번에 이관하지 않고 어댑터 레이어를 둠",
        body: "기존 컴포넌트를 새 API로 감싸는 얇은 어댑터를 두고, 화면을 건드릴 일이 생길 때마다 하나씩 교체했습니다. 4개월에 걸쳐 자연스럽게 82%가 이관됐습니다.",
        rejected:
          "전면 교체 스프린트를 제안받았지만, 제품 로드맵을 3주 멈춰야 했습니다. 그 비용을 정당화할 수 없었습니다.",
      },
      {
        title: "컴포넌트마다 접근성 테스트를 CI에 강제",
        body: "Storybook + axe로 위반이 있으면 머지가 막힙니다. 처음엔 반발이 있었지만, 규칙이 사람이 아니라 봇에게서 나오니 논쟁이 사라졌습니다.",
      },
    ],
    results: [
      { value: "27 → 3", label: "버튼 변형 개수" },
      { value: "-41%", label: "신규 화면 구현 시간" },
      { value: "82%", label: "4개월 내 이관율" },
    ],
    retro:
      "다시 한다면 문서화를 더 일찍 시작했을 겁니다. 컴포넌트는 3주 만에 나왔는데 쓰는 법을 아무도 몰라서 두 달간 제가 슬랙 봇 노릇을 했습니다.",
  },
  {
    slug: "lumen-onboarding",
    title: "Lumen 온보딩 재설계",
    tagline: "가입 후 첫 5분을 다시 만들어 활성화율을 18% 올렸습니다.",
    year: "2025",
    role: "프로덕트 디자이너 + 프론트엔드",
    team: "PM 1 · 엔지니어 2",
    duration: "7주",
    tags: ["Product", "A/B Test", "Motion"],
    accent: "from-emerald-500/25 via-teal-500/10 to-transparent",
    featured: true,
    problem:
      "가입은 잘 되는데 첫 주에 62%가 사라졌습니다. 세션 리플레이를 200개 봤더니, 빈 대시보드를 보고 무엇을 해야 할지 몰라 나가는 패턴이 반복됐습니다.",
    constraints: [
      "데이터 연동 전에는 보여줄 게 실제로 없음",
      "기존 온보딩 실험 2개가 모두 실패한 이력",
      "모바일 웹 비중 58%",
    ],
    decisions: [
      {
        title: "튜토리얼 대신 샘플 데이터가 든 워크스페이스로 시작",
        body: "빈 화면을 설명하는 대신, 이미 채워진 예시 워크스페이스를 주고 만져보게 했습니다. 가치를 말로 설명하지 않고 보여주는 쪽을 택했습니다.",
        rejected:
          "단계별 코치마크 투어를 먼저 만들었는데, 사용성 테스트에서 6명 중 5명이 첫 화면에서 건너뛰기를 눌렀습니다. 폐기했습니다.",
      },
      {
        title: "진행 상태를 체크리스트가 아니라 워크스페이스 안에 녹임",
        body: "별도 체크리스트 위젯은 '숙제'처럼 느껴집니다. 대신 미완료 항목을 실제 UI 안에 부드러운 힌트로 배치했습니다.",
      },
      {
        title: "모션은 200ms 이하, reduced-motion에서 전부 제거",
        body: "전환을 부드럽게 하되 기다리게 만들지 않았습니다. 모션 때문에 온보딩이 느려지면 본말전도입니다.",
      },
    ],
    results: [
      { value: "+18%", label: "7일 활성화율" },
      { value: "-34%", label: "첫 세션 이탈" },
      { value: "4.2 → 1.1s", label: "첫 화면 LCP" },
    ],
    retro:
      "샘플 데이터를 지우는 경로를 늦게 만들어서, 실제 데이터를 넣은 뒤에도 예시가 남아 혼란을 준 케이스가 있었습니다. 진입만 설계하고 퇴장을 안 설계한 실수였습니다.",
  },
  {
    slug: "north-editor",
    title: "North 에디터",
    tagline: "협업 문서 에디터의 인터랙션을 60fps로 유지하며 다시 만들었습니다.",
    year: "2024",
    role: "디자인 엔지니어 (단독)",
    team: "백엔드 2와 협업",
    duration: "3개월",
    tags: ["Editor", "Performance", "Realtime"],
    accent: "from-amber-500/25 via-orange-500/10 to-transparent",
    featured: true,
    problem:
      "문서가 300블록을 넘으면 타이핑에 눈에 띄는 지연이 생겼습니다. 동시 편집 중에는 커서가 튀어서 두 사람이 같은 문단을 못 만졌습니다.",
    constraints: [
      "기존 문서 포맷을 유지해야 함 (마이그레이션 불가)",
      "오프라인 편집 지원 필수",
      "저사양 크롬북 사용자가 주요 고객군",
    ],
    decisions: [
      {
        title: "블록 단위 가상화 + 로컬 상태 분리",
        body: "화면 밖 블록을 렌더링에서 제외하고, 타이핑 중인 블록만 로컬 상태로 떼어 리렌더 범위를 좁혔습니다. 300블록 문서에서 입력 지연이 사라졌습니다.",
        rejected:
          "에디터 프레임워크를 통째로 교체하는 안이 있었지만, 문서 포맷 마이그레이션이 필요해서 데이터 손실 위험이 있었습니다.",
      },
      {
        title: "원격 커서를 CSS 트랜스폼으로만 움직임",
        body: "레이아웃을 건드리지 않고 GPU 합성만으로 커서를 이동시켰습니다. 동시 편집자가 8명일 때도 프레임이 떨어지지 않습니다.",
      },
    ],
    results: [
      { value: "60fps", label: "1000블록 문서에서도 유지" },
      { value: "-73%", label: "입력 지연 (p95)" },
      { value: "8명", label: "동시 편집 안정 지원" },
    ],
    retro:
      "성능에 집중하느라 접근성을 나중에 붙였고, 결국 키보드 내비게이션을 두 번 만들었습니다. 가상화와 포커스 관리는 처음부터 같이 설계했어야 했습니다.",
  },
];

export const featured = projects.filter((p) => p.featured);
