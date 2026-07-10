
import Image from "next/image";

interface ClientListProps {
    logos: string[];
}

export default function ClientList({ logos }: ClientListProps) {
    return (
        <div className="w-full lg:max-w-[1440px] mx-auto flex flex-col items-center p-4">
            <div className="flex flex-row items-center justify-between w-full  border-y-3 border-primary py-4">
                <h1 className="text-[48px] font-heading text-center text-primary">CLIENT LIST</h1>
                <h3 className="text-[24px] text-center text-primary font-bold">100+ Clients</h3>
            </div>
            <div className="w-full flex flex-col items-start py-4">
                <h1 className="bg-primary text-white text-[22px] text-center py-2 px-4 rounded-4xl mb-4">Top Brands</h1>
                <div className="w-full grid grid-cols-6 gap-5 mt-8">
                    {logos.map((logo) => (
                        <div
                            key={logo}
                            className="
        h-28
        rounded-xl
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
        p-5
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
          grayscale
          opacity-80
          hover:grayscale-0
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