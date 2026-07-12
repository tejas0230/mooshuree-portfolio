import { clampPx } from "@/lib/vw";
import Image from "next/image";

export default function AboutUs(){
    return(
        <div className="w-full lg:max-w-[1440px] mx-auto flex flex-col items-center p-4" id="about-us">
            <div className="flex flex-row items-center justify-between w-full  border-y-3 border-primary p-4">
                <h1 className="text-[120px] md:text-[48px]  font-heading text-center text-primary">ABOUT US</h1>
            </div>
            <div className="flex md:justify-center items-center w-full mt-4 flex-row  ">
                <div className="w-[60%] md:w-[50%] text-primary text-[64px] md:text-[20px] font-body text-left mt-4 px-20 leading-16">
                    <p>
                        Mooshuree started with three people who were tired of seeing good products/services get boring videos. Today, we have made 1000+ brand videos and worked with 200+ brands— UGC content, model reels, explainer videos — for businesses who want their product/services to actually get noticed. You just tell us what you need. We handle the shooting, the editing, everything. No delays, no headaches, no "we'll get back to you." Just videos that work.
                    </p>
                    <a href="mailto:mooshuree@gmail.com" className="text-white bg-primary rounded-[999px] md:rounded-4xl px-14 md:px-6 py-4 inline-flex font-body text-[42px] md:text-[20px] mt-4 block">MOOSHUREE@GMAIL.COM</a>
                </div>
                <div className="px-[40px]">
                    <Image src="/about_us.PNG" alt="About Us" width={1000} height={300} />
                </div>
                
            </div>
        </div>
    )

}