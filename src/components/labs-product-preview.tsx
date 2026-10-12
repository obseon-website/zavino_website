"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowCounterClockwise,
  Check,
  Code,
  Coffee,
  FileImage,
  Leaf,
  Minus,
  PaintBrush,
  Plus,
  Storefront,
  SunHorizon,
  Trophy,
} from "@phosphor-icons/react";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { useButtonConfetti } from "./button-confetti";
import { ProductLogo } from "./product-logo";

const categories = ["All", "Food", "Creative", "Software"] as const;
type Category = (typeof categories)[number];
const sampleBusinesses = [
  {
    id: "cafe",
    name: "Local café",
    category: "Food",
    amount: 60,
    icon: Coffee,
  },
  {
    id: "studio",
    name: "Design studio",
    category: "Creative",
    amount: 35,
    icon: PaintBrush,
  },
  {
    id: "software",
    name: "Software team",
    category: "Software",
    amount: 20,
    icon: Code,
  },
];

function OutbidPreview() {
  const [category, setCategory] = useState<Category>("All");
  const [amount, setAmount] = useState(40);
  const [ready, setReady] = useState(false);
  const [input, setInput] = useState("pointer");
  const { celebrate, cancel } = useButtonConfetti();
  const visibleBusinesses = sampleBusinesses.filter(
    (business) => category === "All" || business.category === category,
  );
  const position =
    visibleBusinesses.filter((business) => business.amount >= amount).length +
    1;
  const businesses = [
    ...visibleBusinesses,
    {
      id: "you",
      name: "Your business",
      category: category === "All" ? "Software" : category,
      amount,
      icon: Storefront,
    },
  ].sort(
    (a, b) =>
      b.amount - a.amount || Number(a.id === "you") - Number(b.id === "you"),
  );

  function clearResult() {
    cancel();
    setReady(false);
  }

  function reset() {
    clearResult();
    setCategory("All");
    setAmount(40);
  }

  return (
    <div
      className="labs-demo outbid-demo"
      data-input={input}
      onPointerDownCapture={() => setInput("pointer")}
      onKeyDownCapture={() => {
        setInput("keyboard");
        cancel();
      }}
      role="group"
      aria-label="Outbid interactive preview"
    >
      <div className="labs-demo-header">
        <ProductLogo product="outbid" />
        <span className="labs-demo-label">Interactive preview</span>
      </div>
      <div
        className="outbid-filters"
        role="group"
        aria-label="Business category"
      >
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => {
              clearResult();
              setCategory(item);
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="outbid-board-heading">
        <span>
          <Trophy size={17} aria-hidden="true" /> Sample leaderboard
        </span>
        <span>All-time</span>
      </div>
      <ol
        className="outbid-board"
        role="list"
        aria-label="Sample business rankings"
      >
        {businesses.map((business, index) => {
          const Icon = business.icon;
          const own = business.id === "you";
          return (
            <li
              key={business.id}
              className={own ? "outbid-own-row" : undefined}
              data-confirmed={own && ready}
              style={{ transform: `translate3d(0, ${index * 52}px, 0)` }}
            >
              <span className="outbid-rank">{index + 1}</span>
              <span className="outbid-business-icon">
                <Icon size={19} aria-hidden="true" />
              </span>
              <span className="outbid-business-name">
                {business.name}
                <small>
                  {own
                    ? ready
                      ? "Position previewed"
                      : "Try a position below"
                    : business.category}
                </small>
              </span>
              <span className="outbid-amount">৳{business.amount}</span>
            </li>
          );
        })}
      </ol>
      <div className="outbid-position-control">
        <span>Preview #{position} for</span>
        <div className="outbid-stepper" role="group" aria-label="Sample amount">
          <button
            type="button"
            aria-label="Decrease sample amount"
            disabled={amount <= 10}
            onClick={() => {
              clearResult();
              setAmount((value) => value - 10);
            }}
          >
            <Minus size={16} aria-hidden="true" />
          </button>
          <output aria-label="Sample amount">৳{amount}</output>
          <button
            type="button"
            aria-label="Increase sample amount"
            disabled={amount >= 100}
            onClick={() => {
              clearResult();
              setAmount((value) => value + 10);
            }}
          >
            <Plus size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
      <button
        type="button"
        className="labs-demo-action"
        disabled={ready}
        onClick={(event) => {
          celebrate(event);
          setReady(true);
        }}
      >
        {ready ? `Position #${position} previewed` : "Preview my position"}
        {ready ? (
          <Check size={18} aria-hidden="true" />
        ) : (
          <ArrowRight size={18} aria-hidden="true" />
        )}
      </button>
      <div className="labs-demo-finish">
        <p role="status">
          {ready
            ? "Your business has a place on the board."
            : "Sample businesses. No payments or submissions."}
        </p>
        <button
          type="button"
          className="labs-demo-reset"
          data-ready={ready}
          disabled={!ready}
          onClick={reset}
        >
          <ArrowCounterClockwise size={15} aria-hidden="true" /> Try it again
        </button>
      </div>
    </div>
  );
}

const formats = ["PNG", "JPEG", "WebP"] as const;
type Format = (typeof formats)[number];
const formatTypes: Record<Format, string> = {
  PNG: "image/png",
  JPEG: "image/jpeg",
  WebP: "image/webp",
};
const formatExtensions: Record<Format, string> = {
  PNG: "png",
  JPEG: "jpg",
  WebP: "webp",
};
const formatIcons = { PNG: FileImage, JPEG: SunHorizon, WebP: Leaf };
type ConvertedImage = {
  url: string;
  width: number;
  height: number;
  bytes: number;
  format: Format;
};

function FormaPreview() {
  const [format, setFormat] = useState<Format>("WebP");
  const [width, setWidth] = useState("1200");
  const [quality, setQuality] = useState(80);
  const [result, setResult] = useState<ConvertedImage | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [input, setInput] = useState("pointer");
  const source = useRef<HTMLImageElement | null>(null);
  const resultUrl = useRef<string | null>(null);
  const request = useRef(0);
  const converting = useRef(false);
  const { celebrate, cancel } = useButtonConfetti();
  const FormatIcon = formatIcons[format];

  useEffect(
    () => () => {
      request.current++;
      if (resultUrl.current) URL.revokeObjectURL(resultUrl.current);
    },
    [],
  );

  function clearResult() {
    cancel();
    request.current++;
    converting.current = false;
    setBusy(false);
    if (resultUrl.current) URL.revokeObjectURL(resultUrl.current);
    resultUrl.current = null;
    setResult(null);
    setError("");
  }

  function reset() {
    clearResult();
    setFormat("WebP");
    setWidth("1200");
    setQuality(80);
  }

  async function convert(event: MouseEvent<HTMLButtonElement>) {
    if (converting.current) return;
    // React's currentTarget is cleared after dispatch; retain the original button.
    const trigger = {
      currentTarget: event.currentTarget,
      detail: event.detail,
    };
    const currentRequest = ++request.current;
    converting.current = true;
    setBusy(true);
    setError("");
    try {
      const image = source.current;
      if (!image)
        throw new Error(
          "The sample image is unavailable. Reload this page to try again.",
        );
      await image.decode();
      if (currentRequest !== request.current) return;
      const canvas = document.createElement("canvas");
      canvas.width = Math.min(Number(width), image.naturalWidth);
      canvas.height = Math.round(
        (canvas.width * image.naturalHeight) / image.naturalWidth,
      );
      const context = canvas.getContext("2d");
      if (!context)
        throw new Error(
          "This browser cannot convert the sample. Try Forma in another browser.",
        );
      if (format === "JPEG") {
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, canvas.width, canvas.height);
      }
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(resolve, formatTypes[format], quality / 100),
      );
      if (currentRequest !== request.current) return;
      if (!blob || blob.type !== formatTypes[format])
        throw new Error(
          `${format} export is unavailable in this browser. Choose another format.`,
        );
      const url = URL.createObjectURL(blob);
      resultUrl.current = url;
      celebrate(trigger);
      setResult({
        url,
        width: canvas.width,
        height: canvas.height,
        bytes: blob.size,
        format,
      });
    } catch (cause) {
      if (currentRequest === request.current)
        setError(
          cause instanceof Error
            ? cause.message
            : "The sample could not be converted. Try again.",
        );
    } finally {
      if (currentRequest === request.current) {
        converting.current = false;
        setBusy(false);
      }
    }
  }

  return (
    <div
      className="labs-demo forma-demo"
      data-input={input}
      onPointerDownCapture={() => setInput("pointer")}
      onKeyDownCapture={() => {
        setInput("keyboard");
        cancel();
      }}
      role="group"
      aria-label="Forma interactive preview"
    >
      <div className="labs-demo-header">
        <ProductLogo product="forma" />
        <span className="labs-demo-label">Interactive preview</span>
      </div>
      <p className="forma-demo-intro">Your image. Ready for the web.</p>
      <div
        className="forma-files"
        data-format={format}
        data-ready={Boolean(result)}
      >
        <div className="forma-file-source">
          <div className="forma-document">
            <span className="forma-document-fold" aria-hidden="true" />
            <Image
              ref={source}
              src="/products/forma-sample.png"
              alt="Forma’s sample mountain landscape"
              width={1200}
              height={900}
              unoptimized
              className="forma-sample"
            />
            <span>PNG</span>
          </div>
          <small>sample.png</small>
        </div>
        <ArrowRight className="forma-flow-arrow" size={23} aria-hidden="true" />
        <div className="forma-file-output">
          <span className="forma-file-behind" aria-hidden="true">
            <FileImage size={32} />
          </span>
          <span className="forma-file-behind" aria-hidden="true">
            <SunHorizon size={32} />
          </span>
          <div className="forma-document forma-document-output">
            <span className="forma-document-fold" aria-hidden="true" />
            <div className="forma-result-art">
              <FormatIcon size={64} weight="duotone" aria-hidden="true" />
              {result && (
                /* A browser-created blob has no server image-optimization route. */
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={result.url}
                  alt={`Converted ${result.format} sample`}
                  width={result.width}
                  height={result.height}
                />
              )}
            </div>
            <span>{format}</span>
          </div>
          <small>
            {result
              ? `${(result.bytes / 1024).toFixed(1)} KiB · ${result.width} × ${result.height}`
              : "Choose your format"}
          </small>
        </div>
      </div>
      <div
        className="forma-format-options"
        role="group"
        aria-label="Image output format"
      >
        {formats.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={format === item}
            disabled={busy}
            onClick={() => {
              clearResult();
              setFormat(item);
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <details className="forma-settings">
        <summary>Size &amp; quality</summary>
        <div className="forma-settings-fields">
          <div className="forma-setting-field">
            <label htmlFor="forma-preview-width">Image width</label>
            <select
              id="forma-preview-width"
              value={width}
              disabled={busy}
              onChange={(event) => {
                clearResult();
                setWidth(event.target.value);
              }}
            >
              <option value="1200">Original · 1200 px</option>
              <option value="600">Smaller · 600 px</option>
            </select>
          </div>
          <div className="forma-setting-field">
            <label htmlFor="forma-preview-quality">Quality</label>
            <output id="forma-preview-quality-value">
              {format === "PNG" ? "Lossless" : `${quality}%`}
            </output>
            <input
              id="forma-preview-quality"
              aria-describedby="forma-preview-quality-value"
              aria-valuetext={format === "PNG" ? "Lossless" : `${quality}%`}
              type="range"
              min="30"
              max="100"
              step="5"
              value={quality}
              disabled={busy || format === "PNG"}
              onChange={(event) => {
                clearResult();
                setQuality(Number(event.target.value));
              }}
            />
          </div>
        </div>
      </details>
      {result ? (
        <a
          className="labs-demo-action"
          href={result.url}
          download={`forma-sample.${formatExtensions[result.format]}`}
        >
          Download {result.format} <ArrowDown size={18} aria-hidden="true" />
        </a>
      ) : (
        <button
          type="button"
          className="labs-demo-action"
          disabled={busy}
          aria-busy={busy}
          onClick={convert}
        >
          {busy ? "Converting…" : `Convert to ${format}`}{" "}
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      )}
      <div className="labs-demo-finish">
        <p
          role={error ? "alert" : "status"}
          className={error ? "labs-demo-error" : undefined}
        >
          {error ||
            (result
              ? "Ready to download. Converted on your device."
              : "Try the sample. Everything happens in your browser.")}
        </p>
        <button
          type="button"
          className="labs-demo-reset"
          data-ready={Boolean(result)}
          disabled={!result}
          onClick={reset}
        >
          <ArrowCounterClockwise size={15} aria-hidden="true" /> Try it again
        </button>
      </div>
    </div>
  );
}

export function LabsProductPreview({
  product,
}: {
  product: "outbid" | "forma";
}) {
  return product === "outbid" ? <OutbidPreview /> : <FormaPreview />;
}
