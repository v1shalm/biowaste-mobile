import { Icon } from "./icons";
import { HomeIndicator } from "./Phone";

type Tab = "home" | "stops" | "inventory" | "support";

const tabs: {
  key: Tab;
  label: string;
  Icon: typeof Icon.Home;
  badge?: { value: string | number; tone: "brand" | "hazard" };
}[] = [
  { key: "home", label: "Route", Icon: Icon.Home },
  { key: "stops", label: "Stops", Icon: Icon.List, badge: { value: 11, tone: "brand" } },
  { key: "inventory", label: "Inventory", Icon: Icon.Box, badge: { value: "!", tone: "hazard" } },
  { key: "support", label: "Help", Icon: Icon.Headset },
];

export function BottomTabs({ active }: { active: Tab }) {
  return (
    <div className="mt-auto">
      <div
        className="border-t border-[color:var(--color-hairline)] bg-[color:var(--color-surface)]"
      >
        <div className="grid grid-cols-4 pt-2.5">
          {tabs.map(({ key, label, Icon: I, badge }) => {
            const isActive = key === active;
            return (
              <button
                key={key}
                className="group flex flex-col items-center gap-1 py-1 relative"
              >
                <div className="relative">
                  <I
                    width={26}
                    height={26}
                    strokeWidth={isActive ? 2.2 : 1.7}
                    style={{
                      color: isActive
                        ? "var(--color-brand)"
                        : "var(--color-ink-3)",
                    }}
                  />
                  {badge && (
                    <span
                      className="absolute -top-1 -right-2.5 min-w-[16px] h-[16px] px-1 flex items-center justify-center text-[10px] font-semibold tnum rounded-full ring-2 ring-[color:var(--color-surface)]"
                      style={{
                        background:
                          badge.tone === "hazard"
                            ? "var(--color-hazard)"
                            : "var(--color-brand)",
                        color: "white",
                        lineHeight: 1,
                      }}
                    >
                      {badge.value}
                    </span>
                  )}
                </div>
                <span
                  className="text-[10.5px] font-semibold tracking-[-0.003em]"
                  style={{
                    color: isActive
                      ? "var(--color-brand)"
                      : "var(--color-ink-3)",
                  }}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
        <HomeIndicator />
      </div>
    </div>
  );
}
