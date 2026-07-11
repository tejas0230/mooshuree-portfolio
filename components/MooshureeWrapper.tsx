// components/ScaleWrapper.tsx
"use client";

import { useEffect, useState } from "react";

const DESIGN_WIDTH = 2120;

export default function MooshureeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      setScale(Math.min(window.innerWidth / DESIGN_WIDTH, 1));
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="overflow-x-hidden w-screen">
      <div
        style={{
        width: DESIGN_WIDTH,
        zoom: scale,
        }}
      >
        {children}
      </div>
    </div>
  );
}