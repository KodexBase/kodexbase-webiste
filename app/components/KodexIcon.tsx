"use client";

interface KodexIconProps {
  size?: number;
  showBackground?: boolean;
  className?: string;
  animated?: boolean;
}

export default function KodexIcon({
  size = 48,
  showBackground = true,
  className = "",
  animated = false,
}: KodexIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background rounded square */}
      {showBackground && (
        <rect x="0" y="0" width="100" height="100" rx="20" fill="#0d0a1a" />
      )}

      {/* Outer diamond — lavender stroke */}
      <polygon
        points="50,11 89,50 50,89 11,50"
        fill="none"
        stroke="#b39dff"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />

      {/* Node circles at outer diamond tips */}
      <circle cx="50" cy="11" r="3.6" fill="#5a55a8" />
      <circle cx="89" cy="50" r="3.6" fill="#5a55a8" />
      <circle cx="50" cy="89" r="3.6" fill="#5a55a8" />
      <circle cx="11" cy="50" r="3.6" fill="#5a55a8" />

      {/* Inner diamond — darker blue-purple stroke */}
      <polygon
        points="50,31 69,50 50,69 31,50"
        fill="none"
        stroke="#4a4390"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Center square — medium lavender fill */}
      <rect x="44.5" y="44.5" width="11" height="11" rx="1" fill="#8080cc" />

      {/* Subtle pulse ring (animated only) */}
      {animated && (
        <circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke="#b39dff"
          strokeWidth="0.8"
          strokeOpacity="0.2"
        >
          <animate
            attributeName="r"
            values="20;26;20"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            values="0.2;0;0.2"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
      )}
    </svg>
  );
}
