import Image from "next/image";
import Link from "next/link";

export function Brand({ large = false }: { large?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand${large ? " brand-large" : ""}`}
      aria-label="Zavino homepage"
    >
      <Image src="/brand/symbol.svg" alt="" width={40} height={40} priority />
      <span>
        zavino<span className="brand-period">.</span>
      </span>
    </Link>
  );
}
