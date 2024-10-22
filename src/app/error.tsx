"use client";
import Link from "next/link";
export default function ErrorPage(){
    return(
    <div className="min-h-screen  bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-black">Error Page</h1> 
        <Link href="/" className="bg-blue-500 text-white text-2xl font-black my-5 py-2 px-4 rounded hover:bg-blue-600">
            Back to Home
        </Link>
    </div>
    );
}