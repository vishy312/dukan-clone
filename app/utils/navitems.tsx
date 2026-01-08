import { IconType } from "react-icons";
import { AiFillThunderbolt, AiOutlineThunderbolt } from "react-icons/ai";
import {
  BsCursor,
  BsCursorFill,
  BsFillGridFill,
  BsFillPaletteFill,
  BsGrid,
  BsPalette,
} from "react-icons/bs";
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

export type NavItem = {
  title: string;
  icon: IconType;
  activeIcon: IconType;
  subItems: string[];
};

export const navItems: NavItem[] = [
  {
    title: "Home",
    icon: GoHome,
    activeIcon: GoHomeFill,
    subItems: [],
  },
  {
    title: "Orders",
    icon: PiClipboardText,
    activeIcon: PiClipboardFill,
    subItems: ["All orders", "Abandoned carts"],
  },
  {
    title: "Delivery",
    icon: FiTruck,
    activeIcon: FaTruck,
    subItems: [],
  },
  {
    title: "Products",
    icon: BsGrid,
    activeIcon: BsFillGridFill,
    subItems: ["All Products", "Category", "Inventory"],
  },
  {
    title: "Marketing",
    icon: PiSpeakerHigh,
    activeIcon: PiSpeakerHighFill,
    subItems: [],
  },
  {
    title: "Analytics",
    icon: HiOutlineChartBar,
    activeIcon: HiChartBar,
    subItems: ["Sales", "Traffic", "Products"],
  },
  {
    title: "Payouts",
    icon: MdOutlinePayments,
    activeIcon: MdPayments,
    subItems: [],
  },
  {
    title: "Tools",
    icon: BsCursor,
    activeIcon: BsCursorFill,
    subItems: [],
  },
  {
    title: "Discounts",
    icon: CiDiscount1,
    activeIcon: RiDiscountPercentFill,
    subItems: [],
  },
  {
    title: "Audience",
    icon: FiUsers,
    activeIcon: MdPeopleAlt,
    subItems: [],
  },
  {
    title: "Appearance",
    icon: BsPalette,
    activeIcon: BsFillPaletteFill,
    subItems: ["Themes", "Pages", "Menus", "Blog"],
  },
  {
    title: "Plugins",
    icon: AiOutlineThunderbolt,
    activeIcon: AiFillThunderbolt,
    subItems: [],
  },
];
