import { Icon } from "../icons";
import { BottomTabs } from "../BottomTabs";
import { StatusBar } from "../Phone";
import { StreetMap } from "../StreetMap";
import { Avatar, IconTile } from "../Tile";

export function HomeScreen({ verified = false }: { verified?: boolean } = {}) {
  return (
    <>
      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-3 pb-3">
        <div className="flex items-center gap-3">
          <Avatar tone="brand" size="md" initials="MC" />
          <div>
            <div className="text-[11.5px] text-[color:var(--color-ink-3)] leading-none">
              Good morning
            </div>
            <div className="mt-0.5 text-[15px] font-semibold tracking-[-0.01em]">
              Marcus C.
            </div>
          </div>
        </div>
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-surface)] shadow-[var(--shadow-lift)]">
          <Icon.Alert
            width={18}
            height={18}
            style={{ color: "var(--color-ink)" }}
          />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[color:var(--color-hazard)] ring-2 ring-[color:var(--color-surface)]" />
        </button>
      </div>

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Map card */}
        <div className="mx-4 relative overflow-hidden rounded-2xl shadow-[var(--shadow-lift)]">
          <StreetMap height={230} variant="preview">
            <div className="absolute inset-0 pointer-events-none">
              {/* Driver (current position) */}
              <div className="absolute left-[15.4%] top-[87.8%] -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="ring-pulse absolute inset-0 -m-3 rounded-full bg-[color:var(--color-brand)]/40" />
                  <div
                    className="sphere-hl relative flex h-5 w-5 items-center justify-center rounded-full ring-[3px] ring-white"
                    style={{
                      background:
                        "linear-gradient(180deg, oklch(0.64 0.17 152), oklch(0.46 0.14 152))",
                      boxShadow:
                        "0 2px 6px oklch(0.46 0.14 152 / 0.5), 0 0 0 1px oklch(0.34 0.12 152)",
                    }}
                  >
                    <div className="relative z-10 h-2 w-2 rounded-full bg-white" />
                  </div>
                </div>
              </div>
              {/* Next pin with ETA tooltip */}
              <div className="absolute left-[38.5%] top-[65.8%] -translate-x-1/2 -translate-y-full">
                <div className="relative flex flex-col items-center">
                  <div
                    className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-ink)] px-3 py-1.5"
                    style={{
                      boxShadow:
                        "inset 0 1px 0 oklch(1 0 0 / 0.1), 0 2px 6px oklch(0.18 0.01 260 / 0.35)",
                    }}
                  >
                    <span className="tnum text-[12px] font-semibold text-white">
                      8:12 AM
                    </span>
                    <span className="text-[11px] text-white/65">in 12 min</span>
                  </div>
                  <div className="-mt-1 h-0 w-0"
                    style={{
                      borderLeft: "5px solid transparent",
                      borderRight: "5px solid transparent",
                      borderTop: "6px solid oklch(0.18 0.01 260)",
                    }}
                  />
                  <div
                    className="mt-1 h-5 w-5 rounded-full bg-white ring-[3px] ring-[color:var(--color-brand)]"
                    style={{ boxShadow: "var(--shadow-pin)" }}
                  />
                </div>
              </div>
              {/* Other stops */}
              {[
                { x: "66.6%", y: "65.8%" },
                { x: "66.6%", y: "43.9%" },
                { x: "82%", y: "43.9%" },
                { x: "82%", y: "21.9%" },
              ].map((p, i) => (
                <div
                  key={i}
                  className="absolute h-3 w-3 rounded-full bg-white"
                  style={{
                    left: p.x,
                    top: p.y,
                    transform: "translate(-50%, -50%)",
                    boxShadow: "0 0 0 2.5px var(--color-info)",
                  }}
                />
              ))}
            </div>

            {/* Map controls */}
            <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5">
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white"
                style={{ boxShadow: "var(--shadow-lift)" }}
              >
                <Icon.Plus width={16} height={16} />
              </button>
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white"
                style={{ boxShadow: "var(--shadow-lift)" }}
              >
                <div className="h-2 w-2 rounded-full bg-[color:var(--color-info)]" />
              </button>
            </div>
          </StreetMap>
        </div>

        {/* Route card */}
        <div className="px-4 pt-4">
          <div className="card overflow-hidden">
            {/* Header row */}
            <div className="flex items-center justify-between px-5 pt-4 pb-1">
              <div className="text-[12.5px] font-medium text-[color:var(--color-ink-3)]">
                Wednesday, 14 January
              </div>
              <div
                className="chip-pill gap-1.5 bg-[color:var(--color-brand-50)] px-2.5 py-1"
                style={{
                  boxShadow:
                    "inset 0 1px 0 oklch(1 0 0 / 0.55), inset 0 0 0 1px oklch(0.56 0.16 152 / 0.14)",
                }}
              >
                <span className="live-dot h-[6px] w-[6px] rounded-full bg-[color:var(--color-brand)]" />
                <span className="text-[11.5px] font-semibold text-[color:var(--color-brand-ink)]">
                  On duty
                </span>
              </div>
            </div>

            {/* Hero */}
            <div className="px-5 pt-2 pb-4">
              <h1 className="tnum text-[40px] font-bold tracking-[-0.03em] leading-[0.95] whitespace-nowrap">
                R-402
              </h1>
              <div className="mt-1.5 flex items-center gap-1 text-[13.5px] text-[color:var(--color-ink-2)]">
                <Icon.Pin
                  width={13}
                  height={13}
                  style={{ color: "var(--color-brand)" }}
                />
                Zone 4 · North Brooklyn
              </div>
            </div>

            {/* Stats — recessed gray tiles, matching Stop detail */}
            <div className="px-4 pb-4 grid grid-cols-3 gap-2">
              <Stat value="11" label="Stops" />
              <Stat value="6h 30m" label="Drive time" />
              <Stat value="84 mi" label="Distance" />
            </div>
          </div>
        </div>

        {/* Status row — either "Inventory pending" (actionable) or "Verified" (confirmation) */}
        <div className="px-4 pt-3">
          {verified ? (
            <div className="card flex w-full items-center gap-3 px-3.5 py-3">
              <IconTile tone="brand" size="md">
                <Icon.Check width={17} height={17} />
              </IconTile>
              <div className="flex-1 min-w-0">
                <div className="text-[14px] font-semibold leading-tight">
                  Inventory verified
                </div>
                <div className="mt-0.5 text-[12.5px] leading-snug text-[color:var(--color-ink-2)]">
                  Manifest sealed · ready to start route
                </div>
              </div>
              <Icon.Check
                width={16}
                height={16}
                style={{ color: "var(--color-brand)" }}
              />
            </div>
          ) : (
            <button className="card flex w-full items-center gap-3 px-3.5 py-3 text-left transition active:scale-[0.99]">
              <IconTile tone="caution" size="md">
                <Icon.Alert width={17} height={17} />
              </IconTile>
              <div className="flex-1 min-w-0">
                <div className="text-[14px] font-semibold leading-tight">
                  Inventory pending
                </div>
                <div className="mt-0.5 text-[12.5px] leading-snug text-[color:var(--color-ink-2)]">
                  Confirm 6 items before starting your route
                </div>
              </div>
              <Icon.ChevronRight
                width={16}
                height={16}
                style={{ color: "var(--color-ink-3)" }}
              />
            </button>
          )}
        </div>

        <div className="mt-auto px-4 pb-4 pt-3">
          <button
            className="pill-cta text-white"
            data-brand="true"
            style={{ background: "var(--color-brand)" }}
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              {verified ? (
                <>
                  <Icon.Nav width={17} height={17} />
                  Start route
                </>
              ) : (
                <>
                  Verify inventory
                  <Icon.ChevronRight width={18} height={18} />
                </>
              )}
            </span>
          </button>
        </div>
      </div>

      <BottomTabs active="home" />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-[color:var(--color-bg)] px-3 py-2.5">
      <span className="block tnum text-[17px] font-bold leading-tight tracking-[-0.015em]">
        {value}
      </span>
      <span className="mt-1 block text-[11.5px] text-[color:var(--color-ink-3)]">
        {label}
      </span>
    </div>
  );
}
