import { clampPx } from "@/lib/vw";

export default function LetsConnect(){
    return(
        <div className="w-full lg:max-w-[1440px] mx-auto flex flex-col items-center px-4 py-4 mt-14 bg-primary/10" id="contact">
            <h1 className="text-primary font-heading" style={{fontSize:clampPx(36,40,40)}}>LET'S CONNECT!</h1>
            <div className="flex gap-4 flex-col md:flex-row px-20">
                <a href="http://wa.me/919579035371" className="bg-primary text-white px-6 py-4 font-bold hover:bg-primary/80 transition duration text-center"  style={{fontSize: clampPx(18,22,22)}}>Chat on Whatsapp</a>
                <a href="http://instagram.com/mooshuree" className="bg-primary text-white px-6 py-4 font-bold hover:bg-primary/80 transition duration text-center" style={{fontSize: clampPx(18,22,22)}}>Connect On Instagram</a>
                <a href="mailto:mooshuree@gmail.com" className="bg-primary text-white px-6 py-4 font-bold hover:bg-primary/80 transition duration text-center" style={{fontSize: clampPx(18,22,22)}}>MOOSHURE@GMAIL.COM</a>
                <a href="tel:+917021089934" className="bg-primary text-white px-6 py-4 font-bold hover:bg-primary/80 transition duration text-center" style={{fontSize: clampPx(18,22,22)}}>
                    Connect on Call
                </a>
            </div>
        </div>
    )
}