import Link from "next/link";
export default function NotFound() {
  return (
    <main className="not-found section-shell" id="main">
      <span className="eyebrow">PAGE NOT FOUND</span>
      <h1>Nothing here yet.</h1>
      <p>The page you requested could not be found. Explore what we build instead.</p>
      <Link href="/" className="button">
        Back to Zavino ↗
      </Link>
    </main>
  );
}
