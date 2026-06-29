"use client";

/* ─────────────────────────────────────────────────────────────
   GlobalBackground — fixed multi-layer ambient system

   Layer stack (bottom → top):
   1. Mesh gradient  — large soft colour pools across viewport
   2. Aurora blobs   — 4 animated radial masses, very blurred
   3. Noise          — fractal noise at 2.8% opacity
   4. Tech grid      — 80 × 80 px grid lines faded by radial mask
   5. Floating shapes— rotating geometric outlines (edges only)
   6. Circuit lines  — PCB-trace SVG at viewport perimeter
   7. Diffuse lights — two additional soft glow pools
───────────────────────────────────────────────────────────── */

const NOISE_URI =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E";

export default function GlobalBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* ── 1. Mesh gradient ────────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 88% 68% at 14% 24%, rgba(76,29,149,0.13) 0%, transparent 55%),
            radial-gradient(ellipse 66% 78% at 86% 72%, rgba(109,40,217,0.09) 0%, transparent 55%),
            radial-gradient(ellipse 78% 48% at 50% 99%, rgba(88,28,135,0.08) 0%, transparent 50%),
            radial-gradient(ellipse 54% 36% at 84% 11%, rgba(139,92,246,0.06) 0%, transparent 50%)
          `,
        }}
      />

      {/* ── 2. Aurora blob A — top-left, deep violet ────────── */}
      <div
        className="ambient-safe absolute rounded-full"
        style={{
          top: "-18%",
          left: "-14%",
          width: "82vw",
          height: "82vh",
          background:
            "radial-gradient(circle, rgba(109,40,217,0.17) 0%, rgba(76,29,149,0.07) 40%, transparent 70%)",
          filter: "blur(130px)",
          animation: "aurora-drift-a 30s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* ── 2. Aurora blob B — right-center, violet ─────────── */}
      <div
        className="ambient-safe absolute rounded-full"
        style={{
          top: "20%",
          right: "-19%",
          width: "74vw",
          height: "74vh",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.11) 0%, rgba(139,92,246,0.04) 50%, transparent 70%)",
          filter: "blur(160px)",
          animation: "aurora-drift-b 38s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* ── 2. Aurora blob C — bottom-center, indigo ─────────── */}
      <div
        className="ambient-safe absolute rounded-full"
        style={{
          bottom: "-16%",
          left: "18%",
          width: "62vw",
          height: "62vh",
          background:
            "radial-gradient(circle, rgba(88,28,135,0.10) 0%, rgba(67,56,202,0.04) 50%, transparent 70%)",
          filter: "blur(180px)",
          animation: "aurora-drift-a 46s ease-in-out infinite 10s reverse",
          willChange: "transform",
        }}
      />

      {/* ── 2. Aurora blob D — mid-right, pink accent ───────── */}
      <div
        className="ambient-safe absolute rounded-full"
        style={{
          top: "54%",
          right: "3%",
          width: "42vw",
          height: "42vh",
          background:
            "radial-gradient(circle, rgba(192,38,211,0.05) 0%, transparent 70%)",
          filter: "blur(120px)",
          animation: "aurora-drift-b 54s ease-in-out infinite 6s",
          willChange: "transform",
        }}
      />

      {/* ── 3. Noise ─────────────────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.028,
          backgroundImage: `url("${NOISE_URI}")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* ── 4. Tech grid ─────────────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168,85,247,0.052) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.052) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          WebkitMaskImage:
            "radial-gradient(ellipse 86% 86% at 50% 50%, black 12%, transparent 78%)",
          maskImage:
            "radial-gradient(ellipse 86% 86% at 50% 50%, black 12%, transparent 78%)",
        }}
      />

      {/* ── 5. Floating geometric shapes ─────────────────────── */}

      {/* Diamond — top-left */}
      <div
        className="ambient-safe absolute"
        style={{
          top: "7%",
          left: "3.5%",
          animation: "shape-spin 96s linear infinite",
          willChange: "transform",
          opacity: 0.9,
        }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <polygon
            points="50,4 96,50 50,96 4,50"
            stroke="rgba(168,85,247,0.10)"
            strokeWidth="1"
            fill="rgba(168,85,247,0.014)"
          />
          <polygon
            points="50,20 80,50 50,80 20,50"
            stroke="rgba(168,85,247,0.05)"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>

      {/* Hexagon — top-right */}
      <div
        className="ambient-safe absolute"
        style={{
          top: "11%",
          right: "5%",
          animation: "shape-spin 118s linear infinite reverse",
          willChange: "transform",
          opacity: 0.85,
        }}
      >
        <svg width="85" height="98" viewBox="0 0 100 115" fill="none">
          <polygon
            points="50,3 97,27 97,88 50,112 3,88 3,27"
            stroke="rgba(139,92,246,0.09)"
            strokeWidth="1"
            fill="rgba(139,92,246,0.012)"
          />
        </svg>
      </div>

      {/* Double circle — mid-right */}
      <div
        className="ambient-safe absolute"
        style={{
          top: "45%",
          right: "2.5%",
          animation: "shape-spin 82s linear infinite",
          willChange: "transform",
          opacity: 0.8,
        }}
      >
        <svg width="112" height="112" viewBox="0 0 100 100" fill="none">
          <circle
            cx="50"
            cy="50"
            r="47"
            stroke="rgba(124,58,237,0.08)"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="34"
            stroke="rgba(124,58,237,0.04)"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>

      {/* Diamond — bottom-left */}
      <div
        className="ambient-safe absolute"
        style={{
          bottom: "21%",
          left: "4.5%",
          animation: "shape-spin 90s linear infinite reverse",
          willChange: "transform",
          opacity: 0.8,
        }}
      >
        <svg width="70" height="70" viewBox="0 0 100 100" fill="none">
          <polygon
            points="50,4 96,50 50,96 4,50"
            stroke="rgba(168,85,247,0.08)"
            strokeWidth="1"
            fill="rgba(168,85,247,0.01)"
          />
        </svg>
      </div>

      {/* Hexagon — bottom-right */}
      <div
        className="ambient-safe absolute"
        style={{
          bottom: "7%",
          right: "7%",
          animation: "shape-spin 108s linear infinite",
          willChange: "transform",
          opacity: 0.75,
        }}
      >
        <svg width="90" height="104" viewBox="0 0 100 115" fill="none">
          <polygon
            points="50,3 97,27 97,88 50,112 3,88 3,27"
            stroke="rgba(168,85,247,0.07)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* Rotated square — mid-left */}
      <div
        className="ambient-safe absolute"
        style={{
          top: "37%",
          left: "1.8%",
          animation: "shape-spin 72s linear infinite 5s",
          willChange: "transform",
          opacity: 0.7,
        }}
      >
        <svg width="46" height="46" viewBox="0 0 100 100" fill="none">
          <rect
            x="8"
            y="8"
            width="84"
            height="84"
            stroke="rgba(192,38,211,0.07)"
            strokeWidth="1"
            fill="none"
            transform="rotate(45 50 50)"
          />
        </svg>
      </div>

      {/* ── 6. Circuit / PCB-trace decorations ───────────────── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ╴ Top-left traces ╶ */}
        <path
          d="M-10,108 L162,108 L162,72 L342,72 L342,108 L544,108"
          stroke="rgba(168,85,247,0.10)"
          strokeWidth="0.75"
          fill="none"
        />
        <path
          d="M-10,130 L84,130 L84,188 L224,188"
          stroke="rgba(139,92,246,0.07)"
          strokeWidth="0.6"
          fill="none"
        />
        <circle cx="162" cy="108" r="2.5" fill="rgba(168,85,247,0.20)" />
        <circle cx="342" cy="108" r="2.5" fill="rgba(168,85,247,0.18)" />
        <circle cx="162" cy="108" r="5.5" stroke="rgba(168,85,247,0.07)" strokeWidth="0.5" fill="none" />
        <circle cx="342" cy="72"  r="1.5" fill="rgba(168,85,247,0.12)" />

        {/* ╴ Top-right traces ╶ */}
        <path
          d="M1450,94 L1284,94 L1284,57 L1106,57 L1106,94 L918,94"
          stroke="rgba(168,85,247,0.09)"
          strokeWidth="0.75"
          fill="none"
        />
        <path
          d="M1450,118 L1364,118 L1364,168 L1224,168"
          stroke="rgba(139,92,246,0.07)"
          strokeWidth="0.6"
          fill="none"
        />
        <circle cx="1284" cy="94" r="2.5" fill="rgba(168,85,247,0.17)" />
        <circle cx="1106" cy="94" r="2.5" fill="rgba(168,85,247,0.17)" />
        <circle cx="1284" cy="94" r="5.5" stroke="rgba(168,85,247,0.06)" strokeWidth="0.5" fill="none" />

        {/* ╴ Mid-left ╶ */}
        <path
          d="M-10,442 L102,442 L102,374 L242,374"
          stroke="rgba(139,92,246,0.07)"
          strokeWidth="0.6"
          fill="none"
        />
        <circle cx="102" cy="442" r="2" fill="rgba(139,92,246,0.15)" />

        {/* ╴ Mid-right ╶ */}
        <path
          d="M1450,492 L1342,492 L1342,558 L1192,558"
          stroke="rgba(168,85,247,0.07)"
          strokeWidth="0.65"
          fill="none"
        />
        <circle cx="1342" cy="492" r="2" fill="rgba(168,85,247,0.14)" />

        {/* ╴ Bottom-left ╶ */}
        <path
          d="M172,910 L172,812 L312,812 L312,776 L472,776"
          stroke="rgba(168,85,247,0.09)"
          strokeWidth="0.75"
          fill="none"
        />
        <circle cx="312" cy="812" r="2.5" fill="rgba(168,85,247,0.16)" />
        <circle cx="312" cy="812" r="5.5" stroke="rgba(168,85,247,0.06)" strokeWidth="0.5" fill="none" />

        {/* ╴ Bottom-right ╶ */}
        <path
          d="M1268,910 L1268,826 L1118,826 L1118,786 L958,786"
          stroke="rgba(139,92,246,0.08)"
          strokeWidth="0.7"
          fill="none"
        />
        <circle cx="1118" cy="826" r="2.5" fill="rgba(139,92,246,0.14)" />

        {/* ╴ Centre vertical accents ╶ */}
        <path d="M720,0 L720,54" stroke="rgba(168,85,247,0.08)" strokeWidth="0.6" fill="none" />
        <path d="M720,846 L720,900" stroke="rgba(168,85,247,0.08)" strokeWidth="0.6" fill="none" />
        <circle cx="720" cy="54"  r="1.5" fill="rgba(168,85,247,0.16)" />
        <circle cx="720" cy="846" r="1.5" fill="rgba(168,85,247,0.16)" />
      </svg>

      {/* ── 7. Diffuse light pools ────────────────────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "3%",
          left: "22%",
          width: "56%",
          height: "32%",
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.04) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "0%",
          right: "18%",
          width: "44%",
          height: "26%",
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(109,40,217,0.04) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
