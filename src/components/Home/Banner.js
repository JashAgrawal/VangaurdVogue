import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import bg from "../../assests/d.jpeg";
import Link from "next/link";
export default function Banner(props) {
	const Images = [bg, bg, bg];
	const [onBanner, setOnBanner] = useState(0);
	// console.log(props);
	// return (
	// 	<div
	// 		style={{
	// 			backgroundColor: "black",
	// 			backgroundImage: `url(${Images[onBanner]})`,
	// 			backgroundSize: "contain",
	// 			backgroundRepeat: "no-repeat",
	// 			backgroundPosition: "center",
	// 		}}
	// 		className="flex border-black h-full w-full flex-col items-center justify-center"
	// 	>
	// 		<div className="flex w-full justify-between">
	// 			<div
	// 				onClick={() => {
	// 					setOnBanner(
	// 						onBanner !== 0
	// 							? (onBanner - 1) % Images.length
	// 							: Images.length - 1
	// 					);
	// 				}}
	// 				style={{ height: "35rem" }}
	// 				className="w-96"
	// 			></div>
	// 			<div className="flex justify-center overflow-hidden items-center max-h-96 w-96">
	// 				<h3 className="text-5xl">{props.message}</h3>
	// 			</div>
	// 			<div
	// 				onClick={() => setOnBanner((onBanner + 1) % Images.length)}
	// 				style={{ height: "35rem" }}
	// 				className="w-96"
	// 			></div>
	// 		</div>
	// 	</div>
	// );
	return (
		<>
			<Carousel
				autoPlay={true}
				className="relative"
				showIndicators={false}
				showStatus={false}
				showThumbs={false}
			>
				{Images.map((image, idx) => (
					<div className="relative w-full h-full" key={idx}>
						<Image alt="ad" className="lg:h-[80vh] object-cover" src={image} />
						<div className="absolute drop-shadow-2xl shadow-white font-extrabold text-accent flex flex-col text-left justify-center px-20 items-start top-0 left-0 w-full h-full text-4xl lg:text-9xl">
							<p>
								VANGAURD <br />
								VOGUE
							</p>
							<button className="border border-gray-400 bg-black text-xl mt-6 lg:mt-16 py-2 px-6">
								Shop Now
							</button>
						</div>
					</div>
				))}
			</Carousel>
		</>
	);
}
