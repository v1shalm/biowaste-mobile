"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";
import { toPng } from "html-to-image";
import { Icon } from "./icons";

const CANVAS_W = 1400;
const CANVAS_H = 900;
const PHONE_SCALE = 0.85;
const DEFAULT_BG = "#ECECEC";

export function Mockup({
  title,
  children,
  bg = DEFAULT_BG,
}: {
  title: string;
  children: ReactNode;
  bg?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const captureRef = useRef<HTMLDivElement>(null);
  const [displayScale, setDisplayScale] = useState(1);
  const [state, setState] = useState<"idle" | "saving" | "done">("idle");

  useEffect(() => {
    if (!wrapperRef.current) return;
    const el = wrapperRef.current;
    const update = () => setDisplayScale(el.offsetWidth / CANVAS_W);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  async function handleDownload() {
    if (!captureRef.current || state === "saving") return;
    setState("saving");
    try {
      const dataUrl = await toPng(captureRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        width: CANVAS_W,
        height: CANVAS_H,
        backgroundColor: bg,
        style: {
          transform: "none",
          transformOrigin: "top left",
          margin: "0",
        },
      });
      const link = document.createElement("a");
      const filename = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      link.download = `biowaste-${filename}.png`;
      link.href = dataUrl;
      link.click();
      setState("done");
      setTimeout(() => setState("idle"), 1400);
    } catch (err) {
      console.error("Mockup download failed:", err);
      setState("idle");
    }
  }

  return (
    <div className="group relative">
      {/* Display wrapper — clips and sets visible aspect ratio */}
      <div
        ref={wrapperRef}
        className="relative w-full overflow-hidden rounded-[20px]"
        style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}
      >
        {/* Capture region — rendered at exact 1400×900 px */}
        <div
          ref={captureRef}
          className="flex items-center justify-center"
          style={{
            width: CANVAS_W,
            height: CANVAS_H,
            background: bg,
            transform: `scale(${displayScale})`,
            transformOrigin: "top left",
            // GPU compositing hints — kill sub-pixel scaling artifacts
            willChange: "transform",
            backfaceVisibility: "hidden",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          <div
            style={{
              transform: `scale(${PHONE_SCALE}) translateZ(0)`,
              transformOrigin: "center",
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          >
            {children}
          </div>
        </div>
      </div>

      <button
        onClick={handleDownload}
        disabled={state === "saving"}
        className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-ink)] px-3.5 py-2 text-[12px] font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 focus-visible:opacity-100 disabled:opacity-60"
        aria-label={`Download ${title} as PNG`}
      >
        {state === "saving" ? (
          <>
            <Spinner /> Saving
          </>
        ) : state === "done" ? (
          <>
            <Icon.Check width={13} height={13} /> Saved
          </>
        ) : (
          <>
            <Icon.ChevronDown width={13} height={13} /> Download {CANVAS_W}×{CANVAS_H}
          </>
        )}
      </button>

      <div className="mt-3 flex items-baseline justify-between gap-3 px-1">
        <span className="text-[13.5px] font-semibold text-[color:var(--color-ink)]">
          {title}
        </span>
        <span className="text-[11.5px] tnum text-[color:var(--color-ink-3)]">
          {CANVAS_W} × {CANVAS_H}
        </span>
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="animate-spin">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
      <path
        d="M21 12a9 9 0 0 1-9 9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
