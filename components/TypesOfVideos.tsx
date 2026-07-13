"use client";

import { Play, X } from "lucide-react";
import { useEffect, useState } from "react";
import { clampPx } from "@/lib/vw";

export default function TypesOfVideos() {
    const videos = [
        "brolls_with_song",
        "doctor_video",
        "double_person",
        "founder_content",
        "franchise_video",
        "hand_product_explainer",
        "home_video",
        "horizontal",
        "offline_store_video",
        "outdoor",
        "product_photo",
        "professional",
        "promotional",
        "song_explainer",
        "testimonial",
    ];

    const [playing, setPlaying] = useState<string | null>(null);

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
        <div className="w-full mx-auto flex flex-col items-center p-1 md:p-2">
            <div className="flex flex-row items-center justify-between w-full border-y-1 md:border-y-3 border-primary p-1 md:p-2">
                <h1 className="font-heading text-center text-primary" style={{ fontSize: clampPx(24, 48, 48) }}>TYPES OF VIDEOS</h1>
            </div>

            <div className="w-full grid grid-cols-5 lg:grid-cols-8 gap-2 md:gap-4 py-2 md:py-4">
                {videos.map((name) => (
                    <div key={name} className="w-full flex flex-col items-center gap-1 md:gap-2">
                        <div className="relative w-full aspect-[9/16] rounded-sm md:rounded-lg overflow-hidden bg-black">
                            <img
                                src={`/types_of_videos/thumbnails/${name}.jpg`}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            <button
                                onClick={() => setPlaying(name)}
                                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/35 transition"
                            >
                                <div className="w-5 h-5 md:w-10 md:h-10 rounded-full bg-white/90 flex items-center justify-center">
                                    <Play
                                        className="w-2 h-2 md:w-[18px] md:h-[18px] fill-primary text-primary ml-0.5"
                                    />
                                </div>
                            </button>
                        </div>

                        <span className="text-primary text-center font-heading uppercase leading-2 lg:leading-4 lg:mt-2" style={{ fontSize: clampPx(8, 24, 24) }}>
                            {name.replaceAll("_", " ")}
                        </span>
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
                            key={playing}
                            src={`https://portfolio.srv1501339.hstgr.cloud/videos/types_of_videos/${playing}.mp4`}
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