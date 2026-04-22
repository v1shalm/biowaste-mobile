/*
  Single consistent icon family — Phosphor Icons (regular weight).
  The iOS status bar (Signal / WiFi / Battery) stays custom to match
  Apple's specific proportions and filled style.
*/
import type { SVGProps } from "react";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import {
  House,
  ListBullets,
  Package,
  Headset,
  MapTrifold,
  MapPin,
  Clock,
  Phone,
  ChatCircle,
  Envelope,
  Check,
  CaretRight,
  CaretLeft,
  CaretDown,
  Plus,
  Minus,
  List,
  Warning,
  Truck,
  Biohazard,
  NavigationArrow,
  MagnifyingGlass,
  Star,
  ShieldCheck,
  Path,
  Bell,
  Backspace,
  Fingerprint,
  GasPump,
  Gauge,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";

/*
  Wrap a Phosphor icon so it accepts the width/height API we already use,
  and applies a consistent default weight.
*/
type PIconProps = SVGProps<SVGSVGElement> & {
  width?: number | string;
  height?: number | string;
};

function wrap(Component: PhosphorIcon, defaultWeight: "regular" | "bold" | "fill" = "regular") {
  const Wrapped = ({ width = 20, height, ...rest }: PIconProps) => {
    // Phosphor uses `size` — prefer width value if provided.
    const size = Number(width) || Number(height) || 20;
    return (
      <Component
        weight={defaultWeight}
        size={size}
        {...(rest as Record<string, unknown>)}
      />
    );
  };
  Wrapped.displayName = `Wrap(${Component.displayName || "Icon"})`;
  return Wrapped;
}

export const Icon = {
  /* Navigation + shell */
  Home: wrap(House),
  List: wrap(ListBullets),
  Box: wrap(Package),
  Headset: wrap(Headset),
  Map: wrap(MapTrifold),
  Pin: wrap(MapPin, "fill"),
  Clock: wrap(Clock),
  Menu: wrap(List),
  Search: wrap(MagnifyingGlass),

  /* Controls */
  ChevronRight: wrap(CaretRight, "bold"),
  ChevronLeft: wrap(CaretLeft, "bold"),
  ChevronDown: wrap(CaretDown, "bold"),
  Plus: wrap(Plus, "bold"),
  Minus: wrap(Minus, "bold"),
  Check: wrap(Check, "bold"),

  /* Comms */
  Phone: wrap(Phone, "fill"),
  Message: wrap(ChatCircle, "fill"),
  Mail: wrap(Envelope),

  /* Semantic */
  Alert: wrap(Warning, "fill"),
  Truck: wrap(Truck, "fill"),
  Bio: wrap(Biohazard, "fill"),
  Star: wrap(Star, "fill"),
  Shield: wrap(ShieldCheck, "fill"),
  Nav: wrap(NavigationArrow, "fill"),
  Route: wrap(Path),
  Bell: wrap(Bell, "fill"),
  Backspace: wrap(Backspace),
  Fingerprint: wrap(Fingerprint),
  Fuel: wrap(GasPump, "fill"),
  Gauge: wrap(Gauge),
  Wrench: wrap(Wrench, "fill"),

  /* iOS status bar — custom to match Apple's exact proportions */
  Signal: (p: SVGProps<SVGSVGElement>) => (
    <svg
      width={17}
      height={11}
      viewBox="0 0 17 11"
      fill="currentColor"
      {...p}
    >
      <rect x="0" y="8" width="2.4" height="3" rx="0.4" />
      <rect x="4" y="5.5" width="2.4" height="5.5" rx="0.4" />
      <rect x="8" y="2.5" width="2.4" height="8.5" rx="0.4" />
      <rect x="12" y="0" width="2.4" height="11" rx="0.4" />
    </svg>
  ),
  Wifi: (p: SVGProps<SVGSVGElement>) => (
    <svg
      width={15}
      height={11}
      viewBox="0 0 15 11"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M0.8 3.6 a 10.5 10.5 0 0 1 13.4 0" strokeWidth="1.5" />
      <path d="M3 6 a 7 7 0 0 1 9 0" strokeWidth="1.5" />
      <path d="M5.2 8.4 a 3.5 3.5 0 0 1 4.6 0" strokeWidth="1.5" />
      <circle cx="7.5" cy="10" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  ),
  Battery: (p: SVGProps<SVGSVGElement>) => (
    <svg
      width={25}
      height={12}
      viewBox="0 0 25 12"
      fill="none"
      {...p}
    >
      <rect
        x="0.4"
        y="0.4"
        width="22"
        height="11.2"
        rx="3"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="0.8"
      />
      <rect
        x="23.5"
        y="4"
        width="1.2"
        height="4"
        rx="0.5"
        fill="currentColor"
        fillOpacity="0.4"
      />
      <rect
        x="1.8"
        y="1.8"
        width="16.5"
        height="8.4"
        rx="1.6"
        fill="currentColor"
      />
    </svg>
  ),
};
