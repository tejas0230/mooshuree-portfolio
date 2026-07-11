"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

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
        "5 Day TAT" 
    ]

    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((prev) => (prev + 1) % reviews.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const visible = [
        reviews[index],
        reviews[(index + 1) % reviews.length],
        reviews[(index + 2) % reviews.length],
    ];

    return (
        <div className="w-full mx-auto bg-primary py-8 px-8  md:py-20 md:px-20 relative">

            {/* <button
                onClick={prev}
                className="absolute left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition"
            >
                <ChevronLeft />
            </button>

            <button
                onClick={next}
                className="absolute right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition"
            >
                <ChevronRight />
            </button> */}

            <div className="flex justify-center gap-2 md:gap-10">

                {visible.map((item) => (
                    <div
                        key={item.client}
                        className="bg-white rounded-2xl shadow-xl  p-2 md:p-8 md:min-h-[420px] flex flex-col"
                    >
                        <div className="flex items-center gap-1 md:gap-4">

                            <div className="w-6 h-6 md:w-14 md:h-14 rounded-full bg-primary text-white flex items-center justify-center text-sm md:text-xl font-bold">
                                {item.client.charAt(0)}
                            </div>

                            <div>
                                <h3 className="text-xs md:text-2xl font-semibold">
                                    {item.client}
                                </h3>

                                <p className="text-xs md:text-base text-neutral-500">
                                    Client
                                </p>
                            </div>

                        </div>

                        <div className="flex gap-1 mt-2 md:mt-5">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={18}
                                    fill="#FFC107"
                                    color="#FFC107"
                                />
                            ))}
                        </div>

                        <p className="mt-2 md:mt-6 text-[4px] md:text-lg md:leading-9 text-neutral-700">
                            {item.review}
                        </p>

                    </div>
                ))}

            </div>

            <div className="flex justify-between items-start gap-4 px-[100px] pt-10">
                {
                    acheivements.map((item,key)=>(
                        <div key={key} className="px-8 py-2 bg-white text-primary text-[40px] md:text-[20px] font-bold rounded-4xl inline-flex">
                            {item}
                        </div>
                    ))
                }
            </div>

        </div>
    );
}