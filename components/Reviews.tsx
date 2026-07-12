"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { clampPx } from "@/lib/vw";

export default function Reviews() {
    const reviews = [
        {
            client: "Omabae",
            review:
                "This was exactly what we were looking for. The video is truly amazing—you have beautifully covered wide-angle and close-up shots. The attention to detail really stands out, and the final output exceeded our expectations. Kudos to the entire team for the effort and professionalism throughout the project.",
        },
        {
            client: "Madhavprash",
            review: "Amazing, kudos to you and the team! Great videos.",
        },
        {
            client: "Yourdoot AI",
            review: "Guys, these videos are so damn good. Great job at everything.",
        },
        {
            client: "NotShy",
            review:
                "Loved working with the team. They understood our requirements quickly and delivered exactly what we were hoping for. The communication was smooth, and the turnaround time was impressive.",
        },
        {
            client: "IESR Foundation",
            review:
                "The process was seamless from start to finish. The team kept us updated, was open to feedback, and made revisions quickly. Overall, it was a very pleasant experience working together.",
        },
        {
            client: "Foamify",
            review:
                "Really happy with the final outcome. The edits were clean, the quality was great, and the team was easy to work with.",
        },
        {
            client: "Zevers",
            review:
                "Excellent experience overall. The team was responsive, professional, and delivered everything on time.",
        },
        {
            client: "Keydroid",
            review:
                "Great communication, quick turnaround, and quality work. Couldn't have asked for a better experience.",
        },
        {
            client: "Digittrix",
            review:
                "Very professional team with great attention to detail. The entire workflow was well organized, and every milestone was delivered on time.",
        },
        {
            client: "Fitmaan Technologies",
            review:
                "The team handled everything professionally and made the entire process stress-free. We're really happy with how everything turned out.",
        },
        {
            client: "Easy Settlement",
            review:
                "Really impressed with the quality of work. The team was proactive, receptive to feedback, and ensured everything was delivered exactly as expected.",
        },
        {
            client: "Trecon",
            review:
                "Fantastic experience! Smooth communication, timely delivery, and great quality throughout.",
        },
        {
            client: "Wudly Toys",
            review:
                "It was a pleasure working with the team. They were creative, cooperative, and extremely easy to communicate with.",
        },
    ];

    const acheivements = [
        "1000+ Videos made",
        "200+ Clients",
        "50+ Creators",
        "5 Day TAT",
    ];

    const total = reviews.length;
    const extended = [...reviews, ...reviews, ...reviews];

    const scrollRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [step, setStep] = useState(0); // measured px distance between cards, incl. gap
    const initialized = useRef(false);

    // Measure the real gap between two adjacent rendered cards, so button
    // scroll distance always matches however wide the cards actually are.
    const measureStep = useCallback(() => {
        const first = cardRefs.current[0];
        const second = cardRefs.current[1];
        if (first && second) {
            setStep(second.offsetLeft - first.offsetLeft);
        }
    }, []);

    useEffect(() => {
        measureStep();
        const observer = new ResizeObserver(measureStep);
        if (cardRefs.current[0]) observer.observe(cardRefs.current[0]);
        window.addEventListener("resize", measureStep);
        return () => {
            observer.disconnect();
            window.removeEventListener("resize", measureStep);
        };
    }, [measureStep]);

    // Start scrolled to the middle copy of the tripled list, so both
    // directions have buffer cards to scroll into.
    useEffect(() => {
        if (step > 0 && scrollRef.current && !initialized.current) {
            scrollRef.current.scrollLeft = step * total;
            initialized.current = true;
        }
    }, [step, total]);

    const next = () => {
        scrollRef.current?.scrollBy({ left: step, behavior: "smooth" });
    };
    const prev = () => {
        scrollRef.current?.scrollBy({ left: -step, behavior: "smooth" });
    };

    // Infinite loop: once native scroll (drag/swipe/button) settles near
    // the start or end buffer copy, silently jump back to the equivalent
    // spot in the middle copy — instant, no animation, so it's invisible
    // since the copies are identical.
    useEffect(() => {
        const el = scrollRef.current;
        if (!el || step === 0) return;

        let settleTimeout: ReturnType<typeof setTimeout>;
        const singleSetWidth = step * total;

        const checkBounds = () => {
            if (el.scrollLeft < singleSetWidth * 0.5) {
                const prevBehavior = el.style.scrollBehavior;
                el.style.scrollBehavior = "auto";
                el.scrollLeft += singleSetWidth;
                el.style.scrollBehavior = prevBehavior;
            } else if (el.scrollLeft > singleSetWidth * 1.5) {
                const prevBehavior = el.style.scrollBehavior;
                el.style.scrollBehavior = "auto";
                el.scrollLeft -= singleSetWidth;
                el.style.scrollBehavior = prevBehavior;
            }
        };

        const handleScroll = () => {
            clearTimeout(settleTimeout);
            settleTimeout = setTimeout(checkBounds, 120);
        };

        el.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            el.removeEventListener("scroll", handleScroll);
            clearTimeout(settleTimeout);
        };
    }, [step, total]);

    return (
        <div className="w-full mx-auto bg-primary px-2 py-10 relative">

            <div className="w-full relative">
                <button
                    onClick={prev}
                    className="absolute left-0 md:left-10 top-1/2 -translate-y-1/2 w-5 h-5 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition z-10"
                >
                    <ChevronLeft className="w-3 h-3 md:w-6 md:h-6" />
                </button>

                <button
                    onClick={next}
                    className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 w-5 h-5 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition z-10"
                >
                    <ChevronRight className="w-3 h-3 md:w-6 md:h-6" />
                </button>

                <div
                    ref={scrollRef}
                    className="flex gap-1.5 md:gap-10 overflow-x-auto snap-x snap-mandatory w-full max-w-[92%] md:max-w-[1660px] mx-auto px-1 md:px-2 [&::-webkit-scrollbar]:hidden"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollBehavior: "smooth" }}
                >
                    {extended.map((item, i) => (
                        <div
                            key={`${item.client}-${i}`}
                            ref={(el) => { cardRefs.current[i] = el; }}
                            className="snap-center bg-white rounded-lg md:rounded-2xl shadow-xl w-[calc(33.333%-4px)] md:w-full md:max-w-[400px] lg:max-w-[500px] p-1.5 md:p-8 flex flex-col shrink-0"
                        >
                            <div className="flex items-center gap-1 md:gap-2">

                                <div className="w-4 h-4 md:w-12 md:h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0" style={{ fontSize: clampPx(8, 20, 20) }}>
                                    {item.client.charAt(0)}
                                </div>

                                <div className="min-w-0">
                                    <h3 className="font-semibold truncate" style={{ fontSize: clampPx(8, 20, 20) }}>
                                        {item.client}
                                    </h3>

                                    <p className="text-neutral-500 truncate" style={{ fontSize: clampPx(6, 18, 18) }}>
                                        Client
                                    </p>
                                </div>

                            </div>

                            <div className="flex gap-0.5 md:gap-1 mt-1 md:mt-5">
                                {[...Array(5)].map((_, s) => (
                                    <Star
                                        key={s}
                                        className="w-2 h-2 md:w-[22px] md:h-[22px]"
                                        fill="#FFC107"
                                        color="#FFC107"
                                    />
                                ))}
                            </div>

                            <p
                                className="mt-1 md:mt-6 leading-tight md:leading-9 text-neutral-700 line-clamp-4 md:line-clamp-none"
                                style={{ fontSize: clampPx(7, 20, 20) }}
                            >
                                {item.review}
                            </p>

                        </div>
                    ))}
                </div>
            </div>


            <div className="flex flex-row justify-between items-start gap-2 md:gap-4 px-4 md:px-[100px] pt-6 md:pt-10">
                {acheivements.map((item, key) => (
                    <div key={key} className="px-2 md:px-4 py-1 md:px-8 md:py-2 bg-white text-primary font-bold rounded-4xl inline-flex" style={{fontSize:clampPx(10,20,20)}}>
                        {item}
                    </div>
                ))}
            </div>

        </div>
    );
}