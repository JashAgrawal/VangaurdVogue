import Image from "next/image";
import React from "react";

export default function CategoryCard({ product }) {
	return (
		<div className="w-full mb-4 max-lg:shrink-0 relative shadow-lg overflow-hidden shadow-accent bg-white border border-gray-200 rounded-xl dark:bg-black dark:border-gray-700">
			<a href="/product">
				<div className="overflow-hidden">
					<Image
						className="hover:scale-[1.1] ease-in-out duration-200 rounded-t-xl"
						src={product.image}
						alt="product"
					/>
				</div>
			</a>
			<div className="flex absolute left-[40%] bottom-6 justify-center">
				<h1 className="lg:text-xl text-sm">{product.name}</h1>
			</div>
		</div>
	);
}
