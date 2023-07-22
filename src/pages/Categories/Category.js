import React from "react";
import ts from "@/assests/ts.webp";
import l1 from "@/assests/l1.png";
import l2 from "@/assests/l2.png";
import l3 from "@/assests/l3.png";
import CategoryCard from "@/components/Home/CategoryCard";
export default function Productssss() {
  const Category = [
    {
      image: l1,
      name: "ONE PEICE",
    },
    {
      image: l2,
      name: "BLACK CLOVER",
    },
    {
      image: l3,
      name: "NARUTO",
    },
    {
      image: l1,
      name: "ONE PEICE",
    },
    {
      image: l2,
      name: "BLACK CLOVER",
    },
    {
      image: l3,
      name: "NARUTO",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col space-y-12 items-center justify-center py-12">
      <h1 className="text-3xl lg:text-6xl p-4 rounded text-center bg-accent font-extrabold text-black m-2">
        Shop By Category
      </h1>
      <div className="px-16 grid grid-cols-3 gap-8">
        {Category.map((category, idx) => (
          <CategoryCard key={idx} product={category} />
        ))}
      </div>
    </div>
  );
}
