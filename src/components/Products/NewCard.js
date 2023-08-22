import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewCard = ({ product }) => {
  return (
    <Link
      href={"/Product/" + product.id}
      className="lg:w-[24vw] w-[70vw] flex flex-col space-y-4 lg:p-8 p-4 border-b border-accent gradient-bg-card"
    >
      <div className="w-full h-full overflow-hidden">
        <Image
          src={product.imageSrc}
          className="ease-in-out w-full h-full lg:hover:scale-[1.10] duration-500 object-center object-cover"
          alt={product.imageAlt || "Product Image"}
        />
      </div>
      <div className="">
        <h1 className="lg:text-lg text-base z-10">
          {("" + product.name).slice(0, 30)}
          {("" + product.name).length > 30 && "..."}
        </h1>
      </div>
      <div className="flex justify-start space-x-4 items-end ">
        <span className="text-accent font-bold lg:text-2xl text:xl z-10">
          Rs. {product.price}
        </span>
        {/* {product.discount && ( */}
        <span className="line-through text-gray-700 text-md">
          Rs. {product.discount || "600"}
        </span>
        {/* )} */}
      </div>
    </Link>
  );
};

export default NewCard;
