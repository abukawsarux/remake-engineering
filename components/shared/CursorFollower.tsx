"use client";
import { useEffect, useState } from "react";

export default function CursorFollower() {
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
      className="pointer-events-none fixed top-0 left-0 flex items-center justify-center transition-transform duration-100 ease-out"
      style={{
        transform: `translate(${pos.x - 3}px, ${pos.y - 3}px)`, // Center small circle
        zIndex: 9999,
      }}
    >
      {/* Outline */}
      <div className="absolute w-4 h-4 rounded-full border border-[#BA8E2D]"></div>
      {/* Solid circle */}
      <div className="w-2 h-2 rounded-full bg-[#BA8E2D]"></div>
    </div>
  );
}
