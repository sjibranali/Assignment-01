import Image from "next/image";
import p01 from "../images/product01bullet.png";
import p02 from "../images/product02pro.png"
import p03 from "../images/product03dome.png"
import productMain from "../images/productMain01.jpg"
import Link from "next/link";

export default function Product() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="mt-5 text-4xl font-bold text-gray-800 mb-4">
          Welcome to UniView® Products
      </h1>
  
      <Image src={productMain} width={1500} height={1000} className="rounded-lg shadow-lg" alt="productMain" />
<br />
      {/* PRODUCTS */}
      <h2 className="text-gray-800 my-5 text-4xl font-semibold">Products Range</h2>
      <div className="flex space-x-4">
        <div className="text-center">
            <Image src={p01} width={200} height={200} className="rounded-lg shadow-lg" alt="bullet camera" />
            <h3 className="text-gray-600 mt-2 text-lg font-semibold">Cam: Bullet</h3>
        </div>
        <div className="text-center">
            <Image src={p02} width={200} height={200} className="rounded-lg shadow-lg" alt="pro camera" />
            <h3 className="text-gray-600 mt-2 text-lg font-semibold">Cam: Pro</h3>
        </div>
        <div className="text-center">
            <Image src={p03} width={200} height={200} className="rounded-lg shadow-lg" alt="dome camera" />
            <h3 className="text-gray-600 mt-2 text-lg font-semibold">Cam: Dome</h3>
        </div>
    </div>
    <Link href="/product/led_lighting" className="bg-gray-400 rounded-lg shadow-lg my-5 py-3 px-3 text-gray-700 text-lg hover:text-gray-900 ">LED Lighting</Link>
    </div>
  );
}
