/*
 Realistic, Apple Maps-style map impression:
 - Warm cream base
 - Building blocks
 - White arterial roads with subtle edges
 - Park + water callouts
 - Street name + POI labels
 - Blue route line
*/
export function StreetMap({
  height = 220,
  children,
  variant = "preview",
}: {
  height?: number;
  children?: React.ReactNode;
  variant?: "preview" | "full";
}) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height, background: "var(--color-map-bg)" }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 390 820"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        {/* Water — East River, top-right corner */}
        <path
          d="M 260 -10 Q 320 60 300 160 Q 290 230 400 260 L 420 -10 Z"
          fill="var(--color-map-water)"
        />

        {/* Park — Prospect Park shape, middle-left */}
        <path
          d="M 20 280 Q 70 260 120 290 Q 150 320 140 400 Q 100 440 50 420 Q 10 370 20 280 Z"
          fill="var(--color-map-park)"
        />

        {/* Small park top-left */}
        <path
          d="M 30 90 Q 70 80 90 110 Q 100 140 70 150 Q 30 145 30 90 Z"
          fill="var(--color-map-park)"
          opacity="0.85"
        />

        {/* Building blocks */}
        <g fill="var(--color-map-block)">
          <rect x="160" y="30" width="90" height="60" rx="3" />
          <rect x="260" y="40" width="50" height="50" rx="3" />
          <rect x="160" y="110" width="40" height="55" rx="3" />
          <rect x="210" y="110" width="50" height="55" rx="3" />
          <rect x="160" y="190" width="100" height="60" rx="3" />

          <rect x="40" y="170" width="100" height="90" rx="3" />
          <rect x="160" y="280" width="90" height="70" rx="3" />
          <rect x="260" y="280" width="90" height="90" rx="3" />

          <rect x="160" y="380" width="50" height="60" rx="3" />
          <rect x="220" y="380" width="60" height="60" rx="3" />
          <rect x="290" y="380" width="80" height="80" rx="3" />

          <rect x="20" y="470" width="50" height="60" rx="3" />
          <rect x="80" y="470" width="70" height="60" rx="3" />
          <rect x="160" y="470" width="80" height="80" rx="3" />
          <rect x="250" y="470" width="120" height="60" rx="3" />

          <rect x="20" y="580" width="90" height="80" rx="3" />
          <rect x="120" y="580" width="130" height="80" rx="3" />
          <rect x="260" y="580" width="110" height="100" rx="3" />

          <rect x="20" y="690" width="120" height="100" rx="3" />
          <rect x="150" y="700" width="100" height="90" rx="3" />
          <rect x="260" y="710" width="110" height="80" rx="3" />
        </g>

        {/* Arterial roads — white ribbons with subtle edges */}
        <g>
          <g stroke="var(--color-map-street-edge)" strokeWidth="10" fill="none" strokeLinecap="round">
            <path d="M-10 180 L 400 180" />
            <path d="M-10 360 L 400 360" />
            <path d="M-10 540 L 400 540" />
            <path d="M-10 680 L 400 680" />
            <path d="M150 -10 L 150 830" />
            <path d="M260 -10 L 260 830" />
          </g>
          <g stroke="var(--color-map-street)" strokeWidth="8" fill="none" strokeLinecap="round">
            <path d="M-10 180 L 400 180" />
            <path d="M-10 360 L 400 360" />
            <path d="M-10 540 L 400 540" />
            <path d="M-10 680 L 400 680" />
            <path d="M150 -10 L 150 830" />
            <path d="M260 -10 L 260 830" />
          </g>
        </g>

        {/* Minor streets */}
        <g stroke="var(--color-map-street-edge)" strokeWidth="5" fill="none" strokeLinecap="round">
          <path d="M-10 100 L 400 100" />
          <path d="M-10 260 L 400 260" />
          <path d="M-10 440 L 400 440" />
          <path d="M-10 600 L 400 600" />
          <path d="M40 -10 L 40 830" />
          <path d="M90 -10 L 90 830" />
          <path d="M320 -10 L 320 830" />
        </g>
        <g stroke="var(--color-map-street-minor)" strokeWidth="3.5" fill="none" strokeLinecap="round">
          <path d="M-10 100 L 400 100" />
          <path d="M-10 260 L 400 260" />
          <path d="M-10 440 L 400 440" />
          <path d="M-10 600 L 400 600" />
          <path d="M40 -10 L 40 830" />
          <path d="M90 -10 L 90 830" />
          <path d="M320 -10 L 320 830" />
        </g>

        {/* Diagonal boulevard — Flatbush Ave-like */}
        <g>
          <path
            d="M -20 820 L 230 360 L 420 10"
            stroke="var(--color-map-street-edge)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M -20 820 L 230 360 L 420 10"
            stroke="var(--color-map-street)"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Labels */}
        <g>
          <text x="60" y="140" className="map-label-lg">PARK SLOPE</text>
          <text x="180" y="500" className="map-label-lg">DOWNTOWN</text>
          <text x="70" y="370" className="map-label">Prospect Park</text>
          <text x="340" y="120" className="map-label" textAnchor="middle">East River</text>

          <text x="10" y="175" className="map-label-sm">Atlantic Ave</text>
          <text x="10" y="355" className="map-label-sm">Flatbush Ave</text>
          <text x="10" y="535" className="map-label-sm">Fulton St</text>
          <text x="10" y="675" className="map-label-sm">Bergen St</text>
          <text x="155" y="22" className="map-label-sm">4th Ave</text>
          <text x="265" y="22" className="map-label-sm">5th Ave</text>
        </g>

        {/* Route line — Apple Maps blue */}
        {variant === "preview" ? (
          <>
            <path
              d="M60 720 L 60 680 L 150 680 L 150 540 L 260 540 L 260 360 L 320 360 L 320 180"
              stroke="white"
              strokeWidth="7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M60 720 L 60 680 L 150 680 L 150 540 L 260 540 L 260 360 L 320 360 L 320 180"
              stroke="var(--color-info)"
              strokeWidth="4.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        ) : (
          <>
            {/* Completed segment (solid green) */}
            <path
              d="M60 780 L 60 720"
              stroke="white"
              strokeWidth="7"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M60 780 L 60 720"
              stroke="var(--color-brand)"
              strokeWidth="4.5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Active segment to next stop (Apple blue) */}
            <path
              d="M60 720 L 60 680 L 150 680 L 150 540 L 260 540"
              stroke="white"
              strokeWidth="7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M60 720 L 60 680 L 150 680 L 150 540 L 260 540"
              stroke="var(--color-info)"
              strokeWidth="4.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Future segments (faded dashed) */}
            <path
              d="M260 540 L 260 360 L 320 360 L 320 180"
              stroke="var(--color-info)"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="4 6"
              opacity="0.5"
            />
          </>
        )}
      </svg>

      {children}
    </div>
  );
}
