"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";
import {
  NavContext,
  type NavContextValue,
  type PrototypeScreen,
  type PrototypeState,
  type ToastMessage,
} from "@/components/NavContext";
import { Toast } from "@/components/Toast";
import { SplashScreen } from "@/components/screens/Splash";
import { LoginScreen } from "@/components/screens/Login";
import { TruckSelectionScreen } from "@/components/screens/TruckSelection";
import { OdometerScreen } from "@/components/screens/Odometer";
import { HomeScreen } from "@/components/screens/Home";
import { StopsScreen } from "@/components/screens/Stops";
import { StopDetailScreen } from "@/components/screens/StopDetail";
import { InventoryScreen } from "@/components/screens/Inventory";
import { MapScreen } from "@/components/screens/Map";
import { CompletedScreen } from "@/components/screens/Completed";
import { SupportScreen } from "@/components/screens/Support";

const initialState: PrototypeState = {
  inventoryVerified: false,
  stopsCompleted: 0,
  inventoryCounts: {},
};

export default function PrototypePage() {
  const [screen, setScreen] = useState<PrototypeScreen>("splash");
  const [history, setHistory] = useState<PrototypeScreen[]>([]);
  const [state, setState] = useState<PrototypeState>(initialState);
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const toastIdRef = useRef(0);

  const go = useCallback(
    (next: PrototypeScreen) => {
      setHistory((h) => [...h, screen].slice(-20));
      setScreen(next);
    },
    [screen]
  );

  const back = useCallback(() => {
    setHistory((h) => {
      if (h.length === 0) return h;
      const prev = h[h.length - 1];
      setScreen(prev);
      return h.slice(0, -1);
    });
  }, []);

  const patchState = useCallback((patch: Partial<PrototypeState>) => {
    setState((s) => ({ ...s, ...patch }));
  }, []);

  const setInventoryCount = useCallback((name: string, count: number) => {
    setState((s) => ({
      ...s,
      inventoryCounts: { ...s.inventoryCounts, [name]: count },
    }));
  }, []);

  const completeStop = useCallback(() => {
    setState((s) => ({
      ...s,
      stopsCompleted: Math.min(s.stopsCompleted + 1, 11),
    }));
  }, []);

  const showToast = useCallback((m: Omit<ToastMessage, "id">) => {
    toastIdRef.current += 1;
    setToast({ ...m, id: toastIdRef.current });
  }, []);

  const reset = useCallback(() => {
    setScreen("splash");
    setHistory([]);
    setState(initialState);
    setToast(null);
  }, []);

  const skipToHome = useCallback(() => {
    setScreen("home");
    setHistory([]);
    setState({ ...initialState, inventoryVerified: false });
    setToast(null);
  }, []);

  const navValue: NavContextValue = useMemo(
    () => ({
      current: screen,
      go,
      back,
      state,
      patchState,
      setInventoryCount,
      completeStop,
      showToast,
      toast,
    }),
    [screen, go, back, state, patchState, setInventoryCount, completeStop, showToast, toast]
  );

  return (
    <main className="min-h-screen">
      <header className="flex items-center justify-between border-b border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] px-8 py-5">
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl"
            style={{ background: "var(--color-brand)" }}
          >
            <Icon.Truck width={16} height={16} className="text-white" />
          </div>
          <div>
            <div className="text-[11.5px] text-[color:var(--color-ink-3)]">
              Interactive prototype
            </div>
            <div className="text-[14px] font-semibold tracking-[-0.01em]">
              BioWaste Mobile
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={skipToHome}
            className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] px-3.5 py-2 text-[12.5px] font-semibold text-[color:var(--color-ink)] transition hover:bg-[color:var(--color-bg)] active:scale-95"
          >
            Skip to home
          </button>
          <button
            onClick={reset}
            className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] px-3.5 py-2 text-[12.5px] font-semibold text-[color:var(--color-ink)] transition hover:bg-[color:var(--color-bg)] active:scale-95"
          >
            Reset
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-1 rounded-full border border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] px-3.5 py-2 text-[12.5px] font-semibold text-[color:var(--color-ink)] transition hover:bg-[color:var(--color-bg)]"
          >
            <Icon.ChevronLeft width={13} height={13} />
            Showcase
          </Link>
          <Link
            href="/mockups"
            className="inline-flex items-center gap-1 rounded-full bg-[color:var(--color-ink)] px-3.5 py-2 text-[12.5px] font-semibold text-white transition hover:bg-[color:var(--color-ink-2)]"
          >
            Mockups
            <Icon.ChevronRight width={13} height={13} />
          </Link>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-74px)] flex-col items-center justify-center gap-8 py-10">
        <div className="phone-frame">
          <div className="phone-notch" />
          <div className="phone-screen">
            <NavContext.Provider value={navValue}>
              {renderScreen(screen)}
              <Toast toast={toast} />
            </NavContext.Provider>
          </div>
        </div>

        <div className="flex items-center gap-4 text-[12px] text-[color:var(--color-ink-3)] tnum">
          <span>
            Screen: <b className="text-[color:var(--color-ink)]">{screen}</b>
          </span>
          <span className="h-1 w-1 rounded-full bg-[color:var(--color-ink-4)]" />
          <span>
            Inventory:{" "}
            <b className="text-[color:var(--color-ink)]">
              {state.inventoryVerified ? "verified" : "pending"}
            </b>
          </span>
          <span className="h-1 w-1 rounded-full bg-[color:var(--color-ink-4)]" />
          <span>
            Stops:{" "}
            <b className="text-[color:var(--color-ink)]">
              {state.stopsCompleted} / 11
            </b>
          </span>
          <span className="h-1 w-1 rounded-full bg-[color:var(--color-ink-4)]" />
          <span>
            History: <b className="text-[color:var(--color-ink)]">{history.length}</b>
          </span>
        </div>
      </div>
    </main>
  );
}

function renderScreen(screen: PrototypeScreen) {
  switch (screen) {
    case "splash":
      return <SplashScreen />;
    case "login":
      return <LoginScreen />;
    case "truck-select":
      return <TruckSelectionScreen />;
    case "odometer":
      return <OdometerScreen />;
    case "home":
      return <HomeScreen />;
    case "stops":
      return <StopsScreen />;
    case "stop-detail":
      return <StopDetailScreen />;
    case "inventory":
      return <InventoryScreen />;
    case "map":
      return <MapScreen />;
    case "completed":
      return <CompletedScreen />;
    case "support":
      return <SupportScreen />;
  }
}
