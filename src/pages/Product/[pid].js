import React from "react";
import { AiOutlineStar, AiFillStar, AiOutlineDown } from "react-icons/ai";
import ProductsSection from "../../components/Products/ProductsSection";
import ReviewMessage from "../../components/ProductDescription/ReviewMessage";
import Image from "next/image";
import ts from "../../assests/ts.webp";
import WriteReview from "@/components/ProductDescription/WriteReview";
export default function ProductDescription(props) {
	const reviews = [
		{
			name: "jash Agrawal",
			message: "best product ever",
			date: Date.now(),
			review: 5.0,
		},
		{
			name: "jash Agrawal",
			message: "best product ever",
			date: Date.now(),
			review: 5.0,
		},
	];
	return (
		<div>
			<section class="body-font overflow-hidden text-white bg-black">
				<div class="container px-5 py-8 mx-auto">
					<div class="lg:w-full  mx-auto flex flex-wrap">
						<Image
							alt="ecommerce"
							class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
							src={ts}
						/>
						<div class="lg:w-1/2 w-full lg:pl-10 mt-4 lg:mt-0">
							<h2 class="text-base title-font text-gray-500 tracking-widest">
								{props.brandName || "Anime/Brand NAME"}
							</h2>
							<h1 class="text-white text-4xl title-font font-medium mb-1">
								{props.name || "The Catcher in the Rye"}
							</h1>
							<div class="flex mb-4">
								<span class="flex items-center">
									{Array(5).map((rev) => {
										rev <= 4 ? (
											<AiFillStar fill="#b91c1c" />
										) : (
											<AiOutlineStar color="#b91c1c" />
										);
									})}

									<span class="text-gray-600 ml-3 mr-8">
										{props.ReviewNo} Reviews
									</span>
								</span>
								<span class="flex ml-3 pl-8 py-2 border-l-2 border-gray-200">
									<button className="border-2 px-4 py-2 text-sm rounded-full border-gray-700">
										Copy link
									</button>
								</span>
							</div>
							<p class="leading-relaxed text-lg my-8 text-gray-400   ">
								Fam locavore kickstarter distillery. Mixtape chillwave tumeric
								sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
								juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
								seitan poutine tumeric. Gastropub blue bottle austin listicle
								pour-over, neutra jean shorts keytar banjo tattooed umami
								cardigan.
							</p>
							<div class="flex mt-6 items-center justify-between pb-5 border-b-2 border-gray-200 mb-5">
								<div class="flex [&>button]:mx-1">
									<span class="mr-3">Color</span>
									<button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
									<button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
									<button class="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
								</div>
								<div class="flex ml-6 items-center">
									<span class="mr-3">Size</span>
									<div class="relative">
										<select class="rounded border-2 text-black appearance-none border-accent py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
											<option>SM</option>
											<option>M</option>
											<option>L</option>
											<option>XL</option>
										</select>
										<span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
											<AiOutlineDown />
										</span>
									</div>
								</div>
								<div></div>
							</div>
							<div class="flex flex-col justify-center">
								<span class="title-font font-medium text-5xl">$58.00</span>
								<button class="flex mt-4 my-2 h-16 w-full px-64 py-4 text-xl ease-in-out duration-200 text-white bg-accent focus:outline-none hover:bg-black hover:border-2 rounded">
									Buy Now
								</button>

								<button class="flex mt-4 my-2 h-16 w-full px-60 py-4 text-xl ease-in-out duration-200 text-white  bg-accent focus:outline-none hover:bg-black hover:border-2 rounded">
									Add to cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className={`flex my-4 p-4 w-full flex-col items-center`}>
				<h1 className="text-6xl p-4 rounded text-center bg-accent font-extrabold text-black m-2">
					Reviews
				</h1>
			</div>
			<div className="flex flex-col w-full">
				<WriteReview />
			</div>
			<div className="flex flex-col w-full">
				{reviews.map((rev, idx) => (
					<ReviewMessage key={idx} {...rev}></ReviewMessage>
				))}
			</div>
			<ProductsSection primaryHeading="More like this" secondaryHeading="" />
		</div>
	);
}
