import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross1 } from "react-icons/rx";
import ts from "../assests/ts.webp";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cartModel";
const products = [
	{
		id: 1,
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

export default function Cart(props) {
	const { open, setOpen } = useCart();
	// const [open, setOpen] = useState(false);

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter="ease-in-out duration-500"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in-out duration-500"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="pointer-events-auto w-screen max-w-md">
									<div className="flex h-full flex-col overflow-y-scroll bg-black shadow-xl">
										<div className="flex-1 overflow-y-auto  py-6 px-4 sm:px-6">
											<div className="flex items-start justify-between -mx-6 py-4 px-4">
												<Dialog.Title className="text-lg font-medium text-white">
													Shopping cart
												</Dialog.Title>
												<div className="ml-3 flex h-7 items-center">
													<button
														type="button"
														className="-m-2 p-2 text-gray-400 focus:outline-none hover:text-gray-500"
														onClick={() => setOpen(false)}
													>
														<span className="sr-only">Close panel</span>
														<RxCross1 className="h-6 w-6" aria-hidden="true" />
													</button>
												</div>
											</div>

											<div className="mt-8">
												<div className="flow-root">
													<ul className="-my-6 divide-y divide-accent">
														{products.map((product, idx) => (
															<li key={product.id} className="flex py-6">
																<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
																	<Image
																		src={product.imageSrc}
																		alt={product.imageAlt}
																		className="h-full w-full object-cover object-center"
																	/>
																</div>

																<div className="ml-4 flex flex-1 flex-col">
																	<div>
																		<div className="flex justify-between text-base font-medium text-white">
																			<h3>
																				<a href={product.href}>
																					{product.name}
																				</a>
																			</h3>
																			<p className="ml-4 text-lg">
																				{product.price}
																			</p>
																		</div>
																		<p className="mt-1 text-sm text-gray-500">
																			{product.color}
																		</p>
																	</div>
																	<div className="flex flex-1 items-end justify-between text-sm">
																		<p className="text-white">
																			Qty {product.quantity}
																		</p>

																		<div className="flex">
																			<button
																				type="button"
																				className="font-medium duration-200 ease-in-out text-accent hover:text-xl"
																			>
																				Remove
																			</button>
																		</div>
																	</div>
																</div>
															</li>
														))}
													</ul>
												</div>
											</div>
										</div>

										<div className="border-t border-gray-200 py-6 px-4 sm:px-6">
											<div className="flex justify-between text-base font-medium text-white">
												<p>Subtotal</p>
												<p>$262.00</p>
											</div>
											<p className="mt-0.5 text-sm text-gray-500">
												Shipping and taxes calculated at checkout.
											</p>
											<div className="mt-6">
												<Link
													href="#"
													className="flex items-center justify-center rounded-md border-2 border-black   bg-accent px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-black hover:border-accent"
												>
													Checkout
												</Link>
											</div>
											<p className="w-full mt-2 text-center text-gray-500">
												or
											</p>
											<div className="mt-2 flex justify-center text-center text-sm text-gray-500">
												<button
													type="button"
													className="text-accent font-bold"
													onClick={() => setOpen(false)}
												>
													Continue Shopping
													<span aria-hidden="true"> &rarr;</span>
												</button>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
