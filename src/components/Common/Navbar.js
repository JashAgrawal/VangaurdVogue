import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cartModel";
import { CiLogin } from "react-icons/ci";
import { LeftNavbarTitles, logo } from "@/utils/constant";
const NavbarSearchBar = () => {
  return (
    <>
      <div className="w-full flex flex-row-reverse mr-3 py-2 text-sm border-b border-accent">
        <input
          type="text"
          placeholder="What are you looking for ?"
          className="w-full text-white  px-2 focus:outline-none bg-black"
        ></input>
        <button className="bg-black ">
          <BiSearchAlt className="text-gray-400" size={20} />
        </button>
      </div>
    </>
  );
};
export default function Navbar(props) {
  const { open, setOpen } = useCart();
  const isLogin = true;

  const RmenusAfterLogin = [
    {
      element: <NavbarSearchBar />,
    },
    {
      element: <FaUserAlt size={26} />,
      maproute: "/User/Profile",
    },
    {
      element: (
        <FaShoppingCart
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
          size={26}
        />
      ),
    },
  ];

  const RmenusBeforeLogin = [
    {
      element: <NavbarSearchBar />,
    },
    {
      element: (
        <div className="flex space-x-2 items-center border px-4 py-2 border-accent text-accent hover:bg-accent hover:text-black">
          <CiLogin size={20} strokeWidth={1.3} />
          <p className="font-bold">Login</p>
        </div>
      ),
      maproute: "/Auth/Login",
    },
  ];
  const Rmenus = isLogin ? RmenusAfterLogin : RmenusBeforeLogin;

  return (
    <div className="sticky max-md:hidden top-0 border-b-2 z-[100] border-t-2 border-accent">
      <nav className="flex  justify-between font-navbar font-medium text-white bg-black">
        <div className="flex ">
          <Link href={"/"}>
            <div>
              <Image alt="logo" src={logo} className="h-16 w-auto mt-1" />
            </div>
          </Link>

          <ul className="flex h-full items-center">
            {LeftNavbarTitles.map((item, idx) => (
              <Link key={idx} href={item.maproute || "/"}>
                <p className="relative mx-4 w-max one cursor-pointer">
                  <span className="text-lg">{item?.title}</span>
                  <span className="absolute -bottom-2 left-0 w-0 transition-all h-0.5 bg-accent"></span>
                </p>
                {/* <li className="mx-4 hover:underline-offset-8 hover:underline  duration-200 rounded-xl cursor-pointer">
										<p className="text-lg">{item?.title}</p>
									</li> */}
              </Link>
            ))}
          </ul>
        </div>

        <ul className="flex items-center mr-6">
          {Rmenus.map((item, idx) => (
            <Link key={idx} href={item.maproute || "/"}>
              <li className="mx-5 cursor-pointer">{item.element}</li>
            </Link>
          ))}
        </ul>
      </nav>
      <div className="md:hidden">
        <button
          data-collapse-toggle="mobile-menu-2"
          type="button"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
