"use client";

import { Icon } from "../icons";
import { BottomTabs } from "../BottomTabs";
import { LargeTitle, StatusBar } from "../Phone";
import { useNav } from "../NavContext";

type InventoryItem = {
  name: string;
  unit: string;
  expected: number;
  counted: number;
  hazard?: "red" | "yellow" | "sharps";
};

const itemsWithDiscrepancy: InventoryItem[] = [
  { name: "Large bio-hazard containers", unit: "units", expected: 15, counted: 15, hazard: "red" },
  { name: "Sharps disposal bins", unit: "units", expected: 40, counted: 40, hazard: "sharps" },
  { name: "Sanitization kits", unit: "boxes", expected: 5, counted: 4 },
  { name: "Spill cleanup pads", unit: "packs", expected: 10, counted: 10 },
  { name: "Red safety liners", unit: "bags", expected: 200, counted: 200, hazard: "red" },
  { name: "Yellow safety liners", unit: "bags", expected: 100, counted: 100, hazard: "yellow" },
];

const itemsAllMatched: InventoryItem[] = itemsWithDiscrepancy.map((i) => ({
  ...i,
  counted: i.expected,
}));

export function InventoryScreen({
  verified: allMatched = false,
}: { verified?: boolean } = {}) {
  const nav = useNav();
  const resolvedAllMatched = nav ? nav.state.inventoryVerified : allMatched;
  const items = resolvedAllMatched ? itemsAllMatched : itemsWithDiscrepancy;
  const matched = items.filter((i) => i.counted === i.expected).length;
  const progress = Math.round((matched / items.length) * 100);

  function handleConfirm() {
    if (nav) {
      nav.patchState({ inventoryVerified: true });
      nav.go("home");
    }
  }

  return (
    <>
      <StatusBar />

      <LargeTitle
        title="Inventory"
        subtitle="Verify today's manifest before you start the route."
        right={
          <button className="flex h-9 px-3 items-center justify-center gap-1.5 rounded-full bg-[color:var(--color-bg)]">
            <Icon.Plus width={14} height={14} />
            <span className="text-[13px] font-semibold">Scan</span>
          </button>
        }
      />

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-4">
        {/* Progress card */}
        <div className="card p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <span
                  className="h-[6px] w-[6px] rounded-full"
                  style={{
                    background: resolvedAllMatched
                      ? "var(--color-brand)"
                      : "var(--color-caution)",
                  }}
                />
                <span
                  className="text-[12.5px] font-semibold"
                  style={{
                    color: resolvedAllMatched
                      ? "var(--color-brand-ink)"
                      : "var(--color-caution-ink)",
                  }}
                >
                  {resolvedAllMatched ? "All items matched" : "1 discrepancy found"}
                </span>
              </div>
              <div className="mt-1.5 flex items-baseline gap-1.5 tnum">
                <span className="text-[28px] font-semibold tracking-[-0.02em] leading-none">
                  {matched}
                </span>
                <span className="text-[16px] text-[color:var(--color-ink-3)]">
                  of {items.length}
                </span>
                <span className="text-[13px] text-[color:var(--color-ink-2)] ml-1.5">
                  items matched
                </span>
              </div>
            </div>
            <div className="relative">
              <svg width="56" height="56" viewBox="0 0 56 56">
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  fill="none"
                  stroke="var(--color-hairline)"
                  strokeWidth="4"
                />
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  fill="none"
                  stroke="var(--color-brand)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={`${(2 * Math.PI * 24 * progress) / 100} 999`}
                  transform="rotate(-90 28 28)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center tnum text-[13px] font-semibold">
                {progress}%
              </div>
            </div>
          </div>
        </div>

        {/* Section */}
        <div className="pl-1 pt-5 pb-2 flex items-baseline justify-between">
          <span className="text-[13px] font-semibold text-[color:var(--color-ink)]">
            Today's manifest
          </span>
          <span className="tnum text-[12px] text-[color:var(--color-ink-3)]">
            {items.length} items
          </span>
        </div>

        <div className="card overflow-hidden">
          {items.map((i) => (
            <ItemRow key={i.name} {...i} />
          ))}
        </div>

        {/* Future requirements */}
        <div className="pl-1 pt-5 pb-2">
          <span className="text-[13px] font-semibold text-[color:var(--color-ink)]">
            Tomorrow's requirements
          </span>
        </div>

        <div className="card p-4">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-[15px] font-semibold tnum">R-404</span>
              <span className="text-[13px] text-[color:var(--color-ink-3)]">
                9 stops
              </span>
            </div>
            <span className="text-[12px] text-[color:var(--color-ink-3)]">
              Thursday, 15 January
            </span>
          </div>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {["20 bio-hazard", "30 sharps bins", "6 kits", "150 red liners"].map((t) => (
              <span
                key={t}
                className="rounded-md bg-[color:var(--color-bg)] px-2.5 py-1 text-[12px] text-[color:var(--color-ink-2)] tnum"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="h-4" />
      </div>

      {/* Sticky confirm */}
      <div className="border-t border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] px-4 pt-3 pb-3">
        <div className="mb-2 flex items-center justify-between">
          {resolvedAllMatched ? (
            <span className="text-[13px] text-[color:var(--color-ink-2)]">
              <span className="font-semibold text-[color:var(--color-brand-2)]">
                Everything checks out.
              </span>{" "}
              Ready to confirm.
            </span>
          ) : (
            <>
              <span className="text-[13px] text-[color:var(--color-ink-2)]">
                <span className="font-semibold text-[color:var(--color-ink)]">
                  Sanitization kits
                </span>{" "}
                short by 1
              </span>
              <button className="inline-flex items-center gap-1 text-[13px] font-semibold text-[color:var(--color-info)]">
                Report
                <Icon.ChevronRight width={12} height={12} />
              </button>
            </>
          )}
        </div>
        <button
          onClick={handleConfirm}
          className="pill-cta text-white"
          style={{ background: "var(--color-brand)" }}
        >
          <Icon.Check width={18} height={18} />
          Confirm inventory
        </button>
      </div>

      <BottomTabs active="inventory" />
    </>
  );
}

function ItemRow({
  name,
  unit,
  expected,
  counted,
  hazard,
}: {
  name: string;
  unit: string;
  expected: number;
  counted: number;
  hazard?: "red" | "yellow" | "sharps";
}) {
  const match = counted === expected;
  const dot =
    hazard === "red"
      ? "var(--color-hazard)"
      : hazard === "yellow"
      ? "oklch(0.82 0.16 90)"
      : hazard === "sharps"
      ? "var(--color-ink)"
      : "var(--color-ink-4)";

  return (
    <div className="group-row flex items-center gap-3 px-4 py-3">
      <span
        className="h-2 w-2 flex-shrink-0 rounded-full"
        style={{ background: dot }}
      />
      <div className="min-w-0 flex-1">
        <div className="text-[14px] font-semibold leading-tight truncate">
          {name}
        </div>
        <div className="text-[12px] text-[color:var(--color-ink-3)] mt-0.5">
          Expected <span className="tnum">{expected}</span> {unit}
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-bg)] active:scale-95 transition"
          aria-label="decrease"
        >
          <Icon.Minus width={14} height={14} style={{ color: "var(--color-ink)" }} />
        </button>
        <div
          className={
            "min-w-[48px] rounded-full px-2 py-1.5 text-center tnum text-[15px] font-semibold " +
            (match
              ? "bg-[color:var(--color-bg)] text-[color:var(--color-ink)]"
              : "bg-[color:var(--color-caution-50)] text-[color:var(--color-caution-ink)]")
          }
        >
          {counted}
        </div>
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-bg)] active:scale-95 transition"
          aria-label="increase"
        >
          <Icon.Plus width={14} height={14} style={{ color: "var(--color-ink)" }} />
        </button>
      </div>
    </div>
  );
}
