"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "@repo/config/i18n-config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu";
import { Button } from "@repo/ui/components/ui/button";

export default function LocaleSwitcher({
  currentLocale,
}: {
  currentLocale: Locale;
}) {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {currentLocale?.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => {
          if (currentLocale?.toLowerCase() === locale?.toLowerCase()) return;
          return (
            <DropdownMenuItem className="p-0" key={locale}>
              <Link
                className="w-full h-full px-2 py-1.5"
                href={redirectedPathName(locale)}
              >
                {locale?.toUpperCase()}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
