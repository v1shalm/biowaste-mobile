"use client";

import { useEffect } from "react";
import { Icon } from "../icons";
import { useNav } from "../NavContext";
import { StatusBar } from "../Phone";

export function SplashScreen() {
  const nav = useNav();

  useEffect(() => {
    if (!nav) return;
    const t = setTimeout(() => nav.go("login"), 2000);
    return () => clearTimeout(t);
  }, [nav]);

  return (
    <div
      className="flex h-full flex-col"
      style={{ background: "var(--color-surface)" }}
    >
      <StatusBar />

      <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8">
        <div
          className="flex h-24 w-24 items-center justify-center rounded-[28px]"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.72 0.22 29), oklch(0.55 0.22 27))",
            boxShadow:
              "inset 0 2px 0 oklch(1 0 0 / 0.3), inset 0 -2px 0 oklch(0.3 0.18 25 / 0.25), 0 4px 14px oklch(0.5 0.22 27 / 0.3)",
          }}
        >
          <Icon.Bio width={56} height={56} className="text-white" />
        </div>
        <div className="text-center">
          <h1 className="text-[40px] font-bold tracking-[-0.03em] leading-none">
            BioWaste
          </h1>
          <p className="mt-2 text-[13.5px] text-[color:var(--color-ink-3)]">
            Driver · Brooklyn Depot
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 px-8 pb-12">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-ink-4)]"
              style={{
                animation: `livepulse 1.3s ease-in-out ${i * 0.18}s infinite`,
              }}
            />
          ))}
        </div>
        <p className="text-[11.5px] text-[color:var(--color-ink-3)]">
          Getting your day ready
        </p>
      </div>
    </div>
  );
}
