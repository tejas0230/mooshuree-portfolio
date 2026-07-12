import Image from "next/image";
import Link from "next/link";
import { clampPx } from "@/lib/vw";

export default function Hero() {
  return (
    <div
      className="w-full flex flex-col items-center justify-center"
      style={{ paddingTop: clampPx(32, 120, 120), paddingBottom: clampPx(32, 120, 120) }}
    >
      <h1
        className="font-heading text-center text-primary"
        style={{ fontSize: clampPx(44, 200, 200), marginBottom: clampPx(0, 40, 40) }}
      >
        Mooshuree&apos;s Portfolio
      </h1>
      <div className="flex flex-row md:flex-row text-primary items-center justify-center" style={{gap: clampPx(4,40,40)}}>
        
        <a
          href="mailto:mooshuree@gmail.com"
          className="border border-primary border-1 rounded-4xl hover:bg-primary/90 hover:text-white transition duration"
          style={{ fontSize: clampPx(10, 20, 20), paddingTop: clampPx(4,12,12), paddingBottom: clampPx(4,12,12), paddingLeft:clampPx(6,12,12), paddingRight: clampPx(6,12,12) }}
        >
          mooshuree@gmail.com
        </a>
        
        <a
          href="http://wa.me/919579035371"
          className="border-primary border-1 text-primary rounded-4xl hover:bg-primary/90 hover:text-white transition duration"
          style={{ fontSize: clampPx(10, 20, 20), paddingTop: clampPx(4,12,12), paddingBottom: clampPx(4,12,12), paddingLeft:clampPx(6,12,12), paddingRight: clampPx(6,12,12)}}
        >
          Chat on Whatsapp
        </a>
        <Link
          href="https://www.instagram.com/mooshuree/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-primary border-1 rounded-4xl hover:bg-primary/90 hover:text-white transition duration"
          style={{ fontSize: clampPx(10, 18, 18) ,paddingTop: clampPx(4,12,12), paddingBottom: clampPx(4,12,12), paddingLeft:clampPx(6,12,12), paddingRight: clampPx(6,12,12) }}
        >
          Connect on Instagram
        </Link>
      </div>
    </div>
  );
}