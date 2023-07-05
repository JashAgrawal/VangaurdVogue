import React from "react";
import bb from "../../assests/d.jpeg";
import Image from "next/image";
export default function MessageBanner(props) {
  const banner = bb;
  return (
    <div className="flex relative max-w-screen-xl h-4/5 text-accent font-bold my-4 w-full items-center justify-center">
      <Image src={bb} className="w-full h-full absolute top-0 left-0" />
      <div className="flex flex-col w-full h-96 p-2 my-20 justify-center items-center z-10">
        <h3 className="bg-black p-4 text-xl">ONGOING OFFER</h3>
        <div className="m-4 text-1xl mb-8 flex flex-col justify-center items-center">
          <h1 className="bg-accent my-8 text-center text-4xl p-1 text-black">
            FREE ITACHI & TANJIRO ACCESSORIES
          </h1>
          <h3 className="bg-white my-2 text-black">
            Use code {'"'}ITACHIXKIAYA{'"'} to get a Free Itachi Ring on order
            value of Rs. 1999.
          </h3>
          <h3 className="bg-black text-white">
            Use code {'"'}TANJIROXKIAYA{'"'} to get Free Tanjiro Earrings on
            order value of Rs. 2199.
          </h3>
        </div>
        <button className=" bg-black hover:bg-accent text-white text-5xl font-bold-500 py-4 px-4 border-4 border-accent hover:text-black rounded">
          Shop Now
        </button>
      </div>
    </div>
  );
}
