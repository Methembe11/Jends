import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import FloatingContact from "@/components/FloatingContact";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jendssafaris.co.zw"),
  title: "Jends Safaris",
  description:
    "Jends Safaris offers expert-guided tours and experiences around Victoria Falls, ensuring guests enjoy unforgettable memories in a breathtaking natural setting.",
  openGraph: {
    type: "website",
    siteName: "Jends Safaris",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-[50vw] focus:bg-surface-inverse focus:px-5 focus:py-3 focus:text-btn focus:text-ink-inverse"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <SiteFooter />
        <FloatingContact />
      </body>
    </html>
  );
}
