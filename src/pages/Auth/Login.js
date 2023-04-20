import React from "react";
import logo from "../../assests/char.png";
import { FcGoogle } from "react-icons/fc";
import bgBlack from "../../assests/bg-black.webp";
import Image from "next/image";
import Link from "next/link";
function Login() {
	return (
		<div>
			<body>
				<section class="min-h-screen flex items-stretch text-white ">
					<div
						class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
						style={{
							backgroundImage: `url(${bgBlack})`,
						}}
					>
						<div class="absolute bg-black opacity-40 inset-0 z-0"></div>
						<div class="w-full font-extrabold px-24 z-10">
							<h1 class="text-5xl ">Keep it Real</h1>
							<p class="text-4xl my-4">Keep it Special</p>
							<p class="text-4xl my-4">Keep it You</p>
							<p class="text-3xl my-4">You do you</p>
							<p class="text-3xl my-4">Fuk wrld</p>
						</div>
					</div>
					<div
						class="lg:w-1/2 w-full flex justify-center text-center md:px-16 px-0 z-0"
						style={{ backgroundColor: "black" }}
					>
						<div
							class="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
							style={{
								backgroundImage: "url(../assests/bg-black.jpeg)",
							}}
						>
							<div class="absolute bg-black opacity-60 inset-0 z-0"></div>
						</div>
						<div class="w-full  py-1 z-20">
							<h1 class="my-3">
								<div className="flex justify-start items-center">
									<Image src={logo} className="h-36 " alt="logo"></Image>
									<div
										id="heading"
										className="flex -ml-8 text-3xl font-extrabold items-start"
									>
										<h1 className="text-6xl mr-2">Vangaurd</h1>
										<h3 className="text-6xl text-accent">Vogue</h3>
									</div>
								</div>
							</h1>
							<div class="border border-y-0 border-x-accent py-3 space-x-2">
								<span class=" px-10 text-xl cursor-pointer h-12 items-center justify-center inline-flex rounded-full  border-2 border-white">
									<FcGoogle className="mr-4" size={24} />
									Sign In with Google
								</span>
							</div>
							<p class="text-gray-100 text-base">or </p>
							<form class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
								<div class="pb-2 pt-4">
									<input
										type="email"
										name="email"
										id="email"
										placeholder="Email"
										class="block w-full p-4 text-lg rounded-sm border focus:outline-none border-accent bg-black"
									/>
								</div>
								<div class="pb-2 pt-4">
									<input
										class="block w-full p-4 text-lg rounded-sm border focus:outline-none border-accent bg-black"
										type="password"
										name="password"
										id="password"
										placeholder="Password"
									/>
								</div>
								<div class="text-right text-gray-400 hover:underline hover:text-gray-100">
									<p>Forgot your password?</p>
								</div>
								<div class="px-4 pb-2 pt-4">
									<button class="uppercase block w-full p-4 font-extrabold text-black text-2xl rounded-full border-2 border-black bg-accent hover:bg-black hover:border-accent hover:text-white focus:outline-none">
										sign in
									</button>
								</div>
							</form>
							<p>_________</p>
							<Link href="/signup">
								<p className="hover:underline my-2 text-xl text-white">
									Create New Account
								</p>
							</Link>
						</div>
					</div>
				</section>
			</body>
		</div>
	);
}

export default Login;
