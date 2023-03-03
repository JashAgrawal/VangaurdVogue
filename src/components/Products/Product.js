import React, { useState } from "react";
import ts from "../../assests/ts.webp";
import Card from "./Card";
import FiltersSection from "./FiltersSection";
export default function Product() {
  const Products = [
    {
      image: ts,
      name: "Men's Black The Ghost Graphic Printed Oversized T-shirt",
      price: 649,
      color: "purple",
    },
    {
      image:
        "https://images.bewakoof.com/t1080/men-s-red-what-responsibility-graphic-printed-oversized-t-shirt-564915-1672042802-1.jpg",
      name: "Men's Black The Ghost Graphic Printed Oversized T-shirt",
      price: 649,
      color: "red",
    },
    {
      image: ts,
      name: "Men's Black The Ghost Graphic Printed Oversized T-shirt",
      price: 649,
      color: "purple",
    },
    {
      image: ts,
      name: "Men's Black The Ghost Graphic Printed Oversized T-shirt",
      price: 649,
      color: "purple",
    },
    {
      image: ts,
      name: "Men's Black The Ghost Graphic Printed Oversized T-shirt",
      price: 649,
      color: "purple",
    },
    {
      image: ts,
      name: "Men's Black The Ghost Graphic Printed Oversized T-shirt",
      price: 649,
      color: "purple",
    },
    {
      image: ts,
      name: "Men's Black The Ghost Graphic Printed Oversized T-shirt",
      price: 649,
      color: "purple",
    },
    {
      image: ts,
      name: "Men's Black The Ghost Graphic Printed Oversized T-shirt",
      price: 649,
      color: "purple",
    },
  ];
  return (
    <>
      <div className="flex mb-7 m-4 justify-center items-center">
        <h1 className="text-7xl">Anime</h1>
      </div>
      <FiltersSection />
      <div className="w-[75%] -mt-[21.7rem] float-right border-l-2 border-accent">
        <div className="flex justify-evenly flex-wrap overflow-hidden">
          {Products.map((product) => (
            <>
              <Card product={product} />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
