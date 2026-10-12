import Image from "next/image";

type ProductLogoProps = {
  product: "outbid" | "forma";
  compact?: boolean;
};

/** The products' own marks and lettering, scoped away from Zavino typography. */
export function ProductLogo({ product, compact = false }: ProductLogoProps) {
  return (
    <span
      className={`product-logo product-logo-${product}${compact ? " product-logo-compact" : ""}`}
      role="img"
      aria-label={product === "outbid" ? "Outbid.bd" : "Forma"}
    >
      {product === "outbid" ? (
        <>
          <Image
            src="/products/outbid-logo.png"
            alt=""
            width={36}
            height={36}
            sizes="36px"
            className="product-logo-mark"
          />
          <span aria-hidden="true">
            outbid<span className="product-logo-suffix">.bd</span>
          </span>
        </>
      ) : (
        <>
          <span className="forma-brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span aria-hidden="true">
            forma<span className="forma-brand-dot">.</span>
          </span>
        </>
      )}
    </span>
  );
}
