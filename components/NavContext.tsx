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

export type PrototypeState = {
  inventoryVerified: boolean;
  stopsMidService: boolean;
  stopsCompleted: number;
};

export type NavContextValue = {
  current: PrototypeScreen;
  go: (screen: PrototypeScreen) => void;
  back: () => void;
  state: PrototypeState;
  patchState: (patch: Partial<PrototypeState>) => void;
};

export const NavContext = createContext<NavContextValue | null>(null);

/** Returns the nav handle, or null if we're outside a prototype context. */
export function useNav() {
  return useContext(NavContext);
}
