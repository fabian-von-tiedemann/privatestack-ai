import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "./navigation-menu";

interface NavigationMenuItemsProps {
  items: Array<{ name: string; href: string }>;
  currentPath: string;
}

export function NavigationMenuItems({ items, currentPath }: NavigationMenuItemsProps) {
  return (
    <>
      {items.map((item) => (
        <NavigationMenuItem key={item.name}>
          <NavigationMenuLink
            asChild
            className={cn(
              "text-sm font-semibold leading-6 px-3 py-2 rounded-full transition-colors",
              currentPath === item.href
                ? "bg-white text-black"
                : "text-white hover:text-white/80"
            )}
          >
            <Link to={item.href}>{item.name}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </>
  );
}