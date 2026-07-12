import { clampPx } from "@/lib/vw";
import Image from "next/image"

interface ModelProps {
    models: string[];
}

export default function OurModels({ models }: ModelProps) {
    return (
        <div className="w-full mx-auto flex flex-col items-center p-1 md:p-2">
            <div className="flex flex-row items-center justify-between w-full bg-primary p-1 md:p-2">
                <h1 className="font-heading text-center text-white" style={{fontSize: clampPx(24,48,48)}}>PRODUCT-SERVICES PHOTOS</h1>
            </div>
            <div className="w-full grid grid-cols-4 lg:grid-cols-6 gap-[1px] md:gap-[3px] bg-primary p-[1px]">
                {models.map((model, index) => (
                    <div
                        key={index}
                        className="relative aspect-[3/4] overflow-hidden bg-white"
                    >
                        <Image
                            src={model}
                            alt={`Model ${index + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                            sizes="(max-width:768px) 50vw,
                                (max-width:1024px) 33vw,
                                (max-width:1280px) 25vw,
                                16vw"
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}