// components/ScaleWrapper.tsx
"use client";

import { useEffect, useState } from "react";

const DESIGN_WIDTH = 1920;

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
        // style={{
        //   width: DESIGN_WIDTH,
        //   transform: `scale(${scale})`,
        //   transformOrigin: "top left",
        //   height: `calc(100vh / ${scale})`,
        // }}
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