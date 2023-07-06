import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewCard = ({ product }) => {
  return (
    <Link
      href={"/Product/" + product.id}
      className="lg:max-w-[25vw] max-w-[50vw] flex flex-col space-y-4  p-8 border-b border-accent"
    >
      <div className="w-full h-full overflow-hidden">
        <Image
          src={product.image}
          className="ease-in-out w-full h-full lg:hover:scale-[1.10] duration-500 object-center object-cover"
          alt="img"
        />
      </div>
      <div>
        <h1 className="text-lg">
          {("" + product.name).slice(0, 30)}
          {("" + product.name).length > 30 && "..."}
        </h1>
      </div>
      <div className="flex justify-start space-x-4 items-end">
        <span className="text-accent font-bold text-2xl">
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
