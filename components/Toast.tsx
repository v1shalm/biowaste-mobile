"use client";

import { useEffect, useState } from "react";
import type { ToastMessage } from "./NavContext";
import { Icon } from "./icons";
import { IconTile } from "./Tile";

export function Toast({ toast }: { toast: ToastMessage | null }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!toast) {
      setVisible(false);
      return;
    }
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(t);
  }, [toast?.id]);

  if (!toast) return null;

  const tileTone =
    toast.tone === "brand"
      ? "brand"
      : toast.tone === "hazard"
      ? "hazard"
      : toast.tone === "caution"
      ? "caution"
      : "info";

  const icon =
    toast.tone === "brand" ? (
      <Icon.Check width={16} height={16} />
    ) : toast.tone === "hazard" ? (
      <Icon.Alert width={16} height={16} />
    ) : toast.tone === "caution" ? (
      <Icon.Alert width={16} height={16} />
    ) : (
      <Icon.Bell width={16} height={16} />
    );

  return (
    <div
      className="pointer-events-none absolute left-3 right-3 top-14 z-50 flex justify-center"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-16px)",
        opacity: visible ? 1 : 0,
        transition:
          "transform 260ms var(--ease-out-expo), opacity 260ms var(--ease-out-expo)",
      }}
    >
      <div
        className="pointer-events-auto flex max-w-full items-center gap-3 rounded-2xl bg-[color:var(--color-surface)] px-3 py-2.5"
        style={{
          boxShadow:
            "inset 0 1px 0 oklch(1 0 0 / 0.7), 0 1px 2px oklch(0.2 0.02 260 / 0.08), 0 8px 24px -8px oklch(0.2 0.02 260 / 0.2)",
        }}
      >
        <IconTile tone={tileTone} size="sm">
          {icon}
        </IconTile>
        <div className="min-w-0">
          <div className="text-[13px] font-semibold leading-tight truncate">
            {toast.title}
          </div>
          {toast.sub && (
            <div className="mt-0.5 text-[11.5px] leading-tight text-[color:var(--color-ink-3)] truncate">
              {toast.sub}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
