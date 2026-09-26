"use client";

import { usePathname } from "next/navigation";
import { Container } from "@/components/ui";
import { brand, footerColumns } from "@/lib/site";

export default function SiteFooter() {
  const pathname = usePathname();
  const route = pathname?.replace(/\/+$/, "") ?? "";
  const showColumns = route === "" || route === "/about" || route === "/activities" || route === "/contact";

  return (
    <>
      {showColumns ? (
        <div>
          <Container>
            <div className="flex flex-col gap-[45px] py-[45px] md:flex-row md:gap-[45px]">
              {footerColumns.map((column) => (
                <div
                  key={column.heading}
                  className="flex flex-col md:w-[var(--col-w)] md:shrink-0 md:last:pl-[4px]"
                  style={{ "--col-w": `${column.width}px` } as React.CSSProperties}
                >
                  <p
                    className={`mb-[20px] tracking-[1px] text-[16px] leading-[27px] text-black${column.uppercase ? " uppercase" : ""}`}
                  >
                    {column.heading}
                  </p>
                  {column.lines.map((line) => (
                    <p
                      key={line}
                      className="text-[16px] leading-[27px] text-ink"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </Container>
        </div>
      ) : null}
      <footer className="site-footer">
        <Container>
          <div className="pt-[21px] pb-[24.41px]">
            <p className="text-center text-[16px] leading-[25.59px] text-ink">
              {brand.copyright}
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
}
