
import Image from "next/image";
import { clampPx } from "@/lib/vw";

interface ClientListProps {
    logos: string[];
}

export default function ClientList({ logos }: ClientListProps) {
    return (
        <div className="w-full mx-auto flex flex-col items-center p-1 md:p-2">
            <div className="flex flex-row items-center justify-between w-full border-y-1 md:border-y-3 border-primary p-1 md:p-2">
                <h1 className="font-heading text-center text-primary" style={{fontSize: clampPx(24,48,48)}}>CLIENT LIST</h1>
                <h3 className="text-center text-primary font-bold" style={{fontSize: clampPx(14,24,24)}}>200+ Clients</h3>
            </div>
            <div className="w-full flex flex-col items-start py-1 md:py-4">
                <h1 className="bg-primary text-white text-center py-1 px-2 md:px-8 rounded-4xl" style={{fontSize:clampPx(14, 28,28)}}>Top Brands</h1>
                <div className="w-full grid grid-cols-6 gap-1 md:gap-2 md:gap-5 mt-2 md:mt-4">
                    {logos.map((logo) => (
                        <div
                            key={logo}                                                                      
                            className="
        h-12
        md:h-36
        roundex-md
        md:rounded-xl
        bg-white
        border border-gray-200
        shadow-sm
        hover:shadow-lg
        hover:-translate-y-1
        transition-all
        duration-300
        flex
        items-center
        justify-center
        p-1
        md:p-4
      "
                        >
                            <Image
                                src={logo}
                                alt=""
                                width={180}
                                height={90}
                                className="
          max-w-full
          max-h-full
          object-contain
          opacity-90
          hover:opacity-100
          transition-all
          duration-300
        "
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}