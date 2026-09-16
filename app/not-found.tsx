import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x grid min-h-[70vh] place-items-center py-32 text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="text-section mt-4">여기엔 아무것도 없습니다.</h1>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-[var(--color-fg)] px-6 py-3 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-85"
        >
          홈으로
        </Link>
      </div>
    </section>
  );
}
