import React from "react";
import Image from "next/image";
import { messageBannerBackgroundImage } from "@/utils/constant";
export default function MessageBanner(props) {
  return (
    <div className="flex relative max-w-screen-xl lg:h-4/5 h-2/5 text-accent font-bold w-full items-center justify-center">
      <Image
        src={messageBannerBackgroundImage}
        className="w-full h-full absolute object-cover object-center top-0 left-0"
        alt="banner Background Image"
      />
      <div className="flex flex-col w-full h-full p-2 lg:my-20 my-6 justify-center items-center z-10">
        <h3 className="bg-black p-4 lg:text-3xl text-lg">ONGOING OFFER</h3>
        <div className="m-4 lg:text-4xl text-lg lg:mb-8 mb-3 flex flex-col justify-center items-center">
          <h1 className="bg-accent lg:my-8 my-3 text-center -skew-x-12 lg:text-7xl text-xl p-1 text-black">
            FREE ITACHI & TANJIRO ACCESSORIES
          </h1>
          <h3 className="bg-white lg:my-6 my-3 text-black  ">
            Use code {'"'}ITACHIXKIAYA{'"'} to get a Free Itachi Ring on order
            value of Rs. 1999.
          </h3>
          <h3 className="bg-black text-white ">
            Use code {'"'}TANJIROXKIAYA{'"'} to get Free Tanjiro Earrings on
            order value of Rs. 2199.
          </h3>
        </div>
        <button className=" bg-black hover:bg-accent text-white lg:text-5xl text-lg font-bold-500 lg:py-4 py-2 px-4 lg:border-4 border-2 border-accent hover:text-black rounded">
          Shop Now
        </button>
      </div>
    </div>
  );
}
