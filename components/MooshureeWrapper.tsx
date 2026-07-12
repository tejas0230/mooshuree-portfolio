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
  const scaleRef = useRef(1); // mirror of `scale`, readable inside the click handler without stale-closure issues

  const updateScale = () => {
    if (!contentRef.current) return;

    const newScale = Math.min(window.innerWidth / DESIGN_WIDTH, 1);
    scaleRef.current = newScale;

    setScale(newScale);
    setHeight(contentRef.current.scrollHeight * newScale);
  };

  useLayoutEffect(() => {
    updateScale();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateScale);

    // Keep height in sync with the content's *actual* size — not just on
    // window resize, but whenever the content itself changes size (fonts
    // loading, images loading, carousel animating, etc). This is what was
    // causing the scroll range to drift out of sync with the visual page.
    const observer = new ResizeObserver(() => updateScale());
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      window.removeEventListener("resize", updateScale);
      observer.disconnect();
    };
  }, []);

  // Intercept in-page anchor clicks and scroll manually, since native
  // anchor-jump can be unreliable when the target is inside a transformed
  // ancestor. getBoundingClientRect() already returns the *visual* (scaled)
  // position, so no manual scale math is needed here — just convert the
  // viewport-relative rect into an absolute document scroll position.
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest('a[href^="#"]');
      if (!anchor) return;

      const id = anchor.getAttribute("href")?.slice(1);
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();

      const absoluteTop = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: absoluteTop, behavior: "smooth" });

      history.pushState(null, "", `#${id}`);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

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