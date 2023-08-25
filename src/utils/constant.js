import logoImg from "@/assests/logo.png";
import ts from "@/assests/ts.webp";
// import ts from "@/assests/iykyk/weed.jpeg"
import l1 from "@/assests/l1.png";
import l2 from "@/assests/l2.png";
import l3 from "@/assests/l3.png";
import bg from "@/assests/goku-super.gif";
import snop from '@/assests/iykyk/snop.gif'
import { hexToRgb } from "./helper";
import smoke from "@/assests/iykyk/smokebg.jpg";
import secondaryLogoImg from "@/assests/char.png";
import bb from "@/assests/d.jpeg";
import LogoWb from '@/assests/iykyk/logo.jpg'
import banner from "@/assests/img.png"
import banner2 from "@/assests/imgg.jpeg"
import banner3 from "@/assests/imggg.jpeg"
import banner4 from "@/assests/imd3.jpg"
//*******Constants*******//

export const logo = logoImg;
export const shortLogo = secondaryLogoImg;
export const title = "Vangaurd Vogue";
export const titleLink = "#";
export const accent = "#b91c1c";
export const messageBannerBackgroundImage = bb;
export const Orderdproducts = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "90.00",
    category: "Tshirts",
    categoryid: 1,
    quantity: 1,
    avgReview: 4.3,
    totalReviews: 96,
    orderDate: "19/02/2002",
    delivaryDate: "19/03/2002",
    orderId: "13421254",
    imageSrc: ts,
    imageAlt: "Throwback Hip Bag",
  },
  {
    id: 2,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "90.00",
    category: "Tshirts",
    categoryid: 1,
    quantity: 1,
    avgReview: 4.3,
    totalReviews: 96,
    orderDate: "19/02/2002",
    delivaryDate: "19/03/2002",
    orderId: "13421254",
    imageSrc: ts,
    imageAlt: "Throwback Hip Bag",
  },
  {
    id: 3,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "90.00",
    category: "Tshirts",
    categoryid: 1,
    quantity: 1,
    avgReview: 4.3,
    totalReviews: 96,
    orderDate: "19/02/2002",
    delivaryDate: "19/03/2002",
    orderId: "13421254",
    imageSrc: ts,
    imageAlt: "Throwback Hip Bag",
  },
];
export const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "90.00",
    quantity: 1,
    imageSrc: ts,
    imageAlt: "Throwback Hip Bag",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "32.00",
    quantity: 1,
    imageSrc: ts,
    imageAlt: "Medium Stuff Satchel",
  },
  {
    id: 3,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "90.00",
    quantity: 1,
    imageSrc: ts,
    imageAlt: "Throwback Hip Bag",
  },
  {
    id: 4,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "32.00",
    quantity: 1,
    imageSrc: ts,
    imageAlt: "Medium Stuff Satchel",
  },
];
export const categories = [
  {
    image: l1,
    name: "ONE PEICE",
  },
  {
    image: l2,
    name: "BLACK CLOVER",
  },
  {
    image: l3,
    name: "NARUTO",
  },
];
export const reviews = [
  {
    name: "jash Agrawal",
    message: "best product ever",
    date: Date.now(),
    review: 5.0,
  },
  {
    name: "jash Agrawal",
    message: "best product ever",
    date: Date.now(),
    review: 5.0,
  },
];
export const LeftNavbarTitles = [
  {
    title: "Tshirts / Shirts",
    maproute: "/Product/Products",
  },
  { title: "Hoodies", maproute: "/Product/Products" },
  { title: "Bottoms", maproute: "/Product/Products" },
  { title: "Categories", maproute: "/Categories/Category" },
];

export const bannerImages = [banner, banner2, banner3,banner4];
export const shopNowBannerPosition = "start";
export const rgbOfAccent = hexToRgb(accent);
export const ProductsSectionBackgroundImage = smoke;
// export const accent = "#499b4a";
