import React, { useState } from "react";
import ts from "../../assests/ts.webp";
import Card from "./Card";
import FiltersSection from "./FiltersSection";
export default function Productssss() {
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
	return (
		<>
			<div className="w-full text-3xl mb-3 my-2 text-center">
				<h1>Anime</h1>
			</div>
			{/* PC VIEW */}
			<div className="hidden lg:grid gap-2 grid-cols-12 ">
				<div className="max-h-[79vh] flex justify-center items-center col-span-3">
					<FiltersSection />
				</div>
				<div className=" max-h-[79vh] col-span-9 overflow-auto">
					<div className="flex justify-evenly flex-wrap overflow-auto">
						{Products.map((product) => (
							<>
								<Card product={product} />
							</>
						))}
					</div>
				</div>
			</div>
			{/* Mobile View */}
			<div className="lg:hidden block  overflow-hidden">
				<div className="grid gap-2 mx-2 grid-cols-2">
					{Products.map((product, idx) => (
						<div key={idx}>
							<Card product={product} />
						</div>
					))}
				</div>
			</div>
		</>
	);
}
