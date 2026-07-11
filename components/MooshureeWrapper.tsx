"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const DESIGN_WIDTH = 1920;

export default function MooshureeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const update = () => {
      const newScale = Math.min(window.innerWidth / DESIGN_WIDTH, 1);

      setScale(newScale);

      if (ref.current) {
        setHeight(ref.current.scrollHeight * newScale);
      }
    };

    update();

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      style={{
        height,
        overflow: "hidden",
      }}
    >
      <div
        ref={ref}
        style={{
          width: DESIGN_WIDTH,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}