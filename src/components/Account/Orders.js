import React from "react";
import ts from "../../assests/ts.webp";
import Image from "next/image";
import OrderHistoryCard from "./OrderHistoryCard";
export default function OrdersHistory() {
	const products = [
		{
			id: 1,
			name: "Throwback Hip Bag",
			href: "#",
			color: "Salmon",
			price: "90.00",
			category: "Tshirts",
			quantity: 1,
			avgReview: 4.3,
			totalReviews: 96,
			orderDate: "19/02/2002",
			delivaryDate: "19/03/2002",
			orderId: "13421254",
			imageSrc: ts,
			imageAlt:
				"Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
		},
		{
			id: 2,
			name: "Medium Stuff Satchel",
			href: "#",
			color: "Blue",
			price: "$32.00",
			quantity: 1,
			imageSrc: ts,
			imageAlt:
				"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
		},
		{
			id: 3,
			name: "Throwback Hip Bag",
			href: "#",
			color: "Salmon",
			price: "$90.00",
			quantity: 1,
			imageSrc: ts,
			imageAlt:
				"Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
		},
		{
			id: 4,
			name: "Medium Stuff Satchel",
			href: "#",
			color: "Blue",
			price: "$32.00",
			quantity: 1,
			imageSrc: ts,
			imageAlt:
				"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
		},
		{
			id: 2,
			name: "Medium Stuff Satchel",
			href: "#",
			color: "Blue",
			price: "$32.00",
			quantity: 1,
			imageSrc: ts,
			imageAlt:
				"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
		},
		{
			id: 3,
			name: "Throwback Hip Bag",
			href: "#",
			color: "Salmon",
			price: "$90.00",
			quantity: 1,
			imageSrc: ts,
			imageAlt:
				"Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
		},
		{
			id: 4,
			name: "Medium Stuff Satchel",
			href: "#",
			color: "Blue",
			price: "$32.00",
			quantity: 1,
			imageSrc: ts,
			imageAlt:
				"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
		},
		// More products...
	];
	return (
		<div className="max-h-[70vh] overflow-auto">
			<ol className="">
				{products.map((product, idx) => (
					<OrderHistoryCard key={idx} product={product} />
				))}
			</ol>
		</div>
	);
}
