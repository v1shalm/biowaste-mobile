"use client";

import { useState } from "react";
import { Icon } from "../icons";
import { StatusBar } from "../Phone";
import { NumericKeypad } from "../NumericKeypad";
import { useNav } from "../NavContext";

const PREVIOUS = 148203;

export function OdometerScreen() {
  const nav = useNav();
  const [digits, setDigits] = useState<string>(PREVIOUS.toString());

  const value = digits === "" ? 0 : parseInt(digits, 10);
  const delta = value - PREVIOUS;
  const isValid = value >= PREVIOUS;

  function onDigit(d: string) {
    setDigits((prev) => (prev.length < 7 ? prev + d : prev));
  }
  function onBackspace() {
    setDigits((prev) => prev.slice(0, -1));
  }
  function onClear() {
    setDigits("");
  }

  function handleConfirm() {
    if (!isValid) return;
    nav?.showToast({
      title: "Odometer logged",
      sub: `${value.toLocaleString()} mi on Truck T-11`,
      tone: "brand",
    });
    nav?.go("home");
  }

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
          Step 2 of 2
        </div>
        <button
          onClick={onClear}
          className="px-3 text-[13px] font-semibold text-[color:var(--color-info)] transition-transform active:scale-95"
        >
          Clear
        </button>
      </div>

      <div className="px-5 pb-2">
        <h1 className="text-[26px] font-bold tracking-[-0.022em] leading-[1.05]">
          Log starting odometer
        </h1>
        <p className="mt-1.5 flex items-center gap-1.5 text-[13px] text-[color:var(--color-ink-2)]">
          <Icon.Truck
            width={13}
            height={13}
            style={{ color: "var(--color-ink-2)" }}
          />
          Truck T-11 · previous{" "}
          <span className="tnum font-semibold text-[color:var(--color-ink)]">
            {PREVIOUS.toLocaleString()}
          </span>{" "}
          mi
        </p>
      </div>

      {/* Big number display */}
      <div className="mx-4 mt-4 flex flex-col items-center rounded-2xl bg-[color:var(--color-surface)] py-6 shadow-[var(--shadow-card)]">
        <div className="flex items-baseline gap-2">
          <Icon.Gauge
            width={22}
            height={22}
            style={{ color: "var(--color-ink-3)" }}
          />
          <span className="tnum text-[44px] font-bold leading-none tracking-[-0.025em]">
            {digits === "" ? (
              <span className="text-[color:var(--color-ink-4)]">0</span>
            ) : (
              formatMiles(digits)
            )}
          </span>
          <span className="text-[14px] text-[color:var(--color-ink-3)]">mi</span>
        </div>
        <div className="mt-2 text-[12px] text-[color:var(--color-ink-3)] tnum">
          {isValid && value > 0 && delta > 0 && (
            <>
              +<span className="font-semibold text-[color:var(--color-ink)]">
                {delta.toLocaleString()}
              </span>{" "}
              miles since last shift
            </>
          )}
          {isValid && value === PREVIOUS && "Matches last reading"}
          {!isValid && (
            <span
              className="font-semibold"
              style={{ color: "var(--color-caution-ink)" }}
            >
              Reading is below last logged value
            </span>
          )}
        </div>
      </div>

      <div className="mt-auto w-full px-6 pb-4">
        <div className="mx-auto max-w-[300px]">
          <NumericKeypad onDigit={onDigit} onBackspace={onBackspace} />
        </div>
      </div>

      <div className="border-t border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] px-4 pt-3 pb-3">
        <button
          onClick={handleConfirm}
          disabled={!isValid}
          className="pill-cta text-white disabled:opacity-60"
          data-brand="true"
          style={{ background: "var(--color-brand)" }}
        >
          <span className="relative z-10 inline-flex items-center gap-2">
            <Icon.Check width={18} height={18} />
            Confirm and start route
          </span>
        </button>
      </div>

      <div className="flex h-6 items-end justify-center bg-[color:var(--color-surface)] pb-2">
        <div className="h-[5px] w-[134px] rounded-full bg-[color:var(--color-ink)]/90" />
      </div>
    </div>
  );
}

function formatMiles(d: string) {
  const n = parseInt(d, 10);
  if (Number.isNaN(n)) return d;
  return n.toLocaleString();
}
