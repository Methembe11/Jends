import Image from "next/image";
import Link from "next/link";
import { CtaBand, Hero } from "@/components/bands";
import {
  Container,
  Eyebrow,
  GoldButton,
  SectionTitle,
  TourCard,
} from "@/components/ui";
import {
  brand,
  ctaBackgrounds,
  galleryColumns,
  heroBackgrounds,
  testimonials,
  tourColumns,
  whyUsPoints,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero
        background={heroBackgrounds.home}
        eyebrow="Experience the Adventure"
        title="Discover Victoria Falls"
      >
        <div className="mx-auto max-w-[720px] text-[16px] leading-[27.2px] text-white md:text-[17px]">
          Join Jends Safaris for breathtaking guided tours, exhilarating
          activities, and unforgettable experiences around the majestic Victoria
          Falls.
        </div>
        <div className="mt-[35px] flex flex-wrap items-center justify-center gap-[10px]">
          <GoldButton href="/contact/">Book Your Safari Now</GoldButton>
          <Link
            href="/menu/"
            className="inline-block border-2 border-white bg-[rgba(2,1,1,0)] px-7 py-[14px] text-center text-[17px] leading-[1.5] text-white transition-colors duration-200 hover:bg-white hover:text-ink"
          >
            <span>View Menu</span>
          </Link>
        </div>
      </Hero>

      <section className="bg-cream">
        <Container>
          <div className="py-[60px] md:pt-[100px] md:pb-0">
            <Eyebrow align="start" className="md:mb-[5px]">
              Your Safari Adventure Awaits
            </Eyebrow>
            <SectionTitle align="start" className="md:max-w-[720px]">
              Discover Jends Safaris
            </SectionTitle>
            <div className="mt-[40px] flex flex-col gap-[30px] md:h-[520px] md:flex-row md:items-start md:gap-0">
              <div className="md:w-[481.59px] md:shrink-0">
                <p className="text-[16px] leading-[27.2px] text-ink md:text-[17px]">
                  Jends Safaris offers expert-guided tours and experiences around
                  Victoria Falls, ensuring guests enjoy unforgettable memories in
                  a breathtaking natural setting.
                </p>
                <p className="mt-[15px] text-[16px] leading-[27.2px] text-ink md:text-[17px]">
                  Our services include tailored transfers, cultural immersions,
                  and thrilling adventures designed to provide a seamless and
                  enriching travel experience for every visitor.
                </p>
                <GoldButton href="/about/" className="mt-[25px]">
                  Read More
                </GoldButton>
              </div>
              <div className="flex flex-1 items-start justify-center gap-[20px] md:justify-end">
                <Image
                  src={brand.logo}
                  alt={brand.logoAlt}
                  width={309}
                  height={420}
                  className="h-auto w-full max-w-[309px] object-contain md:h-[420px]"
                />
                <Image
                  src="https://www.jendssafaris.co.zw/wp-content/uploads/2026/05/pexels-photo-13697474-1-1024x682.jpeg"
                  alt="A group of zebras roam the lush bushland in Makueni County, Kenya, showcasing wildlife in its natural habitat."
                  width={309}
                  height={510}
                  className="h-auto w-full max-w-[309px] object-cover md:h-[510px] md:-mt-[140.5px]"
                />
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <div className="py-[60px] md:pt-[100px] md:pb-[100px]">
            <Eyebrow className="md:mb-[5px]">Explore Our Offerings</Eyebrow>
            <SectionTitle className="mb-[10px]">
              Guided Tours &amp; Transfers
            </SectionTitle>
            <div className="text-center text-[16px] leading-[27.2px] text-ink md:text-[17px]">
              Discover the best tours and transfers tailored to your needs.
            </div>
            <div className="mt-[60px] flex flex-col gap-[40px] md:flex-row md:gap-[60px]">
              {tourColumns.map((column, columnIndex) => (
                <div
                  key={columnIndex}
                  className="flex flex-col gap-[40px] md:w-[570px] md:shrink-0"
                >
                  {column.map((tour) => (
                    <TourCard key={tour.title} {...tour} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        background={ctaBackgrounds.adventure}
        title="Ready for Your Adventure?"
        copy="Contact us today to start your unforgettable journey with Jends Safaris."
        buttonGap="mt-[35px]"
      />

      <section>
        <Container>
          <div className="flex flex-col gap-[40px] py-[60px] md:flex-row md:items-start md:gap-[80px] md:py-[100px]">
            <div className="flex gap-[25px] md:shrink-0">
              <Image
                src="https://www.jendssafaris.co.zw/wp-content/uploads/2026/05/pexels-photo-27065204-1-1024x682.jpeg"
                alt="A black rhinoceros and zebras gather at an oasis in Namibia's Okaukuejo, Oshikoto region."
                width={275}
                height={429}
                className="h-auto w-[130px] object-cover md:h-[429px] md:w-[275px]"
              />
              <Image
                src="https://www.jendssafaris.co.zw/wp-content/uploads/2026/05/pexels-photo-25860788-1-1024x682.jpeg"
                alt="Two impalas gracefully standing in the African grassland, surrounded by nature."
                width={280}
                height={510}
                className="h-auto w-[130px] object-cover md:h-[510px] md:w-[280px]"
              />
            </div>
            <div className="flex-1">
              <Eyebrow align="start" className="md:mb-[5px]">
                Why Choose Us?
              </Eyebrow>
              <SectionTitle align="start" className="mb-[10px]">
                Unmatched Safari Experiences
              </SectionTitle>
              <div className="text-[16px] leading-[27.2px] text-ink md:text-[17px]">
                Expert guides and tailored experiences ensure your safari is
                memorable and unique.
              </div>
              <ul
                role="list"
                className="mt-[30px] ml-[-11px] space-y-[15px]"
              >
                {whyUsPoints.map((point) => (
                  <div
                    role="listitem"
                    key={point}
                    className="relative pl-[11px] text-[16px] leading-[27px] tracking-[1px] text-black"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="absolute left-0 top-[5px] h-4 w-4 text-gold"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <p>{point}</p>
                  </div>
                ))}
              </ul>
              <GoldButton href="/contact/" className="mt-[30px]">
                Book a Table
              </GoldButton>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="py-[60px] md:py-[100px]">
            <Eyebrow className="md:mb-[5px]">Explore Our Adventures</Eyebrow>
            <div className="mx-auto max-w-[672px]">
              <SectionTitle className="mb-[10px]">Photo Gallery</SectionTitle>
              <div className="text-center text-[16px] leading-[27.2px] text-ink md:text-[17px]">
                A glimpse into the stunning beauty and adventures awaiting you at
                Victoria Falls.
              </div>
            </div>
            <div className="mt-[60px] flex flex-col gap-[30px] md:flex-row">
              {galleryColumns.map((column, columnIndex) => (
                <div
                  key={columnIndex}
                  className={`flex flex-1 flex-col gap-[30px] ${
                    columnIndex === 1 ? "" : "md:mt-[61px]"
                  }`}
                >
                  {column.map((item) => (
                    <Image
                      key={item.src}
                      src={item.src}
                      alt={item.alt}
                      width={380}
                      height={item.height}
                      className="h-auto w-full object-cover"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream">
        <Container>
          <div className="py-[60px] md:py-[100px]">
            <Eyebrow className="md:mb-[5px]">What Our Guests Say</Eyebrow>
            <div className="mx-auto max-w-[720px]">
              <SectionTitle className="mb-[10px]">Guest Testimonials</SectionTitle>
              <div className="text-center text-[16px] leading-[27.2px] text-ink md:text-[17px]">
                Hear from our satisfied adventurers.
              </div>
            </div>
            <div className="mt-[60px] flex flex-col gap-[40px] md:flex-row md:gap-[120px]">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="flex flex-1 flex-col"
                >
                  <div
                    className="flex h-4 justify-center gap-[2px] text-gold"
                    role="img"
                    aria-label="Rated 5 out of 5"
                  >
                    {Array.from({ length: 5 }, (_, index) => (
                      <svg
                        key={index}
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-[18px] w-[18px] fill-current"
                      >
                        <path d="m12 17.27 5.18 3.13-1.37-5.9 4.58-3.96-6.03-.52L12 4.5 9.64 10.02l-6.03.52 4.58 3.96-1.37 5.9z" />
                      </svg>
                    ))}
                  </div>
                  <div className="pt-[30px] pb-[20px]">
                    <p className="text-center font-quote text-[18px] leading-[30px] font-medium text-black md:text-[20px] md:leading-[32px]">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-[18px]">
                    <Image
                      src={testimonial.avatar}
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-auto shrink-0 leading-[0]"
                    />
                    <p
                      className="shrink-0 font-quote text-[16px] leading-[24px] font-semibold text-black"
                      style={{ width: testimonial.nameWidth }}
                    >
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        background={ctaBackgrounds.journeyHome}
        title="Start Your Journey Now"
        copy="Contact us today to plan your unique Victoria Falls adventure."
      />
    </>
  );
}
