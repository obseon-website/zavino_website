"use client";

import Image from "next/image";
import { CursorClick, ImageSquare } from "@phosphor-icons/react";
import { useState } from "react";
import { LabsProductPreview } from "@/components/labs-product-preview";
import { labProducts } from "@/lib/products";

type LabProduct = (typeof labProducts)[number];

export function WorkProductMedia({ product }: { product: LabProduct }) {
  const [interactive, setInteractive] = useState(false);
  const screenshot = product.work.screenshot;

  return (
    <div className={`work-product-media work-product-media-${product.id}`}>
      <div
        className="work-product-views"
        role="group"
        aria-label={`${product.name} view`}
      >
        <button
          type="button"
          aria-pressed={!interactive}
          aria-controls={`${product.id}-work-view`}
          onClick={() => setInteractive(false)}
        >
          <ImageSquare size={18} aria-hidden="true" />
          App screenshot
        </button>
        <button
          type="button"
          aria-pressed={interactive}
          aria-controls={`${product.id}-work-view`}
          onClick={() => setInteractive(true)}
        >
          <CursorClick size={18} aria-hidden="true" />
          Try it here
        </button>
      </div>
      <div
        className="work-product-stage"
        id={`${product.id}-work-view`}
        data-interactive={interactive}
      >
        {interactive ? (
          <LabsProductPreview product={product.id} />
        ) : (
          <figure className="work-product-capture">
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              width={screenshot.width}
              height={screenshot.height}
              sizes="(max-width: 900px) 100vw, 60vw"
            />
            <figcaption>
              {product.id === "outbid"
                ? "The current app. An early preview with no active payments."
                : "The current workspace, with Forma’s original sample image."}
            </figcaption>
          </figure>
        )}
      </div>
      <p className="work-product-interaction-note" role="status">
        {interactive
          ? product.id === "outbid"
            ? "Change a category or amount to watch the sample rankings move."
            : "Choose a format, convert the sample, and download your image."
          : "Switch to “Try it here” for a hands-on example."}
      </p>
    </div>
  );
}
