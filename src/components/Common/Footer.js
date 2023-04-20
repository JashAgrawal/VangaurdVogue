import React from "react";
import logo from "../../assests/char.png";
import Image from "next/image";
export default function Footer() {
	return (
		<div>
			<footer class="p-4 bg-white sm:p-6 dark:bg-black  ">
				<hr className="border-accent mx-72 mb-8"></hr>
				<div class="md:flex items-center md:justify-between">
					<div class="mb-6 md:mb-0">
						<a href="https://flowbite.com/" class="flex items-center">
							<Image
								src={logo}
								class="h-12 w-20 rounded-full mr-3"
								alt="FlowBite Logo"
							/>
							<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
								VANGAURD VOGUE
							</span>
						</a>
					</div>
					<div class="grid grid-cols-2 gap-20 sm:grid-cols-2">
						<div>
							<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
								Resources
							</h2>
							<ul class="text-gray-600 dark:text-gray-400">
								<li class="mb-4">
									<a href="https://flowbite.com/" class="hover:underline">
										VANGAURD VOGUE
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
								Follow us
							</h2>
							<ul class="text-gray-600 dark:text-gray-400">
								<li class="mb-4">
									<a
										href="https://github.com/themesberg/flowbite"
										class="hover:underline "
									>
										Instagram
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr class="my-6 border-gray-200 sm:mx-auto dark:border-accent lg:my-8" />
				<div class="sm:flex sm:items-center sm:justify-center">
					<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© 2023{" "}
						<a href="https://flowbite.com/" class="hover:underline">
							VangaurdVogue™
						</a>
						. All Rights Reserved.
					</span>
				</div>
			</footer>
		</div>
	);
}
