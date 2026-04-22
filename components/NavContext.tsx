"use client";

import { createContext, useContext } from "react";

export type PrototypeScreen =
  | "home"
  | "stops"
  | "stop-detail"
  | "inventory"
  | "map"
  | "completed"
  | "support";

export type ToastTone = "info" | "brand" | "hazard" | "caution";

export type ToastMessage = {
  id: number;
  title: string;
  sub?: string;
  tone: ToastTone;
};

export type PrototypeState = {
  inventoryVerified: boolean;
  stopsCompleted: number;
  inventoryCounts: Record<string, number>;
};

export type NavContextValue = {
  current: PrototypeScreen;
  go: (screen: PrototypeScreen) => void;
  back: () => void;
  state: PrototypeState;
  patchState: (patch: Partial<PrototypeState>) => void;
  setInventoryCount: (name: string, count: number) => void;
  completeStop: () => void;
  showToast: (message: Omit<ToastMessage, "id">) => void;
  toast: ToastMessage | null;
};

export const NavContext = createContext<NavContextValue | null>(null);

/** Returns the nav handle, or null if we're outside a prototype context. */
export function useNav() {
  return useContext(NavContext);
}
