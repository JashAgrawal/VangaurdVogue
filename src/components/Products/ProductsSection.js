import React from "react";
import Card from "./Card";
import ts from "../../assests/ts.webp";
import l1 from "../../assests/l1.png";
import l2 from "../../assests/l2.png";
import l3 from "../../assests/l3.png";
import CategoryCard from "../Home/CategoryCard";
export default function ProductsSection(props) {
	const Products = [
		{
			image: ts,
			name: "Men's Black The Ghost Graphic Printed Oversized T-shirt",
			price: 649,
			color: "purple",
		},
		{
			image: ts,
			name: "Men's Black The Ghost Graphic Printed Oversized T-shirt",
			price: 649,
			color: "red",
		},
		{
			image: ts,
			name: "Men's Black The Ghost Graphic Printed Oversized T-shirt",
			price: 649,
			color: "purple",
		},
		{
			image: ts,
			name: "Men's Black The Ghost Graphic Printed Oversized T-shirt",
			price: 649,
			color: "purple",
		},
		{
			image: ts,
			name: "Men's Black The Ghost Graphic Printed Oversized T-shirt",
			price: 649,
			color: "purple",
		},
		{
			image: ts,
			name: "Men's Black The Ghost Graphic Printed Oversized T-shirt",
			price: 649,
			color: "purple",
		},
	];
	const Category = [
		{
			image: l1,
			name: "ONE PEICE",
		},
		{
			image: l2,
			name: "BLACK CLOVER",
		},
		{
			image: l3,
			name: "NARUTO",
		},
	];
	const ToMap = props.isCategory ? Category : Products;
	// const limit = screen.width >= 640 ? (props.isCategory ? 3 : 4) : 2;
	const limit = 4;
	return (
		<div className={`flex w-full my-4 flex-col justify-center`}>
			<div className={`flex lg:my-4 p-4 w-full flex-col items-center`}>
				{props.secondaryHeading !== "" && (
					<h3 className="text-lg lg:text-2xl mb-2 lg:mb-4 m-2">
						{props.secondaryHeading}
					</h3>
				)}
				<hr className="border-2 border-black w-full"></hr>
				<h1 className="text-3xl lg:text-6xl p-4 rounded text-center bg-accent font-extrabold text-black m-2">
					{props.primaryHeading}
				</h1>
			</div>
			<div className="flex mx-2 my-4 max-h-[25rem] lg:max-h-[40rem] space-x-4 overflow-y-hidden justify-start lg:justify-evenly">
				{ToMap.slice(0, limit).map((product, idx) => (
					<>
						{props.isCategory ? (
							<CategoryCard key={idx} product={product} />
						) : (
							<Card key={idx} product={product} />
						)}
					</>
				))}
			</div>
		</div>
	);
}
