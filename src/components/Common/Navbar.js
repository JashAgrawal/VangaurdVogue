import React from "react";
import logo from "../../assests/logo.png";
import { BiSearchAlt } from "react-icons/bi";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const Lmenus = [
    {
      title: "Tshirts / Shirts",
      maproute: "/products",
    },
    { title: "Hoodies" },
    { title: "Bottoms" },
    { title: "Reviews" },
  ];
  const Rmenus = [
    {
      maproute: "/",
      element: (
        <>
          <div className="flex mr-3 border-2 border-accent rounded-full">
            <input
              type="text"
              className="rounded-l-full py-1 px-2 focus:outline-none"
            ></input>
            <button className="bg-white rounded-r-full py-1 px-2">
              <BiSearchAlt style={{ color: "black" }} size={26} />
            </button>
          </div>
        </>
      ),
    },
    {
      element: <FaUserAlt size={26} />,
      maproute: "/profile",
    },
    {
      element: <FaShoppingCart onClick={() => setOpen(true)} size={26} />,
    },
  ];
  const { open, setOpen } = props;
  return (
    <div className="sticky top-0 border-b-2 z-10 border-t-2 border-accent">
      <nav className="flex  justify-between font-navbar font-medium text-white bg-black">
        <div className="flex ">
          <Link to="/">
            <div>
              <img alt="logo" src={logo} className="h-20 mt-1 w-64" />
            </div>
          </Link>
          <div className="py-6">
            <ul className="flex">
              {Lmenus.map((item) => (
                <Link to={item.maproute || "/"}>
                  <li className="mx-4 hover:underline-offset-8 hover:underline  duration-200 rounded-xl cursor-pointer">
                    <p className="text-lg">{item?.title}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-6 mr-6">
          <ul className="flex">
            {Rmenus.map((item) => (
              <Link to={item.maproute && item.maproute}>
                <li className="mx-5 hover:scale-150 duration-200 cursor-pointer">
                  {item.element}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
