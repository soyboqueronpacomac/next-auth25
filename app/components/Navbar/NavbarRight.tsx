"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "../ModeToggle";


export function NavbarRight() {
  return (
    <nav>
      <NavigationMenu>
        {/* Cambiamos flex a flex-col */}
        <NavigationMenuList className="flex-row ">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/sign-in">Iniciar seción</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/sign-up">registarse</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}