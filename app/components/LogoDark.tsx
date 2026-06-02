"use client";

import { motion } from "framer-motion";
import KodexIcon from "./KodexIcon";

interface LogoDarkProps {
  className?: string;
  animated?: boolean;
}

export default function LogoDark({ className = "", animated = true }: LogoDarkProps) {
  return (
    <div
      className={`relative flex items-center gap-5 bg-[#0d0a1f] border border-[#3d2d6e] rounded-2xl px-7 py-5 ${className}`}
    >
      {/* Background glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-brand/10 via-transparent to-transparent pointer-events-none" />

      {/* Icon */}
      <div className="relative z-10 flex-shrink-0">
        {animated ? (
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <KodexIcon size={56} showBackground />
          </motion.div>
        ) : (
          <KodexIcon size={56} showBackground />
        )}
      </div>

      {/* Text */}
      <div className="relative z-10">
        <div className="text-2xl font-bold tracking-tight">
          <span className="text-[#c4b8f0]">Kodex</span>
          <span className="text-[#9d8edd]">Base</span>
        </div>
        <div className="text-[10px] tracking-[0.25em] text-[#6b5ea8] font-medium uppercase mt-0.5">
          Full Stack Development
        </div>
      </div>
    </div>
  );
}
