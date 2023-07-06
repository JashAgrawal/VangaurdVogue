import React, { useState } from "react";
import Dropdown from "./Dropdown";

export default function FiltersSection() {
  const defaultColors = ["red", "green", "blue", "black", "white", "pink"];
  const [price, setPrice] = useState(1000);
  const [inStock, setInStock] = useState(true);
  const [selectedColors, setSelectedColors] = useState([]);
  const handleColorClick = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((colors) => colors !== color));
    } else {
      setSelectedColors([...selectedColors, ...[color]]);
    }
    console.log(selectedColors);
  };
  return (
    <div className="w-[22rem] max-md:hidden pl-1 [&>*]:m-2 text-center text-4xl">
      <h1 className="text-6xl border-y-4 border-accent pb-2 bg-black text-accent">
        Fliters
      </h1>
      <Dropdown text={"Availblity"}>
        <div className="flex w-full h-full justify-center items-center">
          <input
            type="checkbox"
            checked={inStock}
            onChange={(e) => setInStock(e.target.checked)}
            className="bg-white checked:after:bg-accent h-6 w-6 mx-4 border-2 border-white"
          ></input>
          <span className="text-xl">Include out of stock</span>
        </div>
      </Dropdown>
      <Dropdown text={"Price"}>
        <div className="flex w-full flex-col justify-start items-start">
          <input
            id="steps-range"
            type="range"
            min="100"
            max="1000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            step="100"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <div className="text-lg mt-2 text-center w-full">
            Below Rs{" "}
            <p className="text-accent font-bold inline text-2xl text-center">
              {price}
            </p>
          </div>
          {/* <div className="flex mt-3 w-full justify-between">
                <input
                  type="numeric"
                  placeholder="Rs 100"
                  max={500}
                  className="appearance-none w-12 bg-black text-xl"
                  value={100}
                />
                <input
                  type="numeric"
                  max={1000}
                  className="appearance-none w-12 bg-black text-xl"
                  value={1000}
                />
              </div> */}
        </div>
      </Dropdown>
      <Dropdown text={"Color"}>
        <div className="flex justify-between items-center flex-wrap">
          {defaultColors.map((color, idx) => (
            <div
              key={idx}
              className={`flex w-[25%] justify-start  rounded-lg items-center my-2 mx-2 py-2`}
              onClick={() => handleColorClick(color)}
            >
              <div
                style={{ backgroundColor: color }}
                className={`h-6 shrink-0 w-8 mx-2 rounded-lg ${
                  color == "black" && "border"
                }`}
              ></div>
              <p
                className={`text-base ${
                  selectedColors.includes(color) ? "text-accent" : "text-white"
                }`}
              >
                {color.toLocaleUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </Dropdown>
    </div>
  );
}
