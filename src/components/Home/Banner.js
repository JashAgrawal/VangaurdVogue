import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import {
  bannerImages,
  mobileShopNowBannerPosition,
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
        showArrows={false}
        
      >
        {bannerImages.map((image, idx) => (
          <div className="relative w-full h-full bg-gray-400" key={idx}>
            <div className="flex w-full lg:h-[99.99vh] h-[90vh] justify-between items-center">
              <Image
                alt="banner Image"
                className="w-full h-full object-cover object-center opacity-90"
                src={bannerImages[3]}
              />
            </div>

            <div className="absolute font-extrabold text-accent flex flex-col text-left lg:justify-center justify-between lg:items-start items-center lg:px-20 max-md:px-4 max-md:py-8  top-0 left-0 w-full h-full text-6xl lg:text-9xl z-10 max-md:pb-20">
              <p
                style={{
                  textShadow: `0.3rem 0.3rem 0.05rem rgb(${rgbOfAccent.r},${rgbOfAccent.g},${rgbOfAccent.b},1.0)`,
                }}
                className={`text-black`}
              >
                {title.toLocaleUpperCase().split(" ")[0]} <br />
                <span className="text-accent [text-shadow:_0.3rem_0.3rem_0.05rem_rgb(0_0_0_/_100%)]">
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
                className={`w-full flex max-md:justify-${
                  mobileShopNowBannerPosition || "start"
                } justify-${
                  shopNowBannerPosition || "start"
                }`}
              >
                <button className="border border-accent bg-black text-xl mt-6 lg:mt-16 py-2 px-6 hover:bg-accent hover:text-black duration-300 ease-in-out ">
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
