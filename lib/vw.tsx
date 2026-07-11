/**
 * Fluid scaling helpers — convert fixed design-file px values into
 * viewport-relative units, so layouts scale proportionally with screen width
 * (Canva-style), without a JS-driven transform/zoom hack.
 *
 * Default design width is 1920px — change DESIGN_WIDTH or pass designWidth
 * per-call if a component was designed at a different size.
 */

const DESIGN_WIDTH = 1920;

/**
 * Convert a design px value to a vw string.
 * vw(200) -> "10.42vw"  (200 / 1920 * 100)
 */
export function vw(px: number, designWidth: number = DESIGN_WIDTH): string {
  return `${((px / designWidth) * 100).toFixed(2)}vw`;
}

/**
 * Convert a design px value to a clamp() string with explicit min/max bounds.
 * clampPx(8, 16, 16) -> "clamp(8px, 0.83vw, 16px)"
 *
 * @param min         floor value in px (what it won't shrink below on small screens)
 * @param px          the original design value in px (used to compute the vw midpoint)
 * @param max         ceiling value in px (what it won't grow past on large screens)
 * @param designWidth optional override if this component's design frame isn't 1920
 */
export function clampPx(
  min: number,
  px: number,
  max: number,
  designWidth: number = DESIGN_WIDTH
): string {
  return `clamp(${min}px, ${vw(px, designWidth)}, ${max}px)`;
}

/**
 * Shorthand when you just want the design value to be both the max and the
 * "preferred" scale target, and only need to specify how far it can shrink.
 * clampPxMin(8, 16) -> same as clampPx(8, 16, 16)
 */
export function clampPxMin(
  min: number,
  px: number,
  designWidth: number = DESIGN_WIDTH
): string {
  return clampPx(min, px, px, designWidth);
}