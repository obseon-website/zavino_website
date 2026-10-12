import { supportCopy, supportItems } from "@/lib/services";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
export function OngoingSupport() {
  return (
    <section className="ongoing-support section-shell">
      <div>
        <h2>
          Built to launch.
          <br />
          <span>Supported to grow.</span>
        </h2>
        <p>{supportCopy}</p>
        <Link href="/contact?focus=other" className="text-link">
          Plan your ongoing support <ArrowUpRight size={18} />
        </Link>
      </div>
      <ul>
        {supportItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
