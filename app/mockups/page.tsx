"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/icons";
import { Mockup } from "@/components/Mockup";
import { HomeScreen } from "@/components/screens/Home";
import { StopsScreen } from "@/components/screens/Stops";
import { StopDetailScreen } from "@/components/screens/StopDetail";
import { InventoryScreen } from "@/components/screens/Inventory";
import { MapScreen } from "@/components/screens/Map";
import { SupportScreen } from "@/components/screens/Support";
import { CompletedScreen } from "@/components/screens/Completed";

function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="phone-frame">
      <div className="phone-notch" />
      <div className="phone-screen">{children}</div>
    </div>
  );
}

const mockups: { title: string; screen: ReactNode }[] = [
  { title: "Home — Inventory pending", screen: <HomeScreen /> },
  { title: "Home — Ready to start", screen: <HomeScreen verified /> },
  { title: "Stops — Today's timeline", screen: <StopsScreen /> },
  { title: "Stops — Mid-service", screen: <StopsScreen midService /> },
  { title: "Stop detail — Memorial Hospital", screen: <StopDetailScreen /> },
  { title: "Inventory — 1 discrepancy", screen: <InventoryScreen /> },
  { title: "Inventory — All matched", screen: <InventoryScreen verified /> },
  { title: "Navigation", screen: <MapScreen /> },
  { title: "Stop complete", screen: <CompletedScreen /> },
  { title: "Support", screen: <SupportScreen /> },
];

export default function MockupsPage() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "var(--color-surface)" }}
    >
      <header className="mx-auto max-w-[1440px] px-10 pt-12 pb-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-[12.5px] font-semibold text-[color:var(--color-ink-3)]">
              Gallery
            </div>
            <h1 className="mt-2 text-[clamp(40px,5vw,64px)] font-bold tracking-[-0.025em] leading-[0.96]">
              10 mockups
            </h1>
            <p className="mt-3 max-w-[52ch] text-[15px] leading-[1.55] text-[color:var(--color-ink-2)]">
              Every screen rendered in a phone frame on a neutral canvas. Hover
              any mockup and click <b>Download PNG</b> to export at 3× for
              presentations.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] px-4 py-2.5 text-[13px] font-semibold text-[color:var(--color-ink)] transition hover:bg-[color:var(--color-bg)]"
          >
            <Icon.ChevronLeft width={14} height={14} />
            Back to showcase
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-10 pb-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {mockups.map((m, i) => (
            <Mockup key={m.title} title={`${String(i + 1).padStart(2, "0")} · ${m.title}`}>
              <PhoneFrame>{m.screen}</PhoneFrame>
            </Mockup>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--color-hairline)] pt-6 text-[color:var(--color-ink-3)]">
          <span className="text-[13px] font-semibold">End of gallery</span>
          <span className="tnum text-[12.5px]">
            10 mockups · PNG export at 3×
          </span>
        </div>
      </div>
    </main>
  );
}
