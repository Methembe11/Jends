import type { Metadata } from "next";
import { Cormorant, Josefin_Sans, Lato, Playfair_Display } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jends Safaris",
  description:
    "Jends Safaris offers expert-guided tours and experiences around Victoria Falls, ensuring guests enjoy unforgettable memories in a breathtaking natural setting.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${playfair.variable} ${josefin.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">
          <a
            href="#content"
            className="absolute -m-[1px] h-px w-px overflow-hidden border-0 p-0 text-[17px] leading-[27.2px] text-gold [clip:rect(0,0,0,0)]"
          >
            Skip to content
          </a>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
