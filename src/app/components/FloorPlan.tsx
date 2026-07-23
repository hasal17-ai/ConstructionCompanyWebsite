import type { Room } from "./projectsData";

// Renders a professional-looking 2D architectural floor plan from a room layout.
// Style mirrors a real drafting sheet: thick double walls, furniture symbols,
// door swing arcs, dimension tags and a plan title. Rooms tile a 100 x 80 grid.

const PAD = 12; // padding for outer wall + title/dimensions
const VW = 100 + PAD * 2;
const VH = 80 + PAD * 2;

const NAVY = "#0b1a2d";
const TEAL = "#0d6b6a";
const WALL = "#2b3648";
const FURN = "#9aa5b1"; // furniture stroke
const FT = 0.34; // grid unit -> feet, for plausible dimension tags

function feet(units: number) {
  return `${Math.max(4, Math.round(units * FT))}'-0"`;
}

// --- Door swing arc on the room wall closest to the plan centre (50,40) ---
function Door({ r }: { r: Room }) {
  const cx = r.x + r.w / 2;
  const cy = r.y + r.h / 2;
  const dx = 50 - cx;
  const dy = 40 - cy;
  const horizontal = Math.abs(dx) > Math.abs(dy);
  const gap = 9;

  let hx: number, hy: number, ax: number, ay: number, sweep: number;
  if (horizontal) {
    const wallX = dx > 0 ? r.x + r.w : r.x; // side facing centre
    hy = cy - gap / 2;
    hx = wallX;
    // arc from hinge into the room
    ax = wallX + (dx > 0 ? -gap : gap);
    ay = hy + gap;
    sweep = dx > 0 ? 1 : 0;
    return (
      <g stroke={FURN} strokeWidth="0.5" fill="none">
        <path d={`M ${hx} ${hy} A ${gap} ${gap} 0 0 ${sweep} ${ax} ${ay}`} />
        <line x1={hx} y1={hy} x2={ax} y2={ay} />
      </g>
    );
  } else {
    const wallY = dy > 0 ? r.y + r.h : r.y;
    hx = cx - gap / 2;
    hy = wallY;
    ax = hx + gap;
    ay = wallY + (dy > 0 ? -gap : gap);
    sweep = dy > 0 ? 0 : 1;
    return (
      <g stroke={FURN} strokeWidth="0.5" fill="none">
        <path d={`M ${hx} ${hy} A ${gap} ${gap} 0 0 ${sweep} ${ax} ${ay}`} />
        <line x1={hx} y1={hy} x2={ax} y2={ay} />
      </g>
    );
  }
}

// --- Furniture drawn from the room name ---
function Furniture({ r }: { r: Room }) {
  const n = r.name.toLowerCase();
  const m = 5; // inner margin
  const ix = r.x + m, iy = r.y + m, iw = r.w - m * 2, ih = r.h - m * 2;
  const props = { stroke: FURN, strokeWidth: 0.5, fill: "none" } as const;

  if (n.includes("bed")) {
    const bw = Math.min(iw, 26), bh = Math.min(ih, 24);
    const bx = ix, by = iy;
    return (
      <g {...props}>
        <rect x={bx} y={by} width={bw} height={bh} rx={1} />
        {/* pillows */}
        <rect x={bx + 2} y={by + 2} width={bw - 4} height={5} rx={1} />
        {/* duvet line */}
        <line x1={bx} y1={by + bh * 0.42} x2={bx + bw} y2={by + bh * 0.42} />
      </g>
    );
  }
  if (n.includes("bath")) {
    return (
      <g {...props}>
        {/* wc */}
        <rect x={ix} y={iy} width={5} height={7} rx={1} />
        <ellipse cx={ix + 2.5} cy={iy + 8.5} rx={2.6} ry={2} />
        {/* sink */}
        <rect x={ix} y={iy + 13} width={6} height={4} rx={1} />
        {/* shower / tub */}
        <rect x={r.x + r.w - m - 8} y={iy} width={8} height={ih} rx={1} />
      </g>
    );
  }
  if (n.includes("kitchen")) {
    return (
      <g {...props}>
        {/* L counter */}
        <rect x={ix} y={iy} width={iw} height={4.5} />
        <rect x={ix} y={iy} width={4.5} height={ih} />
        {/* stove burners */}
        <circle cx={ix + iw * 0.55} cy={iy + 2.2} r={1} />
        <circle cx={ix + iw * 0.72} cy={iy + 2.2} r={1} />
        {/* sink */}
        <rect x={ix + 1} y={iy + ih * 0.5} width={2.5} height={4} rx={0.5} />
      </g>
    );
  }
  if (n.includes("living") || n.includes("open") || n.includes("common")) {
    return (
      <g {...props}>
        {/* sofa */}
        <rect x={ix} y={iy + ih - 8} width={Math.min(iw, 22)} height={8} rx={1.5} />
        <line x1={ix} y1={iy + ih - 8} x2={ix} y2={iy + ih} />
        {/* coffee table */}
        <rect x={ix + 4} y={iy + ih - 16} width={11} height={5} rx={1} />
        {/* rug */}
        <rect x={ix} y={iy} width={iw} height={ih} strokeDasharray="1.5 1.5" opacity={0.5} />
      </g>
    );
  }
  if (n.includes("dining")) {
    return (
      <g {...props}>
        <rect x={ix + iw / 2 - 7} y={iy + ih / 2 - 5} width={14} height={10} rx={1} />
        {[-1, 1].map((s) =>
          [0.3, 0.7].map((t) => (
            <circle key={`${s}-${t}`} cx={ix + iw / 2 + s * 10} cy={iy + ih * t} r={1.6} />
          )),
        )}
      </g>
    );
  }
  if (n.includes("car") || n.includes("verandah") || n.includes("park")) {
    return (
      <g {...props}>
        <rect x={ix} y={iy + ih / 2 - 7} width={26} height={14} rx={3} />
        <rect x={ix + 4} y={iy + ih / 2 - 4.5} width={9} height={9} rx={1.5} />
        <circle cx={ix + 5} cy={iy + ih / 2 + 7} r={1.5} />
        <circle cx={ix + 21} cy={iy + ih / 2 + 7} r={1.5} />
      </g>
    );
  }
  if (n.includes("stair")) {
    return (
      <g {...props}>
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={i} x1={ix} y1={iy + (ih / 6) * i} x2={ix + iw} y2={iy + (ih / 6) * i} />
        ))}
        <line x1={ix + iw / 2} y1={iy} x2={ix + iw / 2} y2={iy + ih} />
      </g>
    );
  }
  return null;
}

export function FloorPlan({
  rooms,
  title = "FLOOR PLAN",
  className,
}: {
  rooms: Room[];
  title?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox={`0 0 ${VW} ${VH}`}
      className={className}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label={`2D ${title.toLowerCase()}`}
      style={{ background: "#ffffff", display: "block", width: "100%", height: "100%" }}
    >
      <defs>
        <pattern id="fpgrid" width="5" height="5" patternUnits="userSpaceOnUse">
          <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#eef1f4" strokeWidth="0.3" />
        </pattern>
      </defs>
      <rect x="0" y="0" width={VW} height={VH} fill="url(#fpgrid)" />

      {/* Title */}
      <text x={PAD} y={PAD - 3.5} fill={NAVY} style={{ fontSize: "5px", fontWeight: 800, letterSpacing: "0.04em" }}>
        {title.toUpperCase()}
      </text>
      <line x1={PAD} y1={PAD - 1.5} x2={PAD + 34} y2={PAD - 1.5} stroke={TEAL} strokeWidth="1" />

      <g transform={`translate(${PAD}, ${PAD})`}>
        {/* Outer wall (thick double line look) */}
        <rect x="-1.5" y="-1.5" width="103" height="83" fill="none" stroke={WALL} strokeWidth="3" />
        <rect x="0" y="0" width="100" height="80" fill="#ffffff" stroke={WALL} strokeWidth="1" />

        {/* Rooms */}
        {rooms.map((r) => (
          <g key={r.name}>
            <rect x={r.x} y={r.y} width={r.w} height={r.h} fill="#ffffff" stroke={WALL} strokeWidth="1.4" />
            <Furniture r={r} />
            <Door r={r} />
            <text
              x={r.x + r.w / 2}
              y={r.y + r.h / 2 + (r.h > 30 ? 6 : 1)}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={NAVY}
              style={{ fontSize: "3px", fontWeight: 700 }}
            >
              {r.name.toUpperCase()}
            </text>
            <text
              x={r.x + r.w / 2}
              y={r.y + r.h / 2 + (r.h > 30 ? 10 : 5)}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={TEAL}
              style={{ fontSize: "2.4px", fontWeight: 600 }}
            >
              {feet(r.w)} × {feet(r.h)}
            </text>
          </g>
        ))}

        {/* Entrance marker */}
        <rect x="44" y="80" width="12" height="1.5" fill={TEAL} />
        <text x="50" y="87" textAnchor="middle" fill={TEAL} style={{ fontSize: "3px", fontWeight: 700, letterSpacing: "0.12em" }}>
          ENTRANCE
        </text>
      </g>
    </svg>
  );
}
