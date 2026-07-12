"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";
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

    const [index, setIndex] = useState(total);
    const [animate, setAnimate] = useState(true);
    const [step, setStep] = useState(0); // measured px distance between cards, incl. gap

    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Measure the real gap between two adjacent rendered cards, so the
    // slide distance always matches however wide the cards actually are
    // at the current screen size — no hardcoded px values.
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

    const goTo = (dir: number) => {
        setAnimate(true);
        setIndex((prev) => prev + dir);
    };

    const next = () => goTo(1);
    const prev = () => goTo(-1);

    const handleAnimationComplete = () => {
        if (index >= total * 2) {
            setAnimate(false);
            setIndex((i) => i - total);
        } else if (index < total) {
            setAnimate(false);
            setIndex((i) => i + total);
        }
    };

    return (
        <div className="w-full mx-auto bg-primary px-2 py-10 relative">

            <div className="w-full relative">
                <button
                    onClick={prev}
                    className="absolute left-10 top-1/2 -translate-y-1/2 w-20 h-20 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition z-10"
                >
                    <ChevronLeft />
                </button>

                <button
                    onClick={next}
                    className="absolute right-10 md:right-10 top-1/2 -translate-y-1/2 w-20 h-20 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition z-10"
                >
                    <ChevronRight />
                </button>

                <div className="overflow-hidden w-full max-w-[90%] md:max-w-[1660px] mx-auto px-2">
                    <motion.div
                        className="flex gap-10"
                        animate={{ x: -index * step }}
                        transition={animate ? { duration: 0.4, ease: "easeInOut" } : { duration: 0 }}
                        onAnimationComplete={handleAnimationComplete}
                    >
                        {extended.map((item, i) => (
                            <div
                                key={`${item.client}-${i}`}
                                ref={(el) => { cardRefs.current[i] = el; }}
                                className="bg-white rounded-2xl shadow-xl max-w-[500px] p-4 md:p-8  flex flex-col shrink-0"
                            >
                                <div className="flex items-center gap-2">

                                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                                        {item.client.charAt(0)}
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-semibold" style={{ fontSize: clampPx(40, 20, 20) }}>
                                            {item.client}
                                        </h3>

                                        {/* <p className="text-neutral-500" style={{ fontSize: clampPx(30, 18, 18) }}>
                                            Client
                                        </p> */}
                                    </div>

                                </div>

                                <div className="flex gap-1 mt-2  md:mt-5">
                                    {[...Array(5)].map((_, s) => (
                                        <Star
                                            key={s}
                                            size={clampPx(26,22,22)}
                                            fill="#FFC107"
                                            color="#FFC107"
                                        />
                                    ))}
                                </div>

                                <p className="mt-2 md:mt-6 leading-12 md:leading-9 text-neutral-700" style={{ fontSize: clampPx(36, 20, 20) }}>
                                    {item.review}
                                </p>

                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>


            <div className="flex justify-between items-start gap-4 px-4 md:px-[100px] pt-10">
                {acheivements.map((item, key) => (
                    <div key={key} className="px-8 py-2 bg-white text-primary font-bold rounded-4xl inline-flex" style={{fontSize:clampPx(40,20,20)}}>
                        {item}
                    </div>
                ))}
            </div>

        </div>
    );
}