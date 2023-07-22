import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import {
  bannerImages,
  rgbOfAccent,
  shopNowBannerPosition,
  title,
} from "@/utils/constant";
export default function Banner(props) {
  const [onBanner, setOnBanner] = useState(0);
  return (
    <>
      <Carousel
        autoPlay={true}
        className="relative"
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
      >
        {bannerImages.map((image, idx) => (
          <div className="relative w-full h-full bg-white" key={idx}>
            <Image
              alt="banner Image"
              className="lg:h-[85vh] object-cover opacity-90"
              src={image}
            />
            <div className="absolute shadow-white font-extrabold text-accent flex flex-col text-left justify-center px-20 items-start top-0 left-0 w-full h-full text-4xl lg:text-9xl">
              <p
                style={{
                  textShadow: `10px 10px 2px rgb(${rgbOfAccent.r},${rgbOfAccent.g},${rgbOfAccent.b},1.0)`,
                }}
                className={`text-black`}
              >
                {title.toLocaleUpperCase().split(" ")[0]} <br />
                <span className="text-accent [text-shadow:_10px_10px_2px_rgb(0_0_0_/_100%)]">
                  {title.toLocaleUpperCase().split(" ")[1] || ""}
                </span>
              </p>
              {/* <p className="text-[15rem] rotate-12 [text-shadow:_10px_10px_2px_rgb(73_155_74_/_100%)] text-black">
                Weed <br />
              </p>
              <span className="text-accent ml-auto -rotate-12 [text-shadow:_10px_10px_2px_rgb(0_0_0_/_100%)]">
                Bros
              </span> */}
              <div
                className={`w-full flex justify-${
                  shopNowBannerPosition || "start"
                }`}
              >
                <button className="border border-gray-400 bg-black text-xl mt-6 lg:mt-16 py-2 px-6 hover:bg-accent hover:text-black duration-300 ease-in-out ">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}
