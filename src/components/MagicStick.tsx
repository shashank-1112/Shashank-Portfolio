"use client";

import { useEffect, useRef, useState } from "react";

export default function MagicCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden md:block pointer-events-none fixed z-[9999] w-32 h-32 rounded-full blur-3xl
                 transition-transform duration-150 ease-out"
      style={{
        transform: `translate(${pos.x - 80}px, ${pos.y - 80}px)`,
        background:
          "radial-gradient(circle, rgba(56,189,248,0.35), rgba(139,92,246,0.25), transparent 60%)",
      }}
    />
  );
}
