import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiCartAdd } from "react-icons/bi";

export default function Card({ product }) {
	return (
		<Link href={"/Product/123"}>
			<div
				className={`lg:w-full mb-4 shrink-0 overflow-hidden max-lg:w-36 flex flex-col justify-center items-center relative my-1 max-w-xs shadow-lg border-accent shadow-accent rounded-md bg-black`}
			>
				<div className="overflow-hidden w-full mb-4">
					<Image
						className="ease-in-out w-full lg:hover:scale-[1.15] mt-4 duration-300 rounded-t-lg"
						src={product.image}
						width="100"
						alt="product"
					/>
				</div>

				<div className=" px-4 pb-4">
					<h5 className="lg:text-lg text-xs  font-semibold tracking-tight text-gray-900 dark:text-white">
						{("" + product.name).slice(0, 40)}
						{("" + product.name).length > 40 && "..."}
					</h5>

					<div className="flex items-center mt-2 justify-between">
						<span className="lg:text-3xl text-md font-bold text-gray-900 dark:text-white">
							₹ {"  " + product.price}
						</span>
						<div className="text-white bg-accent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-md lg:px-5 lg:py-2.5 px-2 py-0.5 text-center border-2 border- dark:bg-black dark:hover:bg-accent dark:focus:ring-blue-800">
							<BiCartAdd />
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
