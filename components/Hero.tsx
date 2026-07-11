import Image from "next/image";
import Link from "next/link";

export default function Hero()
{
    return(
        <>
            <div className="w-full flex-col items-center justify-center py-[120px]">
                <h1 className="text-[180px] md:text-[128px] font-heading text-center text-primary mb-[40px]">Mooshuree's Portfolio</h1>
                <div className="flex text-primary items-center items-center justify-center gap-4">
                    <a href="mailto:mooshuree@gmail.com" className="text-[32px] md:text-[18px] border border-primary px-6 py-4 border-2 rounded-4xl hover:bg-primary/90 hover:text-white transition duration">mooshuree@gmail.com</a>
                    <a href="http://wa.me/919579035371" className="text-[32px] md:text-[18px] border-primary border-2 text-primary rounded-4xl px-6 py-4 hover:bg-primary/90 hover:text-white transition duration">Chat on Whatsapp</a>
                    <Link href="https://www.instagram.com/mooshuree/" target="_blank" rel="noopener noreferrer" className="text-[32px] md:text-[18px] border-primary border-2 px-6 py-4 rounded-4xl hover:bg-primary/90 hover:text-white transition duration">
                        Connect on Instagram
                    </Link>
                </div>
            </div>
        </>
    )
}