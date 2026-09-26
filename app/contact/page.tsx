import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/bands";
import {
  Container,
  GoldButton,
  OutlineButton,
  SectionTitle,
} from "@/components/ui";
import { ctaBackgrounds, heroBackgrounds } from "@/lib/site";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact - Jends Safaris",
  description:
    "Get in touch with Jends Safaris to plan your Victoria Falls adventure. Call +263 77 588 1441 or email us today.",
};

const contactBlocks = [
  {
    heading: "Email",
    value: "info@jendssafaris.co.zw",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
      </svg>
    ),
  },
  {
    heading: "Phone",
    value: "+263 77 588 1441",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
      </svg>
    ),
  },
  {
    heading: "Office",
    value: "6559 Mkhosana, Victoria Falls Zimbabwe",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 384 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <>
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackgrounds.contact})` }}
      >
        <Container>
          <div className="mx-auto max-w-[900px] pt-[110px] pb-[71px] text-center md:pt-[200px] md:pb-[120px]">
            <p className="text-[32px] leading-[27px] font-normal tracking-[1px] text-white md:text-[57px]">
              <strong className="font-normal">Get In Touch</strong>
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="py-[60px] md:py-[100px]">
            <div className="flex flex-col gap-[40px] text-center md:flex-row md:gap-[80px]">
              <Image
                src="https://www.jendssafaris.co.zw/wp-content/uploads/2026/05/pexels-photo-11760815-1-683x1024.jpeg"
                alt="A serene impala captured in its natural habitat amidst lush greenery."
                width={560}
                height={670}
                className="h-auto w-full object-cover md:h-[670px] md:w-[560px] md:shrink-0"
              />
              <div className="flex flex-1 flex-col justify-center text-start md:w-[560px]">
                <div className="mb-[30px]">
                  <SectionTitle align="left" className="mb-[10px]">
                    Contact Form
                  </SectionTitle>
                  <div className="text-[16px] leading-[27.2px] text-ink md:text-[17px]">
                    Contact Us Today
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>

            <div className="mt-[40px] grid grid-cols-1 gap-[40px] md:mt-[80px] md:grid-cols-3 md:gap-[120px]">
              {contactBlocks.map((block) => (
                <div key={block.heading} className="flex flex-col gap-[20px]">
                  <span className="block h-[30px] w-[30px] text-gold [&>svg]:block [&>svg]:h-[30px] [&>svg]:w-[30px] [&>svg]:fill-current">
                    {block.icon}
                  </span>
                  <div>
                    <h3 className="mb-[10px] font-card text-[20px] leading-[33.6px] font-semibold text-black uppercase md:text-[24px]">
                      <span>{block.heading}</span>
                    </h3>
                    <p className="text-[16px] leading-[27.2px] font-semibold text-ink md:text-[17px]">
                      {block.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <iframe
          title="Jends Safaris location map"
          src="https://maps.google.com/maps?q=6559%20Mkhosana%2C%20Victoria%20Falls%2C%20Zimbabwe&t=m&z=12&output=embed&iwloc=near"
          className="h-[300px] w-full border-0 md:h-[500px]"
          loading="lazy"
        />
      </section>

      <CtaBand
        background={ctaBackgrounds.journeyContact}
        title="Lets Explore together"
        copy="View our activities on offer"
        withButtons={false}
      >
        <div className="mt-[25px] flex flex-wrap items-center justify-center gap-[10px]">
          <GoldButton href="/contact/">Book Now</GoldButton>
          <OutlineButton href="/activities/">View Activities</OutlineButton>
        </div>
      </CtaBand>
    </>
  );
}
