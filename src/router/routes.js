import { Outlet } from "react-router-dom";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";
import SecondaryNavbar from "../components/Common/secondaryNavbar";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import ProductDescription from "../pages/Product/ProductDescription";
import Products from "../pages/Product/Products";
import Signup from "../pages/Auth/SignUp";
import Review from "../pages/Reviews/Review";
import Cart from "../components/CartModal";
import { useState } from "react";
import Profile from "../pages/User/Profile";

export const routes = [
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product",
        element: <ProductDescription />,
      },
      {
        path: "/reviews",
        element: <Review />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
];

function Wrapper() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex bg-black text-white font-navbar flex-col justify-start">
      <SecondaryNavbar />
      <Navbar open={open} setOpen={setOpen} />
      <Cart open={open} setOpen={setOpen} />
      <Outlet />
      <Footer />
    </div>
  );
}
