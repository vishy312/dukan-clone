import { IconType } from "react-icons";
import { AiFillThunderbolt, AiOutlineThunderbolt } from "react-icons/ai";
import { BsCursor, BsCursorFill, BsFillGridFill, BsGrid } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { FaTruck } from "react-icons/fa";
import { FiTruck, FiUsers } from "react-icons/fi";
import { GoHome, GoHomeFill } from "react-icons/go";
import { HiChartBar, HiOutlineChartBar } from "react-icons/hi";
import { MdOutlinePayments, MdPayments, MdPeopleAlt } from "react-icons/md";
import {
  PiClipboardFill,
  PiClipboardText,
  PiSpeakerHigh,
  PiSpeakerHighFill,
} from "react-icons/pi";
import { RiDiscountPercentFill } from "react-icons/ri";

type SubItem = {
  title: string;
  endpoint: string;
};

export type NavItem = {
  title: string;
  icon: IconType;
  activeIcon: IconType;
  subItems: SubItem[];
  endpoint: string;
};

export const navItems: NavItem[] = [
  {
    title: "Home",
    icon: GoHome,
    activeIcon: GoHomeFill,
    subItems: [],
    endpoint: "/",
  },
  {
    title: "Orders",
    icon: PiClipboardText,
    activeIcon: PiClipboardFill,
    endpoint: "/orders",
    subItems: [
      {
        title: "All orders",
        endpoint: "/orders/all-orders",
      },
      {
        title: "Abandoned carts",
        endpoint: "/orders/all-abandoned-orders",
      },
    ],
  },
  {
    title: "Delivery",
    icon: FiTruck,
    activeIcon: FaTruck,
    subItems: [],
    endpoint: "/delivery",
  },
  {
    title: "Products",
    icon: BsGrid,
    activeIcon: BsFillGridFill,
    endpoint: "/products",
    subItems: [
      {
        title: "All Products",
        endpoint: "/products/all-products",
      },
      {
        title: "Category",
        endpoint: "/products/category",
      },
      {
        title: "Inventory",
        endpoint: "/products/inventory",
      },
    ],
  },
  {
    title: "Marketing",
    icon: PiSpeakerHigh,
    activeIcon: PiSpeakerHighFill,
    subItems: [],
    endpoint: "/marketing",
  },
  {
    title: "Analytics",
    icon: HiOutlineChartBar,
    activeIcon: HiChartBar,
    endpoint: "/analytics",
    subItems: [
      {
        title: "Sales",
        endpoint: "/analytics/sales",
      },
      {
        title: "Traffic",
        endpoint: "/analytics/traffic",
      },
      {
        title: "Products",
        endpoint: "/analytics/products",
      },
    ],
  },
  {
    title: "Payouts",
    icon: MdOutlinePayments,
    activeIcon: MdPayments,
    subItems: [],
    endpoint: "/payouts",
  },
  {
    title: "Tools",
    icon: BsCursor,
    activeIcon: BsCursorFill,
    subItems: [],
    endpoint: "/tools",
  },
  {
    title: "Discounts",
    icon: CiDiscount1,
    activeIcon: RiDiscountPercentFill,
    subItems: [],
    endpoint: "/discounts",
  },
  {
    title: "Audience",
    icon: FiUsers,
    activeIcon: MdPeopleAlt,
    subItems: [],
    endpoint: "/audience",
  },
  // {
  //   title: "Appearance",
  //   icon: BsPalette,
  //   activeIcon: BsFillPaletteFill,
  //   subItems: ["Themes", "Pages", "Menus", "Blog"],
  //   endpoint: "/appe"
  // },
  {
    title: "Plugins",
    icon: AiOutlineThunderbolt,
    activeIcon: AiFillThunderbolt,
    subItems: [],
    endpoint: "/plugins",
  },
];
