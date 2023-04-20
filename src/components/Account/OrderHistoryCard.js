import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function OrderHistoryCard(props) {
	const {
		imageSrc,
		category,
		totalReviews,
		avgReview,
		name,
		orderDate,
		delivaryDate,
		orderId,
		price,
	} = props.product;
	return (
		<div class="flex flex-col justify-center my-2">
			<div class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto bg-gray-900">
				<div class="w-full md:w-1/3 grid place-items-center">
					<Image src={imageSrc} alt="tailwind logo" class="rounded-xl" />
				</div>
				<div class="w-full md:w-2/3 bg-gray-900 flex flex-col justify-evenly space-y-2 p-3">
					<div class="flex justify-between item-center">
						<p class="text-gray-400 font-medium hidden md:block">{category}</p>
						<div class="flex items-center">
							<AiFillStar className="text-accent" size={18} />
							<p class="text-white font-bold text-sm ml-1">
								{avgReview || 4.3}
								<span class="text-gray-500 ml-1 font-normal">
									({totalReviews || 10} reviews)
								</span>
							</p>
						</div>
					</div>
					<h3 class="font-black text-gray-200 md:text-3xl text-xl">{name}</h3>
					<p class="md:text-lg text-gray-500 border-b border-accent text-base">
						Ordered on :- <span className="text-gray-400">{orderDate}</span>
					</p>
					<p class="md:text-lg text-gray-500 border-b border-accent text-base">
						Deliverd on :- <span className="text-gray-400">{delivaryDate}</span>
					</p>
					<p class="md:text-lg text-gray-500 border-b border-accent text-base">
						Order Id :- <span className="text-gray-400">{orderId}</span>
					</p>
					<p class="text-xl font-black text-gray-200">$ {price}</p>
				</div>
			</div>
		</div>
	);
}
