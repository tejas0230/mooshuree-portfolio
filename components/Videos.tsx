"use client";

import { Play } from "lucide-react";
import { useState } from "react";

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
        <div className="w-full lg:max-w-[1440px] mx-auto flex flex-col items-center p-4">
            <div className="flex flex-row items-center justify-between w-full  border-y-3 border-primary p-4">
                <h1 className="text-[72px] md:text-[48px] font-heading text-center text-primary">VIDEOS</h1>
            </div>
            <div className="w-full flex flex-col gap-10 py-4">
                {categories.map((category) => (
                    <div key={category} className="w-full flex flex-col items-start">
                        <h1 className="bg-primary text-white text-[32px] md:text-[22px] py-2 px-4 rounded-4xl mb-4 uppercase">
                            {category.replaceAll("-", " ")}
                        </h1>

                        <div className="w-full grid grid-cols-9 gap-2">
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