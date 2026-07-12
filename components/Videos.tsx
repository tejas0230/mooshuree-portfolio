"use client";

import { Play, X } from "lucide-react";
import { useEffect, useState } from "react";
import { clampPx } from "@/lib/vw";

export default function Videos() {
    const categories = [
        "food",
        "software",
        "ayurved",
        "finance",
        "healthcare",
        "education",
        "appliance",
        "real-estate",
        "sports-and-fitness",
        "fmcg",
        "beauty",
        "astrology",
    ];

    const [playing, setPlaying] = useState<{
        category: string;
        id: number;
    } | null>(null);

    // Lock background scroll while the modal is open, and allow closing
    // with the Escape key.
    useEffect(() => {
        if (!playing) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setPlaying(null);
        };
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [playing]);

    return (
        <div className="w-full mx-auto flex flex-col items-center p-1 md:p-2" id="our-work">
            <div className="flex flex-row items-center justify-between w-full border-y-1 md:border-y-3 border-primary p-1 md:p-2">
                <h1 className="font-heading text-center text-primary" style={{ fontSize: clampPx(24, 48, 48) }}>VIDEOS</h1>
            </div>
            <div className="w-full flex flex-col gap-2 md:gap-10 py-2 md:py-4">
                {categories.map((category) => (
                    <div key={category} className="w-full flex flex-col items-start">
                        <h1 className="bg-primary text-white text-center py-1 px-2 md:px-8 rounded-4xl uppercase mb-2" style={{ fontSize: clampPx(14, 28, 28) }}>
                            {category.replaceAll("-", " ")}
                        </h1>

                        <div className="w-full grid grid-cols-9 gap-[2px] md:gap-2">
                            {Array.from({ length: 9 }).map((_, index) => {
                                const id = index + 1;

                                return (
                                    <div
                                        key={id}
                                        className="relative aspect-[9/16] rounded-sm md:rounded-lg overflow-hidden bg-black"
                                    >
                                        <img
                                            src={`/thumbnail/${category}/${category}_${id}.jpg`}
                                            alt=""
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />

                                        <button
                                            onClick={() => setPlaying({ category, id })}
                                            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/35 transition"
                                        >
                                            <div className="w-5 h-5 md:w-10 md:h-10 rounded-full bg-white/90 flex items-center justify-center">
                                                <Play
                                                    className="w-2 h-2 md:w-[18px] md:h-[18px] fill-primary text-primary ml-0.5"
                                                />
                                            </div>
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {playing && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={() => setPlaying(null)}
                >
                    <div
                        className="relative h-[92vh] max-h-[92vh] aspect-[9/16] max-w-full rounded-lg overflow-hidden bg-black shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setPlaying(null)}
                            className="absolute top-1 right-1 md:top-2 md:right-2 z-10 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center"
                        >
                            <X className="w-4 h-4 text-black" />
                        </button>

                        <video
                            key={`${playing.category}_${playing.id}`}
                            src={`https://portfolio.srv1501339.hstgr.cloud/videos/${playing.category}/${playing.category}_${playing.id}.mp4`}
                            controls
                            autoPlay
                            playsInline
                            preload="metadata"
                            className="absolute inset-0 w-full h-full object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}