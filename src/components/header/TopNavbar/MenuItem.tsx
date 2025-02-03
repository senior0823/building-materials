import * as React from "react";
import Link from "next/link";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/header/ui/navigation-menu";
import { cn } from "@/lib/utils";

type MenuItemProps = {
  label: string;
  url?: string;
};

export function MenuItem({ label, url }: MenuItemProps) {
  return (
    <NavigationMenuItem>
      <Link href={url ?? "/"} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn([navigationMenuTriggerStyle(), "font-normal px-3 bg-transparent text-white"])}
        >
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}
