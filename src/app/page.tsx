import Image from "next/image";
import cams from "../app/images/cams.png";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Image src={cams} width={1300} height={1300} className="rounded-lg shadow-lg" alt="camera picture" />
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to UniView®
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          We are dedicated to providing the best products and services for our customers.
          Explore our products, learn more about us, or get in touch!
        </p>

        <div className="space-x-4">
          <Link href="/about" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            About Us
          </Link>
          <Link
            href="/contact"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}