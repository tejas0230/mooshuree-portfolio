"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const DESIGN_WIDTH = 2120;

export default function MooshureeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState(0);

  const contentRef = useRef<HTMLDivElement>(null);

  const updateScale = () => {
    if (!contentRef.current) return;

    const newScale = Math.min(window.innerWidth / DESIGN_WIDTH, 1);

    setScale(newScale);
    setHeight(contentRef.current.scrollHeight * newScale);
  };

  useLayoutEffect(() => {
    updateScale();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateScale);

    return () => {
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  return (
    <div
      className="overflow-hidden w-screen"
      style={{ height }}
    >
      <div
        ref={contentRef}
        style={{
          width: DESIGN_WIDTH,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}