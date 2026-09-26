import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, Hero } from "@/components/bands";
import {
  ActivityCard,
  Container,
  Eyebrow,
  SectionTitle,
} from "@/components/ui";
import {
  activityPackageDescriptions,
  activityPackages,
  activityTours,
  ctaBackgrounds,
  heroBackgrounds,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Activities - Jends Safaris",
  description:
    "Discover the best tours and transfers tailored to your needs. Immerse yourself in the beauty of Victoria Falls with our expert-led tours.",
};

export default function Activities() {
  const [firstColumn, secondColumn] = [
    activityTours.slice(0, 2),
    activityTours.slice(2, 4),
  ];
  const [thirdColumn, fourthColumn] = [
    activityTours.slice(4, 6),
    activityTours.slice(6, 8),
  ];

  return (
    <>
      <Hero
        background={heroBackgrounds.activities}
        eyebrow="Our Exclusive Menu"
        title="Discover Our Offerings"
        subtitle="Explore a wide range of unforgettable experiences with Jends Safaris, crafted for every adventurous spirit."
        innerClassName="max-w-[900px]"
        subtitleClassName="max-w-none"
      />

      <section>
        <Container>
          <div className="py-[60px] md:py-[100px]">
            <div className="flex flex-col gap-[40px] md:flex-row md:gap-[60px]">
              {[firstColumn, secondColumn].map((column, columnIndex) => (
                <div
                  key={columnIndex}
                  className="flex flex-col gap-[40px] md:w-[570px] md:shrink-0"
                >
                  {column.map((tour) => (
                    <ActivityCard key={tour.title} {...tour} />
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-[30px] text-center md:mt-[60px]">
              <Image
                src="https://www.jendssafaris.co.zw/wp-content/uploads/2026/05/pexels-photo-33650610-1-576x1024.jpeg"
                alt="Two giraffes gracefully roam the savannah in Tanzania, capturing the essence of African wildlife."
                width={1200}
                height={500}
                className="h-auto w-full object-cover md:h-[500px]"
              />
            </div>

            <div className="mt-[30px] flex flex-col gap-[40px] md:mt-[60px] md:flex-row md:gap-[60px]">
              {[thirdColumn, fourthColumn].map((column, columnIndex) => (
                <div
                  key={columnIndex}
                  className="flex flex-col gap-[40px] md:w-[570px] md:shrink-0"
                >
                  {column.map((tour) => (
                    <ActivityCard key={tour.title} {...tour} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream">
        <Container>
          <div className="py-[60px] text-center md:py-[100px]">
            <Eyebrow className="md:mb-[5px]">Special Offers</Eyebrow>
            <div className="mx-auto max-w-[840px]">
              <SectionTitle className="mb-[10px]">Limited Time Packages</SectionTitle>
            <div className="text-center text-[16px] leading-[27.2px] text-ink md:text-[17px]">
              Exclusive deals tailored for your unforgettable adventure.
            </div>
            </div>
            <div className="mt-[30px] grid grid-cols-1 gap-[40px] md:mt-[60px] md:grid-cols-3 md:gap-[30px]">
              {activityPackages.map((item, index) => (
                <article key={item.title} className="flex flex-col gap-[20px] text-center">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={380}
                    height={400}
                    className="h-auto w-full object-cover md:h-[400px]"
                  />
                  <div>
                    <p className="mb-[15px] text-left text-[18px] leading-[27px] text-black md:text-[22px]">
                      {item.title}
                    </p>
                    <div className="text-[15px] leading-[24px] text-ink md:text-[17px] md:leading-[27.2px]">
                      {activityPackageDescriptions[index]}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        background={ctaBackgrounds.journeyActivities}
        title="Start Your Journey Now"
        copy="Contact us today to plan your unique Victoria Falls adventure."
      />
    </>
  );
}
