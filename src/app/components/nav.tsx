import Image from "next/image";
import un from "../images/un.jpg"
import Link from "next/link";


export default function Nav() {
    return (
        <div>
            <nav className="bg-white shadow-lg">
                        <div className="flex items-center py-5">
                            <Image src={un} width={100} height={100} alt="mylogo" />
                        </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/" className="py-5 px-3 text-gray-700 hover:text-gray-900">Home</Link>
                        <Link href="/about" className="py-5 px-3 text-gray-700 hover:text-gray-900">About</Link>
                        <Link href="/product" className="py-5 px-3 text-gray-700 hover:text-gray-900">Product</Link>
                        <Link href="/product/led_lighting" className="py-5 px-3 text-gray-700 hover:text-gray-900">LED Lighting</Link>
                        <Link href="/contact" className="py-5 px-3 text-gray-700 hover:text-gray-900">Contact</Link>
                    </div>
            </nav>    
        </div>
    )
}