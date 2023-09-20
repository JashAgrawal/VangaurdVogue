import React, { useState } from "react";
import l3 from "../../assests/l3.png";
import { AiOutlineStar, AiFillStar, AiOutlineDown } from "react-icons/ai";
import { RiTShirt2Fill } from "react-icons/ri";
import { MdOutlineFormatColorReset } from "react-icons/md";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import Image from "next/image";
export default function WriteReview(props) {
  const [stars, setStars] = useState(0);
  const [review, setReview] = useState("");
  return (
    <div>
      {/* <section className="py-24 border 2xl:py-44 bg-blueGray-100 rounded-t-10xl overflow-hidden"> */}
      <div className="container my-2 px-4 mx-auto">
        <div className="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
          <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 rounded-t-xl border-2 border-gray-700 bg-white bg-opacity-40">
            <div className="flex max-md:flex-col items-center">
              <div className="w-full flex items-center justify-start max-md:border-b border-gray-900 max-md:my-2 max-md:py-2">
              <Image
                className="mr-6 w-12 h-12 p-1 border border-accent rounded-full mb-1"
                src={l3}
                alt="profile"
              />
              <h4 className="w-full md:w-auto text-xl font-heading font-medium">
                {props.name || "You"}
              </h4>
              <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
              </div>
              <div className="inline-flex items-center">
                <p className="mr-4 text-xl font-heading font-medium">{stars || 0}</p>
                {[1, 2, 3, 4, 5].map((e, i) =>
                  e <= stars ? (
                    <AiFillStar
                      onClick={() => setStars(e)}
                      key={i}
                      size={28}
                      color="#b91c1c"
                    />
                  ) : (
                    <AiOutlineStar
                      onClick={() => setStars(e)}
                      key={i}
                      size={28}
                      color="#b91c1c"
                    />
                  )
                )}
              </div>
            </div>
          </div>
          <div className="px-4 overflow-hidden rounded-b-xl md:px-16 border-2 border-gray-700 pt-8 pb-12 bg-white">
            <div className="flex flex-wrap">
              <div className="w-full md:w-2/3 mb-6 md:mb-0">
                <div className="mb-8 max-w-2xl text-white-400 leading-loose">
                  <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Write What You Think About the Product ......."
                    className="w-full border-b h-full bg-white focus:outline-none"
                  ></textarea>
                </div>
                <div>
                  <button className="relative inline-flex items-center justify-center px-6 py-1 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                    <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-accent rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-gray-900 rounded-md "></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-accent rounded-md opacity-0 group-hover:opacity-100 "></span>
                    <span className="relative text-xl text-accent transition-colors duration-200 ease-in-out delay-100 group-hover:text-black">
                      Post
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
    </div>
  );
}
