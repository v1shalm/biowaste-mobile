import type { ReactNode } from "react";
import { Icon } from "./icons";

export function Phone({
  label,
  caption,
  children,
}: {
  label: string;
  caption?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen">{children}</div>
      </div>
      <div className="pl-2 max-w-[360px]">
        <div className="text-[13px] font-semibold text-[color:var(--color-ink)]">
          {label}
        </div>
        {caption && (
          <div className="mt-1.5 text-[13.5px] text-[color:var(--color-ink-2)] leading-snug max-w-[44ch]">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
}

export function StatusBar({
  time = "9:41",
  tone = "dark",
}: {
  time?: string;
  tone?: "dark" | "light";
}) {
  const color = tone === "light" ? "white" : "var(--color-ink)";
  return (
    <div
      className="relative z-30 flex h-[50px] items-center justify-between px-6"
      style={{ color }}
    >
      <span className="tnum text-[17px] font-semibold leading-none tracking-[-0.015em] whitespace-nowrap">
        {time}
      </span>
      <div className="flex items-center gap-[6px]">
        <Icon.Signal width={17} height={11} />
        <Icon.Wifi width={15} height={11} />
        <Icon.Battery width={25} height={12} />
      </div>
    </div>
  );
}

export function HomeIndicator({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <div className="flex justify-center pb-2 pt-1">
      <div
        className="h-[5px] w-[134px] rounded-full"
        style={{
          background:
            tone === "light" ? "oklch(1 0 0 / 0.9)" : "oklch(0.18 0.01 260 / 0.9)",
        }}
      />
    </div>
  );
}

export function LargeTitle({
  title,
  subtitle,
  right,
  back,
}: {
  title: string;
  subtitle?: string;
  right?: ReactNode;
  back?: boolean;
}) {
  return (
    <div className="px-5 pt-2 pb-3">
      <div className="flex items-center justify-between h-10">
        <div className="flex items-center gap-2">
          {back && (
            <button className="flex h-9 w-9 -ml-2 items-center justify-center rounded-full row-hover">
              <Icon.ChevronLeft width={20} height={20} />
            </button>
          )}
        </div>
        <div className="flex items-center gap-1 text-[color:var(--color-ink-2)]">
          {right}
        </div>
      </div>
      <h1 className="mt-1 text-[32px] font-bold tracking-[-0.022em] leading-[1.05]">
        {title}
      </h1>
      {subtitle && (
        <div className="mt-1 text-[14px] text-[color:var(--color-ink-2)] leading-snug">
          {subtitle}
        </div>
      )}
    </div>
  );
}

export function SectionLabel({
  children,
  right,
}: {
  children: ReactNode;
  right?: ReactNode;
}) {
  return (
    <div className="flex items-baseline justify-between px-6 pt-6 pb-2">
      <span className="text-[13px] font-semibold text-[color:var(--color-ink)]">
        {children}
      </span>
      {right}
    </div>
  );
}
