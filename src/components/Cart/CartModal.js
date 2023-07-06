import { Fragment, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import ts from "@/assests/ts.webp";
import Link from "next/link";
import { useCart } from "@/context/cartModel";
import CartContent from "./CartContent";
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
  // More products...
];

export default function Cart(props) {
  const { open, setOpen } = useCart();

  // const [open, setOpen] = useState(false);

  return (
    <div
      className={"fixed z-[200] right-0 w-1/3 h-screen overflow-hidden"}
      style={{ display: !open && "none" }}
    >
      <CartContent products={products} />
    </div>
  );
}
