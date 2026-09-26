import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex items-center bg-cream pt-[70px] md:pt-[100px]">
      <Container>
        <div className="py-[80px] text-center md:py-[120px]">
          <p className="tracking-[1px] text-[16px] leading-[27px] text-gold">
            Page Not Found
          </p>
          <h1 className="mt-[10px] font-display text-[32px] leading-[1.2] font-semibold tracking-[-1px] text-black uppercase md:text-[42px] md:leading-[50.4px]">
            We Could Not Find That Page
          </h1>
          <p className="mx-auto mt-[15px] max-w-[720px] text-[16px] leading-[27.2px] text-ink md:text-[17px]">
            The page you are looking for may have been moved or no longer
            exists.
          </p>
          <Link
            href="/"
            className="mt-[30px] inline-block border-2 border-gold bg-gold px-7 py-[14px] text-[17px] leading-[1.5] text-white transition-colors duration-200 hover:border-gold-light hover:bg-gold-light"
          >
            Back to Home
          </Link>
        </div>
      </Container>
    </section>
  );
}
