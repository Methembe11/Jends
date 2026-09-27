"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container, PrimaryButton } from "@/components/ui";
import { brand, navItems, whatsapp } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.replace(/\/$/, ""));
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.25 1z" />
    </svg>
  );
}

function ChatIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.9 8.9 0 0 1-4-.9L3 21l1.9-5a8.4 8.4 0 0 1-.9-4 8.4 8.4 0 0 1 8.4-9 8.4 8.4 0 0 1 8.6 8.5z" />
    </svg>
  );
}

/**
 * Fixed solid bar on #f9f9f9 — the reference never goes transparent, which is
 * what lets the dark logo sit directly on the background with no plate.
 * Compact 1.125rem vertical padding, 14px links at a 4.375em gutter, and a
 * current-page disc to the left of the active label.
 */
export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile panel on navigation. Adjusting state during render is
  // the documented alternative to a setState-in-effect effect.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-surface-sunken">
        <Container>
          <div className="flex items-center justify-between gap-6 py-[1.125rem]">
            <Link
              href="/"
              aria-label={`${brand.name} — home`}
              className="inline-flex shrink-0 items-center"
            >
              <Image
                src={brand.logo}
                alt={brand.logoAlt}
                width={48}
                height={60}
                priority
                sizes="48px"
                className="h-10 w-auto object-contain lg:h-12"
              />
            </Link>

            <div className="hidden items-center gap-16 lg:flex">
              <nav aria-label="Main">
                <ul className="flex items-center gap-16">
                  {navItems.map((item) => {
                    const active = isActive(pathname, item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          className={`group/nav relative inline-flex min-h-11 items-center text-tagline transition-colors duration-200 ${
                            active ? "text-ink" : "text-ink-muted hover:text-ink"
                          }`}
                        >
                          {active ? (
                            <span
                              aria-hidden="true"
                              className="absolute -left-4 h-1.5 w-1.5 rounded-full bg-current"
                            />
                          ) : null}
                          <span className="link-underline">{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <PrimaryButton href="/contact/">Plan Your Safari</PrimaryButton>
            </div>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="grid h-11 w-11 shrink-0 place-items-center text-ink lg:hidden"
            >
              {/* Three dots that resolve into a cross, as on the reference. */}
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="currentColor"
              >
                {open ? (
                  <path d="M5.6 4.2 12 10.6l6.4-6.4 1.4 1.4L13.4 12l6.4 6.4-1.4 1.4L12 13.4l-6.4 6.4-1.4-1.4L10.6 12 4.2 5.6z" />
                ) : (
                  <>
                    <circle cx="5" cy="12" r="1.7" />
                    <circle cx="12" cy="12" r="1.7" />
                    <circle cx="19" cy="12" r="1.7" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </Container>
      </header>

      {/* Full-height light panel — the reference keeps it on #f9f9f9 with a
          hairline top border and oversized light-weight serif links.
          `top` matches the bar exactly: 1.125rem padding + 2.75rem control. */}
      {open ? (
        <div className="fixed inset-x-0 bottom-0 top-20 z-[45] flex flex-col border-t border-line bg-surface-sunken lg:hidden">
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 pt-12">
            <ul className="flex flex-col">
              {navItems.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href} className="border-b border-line-soft">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex min-h-16 items-center font-display text-[2.5625rem] font-normal leading-none ${
                        active ? "text-ink" : "text-ink-muted"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="border-t border-line p-5 pb-8">
            <PrimaryButton href="/contact/">Plan Your Safari</PrimaryButton>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href={brand.phoneHref}
                className="flex min-h-14 items-center justify-center gap-2 rounded-[50vw] border border-surface-inverse text-btn text-ink"
              >
                <PhoneIcon className="h-4 w-4" />
                Call
              </a>
              <a
                href={whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-14 items-center justify-center gap-2 rounded-[50vw] border border-surface-inverse text-btn text-ink"
              >
                <ChatIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
