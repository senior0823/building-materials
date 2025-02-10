'use client'
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { NavMenu } from "../navbar.types";
import { MenuList } from "./MenuList";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/header/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import Image from "next/image";
import InputGroup from "@/components/header/ui/input-group";
import ResTopNavbar from "./ResTopNavbar";
import CartBtn from "./CartBtn";

const data: NavMenu = [
  {
    id: 1,
    label: "Building Materials",
    type: "MenuList",
    children: [
      {
        id: 11,
        label: "Building Material",
        url: "/collections/building-materials",
        description: `Cladding\n Builders Metalwork\n Precast & Construction Accessories\n Building Boards`,
      },
      {
        id: 12,
        label: "Sheet Materials",
        url: "/",
        description: "OSB Board\n Chipboard\n MDF\n Plywood\n",
      },
      {
        id: 13,
        label: "Building Membranes",
        url: "/",
        description: "Airtight Membranes\n Roofing Membranes\n Wall Membranes\n",
      },
      {
        id: 14,
        label: "Plasterboard",
        url: "/",
        description: "Insulated Plasterboard\n Standard Plasterboard\n Wall Fire Rated Plasterboard\n",
      },
      {
        id: 15,
        label: "Bricks & Blocks",
        url: "/",
        description: "Foil Backed Plasterboard\n Moisture Resistant Plasterboard\n Soundproof Plasterboard\n",
      },
      {
        id: 16,
        label: "Drainage",
        url: "/",
        description: "Airtight Membranes\n Roofing Membranes\n Wall Membranes\n",
      },

    ],
  },
  {
    id: 2,
    type: "MenuList",
    label: "Roofing",
    url: "/shop#on-sale",
    children: [
      {
        id: 11,
        label: "Drainage",
        url: "/",
        description: `Underground Drainage\n Linear Drainage\n Manhole Cover\n `,
      },
      {
        id: 12,
        label: "Sheet Materials",
        url: "/",
        description: "Chambers\n Soakaways\n Guttering\n Plywood\n",
      },
      {
        id: 13,
        label: "Flashing Rolls",
        url: "/",
        description: "Underlays\n Slates\n Sealants & Treatments\n",
      },
      {
        id: 14,
        label: "Plasterboard",
        url: "/",
        description: "Fixings & Accessories\n Aluminium Soakers\n Metal Studding and Ceilings\n",
      },
      {
        id: 15,
        label: "Metal Studding",
        url: "/",
        description: "MF Ceiling\n Suspended Ceiling Gridwork\n Accessories\n",
      },
      {
        id: 16,
        label: "Free Delivery Products",
        url: "/",
        description: "Airtight Membranes\n Roofing Membranes\n Wall Membranes\n",
      },

    ],
  },
  {
    id: 3,
    type: "MenuList",
    label: "Lighting",
    url: "/shop#new-arrivals",
    children: [
      {
        id: 11,
        label: "Accessories",
        url: "/",
        description: `Cladding\n Builders Metalwork\n Precast & Construction Accessories\n Building Boards`,
      },
      {
        id: 12,
        label: "Suspended Ceiling Gridwork",
        url: "/",
        description: "OSB Board\n Chipboard\n MDF\n Plywood\n",
      },
      {
        id: 13,
        label: "Fixings & Accessories",
        url: "/",
        description: "Airtight Membranes\n Roofing Membranes\n Wall Membranes\n",
      },
      {
        id: 14,
        label: "Sealants & Treatments",
        url: "/",
        description: "Insulated Plasterboard\n Standard Plasterboard\n Wall Fire Rated Plasterboard\n",
      },
      {
        id: 15,
        label: "Sealants & Treatments",
        url: "/",
        description: "Foil Backed Plasterboard\n Moisture Resistant Plasterboard\n Soundproof Plasterboard\n",
      },
      {
        id: 16,
        label: "Slates",
        url: "/",
        description: "Airtight Membranes\n Roofing Membranes\n Wall Membranes\n",
      },

    ],

  },
  {
    id: 4,
    type: "MenuList",
    label: "Tools & Workwear",
    url: "/shop#brands",
    children: [
      {
        id: 11,
        label: "Metal Studding and Ceilings",
        url: "/",
        description: `Cladding\n Builders Metalwork\n Precast & Construction Accessories\n Building Boards`,
      },
      {
        id: 12,
        label: "Soakaways",
        url: "/",
        description: "OSB Board\n Chipboard\n MDF\n Plywood\n",
      },
      {
        id: 13,
        label: "Manhole Cover",
        url: "/",
        description: "Airtight Membranes\n Roofing Membranes\n Wall Membranes\n",
      },
      {
        id: 14,
        label: "Manhole Cover",
        url: "/",
        description: "Insulated Plasterboard\n Standard Plasterboard\n Wall Fire Rated Plasterboard\n",
      },
      {
        id: 15,
        label: "Guttering",
        url: "/",
        description: "Foil Backed Plasterboard\n Moisture Resistant Plasterboard\n Soundproof Plasterboard\n",
      },
      {
        id: 16,
        label: "Underground Drainage",
        url: "/",
        description: "Airtight Membranes\n Roofing Membranes\n Wall Membranes\n",
      },

    ],

  },
  {
    id: 5,
    type: "MenuList",
    label: "Outdoor & Gargen",
    url: "/shop#brands",
    children: [
      {
        id: 11,
        label: "Linear Drainage",
        url: "/",
        description: `Cladding\n Builders Metalwork\n Precast & Construction Accessories\n Building Boards`,
      },
      {
        id: 12,
        label: "Accessories",
        url: "/",
        description: "OSB Board\n Chipboard\n MDF\n Plywood\n",
      },
      {
        id: 13,
        label: "Building Membranes",
        url: "/",
        description: "Airtight Membranes\n Roofing Membranes\n Wall Membranes\n",
      },
      {
        id: 14,
        label: "",
        url: "/",
        description: "Insulated Plasterboard\n Standard Plasterboard\n Wall Fire Rated Plasterboard\n",
      },
      {
        id: 15,
        label: "Bricks & Blocks",
        url: "/",
        description: "Foil Backed Plasterboard\n Moisture Resistant Plasterboard\n Soundproof Plasterboard\n",
      },
      {
        id: 16,
        label: "Drainage",
        url: "/",
        description: "Airtight Membranes\n Roofing Membranes\n Wall Membranes\n",
      },

    ],

  },
  {
    id: 6,
    type: "MenuList",
    label: "Heating & Plumbing",
    url: "/shop#brands",
    children: [
      {
        id: 11,
        label: "Building Material",
        url: "/",
        description: `Cladding\n Builders Metalwork\n Precast & Construction Accessories\n Building Boards`,
      },
      {
        id: 12,
        label: "Sheet Materials",
        url: "/",
        description: "OSB Board\n Chipboard\n MDF\n Plywood\n",
      },
      {
        id: 13,
        label: "Building Membranes",
        url: "/",
        description: "Airtight Membranes\n Roofing Membranes\n Wall Membranes\n",
      },
      {
        id: 14,
        label: "Plasterboard",
        url: "/",
        description: "Insulated Plasterboard\n Standard Plasterboard\n Wall Fire Rated Plasterboard\n",
      },
      {
        id: 15,
        label: "Bricks & Blocks",
        url: "/",
        description: "Foil Backed Plasterboard\n Moisture Resistant Plasterboard\n Soundproof Plasterboard\n",
      },
      {
        id: 16,
        label: "Drainage",
        url: "/",
        description: "Airtight Membranes\n Roofing Membranes\n Wall Membranes\n",
      },

    ],

  },
  {
    id: 7,
    type: "MenuItem",
    label: "Doors & Windows",
    url: "/shop#brands",
    children: [],
  },
];

const TopNavbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 140);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-20">
      <div className="md:flex hidden md:max-w-frame  justify-between py-2 md:py-2 px-4 xl:px-0 bg-[#034efc] ">
        <div className="flex ml-5 text-white/50">
          <Link href="/" id="email" className="ml-5 flex" >
            <Image
              priority
              src="/icons/email.png"
              height={20}
              width={20}
              alt="email"
              className="min-w-5 min-h-5"
            />
          </Link>
          <Link href="/" id="phone" className="ml-5 flex" >
            <Image
              priority
              src="/icons/phone.svg"
              height={20}
              width={20}
              alt="phone"
              className="min-w-5 min-h-5"
            />
          </Link>
          <Link href="/" id="whatsapp" className=" ml-5 flex" >
            <Image
              priority
              src="/icons/whatsapp.svg"
              height={20}
              width={20}
              alt="whatsapp"
              className="min-w-5 min-h-5"
            />
          </Link>
        </div>
        <div className="hidden md:flex md:max-w-frame relative mx-auto mr-8 text-white/50 ">
          <Link href="/" className="ml-5">About us</Link>
          <Link href="/" className="ml-5">FAQ</Link>
          <Link href="/" className="ml-5">Blog</Link>
          <Link href="/" className="ml-5">Contact us</Link>
        </div>
      </div>
      <div className={cn(
        "flex relative w-100 max-w-frame mx-auto items-center justify-between md:justify-between py-2 md:py-2 px-4 xl:px-0 duration-300",
        isScrolled ? "md:hidden" : "flex"
      )}>

        <div className="flex items-center">
          <div className="block md:hidden mr-4">
            <ResTopNavbar data={data} />
          </div>
          <Link
            href="/"
            className="min-w-[22px] min-h-[22px] ml-10 "
          >
            <Image src="/icons/logo.png"
              height={60}
              width={100}
              alt="brand"
              className={cn(isScrolled ? "hidden" : "")}
            >
            </Image>
          </Link>
        </div>

        <InputGroup className="hidden md:flex bg-[#F0F0F0] ml-50 mr-3 lg:mr-10 items-center justify-between md:justify-start max-w-[700px]">
          <InputGroup.Text>
            <Image
              priority
              src="/icons/search.svg"
              height={20}
              width={20}
              alt="search"
              className="min-w-5 min-h-5"
            />
          </InputGroup.Text>
          <InputGroup.Input
            type="search"
            name="search"
            placeholder="Search for products..."
            className="bg-transparent placeholder:text-black/40"
          />
        </InputGroup>
        <div className="flex items-center">
          <Link href="/search" className="block md:hidden mr-[14px] p-1">
            <Image
              priority
              src="/icons/search-black.svg"
              height={100}
              width={50}
              alt="search"
              className="max-w-[22px] max-h-[22px]"
            />
          </Link>
          <CartBtn />
          <Link href="/#signin" className="p-1">
            <Image
              priority
              src="/icons/user.svg"
              height={100}
              width={100}
              alt="user"
              className="max-w-[22px] max-h-[22px] mr-8"
            />
          </Link>
        </div>
      </div>
      <div className={cn(
        "flex w-full bg-[#034efc] hidden md:flex transition-all duration-300",
        isScrolled ? "fixed top-0 left-0 w-full shadow-md z-50" : ""
      )}>
        <NavigationMenu className="relative max-w-frame mx-auto items-center justify-between md:justify-start">
          <NavigationMenuList>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                {item.type === "MenuItem" && (
                  <MenuItem label={item.label} url={item.url} />
                )}
                {item.type === "MenuList" && (
                  <MenuList data={item.children} label={item.label} />
                )}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default TopNavbar;
