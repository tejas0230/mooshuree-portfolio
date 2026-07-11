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
        <div className="w-full lg:max-w-[1440px] mx-auto flex flex-col items-center p-4">
            <div className="flex flex-row items-center justify-between w-full  border-y-3 border-primary p-4">
                <h1 className="text-[48px] font-heading text-center text-primary">Pricing</h1>
            </div>
            <div className="flex justify-center items-start gap-8 mt-10">

                {/* Starter */}
                <div className="w-[320px] rounded-2xl bg-white border border-neutral-200 shadow-xl overflow-hidden">

                    <div className="p-6">

                        <h2 className="text-3xl font-heading text-neutral-900">
                            Starter
                        </h2>

                        <div className="mt-5 bg-neutral-900 rounded-full px-7 py-4">
                            <h3 className="text-5xl font-bold text-white">
                                ₹7,600
                            </h3>

                            <p className="text-base text-neutral-300">
                                Per month
                            </p>
                        </div>

                        <h4 className="text-2xl font-bold text-center mt-5">
                            ₹3,800 per video
                        </h4>

                        <div className="mt-5 pt-5 border-t border-neutral-200 space-y-3">

                            {starterFeatures.map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                                        ✓
                                    </div>

                                    <span className="text-lg font-medium">
                                        {feature}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

                {/* Pro */}

                <div className="relative w-[320px] rounded-2xl bg-primary shadow-xl overflow-hidden text-white">

                    <div className="absolute right-[-42px] top-5 rotate-45 bg-white text-primary px-14 py-1 text-sm font-semibold">
                        Best Value
                    </div>

                    <div className="p-6">

                        <h2 className="text-3xl font-heading">
                            Pro
                        </h2>

                        <div className="mt-5 bg-white rounded-full p-3">

                            <div className="bg-primary rounded-full px-6 py-3 border-[6px] border-neutral-900">

                                <h3 className="text-5xl font-bold">
                                    ₹35,000
                                </h3>

                                <p className="text-base">
                                    Per month
                                </p>

                            </div>

                        </div>

                        <div className="mt-5 text-center">

                            <h4 className="text-2xl font-bold">
                                ₹3,500 per video
                            </h4>

                            <p className="text-sm opacity-90">
                                (Save ₹300 each)
                            </p>

                        </div>

                        <div className="mt-5 pt-5 border-t border-white/30 space-y-3">

                            {proFeatures.map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center text-xs font-bold">
                                        ✓
                                    </div>

                                    <span className="text-lg font-medium">
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