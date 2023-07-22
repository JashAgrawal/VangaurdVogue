import React from "react";
import l3 from "../../assests/l3.png";
import { AiOutlineStar, AiFillStar, AiOutlineDown } from "react-icons/ai";
import { RiTShirt2Fill } from "react-icons/ri";
import { MdOutlineFormatColorReset } from "react-icons/md";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import Image from "next/image";
export default function ReviewMessage(props) {
  return (
    <div>
      {/* <section className="py-24 border 2xl:py-44 bg-blueGray-100 rounded-t-10xl overflow-hidden"> */}
      <div className="container my-2 px-4 mx-auto">
        <div className="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
          <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 rounded-t-xl border-2 border-gray-700 bg-black bg-opacity-40">
            <div className="flex flex-wrap items-center">
              <Image
                className="mr-6 w-12 h-12 p-1 border border-accent rounded-full mb-1"
                src={l3}
                alt="Profile"
              />
              <h4 className="w-full md:w-auto text-xl font-heading font-medium">
                {props.name}
              </h4>
              <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
              <span className="mr-4 text-xl font-heading font-medium">
                {props.review}
              </span>

              <div className="inline-flex">
                {[1, 2, 3, 4, 5].map((rev) => (
                  <>
                    {rev <= 4 ? (
                      <AiFillStar key={rev} size={28} color="#b91c1c" />
                    ) : (
                      <AiOutlineStar key={rev} size={28} color="#b91c1c" />
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="px-4 overflow-hidden rounded-b-xl md:px-16 border-2 border-gray-700 pt-8 pb-12 bg-black">
            <div className="flex flex-wrap">
              <div className="w-full md:w-2/3 mb-6 md:mb-0">
                <p className="mb-8 max-w-2xl text-white-400 leading-loose">
                  {props.message}
                </p>
                <div className="-mb-2">
                  <div className="inline-flex w-full md:w-auto md:mr-2 mb-2">
                    <div className="flex items-center h-12 pl-2 pr-6 bg-red-100 border-2 border-red-500 rounded-full">
                      <div className="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-red-700">
                        <BsFillHandThumbsUpFill color="red" />
                      </div>
                      <span className="text-black font-heading font-medium">
                        Best Quality
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex w-full md:w-auto md:mr-2 mb-2">
                    <div className="flex items-center h-12 pl-2 pr-6 bg-red-100 border-2 border-red-500 rounded-full">
                      <div className="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-red-700">
                        <MdOutlineFormatColorReset color="red" />
                      </div>
                      <span className="text-black font-heading font-medium">
                        Color
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex w-full md:w-auto mb-2">
                    <div className="flex items-center h-12 pl-2 pr-6 bg-red-100 border-2 border-red-500 rounded-full">
                      <div className="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-red-700">
                        <RiTShirt2Fill color="red" />
                      </div>
                      <span className="text-black font-heading font-medium">
                        Fit
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 text-right">
                <p className="mb-8 text-sm text-gray-300">
                  Added at{" "}
                  {props.date &&
                    new Date(props.date).toISOString().split("T")[0]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
    </div>
  );
}
