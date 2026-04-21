import { Icon } from "../icons";
import { StatusBar } from "../Phone";
import { tileStyle } from "../Tile";

export function CompletedScreen() {
  return (
    <>
      <StatusBar />

      <div className="flex items-center justify-between px-4 pt-1 pb-2">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-surface)] shadow-[var(--shadow-1)]">
          <Icon.ChevronLeft width={18} height={18} />
        </button>
        <div className="text-[13px] font-semibold text-[color:var(--color-ink-2)]">
          Stop complete
        </div>
        <div className="w-10" />
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-4">
        {/* Hero */}
        <div className="flex flex-col items-center pt-6 pb-8">
          <div
            className="flex h-[124px] w-[124px] items-center justify-center rounded-full"
            style={{ background: "var(--color-brand-50)" }}
          >
            <div
              className="sphere-hl relative flex h-[92px] w-[92px] items-center justify-center rounded-full"
              style={tileStyle.brand}
            >
              <Icon.Check
                width={44}
                height={44}
                className="relative z-10 text-white"
              />
            </div>
          </div>
          <h1 className="mt-6 text-[26px] font-bold tracking-[-0.02em]">
            All items collected
          </h1>
          <p className="mt-2 text-[14px] text-[color:var(--color-ink-2)] text-center max-w-[34ch]">
            Stop 1 at Memorial Hospital is complete. Your manifest has been digitally signed.
          </p>
        </div>

        {/* Receipt card */}
        <div className="card overflow-hidden">
          <div className="flex items-center justify-between px-4 pt-4 pb-3">
            <div>
              <div className="text-[12px] text-[color:var(--color-ink-3)]">
                Service record
              </div>
              <div className="text-[14px] font-semibold tnum mt-0.5">
                BW-R402-S01-20260114
              </div>
            </div>
            <div
              className="chip-pill gap-1.5 bg-[color:var(--color-brand-50)] px-2.5 py-1"
              style={{
                boxShadow:
                  "inset 0 1px 0 oklch(1 0 0 / 0.55), inset 0 0 0 1px oklch(0.56 0.16 152 / 0.14)",
              }}
            >
              <Icon.Shield width={12} height={12} style={{ color: "var(--color-brand-2)" }} />
              <span className="text-[11.5px] font-semibold text-[color:var(--color-brand-ink)]">
                Signed
              </span>
            </div>
          </div>

          <div className="border-t border-[color:var(--color-hairline)]">
            <Row left="Duration" right="18 min" />
            <Row left="Picked up" right="4 items · 140 kg" />
            <Row left="Delivered" right="2 items" />
            <Row left="Signed by" right="R. Garcia" />
          </div>
        </div>

        {/* Next stop */}
        <div className="mt-3 card p-4">
          <div className="text-[12px] text-[color:var(--color-ink-3)]">
            Up next · Stop 2
          </div>
          <div className="mt-1 flex items-center justify-between">
            <div className="min-w-0">
              <div className="text-[16px] font-semibold tracking-[-0.01em] truncate">
                BioLab Inc.
              </div>
              <div className="mt-0.5 text-[13px] text-[color:var(--color-ink-2)] truncate">
                4500 Research Park Dr · 2.8 mi
              </div>
            </div>
            <div className="flex-shrink-0 flex flex-col items-end">
              <div className="tnum text-[16px] font-semibold leading-none">
                10:15 AM
              </div>
              <div className="text-[12px] text-[color:var(--color-ink-3)] mt-1">
                in 1h 23m
              </div>
            </div>
          </div>
        </div>

        <div className="h-3" />
      </div>

      <div className="border-t border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] px-4 pt-3 pb-3">
        <div className="grid grid-cols-[1fr_auto] gap-2">
          <button
            className="pill-cta text-white"
            style={{ background: "var(--color-brand)" }}
          >
            Start next stop
            <Icon.ChevronRight width={18} height={18} />
          </button>
          <button className="flex h-14 px-5 items-center justify-center rounded-2xl bg-[color:var(--color-bg)] text-[14.5px] font-semibold">
            Break
          </button>
        </div>
      </div>

      <div className="flex h-6 items-end justify-center bg-[color:var(--color-surface)] pb-2">
        <div className="h-[5px] w-[134px] rounded-full bg-[color:var(--color-ink)]/90" />
      </div>
    </>
  );
}

function Row({ left, right }: { left: string; right: string }) {
  return (
    <div className="group-row flex items-center justify-between px-4 py-3">
      <span className="text-[13.5px] text-[color:var(--color-ink-2)]">{left}</span>
      <span className="text-[14px] font-semibold tnum">{right}</span>
    </div>
  );
}
