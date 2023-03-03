import React from "react";
import Card from "./Card";
import ts from "../../assests/ts.webp";
import CategoryCard from "../Home/CategoryCard";
export default function ProductsSection(props) {
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
  ];
  const Category = [
    {
      image:
        "https://media.discordapp.net/attachments/1075728414826307646/1076244140360208404/Screenshot_2023-02-16_at_1.32.57_PM.png",
      name: "ONE PEICE",
    },
    {
      image:
        "https://media.discordapp.net/attachments/1075728414826307646/1076244139433267321/Screenshot_2023-02-16_at_1.32.39_PM.png",
      name: "BLACK CLOVER",
    },
    {
      image:
        "https://media.discordapp.net/attachments/1075728414826307646/1076244139793973348/Screenshot_2023-02-16_at_1.32.47_PM.png",
      name: "NARUTO",
    },
  ];
  const ToMap = props.isCategory ? Category : Products;
  const limit = props.isCategory ? 3 : 4;
  return (
    <div className={`flex w-full my-4 flex-col justify-center`}>
      <div className={`flex my-4 p-4 w-full flex-col items-center`}>
        {props.secondaryHeading !== "" && (
          <h3 className="text-2xl mb-4 m-2">{props.secondaryHeading}</h3>
        )}
        <hr className="border-2 border-black w-full"></hr>
        <h1 className="text-6xl p-4 rounded text-center bg-accent font-extrabold text-black m-2">
          {props.primaryHeading}
        </h1>
      </div>
      <div className="flex m-4 max-h-[40rem] overflow-hidden justify-evenly">
        {ToMap.slice(0, limit).map((product) => (
          <>
            {props.isCategory ? (
              <CategoryCard product={product} />
            ) : (
              <Card product={product} />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
