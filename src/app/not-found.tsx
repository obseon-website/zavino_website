import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
export default function NotFound() {
  return (
    <main className="not-found section-shell" id="main">
      <h1>Nothing here yet.</h1>
      <p>
        The page you requested could not be found. Explore what we build
        instead.
      </p>
      <Link href="/" className="button">
        Back to Zavino <ArrowUpRight size={18} aria-hidden="true" />
      </Link>
    </main>
  );
}
