import { clampPx } from "@/lib/vw";
import Image from "next/image";

export default function AboutUs(){
    return(
        <div className="w-full mx-auto flex flex-col items-center p-1 md:p-2" id="about-us">
            <div className="flex flex-row items-center justify-between w-full border-y-1 md:border-y-3 border-primary p-1 md:p-2">
                <h1 className="font-heading text-center text-primary" style={{fontSize: clampPx(24,48,48)}}>ABOUT US</h1>
            </div>
            <div className="flex justify-center items-center w-full md:mt-4 md:px-20" >
                <div className="text-primary font-body text-left mt-4 w-[50%] flex flex-col justify-start items-start px-2 md:px-4" >
                    <p style={{fontSize: clampPx(12,36,36), lineHeight:clampPx(14,44,44)}} >
                    Mooshuree started with three people who were tired of seeing good products/services get boring videos. Today, we have made 1000+ brand videos and worked with 200+ brands— UGC content, model reels, explainer videos — for businesses who want their product/services to actually get noticed. You just tell us what you need. We handle the shooting, the editing, everything. No delays, no headaches, no "we'll get back to you." Just videos that work.
                    </p>
                    <a href="mailto:mooshuree@gmail.com" className="text-white bg-primary w-full rounded-4xl px-2 md:px-6 py-2 md:py-4 inline-flex font-body mt-4 item-center justify-center" style={{fontSize:  clampPx(12,20,20)}}>MOOSHUREE@GMAIL.COM</a>
                </div>
                <div className="w-[50%] flex item-start justify-center h-full">
                    <Image src="/about_us.PNG" alt="About Us" width={1000} height={300} className="md:w-[60%] md:h-[60%]"  />
                </div>
            </div>
        </div>
    )

}
