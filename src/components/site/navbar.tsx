"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/site/logo";
import { LanguageSwitch } from "@/components/site/language-switch";
import { homeHash } from "@/i18n/config";
import { useI18n } from "@/i18n/provider";
import { LOGIN_URL } from "@/lib/links";

export function Navbar() {
  const { lang, dict } = useI18n();
  const { common } = dict;
  const links = dict.nav.map((link) => ({ label: link.label, href: homeHash(lang, link.hash) }));

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-white/90 backdrop-blur-md">
      <nav className="relative mx-auto flex h-[68px] max-w-[1080px] items-center justify-between px-5 sm:px-10">
        <Link href={`/${lang}`} aria-label={common.home}>
          <Logo />
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-[15px] text-body transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitch className="hidden sm:flex" />
          <Button
            className="h-9 rounded-full px-4 text-sm"
            render={<a href={LOGIN_URL} />}
            nativeButton={false}
          >
            {common.logIn}
          </Button>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label={common.openMenu}
                />
              }
            >
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-canvas">
              <SheetTitle className="px-6 pt-5">
                <Logo />
              </SheetTitle>
              <ul className="flex flex-col px-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <SheetClose
                      render={<a href={link.href} />}
                      nativeButton={false}
                      className="block rounded-md px-3 py-3 text-base text-ink hover:bg-hairline-soft"
                    >
                      {link.label}
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-2 border-t border-hairline p-6">
                <LanguageSwitch className="mb-2 self-start" />
                <Button
                  variant="outline"
                  className="h-11 rounded-full border-hairline bg-white text-base"
                  render={<a href={LOGIN_URL} />}
                  nativeButton={false}
                >
                  {common.logIn}
                </Button>
                <SheetClose
                  render={
                    <Button
                      className="h-11 rounded-full text-base"
                      render={<a href={homeHash(lang, "demo")} />}
                      nativeButton={false}
                    />
                  }
                  nativeButton={false}
                >
                  {common.bookDemo}
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
