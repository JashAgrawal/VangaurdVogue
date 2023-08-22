import Image from "next/image";
import React from "react";
import l3 from "../../assests/l3.png";
export default function Review() {
	return (
		<div>
			<hr className="border-accent mx-60 mb-8"></hr>
			<h3 className="text-lg lg:text:xl text-center mb-4 m-2">
				LET{"'"}S HEAR FROM OUR
			</h3>
			<h1 className="text-2xl lg:text-6xl py-4 w-full text-center bg-accent font-extrabold text-black my-2">
				HAPPY CUSTOMERS
			</h1>

			<figure className="max-w-screen-md mx-auto text-center">
				<svg
					aria-hidden="true"
					className="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
					viewBox="0 0 24 27"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
						fill="currentColor"
					/>
				</svg>
				<blockquote>
					<p className="lg:text-2xl italic font-medium text-gray-900 dark:text-white">
						{'"'}VangaurdVogue™ is just awesome. It contains tons of awesome
						designed clothes and Hoodies starting from Rs 400 to Rs 2000.
						Perfect choice for your next anime buy.{'"'}
					</p>
				</blockquote>
				<figcaption className="flex items-center justify-center mt-6 space-x-3">
					<Image alt="profile" className="w-6 h-6 rounded-full" src={l3} />
					<div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
						<cite className="pr-3 font-medium text-gray-900 dark:text-white">
							Jash Agrawal
						</cite>
						<cite className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
							CEO at VangaurdVogue™
						</cite>
					</div>
				</figcaption>
			</figure>
		</div>
	);
}
