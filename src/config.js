import { ROUTER } from "./router/router";
import { FaLocationDot } from "react-icons/fa6";
import { CiHeart, CiUser, CiShop } from "react-icons/ci";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

import product1 from "./assets/images/product 1.png";
import product2 from "./assets/images/product 2.png";
import product3 from "./assets/images/product 3.png";
import product4 from "./assets/images/product 4.png";
import product5 from "./assets/images/product 5.png";

export const navConfig = [
  { id: 1, title: <FaLocationDot />, link: "/" },
  { id: 2, title: "JEWELRY", link: ROUTER.HOME_PAGE_ROUTE },
  { id: 3, title: "NEW RELEASES", link: ROUTER.HOME_PAGE_ROUTE },
  { id: 4, title: "GIFTS", link: ROUTER.HOME_PAGE_ROUTE },
];

export const userConfig = [
  { id: 1, title: <CiHeart />, link: ROUTER.HOME_PAGE_ROUTE },
  { id: 2, title: <CiShop />, link: ROUTER.HOME_PAGE_ROUTE },
  { id: 3, title: <CiUser />, link: ROUTER.HOME_PAGE_ROUTE },
];

export const productConfig = [
  {
    id: 1,
    image: product1,
    text: "Necklaces",
    link: "/",
  },
  {
    id: 2,
    image: product2,
    text: "Errings",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 3,
    image: product3,
    text: "Bracelets",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 4,
    image: product4,
    text: "Rings",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 4,
    image: product5,
    text: "Charms",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
];

export const goldDataConfig = [
  {
    id: 1,
    title: "ARTICLE",
    date: "OCTEMBER 2022",
  },
];

export const servicesConfig = [
  {
    id: 1,
    title: "CUSTOMER SERVICES",
  },
  {
    id: 2,
    text: "Contact Us",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 3,
    text: "Track your Order",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 4,
    text: "Shipping & Returns",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 5,
    text: "Frequnetly Asked Questions",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 6,
    text: "Schedule an appointment",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
];

export const aboutConfig = [
  {
    id: 1,
    title: "ABOUT US",
  },
  {
    id: 2,
    text: "Origins",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 3,
    text: "Our Purpose",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 4,
    text: "Careers",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 5,
    text: "Sustainability",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 6,
    text: "Giving Back",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
];

export const materialConfig = [
  {
    id: 1,
    title: "MATERIAL CARE",
  },
  {
    id: 2,
    text: "Jewelry Repair",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 3,
    text: "Ring Sizing",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 4,
    text: "Metal Allergy Resources",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 5,
    text: "Styling Tips",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
];

export const locationsConfig = [
  {
    id: 1,
    title: "MAIN LOCATIONS",
  },
  {
    id: 2,
    text: "Chicago, IL",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 3,
    text: "San Francisco, CA",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 4,
    text: "New York, NY",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 5,
    text: "Seattle, WA",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
];

export const socIconsConfig = [
  {
    id: 1,
    icon: <FaInstagram />,
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 2,
    icon: <FaTwitter />,
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 3,
    icon: <FaFacebook />,
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 4,
    icon: <FaYoutube />,
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 5,
    icon: <FaLinkedin />,
    link: ROUTER.HOME_PAGE_ROUTE,
  },
];

export const footerBottomConfig = [
  {
    id: 1,
    text: "PRIVACY POLICY",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 2,
    text: "TERMS OF USE ",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 3,
    text: "SITEMAP",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 4,
    text: "DO NOT SELL MY INFORMATION",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 5,
    text: "COOKIES",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
];
