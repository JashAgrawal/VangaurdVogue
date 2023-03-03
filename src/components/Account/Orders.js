import React from "react";
import ts from "../../assests/ts.webp";
export default function Orders() {
  const products = [
    {
      id: 1,
      name: "Throwback Hip Bag",
      href: "#",
      color: "Salmon",
      price: "$90.00",
      quantity: 1,
      imageSrc: ts,
      imageAlt:
        "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
    },
    {
      id: 2,
      name: "Medium Stuff Satchel",
      href: "#",
      color: "Blue",
      price: "$32.00",
      quantity: 1,
      imageSrc: ts,
      imageAlt:
        "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
    },
    {
      id: 3,
      name: "Throwback Hip Bag",
      href: "#",
      color: "Salmon",
      price: "$90.00",
      quantity: 1,
      imageSrc: ts,
      imageAlt:
        "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
    },
    {
      id: 4,
      name: "Medium Stuff Satchel",
      href: "#",
      color: "Blue",
      price: "$32.00",
      quantity: 1,
      imageSrc: ts,
      imageAlt:
        "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
    },
    {
      id: 2,
      name: "Medium Stuff Satchel",
      href: "#",
      color: "Blue",
      price: "$32.00",
      quantity: 1,
      imageSrc: ts,
      imageAlt:
        "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
    },
    {
      id: 3,
      name: "Throwback Hip Bag",
      href: "#",
      color: "Salmon",
      price: "$90.00",
      quantity: 1,
      imageSrc: ts,
      imageAlt:
        "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
    },
    {
      id: 4,
      name: "Medium Stuff Satchel",
      href: "#",
      color: "Blue",
      price: "$32.00",
      quantity: 1,
      imageSrc: ts,
      imageAlt:
        "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
    },
    // More products...
  ];
  return (
    <div className="max-h-[40rem] -ml-12 flex flex-col border overflow-auto">
      {products.map((product) => (
        <li key={product.id} className="flex border m-2 w-full py-6 px-4">
          <div className="h-60 w-60 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <h1>{product.name}</h1>
          </div>
        </li>
      ))}
    </div>
  );
}
