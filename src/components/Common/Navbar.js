import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cartModel";
import { CiLogin, CiMenuBurger } from "react-icons/ci";
import { LeftNavbarTitles, logo } from "@/utils/constant";
import { MdCancel } from "react-icons/md";
const NavbarSearchBar = () => {
  return (
    <>
      <div className="w-full max-md:mb-4 max-md:p-4 flex flex-row-reverse mr-3 py-2 text-sm border-b border-accent">
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
  const [scrollingDown, setScrollingDown] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        // Scrolling down
        setScrollingDown(true);
      } else {
        // Scrolling up
        setScrollingDown(false);
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const RmenusAfterLogin = [
    {
      element: <NavbarSearchBar />,
      title: "Search",
    },
    {
      element: <FaUserAlt size={26} />,
      maproute: "/User/Profile",
      title: "Profile",
    },
    {
      element: (
        <FaShoppingCart
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
          size={26}
        />
      ),
      title: "Cart",
    },
  ];

  const RmenusBeforeLogin = [
    {
      element: <NavbarSearchBar />,
      title: "Search",
    },
    {
      element: (
        <div className="flex space-x-2 items-center border px-4 py-2 border-accent text-accent hover:bg-accent hover:text-black">
          <CiLogin size={20} strokeWidth={1.3} />
          <p className="font-bold">Login</p>
        </div>
      ),
      maproute: "/Auth/Login",
      title: "Login",
    },
  ];
  const Rmenus = isLogin ? RmenusAfterLogin : RmenusBeforeLogin;

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full border-b-2 z-[100] border-t-2 border-accent ease-in-out ${
          scrollingDown ? "translate-y-[-100%]" : "translate-y-0"
        }`}
        // style={{
        //   transform: scrollingDown ? "translateY(-100%)" : "translateY(0)",
        // }}
      >
        <nav className="flex max-md:hidden justify-between font-navbar font-medium text-white bg-black">
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
        <div className="md:hidden w-full h-12 flex justify-between items-center px-4 bg-black">
          <CiMenuBurger
            size={30}
            color="#d1d5db"
            onClick={() => setIsMenuVisible(true)}
          />
          <Link href={"/"}>
            <div>
              <Image
                alt="logo"
                src={logo}
                className="w-auto object-cover h-11 mt-1"
              />
            </div>
          </Link>
          <FaShoppingCart
            className="cursor-pointer"
            color="#d1d5db"
            onClick={() => setOpen(!open)}
            size={26}
          />
        </div>
      </div>
      <div
        className="navbar-menu relative z-[150] "
        style={{ display: isMenuVisible ? "" : "none" }}
      >
        <div
          onClick={() => setIsMenuVisible(false)}
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
        ></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-black border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link className="mr-auto text-3xl font-bold leading-none" href="/">
              <Image
                alt="logo"
                src={logo}
                className="w-auto object-cover h-11 mt-1"
              />
            </Link>
            <button
              className="navbar-close"
              onClick={() => setIsMenuVisible(false)}
            >
              {/* <IconX size={24} /> */}
              <MdCancel size={24} color="#4b5563" />
            </button>
          </div>
          <div className="flex flex-col h-full  justify-between">
            <ul>
              {Rmenus[0].element}
              {LeftNavbarTitles.map((item) => (
                <li
                  className="mb-1"
                  key={`Hnavigation-${item.title}`}
                  onClick={() => setIsMenuVisible(!isMenuVisible)}
                >
                  <Link
                    className="block p-4 text-sm font-semibold text-gray-500 hover:bg-indigo-50 hover:text-secondaryColor rounded"
                    href={item.maproute}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              {Rmenus.slice(1, Rmenus.length).map((item, idx) => (
                <Link
                  key={idx}
                  href={item.maproute || "/"}
                  className=" p-4 text-sm font-semibold text-gray-500 hover:bg-indigo-50 hover:text-secondaryColor rounded flex flex-row justify-start items-center"
                >
                  <li className="mx-5 cursor-pointer">{item.element}</li>
                  {isLogin && <p>{item.title}</p>}
                </Link>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
