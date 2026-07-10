import Image from "next/image";
import Link from "next/link";

export default function Hero()
{
    return(
        <>
            <div className="w-full flex-col items-center justify-center py-[120px]">
                <h1 className="text-[128px] font-heading text-center text-primary mb-[40px]">Mooshuree's Portfolio</h1>
                <div className="flex text-primary items-center items-center justify-center gap-4">
                     <a href="mailto:mooshuree@gmail.com" className="text-[18px] border border-primary px-4 py-2 border-2 rounded-4xl">MOOSHUREE@GMAIL.COM</a>
                    <div className="">
                        <Link href="https://www.instagram.com/mooshuree/" target="_blank" rel="noopener noreferrer" className="w-[50px] h-[50px]">
                            <Image src="/instagram.png" alt="Instagram" width={50} height={50} style={{ filter: "brightness(0) saturate(100%) invert(23%) sepia(82%) saturate(7094%) hue-rotate(243deg) brightness(101%) contrast(100%)" }} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}