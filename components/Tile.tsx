import type { CSSProperties, ReactNode } from "react";
import { Icon } from "./icons";

export type TileTone =
  | "brand"
  | "hazard"
  | "caution"
  | "info"
  | "ink"
  | "warm";

export const tileStyle: Record<TileTone, CSSProperties> = {
  brand: {
    background:
      "linear-gradient(180deg, oklch(0.62 0.17 152), oklch(0.46 0.14 152))",
    boxShadow:
      "inset 0 1px 0 oklch(1 0 0 / 0.25), inset 0 -1px 0 oklch(0.25 0.1 152 / 0.2), 0 1px 2px oklch(0.4 0.14 152 / 0.25)",
  },
  hazard: {
    background:
      "linear-gradient(180deg, oklch(0.66 0.22 30), oklch(0.52 0.22 27))",
    boxShadow:
      "inset 0 1px 0 oklch(1 0 0 / 0.28), inset 0 -1px 0 oklch(0.3 0.18 25 / 0.2), 0 1px 2px oklch(0.5 0.22 27 / 0.25)",
  },
  caution: {
    background:
      "linear-gradient(180deg, oklch(0.82 0.16 75), oklch(0.68 0.17 72))",
    boxShadow:
      "inset 0 1px 0 oklch(1 0 0 / 0.3), inset 0 -1px 0 oklch(0.35 0.14 65 / 0.22), 0 1px 2px oklch(0.5 0.16 78 / 0.25)",
  },
  info: {
    background:
      "linear-gradient(180deg, oklch(0.64 0.15 240), oklch(0.5 0.16 242))",
    boxShadow:
      "inset 0 1px 0 oklch(1 0 0 / 0.28), inset 0 -1px 0 oklch(0.28 0.15 240 / 0.22), 0 1px 2px oklch(0.4 0.16 240 / 0.25)",
  },
  ink: {
    background:
      "linear-gradient(180deg, oklch(0.32 0.01 260), oklch(0.16 0.01 260))",
    boxShadow:
      "inset 0 1px 0 oklch(1 0 0 / 0.12), 0 1px 2px oklch(0.1 0.01 260 / 0.3)",
  },
  warm: {
    background:
      "linear-gradient(135deg, oklch(0.82 0.11 55), oklch(0.58 0.17 42))",
    boxShadow:
      "inset 0 1px 0 oklch(1 0 0 / 0.28), inset 0 -1px 0 oklch(0.3 0.13 42 / 0.25), 0 1px 2px oklch(0.45 0.14 42 / 0.25)",
  },
};

const iconSizes = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-11 w-11",
  xl: "h-14 w-14",
};

const iconShape = {
  rounded: {
    sm: "rounded-lg",
    md: "rounded-xl",
    lg: "rounded-xl",
    xl: "rounded-2xl",
  },
  circle: {
    sm: "rounded-full",
    md: "rounded-full",
    lg: "rounded-full",
    xl: "rounded-full",
  },
};

export function IconTile({
  tone,
  size = "md",
  shape = "rounded",
  children,
  className = "",
}: {
  tone: TileTone;
  size?: keyof typeof iconSizes;
  shape?: "rounded" | "circle";
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`sphere-hl relative flex flex-shrink-0 items-center justify-center ${iconSizes[size]} ${iconShape[shape][size]} ${className}`}
      style={tileStyle[tone]}
    >
      <span className="relative z-10 inline-flex text-white">{children}</span>
    </div>
  );
}

const avatarSizes = {
  sm: { box: "h-8 w-8", text: "text-[12px]" },
  md: { box: "h-10 w-10", text: "text-[14px]" },
  lg: { box: "h-12 w-12", text: "text-[15px]" },
};

export function Avatar({
  tone = "brand",
  size = "md",
  initials,
  verified,
}: {
  tone?: TileTone;
  size?: keyof typeof avatarSizes;
  initials: string;
  verified?: boolean;
}) {
  const s = avatarSizes[size];
  return (
    <div
      className={`sphere-hl relative flex flex-shrink-0 items-center justify-center rounded-full ${s.box}`}
      style={tileStyle[tone]}
    >
      <span
        className={`relative z-10 font-semibold text-white tracking-[-0.01em] ${s.text}`}
      >
        {initials}
      </span>
      {verified && (
        <div
          className="absolute -right-0.5 -bottom-0.5 flex h-[18px] w-[18px] items-center justify-center rounded-full ring-[2px] ring-white"
          style={{
            background: "var(--color-info)",
            boxShadow: "0 1px 2px oklch(0.3 0.15 240 / 0.3)",
          }}
        >
          <Icon.Check width={10} height={10} className="text-white" />
        </div>
      )}
    </div>
  );
}
