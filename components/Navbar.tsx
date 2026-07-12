import Link from "next/link";
import { clampPx } from "@/lib/vw";

export default function Navbar() {
  return (
    <div
      className="bg-primary text-white w-full flex flex-col items-center"
      style={{ paddingTop: clampPx(8, 16, 16), paddingBottom: clampPx(8, 16, 16) }}
    >
      <ul
        className="flex justify-between items-center"
        style={{ gap: clampPx(24, 200, 200), fontSize: clampPx(13, 28, 20) }}
      >
        <li><Link href="/">Home</Link></li>
        <li><Link href="#our-work">Our Work</Link></li>
        <li><Link href="#contact">Contact</Link></li>
        <li><Link href="#about-us">About Us</Link></li>
      </ul>
    </div>
  );
}