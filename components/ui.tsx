import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-[1240px] px-5">{children}</div>;
}

export function Eyebrow({
  children,
  tone = "gold",
  align = "center",
  className = "",
}: {
  children: ReactNode;
  tone?: "gold" | "white";
  align?: "center" | "left" | "start";
  className?: string;
}) {
  return (
    <p
      className={`text-[16px] leading-[27px] tracking-[1px] ${
        tone === "gold" ? "text-gold" : "text-white"
      } ${align === "center" ? "text-center" : align === "left" ? "text-left" : "text-start"} ${className}`}
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  tone = "dark",
  align = "center",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  align?: "center" | "left" | "start";
  className?: string;
}) {
  return (
    <h2
      className={`font-display text-[32px] leading-[1.2] font-semibold tracking-[-1px] uppercase md:text-[42px] md:leading-[50.4px] ${
        tone === "light" ? "text-white" : "text-black"
      } ${align === "center" ? "text-center" : align === "left" ? "text-left" : "text-start"} ${className}`}
    >
      {children}
    </h2>
  );
}

export function PageTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`mt-[10px] mb-[20px] text-center font-display text-[32px] leading-[1.2] font-semibold uppercase text-white md:text-[54px] md:leading-[64.8px] ${className}`}
    >
      {children}
    </h1>
  );
}

export function SectionSubtitle({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={`text-[16px] leading-[27.2px] ${
        tone === "light" ? "text-white" : "text-ink"
      }`}
    >
      {children}
    </p>
  );
}

export function GoldButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-block border-2 border-gold bg-gold px-7 py-[14px] text-center text-[17px] leading-[1.5] text-white transition-colors duration-200 hover:border-gold-light hover:bg-gold-light ${className}`}
    >
      <span>{children}</span>
    </Link>
  );
}
export function OutlineButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-block border-2 border-white bg-[rgba(2,1,1,0)] px-7 py-[14px] text-center text-[17px] leading-[1.5] text-white transition-colors duration-200 hover:bg-white hover:text-ink ${className}`}
    >
      <span>{children}</span>
    </Link>
  );
}

export function CtaButtons({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-[10px] ${className}`}
    >
      <GoldButton href="/contact/">Book Your Safari Now</GoldButton>
      <OutlineButton href="/menu/">View Menu</OutlineButton>
    </div>
  );
}

export function BackgroundBand({
  image,
  children,
  className = "",
}: {
  image: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`relative bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <div className="relative">{children}</div>
    </section>
  );
}

export function TourCard({
  image,
  imageAlt,
  title,
  description,
  price,
}: {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  price?: string;
}) {
  return (
    <article className="flex gap-[30px] md:h-[200px] md:w-[570px] md:gap-[40px]">
      <Image
        src={image}
        alt={imageAlt}
        width={200}
        height={200}
        className="h-[110px] w-[110px] shrink-0 object-cover md:h-[200px] md:w-[200px]"
      />
      <div className="min-w-0 flex-1 md:flex md:h-[200px] md:flex-col md:justify-center">
        <h3 className="mb-[10px] text-left font-card text-[18px] leading-[1.4] font-semibold uppercase text-black md:text-[24px] md:leading-[33.6px]">
          {title}
        </h3>
        <div className="text-[15px] leading-[24px] text-ink md:text-[17px] md:leading-[27.2px]">
          {description}
        </div>
        {price ? (
          <p className="mt-[25px] text-[20px] leading-[24px] text-gold md:text-[24px]">
            {price}
          </p>
        ) : null}
      </div>
    </article>
  );
}

export function ReadMoreLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-[17px] leading-[27.2px] text-ink transition-colors hover:text-gold"
    >
      {children}
    </Link>
  );
}

export function ActivityCard({
  image,
  imageAlt,
  title,
  description,
  price,
}: {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  price?: string;
}) {
  return (
    <article className="flex gap-[30px] md:h-[200px] md:w-[570px] md:gap-[40px]">
      <Image
        src={image}
        alt={imageAlt}
        width={201}
        height={200}
        className="h-[110px] w-[110px] shrink-0 object-cover md:h-[200px] md:w-[201.41px]"
      />
      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <p className="mb-[10px] text-left text-[18px] leading-[27px] text-black md:text-[22px]">
          {title}
        </p>
        <div className="mb-[25px] text-left text-[15px] leading-[24px] text-ink md:text-[17px] md:leading-[27.2px]">
          {description}
        </div>
        {price ? (
          <p className="text-[20px] leading-[24px] text-gold md:text-[24px]">
            {price}
          </p>
        ) : null}
      </div>
    </article>
  );
}