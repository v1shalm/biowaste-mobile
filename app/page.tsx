import { Phone } from "@/components/Phone";
import { HomeScreen } from "@/components/screens/Home";
import { StopsScreen } from "@/components/screens/Stops";
import { StopDetailScreen } from "@/components/screens/StopDetail";
import { InventoryScreen } from "@/components/screens/Inventory";
import { MapScreen } from "@/components/screens/Map";
import { SupportScreen } from "@/components/screens/Support";
import { CompletedScreen } from "@/components/screens/Completed";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { Avatar } from "@/components/Tile";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="border-b border-[color:var(--color-hairline)] bg-[color:var(--color-surface)]">
        <div className="mx-auto max-w-[1440px] px-10 pt-12 pb-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "var(--color-brand)" }}
              >
                <Icon.Truck width={18} height={18} className="text-white" />
              </div>
              <div>
                <div className="text-[12px] text-[color:var(--color-ink-3)]">
                  Case study, 2026
                </div>
                <div className="text-[15px] font-semibold mt-0.5 tracking-[-0.01em]">
                  BioWaste Mobile
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden gap-10 md:flex">
                <Meta label="Role" value="Product design" />
                <Meta label="Platform" value="iOS and Android" />
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/prototype"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-hairline)] bg-[color:var(--color-surface)] px-4 py-2.5 text-[13px] font-semibold text-[color:var(--color-ink)] transition hover:bg-[color:var(--color-bg)]"
                >
                  Prototype
                  <Icon.ChevronRight width={14} height={14} />
                </Link>
                <Link
                  href="/mockups"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-ink)] px-4 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[color:var(--color-ink-2)]"
                >
                  Mockups
                  <Icon.ChevronRight width={14} height={14} />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-8">
            <h1 className="col-span-12 md:col-span-8 text-[clamp(42px,6.4vw,84px)] font-bold leading-[0.96] tracking-[-0.028em]">
              A route tool that feels like a{" "}
              <span className="text-[color:var(--color-ink-3)]">
                real consumer app
              </span>{" "}
              &mdash; not a warehouse dashboard.
            </h1>

            <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
              <p className="text-[15px] leading-[1.55] text-[color:var(--color-ink-2)] max-w-[50ch]">
                Apple Maps-grade maps, pill buttons, driver identity cards, a
                timeline that actually reads. Every screen built to the polish
                bar of a shipped rideshare app, held to the real job of a
                bio-waste driver starting their shift at 6 a.m.
              </p>
              <div className="mt-5 flex flex-wrap gap-5">
                <Figure label="Screens" value="7" />
                <Figure label="Taps to start" value="2" />
                <Figure label="Type" value="Geist" />
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-5 gap-y-2.5 items-center">
            <span className="text-[13px] font-semibold text-[color:var(--color-ink)]">
              Principles
            </span>
            <span className="h-1 w-1 rounded-full bg-[color:var(--color-ink-4)]" />
            {[
              "Glove-friendly 44pt targets",
              "Realistic labelled map",
              "Tabular numerals on data",
              "One primary button per screen",
              "Bottom sheet with grabber",
              "Driver identity card pattern",
            ].map((t, i) => (
              <span
                key={t}
                className="inline-flex items-baseline gap-1.5 text-[13px] text-[color:var(--color-ink-2)]"
              >
                <span className="tnum text-[12px] text-[color:var(--color-ink-4)]">
                  {i + 1}.
                </span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Phones strip */}
      <section className="relative">
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[color:var(--color-hairline)] bg-[color:var(--color-canvas)]/85 backdrop-blur px-10 py-3">
          <div className="flex items-baseline gap-3">
            <span className="text-[13px] font-semibold text-[color:var(--color-ink)]">
              Screens
            </span>
            <span className="text-[12.5px] text-[color:var(--color-ink-3)] tnum">
              1 to 7
            </span>
          </div>
          <span className="text-[12.5px] text-[color:var(--color-ink-3)]">
            Scroll horizontally
          </span>
        </div>

        <div className="overflow-x-auto no-scrollbar">
          <div className="flex items-start gap-14 px-10 py-16 min-w-max">
            <Phone
              label="Home and route"
              caption="Opens with a morning greeting and a live Apple Maps-style preview. Route code, key stats, and an inventory reminder sit in a single clean card."
            >
              <HomeScreen />
            </Phone>
            <Phone
              label="Stops"
              caption="A vertical timeline of the day. Completed, active, and upcoming nodes each read differently. Arrival times align on the right with tabular figures."
            >
              <StopsScreen />
            </Phone>
            <Phone
              label="Stop detail"
              caption="Map thumbnail, pickup and delivery manifest, a site contact card with name, extension, and quick dial. Start-service button at the bottom."
            >
              <StopDetailScreen />
            </Phone>
            <Phone
              label="Inventory check"
              caption="Ring progress on the card, one discrepancy surfaced in amber. Steppers sized for gloves. A green confirm button seals the manifest."
            >
              <InventoryScreen />
            </Phone>
            <Phone
              label="Navigation"
              caption="Full-bleed labelled map with real street names and park shapes. Floating search pill. Bottom sheet with stop info and a green navigation button."
            >
              <MapScreen />
            </Phone>
            <Phone
              label="Stop complete"
              caption="Closes the loop after a pickup. Signed receipt, next stop preview, a choice between continuing or taking a break. Satisfying, not patronising."
            >
              <CompletedScreen />
            </Phone>
            <Phone
              label="Support"
              caption="Hazard report pinned to the top. Call, message, and email with live dispatch status. Quick actions mapped to real on-the-road problems."
            >
              <SupportScreen />
            </Phone>
          </div>
        </div>
      </section>

      {/* Component system */}
      <section className="border-t border-[color:var(--color-hairline)] bg-[color:var(--color-surface)]">
        <div className="mx-auto max-w-[1440px] px-10 pt-16 pb-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-[13px] font-semibold text-[color:var(--color-ink-3)]">
                System
              </div>
              <h2 className="mt-2 text-[44px] font-bold tracking-[-0.022em] leading-[0.96]">
                Primitives
              </h2>
            </div>
            <div className="max-w-[40ch] text-[14.5px] leading-snug text-[color:var(--color-ink-2)]">
              A small, opinionated set. Every component earns its place by
              solving a glove-friendly need on a moving truck.
            </div>
          </div>

          <div className="mt-10 grid grid-cols-12 gap-4">
            <Card title="Buttons" span="md:col-span-7">
              <div className="grid gap-3">
                <button
                  className="pill-cta text-white"
                  style={{ background: "var(--color-brand)" }}
                >
                  Confirm inventory
                  <Icon.ChevronRight width={18} height={18} />
                </button>
                <div className="grid grid-cols-[1fr_auto] gap-2">
                  <button
                    className="pill-cta text-white"
                    style={{ background: "var(--color-ink)" }}
                  >
                    Start service
                    <Icon.ChevronRight width={18} height={18} />
                  </button>
                  <button className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--color-bg)]">
                    <Icon.Phone width={18} height={18} />
                  </button>
                </div>
              </div>
            </Card>

            <Card title="Driver card" span="md:col-span-5">
              <div className="card p-4">
                <div className="flex items-center gap-3">
                  <Avatar tone="warm" size="lg" initials="RG" verified />
                  <div className="flex-1 min-w-0">
                    <div className="text-[14.5px] font-semibold">Rosa Garcia</div>
                    <div className="mt-0.5 flex items-center gap-1.5 text-[12px] text-[color:var(--color-ink-2)]">
                      <Icon.Star
                        width={11}
                        height={11}
                        style={{ color: "var(--color-caution)" }}
                      />
                      <span className="tnum font-semibold text-[color:var(--color-ink)]">
                        4.9
                      </span>
                      <span className="tnum">Ext. 4410</span>
                    </div>
                  </div>
                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-bg)]">
                    <Icon.Phone width={15} height={15} />
                  </button>
                </div>
              </div>
            </Card>

            <Card title="Status badges" span="md:col-span-4">
              <div className="flex flex-wrap items-start gap-2">
                <Badge tone="brand">Pickup and delivery</Badge>
                <Badge tone="ink">Active</Badge>
                <Badge tone="caution">Pending</Badge>
                <Badge tone="hazard">Hazard</Badge>
                <Badge tone="ok">Complete</Badge>
              </div>
            </Card>

            <Card title="Stepper" span="md:col-span-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-bg)]">
                    <Icon.Minus width={13} height={13} />
                  </button>
                  <div className="min-w-[48px] rounded-full bg-[color:var(--color-bg)] px-3 py-1.5 text-center tnum text-[15px] font-semibold">
                    15
                  </div>
                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-bg)]">
                    <Icon.Plus width={13} height={13} />
                  </button>
                </div>
                <span className="text-[12px] text-[color:var(--color-ink-3)]">
                  units
                </span>
              </div>
            </Card>

            <Card title="Alert" span="md:col-span-4">
              <div className="rounded-xl bg-[color:var(--color-caution-50)] px-3.5 py-2.5">
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--color-caution)]/25">
                    <Icon.Alert
                      width={13}
                      height={13}
                      style={{ color: "var(--color-caution-ink)" }}
                    />
                  </div>
                  <div className="text-[12.5px] leading-snug">
                    <b>Inventory pending.</b>{" "}
                    <span className="text-[color:var(--color-ink-2)]">
                      Confirm 6 items.
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <Card title="Colour" span="md:col-span-8">
              <div className="grid grid-cols-6 gap-3">
                <Swatch name="ink" v="0.18 0.01 260" />
                <Swatch name="ink-2" v="0.45 0.008 260" />
                <Swatch name="bg" v="0.975 0.003 250" />
                <Swatch name="surface" v="1 0 0" />
                <Swatch name="brand" v="0.56 0.16 152" />
                <Swatch name="brand-50" v="0.955 0.05 152" />
                <Swatch name="hazard" v="0.58 0.22 27" />
                <Swatch name="caution" v="0.75 0.16 78" />
                <Swatch name="info" v="0.56 0.15 242" />
                <Swatch name="map-bg" v="0.955 0.012 95" />
                <Swatch name="map-park" v="0.88 0.09 140" />
                <Swatch name="map-water" v="0.86 0.06 230" />
              </div>
            </Card>

            <Card title="Type" span="md:col-span-4">
              <div className="flex flex-col gap-3">
                <TypeRow
                  name="Display, tabular"
                  className="tnum text-[36px] font-bold leading-none tracking-[-0.025em]"
                >
                  R-402
                </TypeRow>
                <TypeRow
                  name="Title"
                  className="text-[24px] font-bold tracking-[-0.022em]"
                >
                  Today's stops
                </TypeRow>
                <TypeRow name="Body" className="text-[14px]">
                  Memorial Hospital, Dock 3
                </TypeRow>
                <TypeRow
                  name="Meta"
                  className="text-[12px] text-[color:var(--color-ink-3)]"
                >
                  Arriving 8:12 AM
                </TypeRow>
              </div>
            </Card>
          </div>

          {/* Colophon */}
          <div className="mt-20 grid grid-cols-12 gap-6 border-t border-[color:var(--color-hairline)] pt-8">
            <div className="col-span-12 md:col-span-6">
              <div className="text-[13px] font-semibold text-[color:var(--color-ink-3)]">
                Colophon
              </div>
              <div className="mt-3 text-[15px] leading-[1.55] text-[color:var(--color-ink-2)] max-w-[60ch]">
                Set in <b className="text-[color:var(--color-ink)]">Geist</b> by
                Vercel across the entire interface, with tabular numerals used
                for all data. Colour built in OKLCH with neutrals tinted
                slightly toward blue-grey for an iOS-native feel. Route line
                painted in Apple Maps blue for instant map legibility.
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 justify-end text-[color:var(--color-ink-3)]">
                <span className="text-[13px] font-semibold">End of showcase</span>
                <span className="h-1 w-1 rounded-full bg-current" />
                <span className="text-[12.5px] tnum">v0.3 · 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- helpers ---------- */

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[12px] text-[color:var(--color-ink-3)]">{label}</span>
      <span className="text-[13.5px] font-semibold">{value}</span>
    </div>
  );
}

function Figure({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[12px] text-[color:var(--color-ink-3)]">{label}</span>
      <span className="tnum text-[22px] font-semibold leading-none tracking-[-0.015em]">
        {value}
      </span>
    </div>
  );
}

function Card({
  title,
  span,
  children,
}: {
  title: string;
  span: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`col-span-12 ${span} rounded-2xl border border-[color:var(--color-hairline)] bg-[color:var(--color-bg)] p-6`}
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="text-[13px] font-semibold text-[color:var(--color-ink)]">
          {title}
        </div>
      </div>
      {children}
    </div>
  );
}

function Badge({
  tone,
  children,
}: {
  tone: "brand" | "ink" | "caution" | "hazard" | "ok";
  children: React.ReactNode;
}) {
  const map: Record<string, { bg: string; color: string }> = {
    brand: { bg: "var(--color-brand-50)", color: "var(--color-brand-ink)" },
    ink: { bg: "var(--color-ink)", color: "white" },
    caution: { bg: "var(--color-caution-50)", color: "var(--color-caution-ink)" },
    hazard: { bg: "var(--color-hazard-50)", color: "var(--color-hazard)" },
    ok: { bg: "var(--color-brand-50)", color: "var(--color-brand-2)" },
  };
  const { bg, color } = map[tone];
  return (
    <span
      className="chip px-2 py-1 text-[11.5px] font-semibold"
      style={{ background: bg, color }}
    >
      {children}
    </span>
  );
}

function Swatch({ name, v }: { name: string; v: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="aspect-[4/3] rounded-xl border border-[color:var(--color-hairline)]"
        style={{ background: `oklch(${v})` }}
      />
      <div>
        <div className="text-[12px] font-semibold">{name}</div>
        <div className="text-[10.5px] text-[color:var(--color-ink-3)] tnum">
          {v}
        </div>
      </div>
    </div>
  );
}

function TypeRow({
  name,
  children,
  className,
}: {
  name: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 rounded-xl bg-[color:var(--color-surface)] border border-[color:var(--color-hairline)] p-3">
      <span className={className}>{children}</span>
      <span className="text-[11.5px] text-[color:var(--color-ink-3)] flex-shrink-0 text-right">
        {name}
      </span>
    </div>
  );
}
