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

  // ↓↓↓ THIS is the block that replaces your old click-handling useEffect ↓↓↓
  useEffect(() => {
    let rafId: number | null = null;

    const animateScrollTo = (targetY: number, duration = 500) => {
      if (rafId !== null) cancelAnimationFrame(rafId);

      const startY = window.scrollY;
      const distance = targetY - startY;
      const startTime = performance.now();

      const easeInOutQuad = (t: number) =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startY + distance * easeInOutQuad(progress));

        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          rafId = null;
        }
      };

      rafId = requestAnimationFrame(step);
    };

    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest('a[href^="#"]');
      if (!anchor) return;

      const id = anchor.getAttribute("href")?.slice(1);
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();

      const absoluteTop = target.getBoundingClientRect().top + window.scrollY;
      animateScrollTo(absoluteTop);

      history.pushState(null, "", `#${id}`);
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);
  // ↑↑↑ END replacement block ↑↑↑

  return (
    <div className="overflow-hidden w-screen" style={{ height }}>
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