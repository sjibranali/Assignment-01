import Image from "next/image";
import l01 from "../../images/lightFL.jpg";
import l02 from "../../images/lightHB.jpg"
import l03 from "../../images/lightSL.jpg"
import lightMain from "../../images/ledLightingMain.jpg"
import Link from "next/link";

export default function LedLighting() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="mt-5 text-4xl font-bold text-gray-800 mb-4">
          Welcome to UniView® LED Lighting
      </h1>
  
      <Image src={lightMain} width={1500} height={1000} className="rounded-lg shadow-lg" alt="productMain" />
<br />
      {/* PRODUCTS */}
      <h2 className="text-gray-800 my-5 text-4xl font-semibold">Products Range</h2>
      <div className="flex space-x-4">
        <div className="text-center">
            <Image src={l01} width={200} height={200} className="rounded-lg shadow-lg" alt="bullet camera" />
            <h3 className="text-gray-600 mt-2 text-lg font-semibold">Flood Light</h3>
        </div>
        <div className="text-center">
            <Image src={l02} width={200} height={200} className="rounded-lg shadow-lg" alt="pro camera" />
            <h3 className="text-gray-600 mt-2 text-lg font-semibold">Highbay Light</h3>
        </div>
        <div className="text-center">
            <Image src={l03} width={200} height={200} className="rounded-lg shadow-lg" alt="dome camera" />
            <h3 className="text-gray-600 mt-2 text-lg font-semibold">Street Light</h3>
        </div>
    </div>
    <Link href="/product" className="bg-gray-400 rounded-lg shadow-lg my-5 py-3 px-3 text-gray-700 text-lg hover:text-gray-900 ">Cameras</Link>
    </div>
  );
}