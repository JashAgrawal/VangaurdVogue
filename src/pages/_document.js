import { title } from "@/utils/constant";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta
          property="og:title"
          content="Vangaurd Vogue"
        />
        <meta property="og:url" content="https://vangaurd-vogue.vercel.app/" />
        <meta
          property="og:description"
          content="Vangaurd Vogue is an online store for high quality, trendy, and unique apparels. We offer a wide variety of clothing for men, women, and children, as well as accessories. Our products are made from high-quality materials and are designed to last. We also offer a variety of unique and trendy styles that you won't find anywhere else. Shop now and save!"
        />
        <meta property="og:site_name" content="Vangaurd Vogue" />
        <meta property="og:image" content="/img.jpg" />
        <meta name="application-name" content="Vangaurd Vogue" />
        <meta
          name="keywords"
          content="vangaurd vogue, ecommerce store, high quality apparels, trendy apparels, unique apparels, men's clothing, women's clothing, children's clothing, accessories, shop online, save"
        />
        <link rel="icon" type="image/x-icon" href="/char.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
