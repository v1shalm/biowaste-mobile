import { Icon } from "../icons";
import { BottomTabs } from "../BottomTabs";
import { LargeTitle, StatusBar } from "../Phone";
import { IconTile, type TileTone } from "../Tile";

export function SupportScreen() {
  return (
    <>
      <StatusBar />

      <LargeTitle
        title="Support"
        subtitle="Dispatch is on duty 24/7. Typical reply under 3 minutes."
      />

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-4">
        {/* Emergency */}
        <button
          className="flex w-full items-center justify-between overflow-hidden rounded-2xl p-4 text-left active:scale-[0.99] transition shadow-[var(--shadow-lift)]"
          style={{ background: "var(--color-ink)" }}
        >
          <div className="flex items-center gap-3">
            <IconTile tone="hazard" size="lg">
              <Icon.Alert width={19} height={19} />
            </IconTile>
            <div className="text-white">
              <div className="text-[15px] font-semibold leading-tight">
                Report hazard or spill
              </div>
              <div className="mt-0.5 text-[12px] text-white/60">
                Alerts dispatch and operations automatically
              </div>
            </div>
          </div>
          <Icon.ChevronRight width={18} height={18} className="text-white/80" />
        </button>

        {/* Reach a human */}
        <div className="pl-1 pt-6 pb-2">
          <span className="text-[13px] font-semibold text-[color:var(--color-ink)]">
            Reach a human
          </span>
        </div>

        <div className="card overflow-hidden">
          <ContactRow
            accent
            icon={<Icon.Phone width={17} height={17} />}
            title="Call dispatch"
            meta="Live · 1 min wait · Rosa M."
          />
          <ContactRow
            accent
            icon={<Icon.Message width={17} height={17} />}
            title="Message operations"
            meta="Live · replies in 3 min · 4 agents"
          />
          <ContactRow
            icon={<Icon.Mail width={17} height={17} />}
            title="Email compliance"
            meta="Logged to incidents · 24-hour reply"
          />
        </div>

        {/* Quick actions */}
        <div className="pl-1 pt-6 pb-2">
          <span className="text-[13px] font-semibold text-[color:var(--color-ink)]">
            Quick actions
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <ActionCard
            tone="hazard"
            label="I'm stuck"
            sub="Traffic or access"
            icon={<Icon.Alert width={17} height={17} />}
          />
          <ActionCard
            tone="caution"
            label="Vehicle issue"
            sub="Truck T-11"
            icon={<Icon.Truck width={17} height={17} />}
          />
          <ActionCard
            tone="info"
            label="Missing item"
            sub="Report or reorder"
            icon={<Icon.Box width={17} height={17} />}
          />
          <ActionCard
            tone="brand"
            label="Shift handoff"
            sub="End or transfer"
            icon={<Icon.Route width={17} height={17} />}
          />
        </div>

        {/* Recent tickets */}
        <div className="pl-1 pt-6 pb-2 flex items-baseline justify-between">
          <span className="text-[13px] font-semibold text-[color:var(--color-ink)]">
            Recent tickets
          </span>
          <button className="inline-flex items-center gap-0.5 text-[13px] font-semibold text-[color:var(--color-info)]">
            See all
            <Icon.ChevronRight width={12} height={12} />
          </button>
        </div>
        <div className="card overflow-hidden">
          <TicketRow id="INC-0142" title="Dock access delay at Riverside" time="2d" />
          <TicketRow id="INC-0139" title="Red liner shortage" time="4d" />
        </div>
      </div>

      <BottomTabs active="support" />
    </>
  );
}

function ContactRow({
  icon,
  title,
  meta,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  meta: string;
  accent?: boolean;
}) {
  const live = meta.startsWith("Live");
  return (
    <button className="group-row flex w-full items-center gap-3 px-4 py-3.5 text-left active:bg-[color:var(--color-bg)] transition">
      <div
        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--color-bg)]"
      >
        <span
          className="inline-flex"
          style={{
            color: accent
              ? "var(--color-brand)"
              : "var(--color-ink-2)",
          }}
        >
          {icon}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[14.5px] font-semibold leading-tight">{title}</div>
        <div className="mt-1 flex items-center gap-1.5">
          {live && (
            <span
              className="live-dot h-[6px] w-[6px] rounded-full"
              style={{ background: "var(--color-brand)" }}
            />
          )}
          <span className="text-[12px] text-[color:var(--color-ink-3)] truncate">
            {meta}
          </span>
        </div>
      </div>
      <Icon.ChevronRight
        width={16}
        height={16}
        style={{ color: "var(--color-ink-3)" }}
      />
    </button>
  );
}

function ActionCard({
  tone,
  label,
  sub,
  icon,
}: {
  tone: TileTone;
  label: string;
  sub: string;
  icon: React.ReactNode;
}) {
  return (
    <button className="card flex flex-col items-start gap-3 p-3.5 text-left active:scale-[0.98] transition">
      <IconTile tone={tone} size="md">
        {icon}
      </IconTile>
      <div>
        <div className="text-[14px] font-semibold leading-tight">{label}</div>
        <div className="mt-1 text-[12px] text-[color:var(--color-ink-3)]">
          {sub}
        </div>
      </div>
    </button>
  );
}

function TicketRow({
  id,
  title,
  time,
}: {
  id: string;
  title: string;
  time: string;
}) {
  return (
    <div className="group-row flex items-center gap-3 px-4 py-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--color-brand-50)]">
        <Icon.Check
          width={13}
          height={13}
          style={{ color: "var(--color-brand-2)" }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[14px] font-medium truncate">{title}</div>
        <div className="text-[12px] text-[color:var(--color-ink-3)] mt-0.5 tnum">
          {id} · resolved
        </div>
      </div>
      <span className="text-[12px] text-[color:var(--color-ink-3)] tnum">
        {time}
      </span>
    </div>
  );
}
