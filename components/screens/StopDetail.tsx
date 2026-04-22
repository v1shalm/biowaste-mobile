import { Icon } from "../icons";
import { StatusBar } from "../Phone";
import { StreetMap } from "../StreetMap";
import { Avatar, IconTile } from "../Tile";

export function StopDetailScreen() {
  return (
    <>
      <StatusBar />

      {/* Top bar */}
      <div className="flex items-center justify-between px-4 pt-1 pb-3">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-surface)] shadow-[var(--shadow-lift)] transition-transform active:scale-95">
          <Icon.ChevronLeft width={18} height={18} />
        </button>
        <div className="text-center">
          <div className="text-[12px] text-[color:var(--color-ink-3)]">
            Stop 1 of 11
          </div>
          <div className="text-[14px] font-semibold mt-0.5 tracking-[-0.01em]">
            Memorial Hospital
          </div>
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-surface)] shadow-[var(--shadow-lift)] transition-transform active:scale-95">
          <Icon.Menu width={18} height={18} />
        </button>
      </div>

      {/* Map preview */}
      <div className="mx-4 overflow-hidden rounded-2xl shadow-[var(--shadow-lift)]">
        <StreetMap height={148} variant="full">
          <div className="absolute left-[15.4%] top-[87.8%] -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="ring-pulse absolute inset-0 -m-2 rounded-full bg-[color:var(--color-brand)]/40" />
              <div className="relative h-4 w-4 rounded-full bg-[color:var(--color-brand)] ring-[3px] ring-white" />
            </div>
          </div>
          <div className="absolute left-[38.5%] top-[65.8%] -translate-x-1/2 -translate-y-full">
            <div className="mx-auto h-8 w-8 rounded-full bg-[color:var(--color-ink)] ring-4 ring-white flex items-center justify-center">
              <span className="tnum text-[12px] font-semibold text-white">
                1
              </span>
            </div>
          </div>
        </StreetMap>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 pt-4 pb-4">
        {/* Hero info */}
        <div className="card p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <span
                className="chip bg-[color:var(--color-brand-50)] px-2 py-0.5 text-[11px] font-semibold text-[color:var(--color-brand-ink)]"
                style={{
                  boxShadow:
                    "inset 0 1px 0 oklch(1 0 0 / 0.55), inset 0 0 0 1px oklch(0.56 0.16 152 / 0.14)",
                }}
              >
                Pickup and delivery
              </span>
              <h1 className="mt-2 text-[22px] font-bold leading-tight tracking-[-0.018em]">
                Memorial Hospital
              </h1>
              <div className="mt-1 flex items-center gap-1 text-[13px] text-[color:var(--color-ink-2)]">
                <Icon.Pin width={13} height={13} />
                123 Medical Center Blvd, Dock 3
              </div>
            </div>
            <button className="flex-shrink-0 rounded-full active:scale-95 transition">
              <IconTile tone="brand" size="lg" shape="circle">
                <Icon.Nav width={17} height={17} />
              </IconTile>
            </button>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <Metric value="8:12 AM" label="Arriving" foot="in 12 min" highlight />
            <Metric value="8:00" label="Window" foot="to 10:00" />
            <Metric value="1.4 mi" label="Distance" foot="away" />
          </div>
        </div>

        {/* Site contact card */}
        <div className="card mt-3 p-4">
          <div className="flex items-center gap-3.5">
            <Avatar tone="warm" size="lg" initials="RG" />
            <div className="flex-1 min-w-0">
              <div className="text-[12px] text-[color:var(--color-ink-3)]">
                Site contact
              </div>
              <div className="mt-0.5 text-[15.5px] font-semibold leading-tight tracking-[-0.01em] truncate">
                Rosa Garcia
              </div>
              <div className="mt-1 flex items-center gap-1.5 text-[12px] text-[color:var(--color-ink-2)] min-w-0">
                <span className="truncate">
                  Ext. <span className="tnum font-semibold text-[color:var(--color-ink)]">4410</span> · Security gate
                </span>
              </div>
            </div>
            <div className="flex flex-shrink-0 gap-1.5">
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full transition-transform active:scale-95"
                style={{ background: "var(--color-brand-50)" }}
                aria-label="Call Rosa Garcia"
              >
                <Icon.Phone
                  width={16}
                  height={16}
                  style={{ color: "var(--color-brand-2)" }}
                />
              </button>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-bg)] transition-transform active:scale-95"
                aria-label="Message Rosa Garcia"
              >
                <Icon.Message width={16} height={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Pickup manifest */}
        <div className="mt-5 pl-1 flex items-baseline justify-between">
          <span className="text-[13px] font-semibold text-[color:var(--color-ink)]">
            Pickup manifest
          </span>
          <span className="tnum text-[12px] text-[color:var(--color-ink-3)]">
            4 items · 140 kg
          </span>
        </div>

        <div className="card mt-2 overflow-hidden">
          <Row label="Red bag waste" qty="14" unit="bags" hazard="red" />
          <Row label="Yellow bag waste" qty="6" unit="bags" hazard="yellow" />
          <Row label="Sharps containers" qty="4" unit="units" hazard="sharps" />
          <Row label="Large bio-hazard bins" qty="2" unit="units" hazard="red" />
        </div>

        {/* Delivery */}
        <div className="mt-4 pl-1 flex items-baseline justify-between">
          <span className="text-[13px] font-semibold text-[color:var(--color-ink)]">
            Deliver on site
          </span>
          <span className="tnum text-[12px] text-[color:var(--color-ink-3)]">
            2 items
          </span>
        </div>

        <div className="card mt-2 overflow-hidden">
          <Row label="Sanitization kits" qty="5" unit="boxes" />
          <Row label="Spill cleanup pads" qty="2" unit="packs" />
        </div>

        {/* Note */}
        <div className="mt-4 rounded-2xl bg-[color:var(--color-caution-50)] p-4">
          <div className="flex items-center gap-2">
            <Icon.Alert
              width={14}
              height={14}
              style={{ color: "var(--color-caution-ink)" }}
            />
            <span
              className="text-[12.5px] font-semibold"
              style={{ color: "var(--color-caution-ink)" }}
            >
              Driver note
            </span>
          </div>
          <p className="mt-2 text-[13.5px] leading-snug">
            Use <b>Dock 3</b> behind the ER entrance. Security requires driver
            ID at the gate.
          </p>
        </div>

        <div className="h-4" />
      </div>

      {/* Sticky CTA */}
      <div className="border-t border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] px-4 pt-3 pb-3">
        <button
          className="pill-cta text-white"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.22 0.012 260), oklch(0.14 0.01 260))",
          }}
        >
          <span className="relative z-10 inline-flex items-center gap-2">
            Start service
            <Icon.ChevronRight width={18} height={18} />
          </span>
        </button>
      </div>

      <div className="flex h-6 items-end justify-center bg-[color:var(--color-surface)] pb-2">
        <div className="h-[5px] w-[134px] rounded-full bg-[color:var(--color-ink)]/90" />
      </div>
    </>
  );
}

function Metric({
  value,
  label,
  foot,
  highlight,
}: {
  value: string;
  label: string;
  foot?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={
        "rounded-xl px-3 py-2 " +
        (highlight
          ? "bg-[color:var(--color-brand-50)]"
          : "bg-[color:var(--color-bg)]")
      }
    >
      <div
        className="text-[11px]"
        style={{
          color: highlight ? "var(--color-brand-ink)" : "var(--color-ink-3)",
        }}
      >
        {label}
      </div>
      <div
        className="tnum text-[15px] font-semibold leading-tight mt-0.5"
        style={{
          color: highlight ? "var(--color-brand-ink)" : "var(--color-ink)",
        }}
      >
        {value}
      </div>
      {foot && (
        <div
          className="text-[11px] mt-0.5"
          style={{
            color: highlight ? "var(--color-brand-ink)" : "var(--color-ink-3)",
          }}
        >
          {foot}
        </div>
      )}
    </div>
  );
}

function Row({
  label,
  qty,
  unit,
  hazard,
}: {
  label: string;
  qty: string;
  unit: string;
  hazard?: "red" | "yellow" | "sharps";
}) {
  const dot =
    hazard === "red"
      ? "var(--color-hazard)"
      : hazard === "yellow"
      ? "oklch(0.82 0.16 90)"
      : hazard === "sharps"
      ? "var(--color-ink)"
      : undefined;
  return (
    <div className="group-row flex items-center gap-3 px-4 py-3">
      {dot ? (
        <span
          className="h-2 w-2 flex-shrink-0 rounded-full"
          style={{ background: dot }}
        />
      ) : (
        <span className="h-2 w-2 flex-shrink-0 rounded-full border border-[color:var(--color-border)]" />
      )}
      <span className="flex-1 text-[14px] font-medium">{label}</span>
      <div className="flex items-baseline gap-1">
        <span className="tnum text-[15.5px] font-semibold">{qty}</span>
        <span className="text-[12px] text-[color:var(--color-ink-3)]">{unit}</span>
      </div>
    </div>
  );
}
