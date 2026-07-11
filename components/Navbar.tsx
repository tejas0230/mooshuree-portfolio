import Link from "next/link";
import MooshureeContainer from "./MooshureContainer";
export default function Navbar() {
    return (
            <div className="bg-primary text-white w-full flex flex-col items-center py-6 md:p-4">
                <ul className="flex space-x-[40px] md:space-x-[200px] text-[16px] md:text-[20px] justify-between items-center">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Our Work</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                    <li><Link href="#about-us">About Us</Link></li>
                </ul>
            </div>
    )
}