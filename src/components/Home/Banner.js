import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import bg from "../../assests/d.jpeg";
import Link from "next/link";
export default function Banner(props) {
  const Images = [bg, bg, bg];
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
        {Images.map((image, idx) => (
          <div className="relative w-full h-full" key={idx}>
            <Image alt="ad" className="lg:h-[80vh] object-cover" src={image} />
            <div className="absolute shadow-white font-extrabold text-accent flex flex-col text-left justify-center px-20 items-start top-0 left-0 w-full h-full text-4xl lg:text-9xl">
              <p className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_40%)]">
                VANGAURD <br />
                VOGUE
              </p>
              <button className="border border-gray-400 bg-black text-xl mt-6 lg:mt-16 py-2 px-6">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}
