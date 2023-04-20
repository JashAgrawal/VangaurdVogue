import React from "react";
import bb from "../../assests/d.jpeg";
export default function MessageBanner(props) {
	const banner = bb;
	return (
		<div
			className="flex max-w-screen-xl h-4/5 text-accent font-bold my-4 w-full items-center justify-center"
			style={{
				backgroundColor: "black",
				backgroundImage: `url(${banner})`,
				backgroundSize: "contain",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
			}}
		>
			<div className="flex flex-col w-full h-96 p-2 my-20 justify-center items-center">
				<h3 className="bg-black p-4 text-xl">ONGOING OFFER</h3>
				<div className="m-4 text-1xl mb-8 flex flex-col justify-center items-center">
					<h1 className="bg-accent my-8 text-center text-4xl p-1 text-black">
						FREE ITACHI & TANJIRO ACCESSORIES
					</h1>
					<h3 className="bg-white my-2 text-black">
						Use code {'"'}ITACHIXKIAYA{'"'} to get a Free Itachi Ring on order
						value of Rs. 1999.
					</h3>
					<h3 className="bg-black text-white">
						Use code {'"'}TANJIROXKIAYA{'"'} to get Free Tanjiro Earrings on
						order value of Rs. 2199.
					</h3>
				</div>
				<button class=" bg-black hover:bg-accent text-white text-5xl font-bold-500 py-4 px-4 border-4 border-accent hover:text-black rounded">
					Shop Now
				</button>
			</div>
		</div>
	);
}
