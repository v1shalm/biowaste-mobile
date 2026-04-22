import { Icon } from "./icons";

export type TimelineNode = {
  title: string;
  address?: string;
  time: string;
  meta?: string;
  status: "done" | "active" | "upcoming";
  badge?: "pickup" | "delivery" | "both";
};

type Node = TimelineNode;

export function Timeline({ nodes }: { nodes: readonly Node[] }) {
  return (
    <div className="flex flex-col">
      {nodes.map((n, i) => {
        const last = i === nodes.length - 1;
        return (
          <div key={i} className="relative flex gap-3 pl-1">
            <div className="relative w-5 flex-shrink-0 flex flex-col items-center">
              <Dot status={n.status} />
              {!last && (
                <div
                  className="flex-1 w-[2px] my-1 rounded-full"
                  style={{
                    background:
                      n.status === "done"
                        ? "var(--color-brand)"
                        : n.status === "active"
                        ? "linear-gradient(var(--color-brand), var(--color-ink-4) 60%)"
                        : "var(--color-ink-4)",
                    opacity: n.status === "upcoming" ? 0.35 : 1,
                    minHeight: 36,
                  }}
                />
              )}
            </div>

            <div
              className="flex-1 pb-5"
              style={{ opacity: n.status === "upcoming" ? 0.85 : 1 }}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div
                    className="text-[12px] truncate"
                    style={{
                      color:
                        n.status === "upcoming"
                          ? "var(--color-ink-3)"
                          : "var(--color-ink-2)",
                    }}
                  >
                    {n.title}
                  </div>
                  {n.address && (
                    <div
                      className={
                        "text-[15px] leading-tight mt-0.5 truncate " +
                        (n.status === "upcoming" ? "font-medium" : "font-semibold")
                      }
                    >
                      {n.address}
                    </div>
                  )}
                  {(n.badge || n.meta) && (
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1.5">
                      {n.badge && <TimelineBadge type={n.badge} />}
                      {n.meta && (
                        <span className="text-[12px] text-[color:var(--color-ink-3)]">
                          {n.meta}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <div className="text-right tnum flex-shrink-0">
                  <div className="text-[15px] font-semibold leading-none whitespace-nowrap">
                    {n.time}
                  </div>
                  {n.status === "active" && (
                    <div className="mt-1 text-[12px] text-[color:var(--color-brand-2)] font-semibold whitespace-nowrap">
                      in 12 min
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Dot({ status }: { status: Node["status"] }) {
  if (status === "done") {
    return (
      <div
        className="sphere-hl relative flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-[color:var(--color-surface)]"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.62 0.16 152), oklch(0.46 0.14 152))",
          boxShadow: "0 2px 4px oklch(0.46 0.14 152 / 0.35)",
        }}
      >
        <Icon.Check
          width={11}
          height={11}
          className="relative z-10 text-white"
          strokeWidth={2.4}
        />
      </div>
    );
  }
  if (status === "active") {
    return (
      <div className="relative">
        <div className="ring-pulse absolute inset-0 -m-1.5 rounded-full bg-[color:var(--color-brand)]/45" />
        <div
          className="sphere-hl relative flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-[color:var(--color-surface)]"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.64 0.17 152), oklch(0.48 0.15 152))",
            boxShadow:
              "0 2px 6px oklch(0.46 0.14 152 / 0.5), inset 0 -1px 1px oklch(0.25 0.1 152 / 0.4)",
          }}
        >
          <div className="relative z-10 h-1.5 w-1.5 rounded-full bg-white" />
        </div>
      </div>
    );
  }
  return (
    <div
      className="flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--color-surface)]"
      style={{
        boxShadow:
          "inset 0 0 0 1.5px var(--color-ink-4), 0 1px 1px oklch(0.2 0.02 260 / 0.04)",
      }}
    >
      <div className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-ink-4)]" />
    </div>
  );
}

function TimelineBadge({ type }: { type: "pickup" | "delivery" | "both" }) {
  const label =
    type === "both" ? "Pickup + delivery" : type === "pickup" ? "Pickup" : "Delivery";
  return (
    <span
      className="chip bg-[color:var(--color-brand-50)] px-2 py-0.5 text-[11px] font-semibold text-[color:var(--color-brand-ink)]"
      style={{
        boxShadow:
          "inset 0 1px 0 oklch(1 0 0 / 0.55), inset 0 0 0 1px oklch(0.56 0.16 152 / 0.14)",
      }}
    >
      {label}
    </span>
  );
}
