import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import SecondaryNavbar from "@/components/Common/secondaryNavbar";
import { CartModalProvider } from "@/context/cartModel";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex noScroll bg-black text-white font-navbar flex-col justify-start">
      <CartModalProvider>
        <SecondaryNavbar />
        <Navbar />
        <Component {...pageProps} />
      </CartModalProvider>
      <Footer />
    </div>
  );
}
