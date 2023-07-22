import Banner from "@/components/Home/Banner";
import ProductsSection from "@/components/Products/ProductsSection";
import MessageBanner from "@/components/Home/MessageBanner";
import Review from "@/components/Home/ReviewSection";

export default function Home() {
  return (
    <>
      <Banner />
      <ProductsSection
        primaryHeading="Shop by Weed"
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
