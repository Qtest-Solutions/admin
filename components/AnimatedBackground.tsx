"use client";
import { useMemo, useState, useEffect } from "react";

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 40 }).map((_, i) => ({
        left: (i * 23.7) % 100,
        top: (i * 37.3) % 100,
        delay: (i * 0.1) % 3,
        dur: 2 + ((i * 0.08) % 3),
      })),
    []
  );

  if (!mounted) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/30" />
      </div>
    );
  }
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/30" />
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-pulse"
            style={{
              backgroundColor: "rgba(80, 188, 183, 0.3)",
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
            }}
          />
        ))}
      </div>
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
        style={{
          background:
            "linear-gradient(to right, rgba(80, 188, 183, 0.1), transparent)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
        style={{
          background:
            "linear-gradient(to right, rgba(41, 159, 208, 0.1), transparent)",
          animationDelay: "1s",
        }}
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(80, 188, 183, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(80, 188, 183, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};
export default AnimatedBackground;
