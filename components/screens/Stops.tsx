"use client";

import { Icon } from "../icons";
import { BottomTabs } from "../BottomTabs";
import { LargeTitle, StatusBar } from "../Phone";
import { Timeline, type TimelineNode } from "../Timeline";
import { useNav } from "../NavContext";

type StopSeed = {
  address: string;
  time: string;
  meta: string;
  badge: "pickup" | "delivery" | "both";
};

const stopSeeds: StopSeed[] = [
  { address: "Memorial Hospital", time: "8:12 AM", meta: "Dock 3 · 140 kg", badge: "both" },
  { address: "BioLab Inc.", time: "10:15 AM", meta: "40 kg · loading bay B", badge: "pickup" },
  { address: "Eastside Dental Group", time: "11:45 AM", meta: "Suite 4", badge: "pickup" },
  { address: "Riverside Clinic", time: "12:30 PM", meta: "60 kg · dock 2", badge: "both" },
];

function buildNodes(completed: number): TimelineNode[] {
  return stopSeeds.map((s, i) => {
    const n = i + 1;
    let status: TimelineNode["status"];
    let title: string;
    let meta = s.meta;
    if (i < completed) {
      status = "done";
      title = `Stop 0${n} · Complete`;
      if (i === 0) meta = "Signed by R. Garcia";
    } else if (i === completed) {
      status = "active";
      title = `Stop 0${n} · Up next`;
    } else {
      status = "upcoming";
      title = `Stop 0${n}`;
    }
    return { title, address: s.address, time: s.time, meta, status, badge: s.badge };
  });
}

export function StopsScreen({
  midService = false,
}: { midService?: boolean } = {}) {
  const nav = useNav();
  const completed = nav
    ? nav.state.stopsCompleted
    : midService
    ? 2
    : 0;
  const nodes = buildNodes(completed);

  return (
    <>
      <StatusBar />

      <LargeTitle
        title="Today's stops"
        subtitle="Route R-402 · 11 stops · 84 miles"
        right={
          <>
            <button
              onClick={() =>
                nav?.showToast({
                  title: "Search stops",
                  sub: "Find a site by name or address",
                  tone: "info",
                })
              }
              className="flex h-9 w-9 items-center justify-center rounded-full row-hover transition-transform active:scale-95"
            >
              <Icon.Search width={18} height={18} />
            </button>
            <button
              onClick={() =>
                nav?.showToast({
                  title: "Route options",
                  sub: "Reorder, skip, or re-optimise",
                  tone: "info",
                })
              }
              className="flex h-9 w-9 items-center justify-center rounded-full row-hover transition-transform active:scale-95"
            >
              <Icon.Menu width={20} height={20} />
            </button>
          </>
        }
      />

      {/* Progress card */}
      <div className="px-4">
        <div className="card p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[12px] text-[color:var(--color-ink-3)]">
                Progress
              </div>
              <div className="mt-1 flex items-baseline gap-1.5 tnum">
                <span className="text-[24px] font-semibold tracking-[-0.02em] leading-none">
                  {completed}
                </span>
                <span className="text-[14px] text-[color:var(--color-ink-3)]">
                  of 11 completed
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Metric value="8:00" label="Start" />
              <Metric value="2:30" label="End" />
            </div>
          </div>

          <div className="mt-3 flex gap-1">
            {Array.from({ length: 11 }).map((_, i) => (
              <div
                key={i}
                className="h-1.5 flex-1 rounded-full"
                style={{
                  background:
                    i < completed ? "var(--color-brand)" : "var(--color-hairline)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-4 no-scrollbar">
        <div className="card p-5">
          <div className="flex items-baseline justify-between mb-4">
            <span className="text-[13px] font-semibold text-[color:var(--color-ink)]">
              Route sequence
            </span>
            <span className="tnum text-[12px] text-[color:var(--color-ink-3)]">
              8:00 AM — 2:30 PM
            </span>
          </div>

          <Timeline nodes={nodes} />

          <button
            onClick={() =>
              nav?.showToast({
                title: "Full route loaded",
                sub: "All 11 stops through 2:30 PM",
                tone: "info",
              })
            }
            className="mt-1 flex w-full items-center justify-between rounded-xl border border-dashed border-[color:var(--color-border)] px-4 py-3 text-left transition active:bg-[color:var(--color-bg)]"
          >
            <span className="text-[13.5px] font-medium text-[color:var(--color-ink-2)]">
              Show {11 - nodes.length} more stops
            </span>
            <Icon.ChevronDown
              width={15}
              height={15}
              style={{ color: "var(--color-ink-3)" }}
            />
          </button>
        </div>
      </div>

      <BottomTabs active="stops" />
    </>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-[color:var(--color-bg)] px-3 py-2 min-w-[62px]">
      <div className="text-[11px] text-[color:var(--color-ink-3)]">{label}</div>
      <div className="tnum text-[14px] font-semibold leading-tight mt-0.5">
        {value}
      </div>
    </div>
  );
}
