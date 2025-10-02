import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export function NavbarCenter() {
  return (
    <nav>
      <NavigationMenu>
        <NavigationMenuList className="flex-row space-x-2">
          <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/">Inicio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

          
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}