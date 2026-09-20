import Link from "next/link";
export default function NotFound() {
  return (
    <main className="not-found section-shell" id="main">
      <span className="eyebrow">A SMALL DETOUR</span>
      <h1>Off course.</h1>
      <p>That page isn’t on our flight plan. Let’s get you back.</p>
      <Link href="/" className="button">
        Back to Zavino ↗
      </Link>
    </main>
  );
}
