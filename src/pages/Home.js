import Banner from "../components/Home/Banner";
import MessageBanner from "../components/Home/MessageBanner";
import ProductsSection from "../components/Products/ProductsSection";
import Review from "../components/Home/ReviewSection";
export default function Home() {
  return (
    <>
      <Banner />
      <ProductsSection
        primaryHeading="Shop by Anime"
        secondaryHeading="Top Collection"
      />
      <MessageBanner />
      <ProductsSection
        isCategory={true}
        primaryHeading="Shop by Category"
        secondaryHeading=""
      />
      <ProductsSection
        primaryHeading="Shop by Anime"
        secondaryHeading="Top Collection"
      />
      <Review />
    </>
  );
}
