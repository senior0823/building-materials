import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
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
        url: "/",
        description: "***",
      },
      {
        id: 12,
        label: "Cladding",
        url: "/",
        description: "***",
      },
      {
        id: 13,
        label: "Builders Metalwork",
        url: "/",
        description: "***",
      },
      
    ],
  },
  {
    id: 2,
    type: "MenuItem",
    label: "Roofing",
    url: "/shop#on-sale",
    children: [],
  },
  {
    id: 3,
    type: "MenuItem",
    label: "Lighting",
    url: "/shop#new-arrivals",
    children: [],
  },
  {
    id: 4,
    type: "MenuItem",
    label: "Tools & Workwear",
    url: "/shop#brands",
    children: [],
  },
  {
    id: 5,
    type: "MenuItem",
    label: "Outdoor & Gargen",
    url: "/shop#brands",
    children: [],
  },
  {
    id: 6,
    type: "MenuItem",
    label: "Heating & Plumbing",
    url: "/shop#brands",
    children: [],
  },
  {
    id: 4,
    type: "MenuItem",
    label: "Doors & Windows",
    url: "/shop#brands",
    children: [],
  },
];

const TopNavbar = () => {
  return (
    <nav className="sticky top-0 z-20">
      <div className="flex  md:max-w-frame  justify-between py-2 md:py-2 px-4 xl:px-0 bg-[#034efc] ">
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
      <div className="flex relative w-100 max-w-frame mx-auto items-center justify-between md:justify-between py-2 md:py-2 px-4 xl:px-0 ">
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
        <div className="flex w-100 bg-[#034efc] hidden md:flex  ml-50   min-w-80">
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
