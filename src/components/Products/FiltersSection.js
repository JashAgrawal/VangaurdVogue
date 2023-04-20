import React, { useState } from "react";
import Dropdown from "./Dropdown";

export default function FiltersSection() {
	const defaultColors = [
		"red",
		"green",
		"blue",
		"black",
		"white",
		"pink",
		"yellow",
		"purple",
	];
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
				<input
					type="checkbox"
					checked={inStock}
					onChange={(e) => setInStock(e.target.checked)}
					className="bg-white checked:after:bg-accent h-6 w-6 mx-4 border-2 border-white"
				></input>
				<span className="text-xl">Include out of stock</span>
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
						class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
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
				<div className="grid grid-cols-3 gap-1">
					{defaultColors.map((color, idx) => (
						<div
							key={idx}
							className={`flex justify-start border-2  ${
								selectedColors.includes(color)
									? "border-accent"
									: "border-black"
							} rounded-xl my-2 mx-1 px-2 items-center`}
							onClick={() => handleColorClick(color)}
						>
							<div
								style={{ backgroundColor: color }}
								className={`h-8 w-8 m-2 border rounded-xl border-white`}
							></div>
							<p className="text-sm">{color}</p>
						</div>
					))}
				</div>
			</Dropdown>
		</div>
	);
}
