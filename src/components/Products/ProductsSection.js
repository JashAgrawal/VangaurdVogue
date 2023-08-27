import React from "react";
import CategoryCard from "../Home/CategoryCard";
import NewCard from "./NewCard";
import Image from "next/image";
import {
  ProductsSectionBackgroundImage,
  categories,
  products,
} from "@/utils/constant";
export default function ProductsSection(props) {
  const ToMap = props.isCategory ? categories : products;
  // const limit = screen.width >= 640 ? (props.isCategory ? 3 : 4) : 2;
  const limit = 4;
  return (
    <div className={`flex relative w-full h-full flex-col justify-center py-20`}>
      <div className="absolute w-full h-full top-[10%] left-0 gradient-bg bg-opacity-20" style={{top:props.secondaryHeading ? "12%" : 0}}>
      {/* <Image
        src={ProductsSectionBackgroundImage}
        className="w-full h-full object-cover"
        alt="background Image"
        /> */}
        </div>
      <div className={`flex lg:my-4 p-4 w-full flex-col items-center`}>
        {props.secondaryHeading !== "" && (
          <h3 className="text-lg z-20 lg:text-2xl mb-2 lg:mb-4 m-2">
            {props.secondaryHeading}
          </h3>
        )}
        <hr className="border-2 border-black w-full"></hr>
        <h1 className="text-3xl z-20 lg:text-6xl p-4 rounded text-center bg-accent font-extrabold text-black m-2">
          {props.primaryHeading}
        </h1>
      </div>
      <div className="flex z-20 mx-2 my-4 space-x-4 overflow-y-hidden md:overflow-x-hidden justify-start lg:justify-evenly">
        {ToMap.slice(0, limit).map((product, idx) => (
          <div key={idx}>
            {props.isCategory ? (
              <CategoryCard product={product} />
            ) : (
              <NewCard product={product} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
