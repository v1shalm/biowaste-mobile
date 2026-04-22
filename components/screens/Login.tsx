"use client";

import { useEffect, useState } from "react";
import { Icon } from "../icons";
import { StatusBar } from "../Phone";
import { NumericKeypad, KeypadKey } from "../NumericKeypad";
import { Avatar } from "../Tile";
import { useNav } from "../NavContext";

const CORRECT_PIN = "2024";

export function LoginScreen() {
  const nav = useNav();
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (pin.length < 4) return;
    // Auto-submit
    const t = setTimeout(() => {
      if (pin === CORRECT_PIN || pin.length === 4) {
        // Any 4 digits work in prototype
        nav?.go("truck-select");
      } else {
        setError(true);
        setPin("");
        setTimeout(() => setError(false), 800);
      }
    }, 240);
    return () => clearTimeout(t);
  }, [pin, nav]);

  function onDigit(d: string) {
    setError(false);
    setPin((p) => (p.length < 4 ? p + d : p));
  }
  function onBackspace() {
    setPin((p) => p.slice(0, -1));
  }
  function useBiometric() {
    nav?.showToast({
      title: "Face ID recognised",
      sub: "Welcome back, Marcus",
      tone: "brand",
    });
    nav?.go("truck-select");
  }

  return (
    <div
      className="flex h-full flex-col"
      style={{ background: "var(--color-bg)" }}
    >
      <StatusBar />

      <div className="flex flex-1 flex-col items-center px-6">
        <div className="mt-6 flex items-center gap-2">
          <Icon.Bio
            width={18}
            height={18}
            style={{ color: "var(--color-hazard)" }}
          />
          <span className="text-[13px] font-semibold tracking-[-0.01em]">
            BioWaste
          </span>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Avatar tone="brand" size="lg" initials="MC" />
          <div className="text-center">
            <div className="text-[20px] font-bold tracking-[-0.02em] leading-tight">
              Marcus Chen
            </div>
            <div className="mt-0.5 text-[12.5px] text-[color:var(--color-ink-3)] tnum">
              Driver ID 4851
            </div>
          </div>
        </div>

        <div className="mt-8 text-[13px] text-[color:var(--color-ink-2)]">
          {error ? (
            <span
              className="font-semibold"
              style={{ color: "var(--color-hazard)" }}
            >
              Wrong PIN — try again
            </span>
          ) : (
            "Enter your 4-digit PIN to sign in"
          )}
        </div>

        <div
          className="mt-4 flex items-center gap-3"
          style={{
            animation: error ? "shake 320ms ease-out" : undefined,
          }}
        >
          {[0, 1, 2, 3].map((i) => {
            const filled = i < pin.length;
            return (
              <span
                key={i}
                className="h-3.5 w-3.5 rounded-full transition-all"
                style={{
                  background: filled
                    ? error
                      ? "var(--color-hazard)"
                      : "var(--color-ink)"
                    : "transparent",
                  boxShadow: filled
                    ? undefined
                    : "inset 0 0 0 1.5px var(--color-ink-4)",
                }}
              />
            );
          })}
        </div>

        <div className="mt-auto w-full max-w-[300px] pb-6">
          <NumericKeypad
            onDigit={onDigit}
            onBackspace={onBackspace}
            bottomLeft={
              <KeypadKey onClick={useBiometric} aria-label="Use Face ID">
                <Icon.Fingerprint
                  width={22}
                  height={22}
                  style={{ color: "var(--color-ink)" }}
                />
              </KeypadKey>
            }
          />
          <button
            className="mt-5 w-full text-center text-[13px] font-semibold text-[color:var(--color-info)] transition-transform active:scale-95"
            onClick={() =>
              nav?.showToast({
                title: "PIN reset sent",
                sub: "Check your company email",
                tone: "info",
              })
            }
          >
            Forgot your PIN?
          </button>
        </div>
      </div>
    </div>
  );
}
