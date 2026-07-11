import { clampPx } from "@/lib/vw";
import Image from "next/image";

export default function AboutUs(){
    return(
        <div className="w-full mx-auto flex flex-col items-center p-2" id="about-us">
            <div className="flex flex-row items-center justify-between w-full  border-y-3 border-primary p-2 md:p-4">
                <h1 className="font-heading text-center text-primary" style={{fontSize: clampPx(30,48,48)}}>About Us</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center w-full mt-4">
                <div className="md:w-[50%] flex item-center justify-center">
                    <Image src="/about.PNG" alt="About Us" width={500} height={300}  />
                </div>

                <div className="text-primary font-body text-left mt-4 md:w-[50%] flex flex-col justify-start items-start px-4" >
                    <p style={{fontSize: clampPx(18,20,20)}} className="">
                    Mooshuree started with three people who were tired of seeing good products/services get boring videos. Today, we have made 1000+ brand videos and worked with 200+ brands— UGC content, model reels, explainer videos — for businesses who want their product/services to actually get noticed. You just tell us what you need. We handle the shooting, the editing, everything. No delays, no headaches, no "we'll get back to you." Just videos that work.
                    </p>
                    <a href="mailto:mooshuree@gmail.com" className="text-white bg-primary  rounded-4xl px-6 py-4 inline-flex font-body mt-4" style={{fontSize:  clampPx(18,20,20)}}>MOOSHUREE@GMAIL.COM</a>
                </div>
                
            </div>
        </div>
    )

}