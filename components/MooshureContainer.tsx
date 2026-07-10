export default function MooshureeContainer({children}:Readonly<{children: React.ReactNode}>){
    return(
        <div className="w-full xl:max-w-[1280px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px]">
            {children}
        </div>
    )
}