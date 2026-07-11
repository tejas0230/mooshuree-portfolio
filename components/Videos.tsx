"use client";

import { Play } from "lucide-react";
import { useState } from "react";
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
    ]
    const [playing, setPlaying] = useState<{
        category: string;
        id: number;
    } | null>(null);

    return (
        <div className="w-full mx-auto flex flex-col items-center p-2">
            <div className="flex flex-row items-center justify-between w-full  border-y-3 border-primary p-2 md:p-4">
                <h1 className="font-heading text-center text-primary" style={{ fontSize: clampPx(30, 48, 48) }}>Videos</h1>
            </div>
            <div className="w-full flex flex-col gap-10 py-4">
                {categories.map((category) => (
                    <div key={category} className="w-full flex flex-col items-start">
                        <h1 className="bg-primary text-white text-center py-2 px-4 md:px-8 rounded-4xl uppercase mb-3" style={{fontSize:clampPx(20, 28,28)}}>
                            {category.replaceAll("-", " ")}
                        </h1>

                        <div className="w-full grid grid-cols-3 md:grid-cols-9 gap-2">
                            {Array.from({ length: 9 }).map((_, index) => {
                                const id = index + 1;

                                const isPlaying =
                                    playing?.category === category &&
                                    playing?.id === id;

                                return (
                                    <div
                                        key={id}
                                        className="relative aspect-[9/16] rounded-lg overflow-hidden bg-black"
                                    >
                                        {isPlaying ? (
                                            <video
                                                src={`https://portfolio.srv1501339.hstgr.cloud/videos/${category}/${category}_${id}.mp4`}
                                                controls
                                                autoPlay
                                                playsInline
                                                preload="metadata"
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        ) : (
                                            <>
                                                <img
                                                    src={`/thumbnail/${category}/${category}_${id}.jpg`}
                                                    alt=""
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                />

                                                <button
                                                    onClick={() =>
                                                        setPlaying({
                                                            category,
                                                            id,
                                                        })
                                                    }
                                                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/35 transition"
                                                >
                                                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                                                        <Play
                                                            size={18}
                                                            className="fill-primary text-primary ml-0.5"
                                                        />
                                                    </div>
                                                </button>
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}