import { Fragment, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import ts from "@/assests/ts.webp";
import Link from "next/link";
import { useCart } from "@/context/cartModel";
import CartContent from "./CartContent";
import { products } from "@/utils/constant";

export default function Cart(props) {
  const { open, setOpen } = useCart();

  // const [open, setOpen] = useState(false);

  return (
    <div
      className={
        "fixed z-[200] right-0 lg:w-1/3 w-full h-screen overflow-hidden"
      }
      style={{ display: !open && "none" }}
    >
      <CartContent products={products} />
    </div>
  );
}
