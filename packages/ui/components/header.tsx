"use client";
import * as React from "react";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { cn } from "@repo/ui/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@repo/ui/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu";
import { Button } from "@repo/ui/components/ui/button";
import LocaleSwitcher from "@repo/ui/components/locale-switcher";
import ThemeSwitcher from "@repo/ui/components/theme-switcher";

const Header = React.forwardRef<React.ElementRef<"header">, any>(
  ({ className, currentLocale, dictionary, ...props }, ref) => {
    return (
      <header ref={ref} className={cn("", className)}>
        <div className="container mx-auto flex justify-between items-center">
          <div>Header</div>
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                {dictionary?.navigation?.map((navItem: any, i: number) => {
                  return navItem?.trigger ? (
                    <NavigationMenuItem key={i}>
                      <NavigationMenuTrigger>
                        {navItem?.trigger}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                          {navItem?.links?.map((item: any) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                            ></ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={i}>
                      <Link
                        href={navItem?.links[0]?.title}
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          {navItem?.links[0]?.title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center justify-end space-x-2">
            <LocaleSwitcher currentLocale={currentLocale} />
            <ThemeSwitcher />
          </div>
        </div>
      </header>
    );
  }
);

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export { Header, ListItem };
