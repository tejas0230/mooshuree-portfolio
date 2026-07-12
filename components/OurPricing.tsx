import { clampPx } from "@/lib/vw";

export default function OurPricing() {

    const starterFeatures = [
        "2 videos / month",
        "Script & concept",
        "Creator / model",
        "Shoot + professional edit",
        "Product / Model photos",
        "Video Length (10s–60s)",
    ];

    const proFeatures = [
        "10 videos / month",
        "Script & concept",
        "Creator / model",
        "Shoot + professional edit",
        "Product / Model photos",
        "Video Length (10s–60s)",
        "End-to-end support",
    ];

    const steps = [
        {
            no: "01",
            title: "You Brief Us",
            desc: "Share your product, audience & vibe",
        },
        {
            no: "02",
            title: "We Handle It All",
            desc: "Script, Shoot, Edit, Talent & Crew by us",
        },
        {
            no: "03",
            title: "You Receive & Post",
            desc: "Final video delivered. Ready to go live",
        },
    ];


    return (
        <div className="w-full mx-auto flex flex-col items-center p-1 md:p-2">
            <div className="flex flex-row items-center justify-between w-full border-y-1 md:border-y-3 border-primary p-1 md:p-2">
                <h1 className="font-heading text-center text-primary" style={{ fontSize: clampPx(24, 48, 48) }}>Our Pricing</h1>
            </div>
            <div className="flex w-full justify-center gap-2 md:gap-8 p-2 md:p-4">

                {/* Starter */}
                <div className="w-[50%] md:w-[320px] rounded-2xl bg-white border border-neutral-200 shadow-xl overflow-hidden">

                    <div className="p-3 md:p-6">

                        <h2 className="text-[20px] md:text-3xl font-heading text-neutral-900">
                            Starter
                        </h2>

                        <div className="bg-neutral-900 rounded-full px-7 py-2 md:py-4 flex justify-center items-center flex-col mt-3">
                            <h3 className="text-[24px] md:text-5xl font-bold text-white leading-8">
                                ₹7,600
                            </h3>

                            <p className="text-base text-neutral-300 leading-5">
                                Per month
                            </p>
                        </div>

                        <h4 className="text-[18px] md:text-2xl font-bold text-center mt-2 md:mt-5">
                            ₹3,800 per video
                        </h4>

                        <div className="mt-3 md:mt-5 pt-5 border-t border-neutral-200 space-y-3">

                            {starterFeatures.map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-2"
                                >
                                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                                        ✓
                                    </div>

                                    <span className="text-[14px] md:text-lg font-medium leading-4">
                                        {feature}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

                {/* Pro */}

                <div className="relative w-[50%] md:w-[320px] rounded-2xl bg-primary shadow-xl overflow-hidden text-white">

                    <div className="absolute right-[-62px] top-5 rotate-45 bg-white text-primary px-14 py-1 text-xs font-semibold">
                        Best Value
                    </div>

                    <div className="p-3 md:p-6">

                        <h2 className="text-[20px] md:text-3xl  font-heading">
                            Pro
                        </h2>

                        <div className="bg-white rounded-full p-3 flex justify-center items-center flex-col mt-3">
                            <h3 className="text-[24px] md:text-5xl font-bold leading-8 text-primary">
                                ₹35,000
                            </h3>
                            <p className="text-base leading-5 text-primary">
                                Per month
                            </p>
                        </div>

                        <div className="text-center mt-2">
                            <h4 className="text-[18px] md:text-2xl font-bold">
                                ₹3,500 per video
                            </h4>
                            <p className="text-[12px] md:text-sm opacity-90">
                                (Save ₹300 each)
                            </p>
                        </div>

                        <div className="mt-3 md:mt-5 pt-5 border-t border-neutral-200 space-y-3">
                            {proFeatures.map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-2"
                                >
                                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-white text-primary flex items-center justify-center text-xs font-bold">
                                        ✓
                                    </div>

                                    <span className="text-[14px] md:text-lg font-medium leading-4">
                                        {feature}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}