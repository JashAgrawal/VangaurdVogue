import React from "react";
import ts from "../../assests/ts.webp";
export default function OrdersHistory() {
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
    <div className="max-h-[75]	overflow-auto">
      <ul className="-my-6 divide-y divide-accent">
        {products.map((product) => (
          <li key={product.id} className="flex m-2 w-full border py-6 px-4">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-white">
                  <h3>
                    <a href={product.href}>{product.name}</a>
                  </h3>
                  <p className="ml-4 text-lg">{product.price}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-white">Qty {product.quantity}</p>

                <div className="flex">
                  <button type="button" className="font-small text-accent">
                    Delivered on 23 Oct 2022
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
