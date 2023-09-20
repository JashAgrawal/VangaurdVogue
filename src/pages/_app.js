import "@/styles/globals.css";
import Cart from "@/components/Cart/CartModal";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import SecondaryNavbar from "@/components/Common/secondaryNavbar";
import { CartModalProvider } from "@/context/cartModel";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex noScroll bg-white text-black font-navbar flex-col justify-start">
      <CartModalProvider>
        {/* <SecondaryNavbar /> */}
        <Navbar />
        <Cart />
        <div className="">
          <Component {...pageProps} />
        </div>
      </CartModalProvider>
      <Footer />
    </div>
  );
}
