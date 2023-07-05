import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
export default function SecondaryNavbar() {
  const Headings = [
    "Shipping Pan India",
    "Contact - support@vVogue.com",
    "App coming soon",
    "COD at Rs : 199 /-",
  ];
  const delay = 5;
  const [onMessage, setOnMessage] = useState(0);
  useEffect(() => {
    const myTimeOut = setTimeout(() => {
      setOnMessage((onMessage + 1) % Headings.length);
    }, delay * 1000);
    return () => {
      clearTimeout(myTimeOut);
    };
  }, [onMessage, Headings.length]);
  return (
    <div>
      <div className="bg-accent h-8 flex flex-col items-center justify-center">
        {/* <div className=" mb-3 flex w-full justify-evenly">
          <p
            className="cursor-pointer"
            onClick={() => {
              setOnMessage(
                onMessage !== 0
                  ? (onMessage - 1) % Headings.length
                  : Headings.length - 1
              );
            }}
          >
            <AiOutlineArrowLeft />
          </p>
          <p
            className="cursor-pointer"
            onClick={() => setOnMessage((onMessage + 1) % Headings.length)}
          >
            <AiOutlineArrowRight />
          </p>
        </div> */}
        <p className="text-black">{Headings[onMessage]}</p>
      </div>
    </div>
  );
}
