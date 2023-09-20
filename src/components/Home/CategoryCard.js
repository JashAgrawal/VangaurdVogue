import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CategoryCard({ product }) {
  return (
    <div className="lg:w-[30vw] w-[70vw] max-md:h-[40vh] h-[60vh] mb-8 relative shadow-md overflow-hidden shadow-accent bg-white border border-gray-200 rounded-xl dark:bg-black dark:border-gray-700 cursor-pointer">
      <Link href="/product">
        <div className="overflow-hidden w-full h-full">
          <Image
            className="hover:scale-[1.1] w-full h-full ease-in-out duration-200 object-cover object-top"
            src={product.image}
            alt="Category Image"
          />
        </div>
      </Link>
      <div className="flex w-full justify-center absolute lg:bottom-6 bottom-1 px-4 py-2 ">
        <h1 className="lg:text-xl text-sm bg-black bg-opacity-70 px-4 py-2 border-2 border-accent text-white">
          {product.name}
        </h1>
      </div>
    </div>
  );
}
