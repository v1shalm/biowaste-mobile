"use client";

import { Icon } from "../icons";
import { StatusBar } from "../Phone";
import { StreetMap } from "../StreetMap";
import { tileStyle } from "../Tile";
import { useNav } from "../NavContext";

export function MapScreen() {
  const nav = useNav();
  return (
    <>
      <div className="relative flex-1 overflow-hidden">
        <div className="absolute inset-0">
          <StreetMap height={844} variant="full">
            {/* Driver */}
            <div className="absolute left-[15.4%] top-[87.8%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative">
                <div className="ring-pulse absolute inset-0 -m-4 rounded-full bg-[color:var(--color-brand)]/40" />
                <div
                  className="sphere-hl relative flex h-8 w-8 items-center justify-center rounded-full ring-[3.5px] ring-white"
                  style={tileStyle.brand}
                >
                  <Icon.Truck width={14} height={14} className="relative z-10 text-white" />
                </div>
              </div>
            </div>

            {[
              { x: "38.5%", y: "65.8%", n: 1, active: true, label: "Memorial Hospital" },
              { x: "66.6%", y: "65.8%", n: 2 },
              { x: "66.6%", y: "43.9%", n: 3 },
              { x: "82%", y: "43.9%", n: 4 },
            ].map((p) => (
              <div
                key={p.n}
                className="absolute -translate-x-1/2 -translate-y-full z-10"
                style={{ left: p.x, top: p.y }}
              >
                {p.active && p.label && (
                  <div className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-ink)] px-2.5 py-1 shadow-[var(--shadow-lift)] whitespace-nowrap">
                    <span className="tnum text-[11.5px] font-semibold text-white">
                      8:12 AM
                    </span>
                    <span className="text-[11px] text-white/70">
                      · {p.label}
                    </span>
                  </div>
                )}
                <div
                  className={
                    "mx-auto flex h-9 w-9 items-center justify-center rounded-full tnum text-[13px] font-semibold shadow-[var(--shadow-lift)] " +
                    (p.active
                      ? "bg-[color:var(--color-ink)] text-white ring-[3.5px] ring-white"
                      : "bg-white text-[color:var(--color-ink)] ring-[2.5px] ring-[color:var(--color-info)]")
                  }
                >
                  {p.n}
                </div>
              </div>
            ))}
          </StreetMap>
        </div>

        <StatusBar />

        {/* Top search */}
        <div className="absolute top-[56px] left-4 right-4 z-30 flex items-center gap-3">
          <button
            onClick={() => nav?.back()}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--color-surface)] shadow-[var(--shadow-lift)] transition-transform active:scale-95"
          >
            <Icon.ChevronLeft width={18} height={18} />
          </button>

          <div className="flex-1 flex items-center gap-2 rounded-full bg-[color:var(--color-surface)] shadow-[var(--shadow-lift)] px-4 h-11">
            <Icon.Search width={16} height={16} style={{ color: "var(--color-ink-3)" }} />
            <span className="text-[14px] font-medium text-[color:var(--color-ink-2)] truncate">
              Memorial Hospital, Brooklyn
            </span>
            <div className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--color-brand)]">
              <Icon.Check width={12} height={12} className="text-white" />
            </div>
          </div>
        </div>

        <div className="absolute right-4 top-[180px] z-20 flex flex-col gap-2">
          <MapButton><Icon.Plus width={18} height={18} /></MapButton>
          <MapButton><Icon.Minus width={18} height={18} /></MapButton>
          <MapButton>
            <div className="h-2 w-2 rounded-full bg-[color:var(--color-info)]" />
          </MapButton>
        </div>

        {/* Bottom sheet */}
        <div
          className="absolute left-0 right-0 bottom-0 z-30 rounded-t-[24px] bg-[color:var(--color-surface)]"
          style={{ boxShadow: "var(--shadow-sheet)" }}
        >
          <div className="pt-2 flex justify-center">
            <div className="h-[5px] w-10 rounded-full bg-[color:var(--color-ink-4)]" />
          </div>

          <div className="px-5 pt-3 pb-2">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <span
                  className="chip bg-[color:var(--color-brand-50)] px-2 py-0.5 text-[11px] font-semibold text-[color:var(--color-brand-ink)]"
                  style={{
                    boxShadow:
                      "inset 0 1px 0 oklch(1 0 0 / 0.55), inset 0 0 0 1px oklch(0.56 0.16 152 / 0.14)",
                  }}
                >
                  Stop 1 · pickup and delivery
                </span>
                <h2 className="mt-2 text-[20px] font-bold leading-tight tracking-[-0.018em]">
                  Memorial Hospital
                </h2>
                <div className="mt-0.5 text-[13px] text-[color:var(--color-ink-2)]">
                  123 Medical Center Blvd · Dock 3
                </div>
              </div>

              <div className="text-right flex-shrink-0">
                <div className="tnum text-[22px] font-bold leading-none">
                  8:12
                </div>
                <div className="text-[12px] font-semibold text-[color:var(--color-brand-2)] mt-1">
                  in 12 min
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-3 text-[13px] text-[color:var(--color-ink-2)]">
              <span className="inline-flex items-center gap-1">
                <Icon.Route width={13} height={13} />
                <span className="tnum">1.4 mi</span>
              </span>
              <span className="h-1 w-1 rounded-full bg-[color:var(--color-ink-4)]" />
              <span className="inline-flex items-center gap-1">
                <Icon.Clock width={13} height={13} />
                <span>Arrival window 8:00 – 10:00</span>
              </span>
            </div>

            <div className="mt-4 grid grid-cols-[1fr_auto] gap-2 pb-4">
              <button
                onClick={() => nav?.go("stop-detail")}
                className="pill-cta text-white"
                style={{ background: "var(--color-brand)" }}
              >
                <Icon.Nav width={17} height={17} />
                Start navigation
              </button>
              <button className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--color-bg)]">
                <Icon.Phone width={18} height={18} style={{ color: "var(--color-ink)" }} />
              </button>
            </div>
          </div>

          <div className="flex justify-center pb-2">
            <div className="h-[5px] w-[134px] rounded-full bg-[color:var(--color-ink)]/90" />
          </div>
        </div>
      </div>
    </>
  );
}

function MapButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--color-surface)] shadow-[var(--shadow-lift)] transition-transform active:scale-95">
      {children}
    </button>
  );
}
