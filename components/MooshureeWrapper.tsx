"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const DESIGN_WIDTH = 2120;

export default function MooshureeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  
  useEffect(() => {
  const update = () => {
    const scale = Math.min(window.innerWidth / 1920, 1);

    document.documentElement.style.setProperty(
      "--scale",
      scale.toString()
    );
  };

  update();

  window.addEventListener("resize", update);

  return () => window.removeEventListener("resize", update);
}, []);

  return (
    <div className="overflow-hidden w-screen" >
      <div>
        {children}
      </div>
    </div>
  );
}