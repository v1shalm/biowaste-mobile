"use client";

import { useState } from "react";
import { Icon } from "../icons";
import { StatusBar } from "../Phone";
import { useNav } from "../NavContext";

type Truck = {
  plate: string;
  model: string;
  weight: string;
  fuel: number;
  lastService: string;
  status: "ready" | "needs-check";
};

const trucks: Truck[] = [
  {
    plate: "T-11",
    model: "2019 Freightliner M2",
    weight: "4.2T",
    fuel: 78,
    lastService: "3 days ago",
    status: "ready",
  },
  {
    plate: "T-09",
    model: "2017 Isuzu NPR",
    weight: "3.1T",
    fuel: 42,
    lastService: "12 days ago",
    status: "ready",
  },
  {
    plate: "T-15",
    model: "2021 Hino 268",
    weight: "5.0T",
    fuel: 91,
    lastService: "Inspection due",
    status: "needs-check",
  },
];

export function TruckSelectionScreen() {
  const nav = useNav();
  const [selected, setSelected] = useState<string>("T-11");

  return (
    <div className="flex h-full flex-col" style={{ background: "var(--color-bg)" }}>
      <StatusBar />

      <div className="flex items-center justify-between px-4 pt-2 pb-3">
        <button
          onClick={() => nav?.back()}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-surface)] shadow-[var(--shadow-lift)] transition-transform active:scale-95"
        >
          <Icon.ChevronLeft width={18} height={18} />
        </button>
        <div className="text-[12.5px] font-semibold text-[color:var(--color-ink-2)]">
          Step 1 of 2
        </div>
        <div className="w-10" />
      </div>

      <div className="px-5 pb-3">
        <h1 className="text-[28px] font-bold tracking-[-0.022em] leading-[1.05]">
          Choose your truck
        </h1>
        <p className="mt-1.5 text-[13.5px] text-[color:var(--color-ink-2)]">
          Three available at Brooklyn depot this morning.
        </p>
      </div>

      <div className="no-scrollbar flex-1 overflow-y-auto px-4 pb-4">
        <div className="flex flex-col gap-3">
          {trucks.map((t) => (
            <TruckCard
              key={t.plate}
              truck={t}
              selected={selected === t.plate}
              onSelect={() => setSelected(t.plate)}
            />
          ))}
        </div>
      </div>

      <div className="border-t border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] px-4 pt-3 pb-3">
        <button
          onClick={() => nav?.go("odometer")}
          className="pill-cta text-white"
          data-brand="true"
          style={{ background: "var(--color-brand)" }}
        >
          <span className="relative z-10 inline-flex items-center gap-2">
            Continue with {selected}
            <Icon.ChevronRight width={18} height={18} />
          </span>
        </button>
      </div>

      <div className="flex h-6 items-end justify-center bg-[color:var(--color-surface)] pb-2">
        <div className="h-[5px] w-[134px] rounded-full bg-[color:var(--color-ink)]/90" />
      </div>
    </div>
  );
}

function TruckCard({
  truck,
  selected,
  onSelect,
}: {
  truck: Truck;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className="card relative overflow-visible p-4 text-left transition-transform active:scale-[0.99]"
      style={{
        boxShadow: selected
          ? "inset 0 0 0 2px var(--color-brand), 0 1px 2px oklch(0.2 0.02 260 / 0.04), 0 4px 14px -4px oklch(0.2 0.02 260 / 0.12)"
          : undefined,
      }}
    >
      {selected && (
        <div
          className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full ring-[3px] ring-[color:var(--color-surface)]"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.62 0.17 152), oklch(0.46 0.14 152))",
            boxShadow: "0 2px 4px oklch(0.46 0.14 152 / 0.35)",
          }}
        >
          <Icon.Check width={14} height={14} className="text-white" />
        </div>
      )}

      {/* License plate */}
      <div className="flex justify-center pt-1 pb-1">
        <Plate number={truck.plate} />
      </div>

      {/* Meta */}
      <div className="mt-3 flex items-baseline justify-between">
        <div className="min-w-0">
          <div className="text-[14.5px] font-semibold truncate">
            {truck.model}
          </div>
          <div className="mt-0.5 text-[12px] text-[color:var(--color-ink-3)]">
            Payload capacity {truck.weight}
          </div>
        </div>
        {truck.status === "needs-check" && (
          <span className="chip bg-[color:var(--color-caution-50)] px-2 py-0.5 text-[10.5px] font-semibold text-[color:var(--color-caution-ink)]">
            Inspection due
          </span>
        )}
      </div>

      <div className="mt-3 flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <Icon.Fuel
            width={14}
            height={14}
            style={{
              color:
                truck.fuel < 50
                  ? "var(--color-caution-ink)"
                  : "var(--color-ink-2)",
            }}
          />
          <span className="tnum text-[12.5px] font-semibold">
            {truck.fuel}%
          </span>
        </div>
        <div className="h-1 w-1 rounded-full bg-[color:var(--color-ink-4)]" />
        <div className="flex items-center gap-1.5 text-[12.5px] text-[color:var(--color-ink-2)]">
          <Icon.Wrench width={13} height={13} />
          {truck.lastService}
        </div>
      </div>
    </button>
  );
}

function Plate({ number }: { number: string }) {
  return (
    <div className="plate w-[248px]">
      <span className="plate-screw" style={{ top: 5, left: 6 }} />
      <span className="plate-screw" style={{ top: 5, right: 6 }} />
      <span className="plate-legend">BioWaste · NY</span>
      <span className="plate-number mt-0.5">{number}</span>
      <span
        className="plate-legend"
        style={{ fontSize: 7.5, letterSpacing: "0.18em", marginTop: 2 }}
      >
        Brooklyn Depot
      </span>
    </div>
  );
}
