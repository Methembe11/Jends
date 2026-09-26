"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.replace(/\/$/, ""));
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const light = /^\/\d{4}\/\d{2}\/\d{2}\//.test(pathname);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-[70px] w-full max-w-[1240px] items-center justify-between gap-5 px-5 md:h-[100px]">
        <Link
          href="/"
          className={`font-display text-[22px] leading-[28px] font-semibold uppercase md:flex md:h-[40px] md:items-center md:text-[30px] md:leading-[36px] ${light ? "text-black" : "text-white"}`}
        >
          Jends Safaris
        </Link>

        <div className="hidden items-center md:flex">
          <nav>
            <ul className={`flex items-center leading-[100px] ${light ? "text-ink" : "text-white"}`}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    className={`flex h-[100px] items-center px-[17px] text-[17px] transition-colors ${
                      light
                        ? "text-black hover:text-black"
                        : isActive(pathname, item.href)
                          ? "text-[rgba(255,255,255,0.8)] hover:text-white"
                          : "text-white hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="pl-[20px]">
            <Link
              href="/contact/"
              className="text-[17px] leading-[27.2px] text-gold transition-colors duration-200 hover:text-gold-light"
            >
              <div className="border-2 border-gold bg-gold px-7 py-[14px] text-[17px] leading-[17px] text-white hover:border-gold-light hover:bg-gold-light">
                Book Your Safari Now
              </div>
            </Link>
          </div>
        </div>

        <button
          type="button"
          aria-label="Main Menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-[47px] w-[47px] flex-col items-center justify-center gap-[6px] rounded-[2px] bg-gold md:hidden"
        >
          <span className="block h-[2px] w-[22px] bg-white" />
          <span className="block h-[2px] w-[22px] bg-white" />
          <span className="block h-[2px] w-[22px] bg-white" />
        </button>
      </div>

      {open ? (
        <nav className="border-t border-white/15 bg-black/95 md:hidden">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className={`block px-5 py-4 text-[17px] ${
                    isActive(pathname, item.href) ? "text-gold" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact/"
                onClick={close}
                className="block border-t border-white/15 px-5 py-4 text-[17px] text-white"
              >
                Book Your Safari Now
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
