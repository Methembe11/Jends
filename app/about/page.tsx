import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, Hero } from "@/components/bands";
import { Container, Eyebrow, SectionTitle } from "@/components/ui";
import { ctaBackgrounds, heroBackgrounds } from "@/lib/site";

export const metadata: Metadata = {
  title: "About - Jends Safaris",
  description:
    "Jends Safaris specializes in expertly crafted tours and services, aimed at immersing guests in the breathtaking wonders of Victoria Falls and its captivating wildlife.",
};

const stats = [
  { title: "Tours & Activities", value: 0, suffix: "+" },
  { title: "Happy Clients", value: 0, suffix: "+" },
  { title: "Team Member", value: 0, suffix: "+" },
];

export default function About() {
  return (
    <>
      <Hero
        background={heroBackgrounds.about}
        eyebrow="Discover Our Passion"
        title="Who We Are"
        subtitle="At Jends Safaris, we are dedicated to providing unforgettable experiences tailored to showcase the beauty and adventure of Victoria Falls and its surroundings."
        innerClassName="max-w-[900px]"
        subtitleClassName="max-w-none"
      />

      <section>
        <Container>
          <div className="py-[60px] md:py-[100px]">
            <Eyebrow align="start" className="md:mb-[5px]">
              Introducing Jends Safaris
            </Eyebrow>
            <SectionTitle align="start" className="md:max-w-[720px]">
              About Our Company
            </SectionTitle>
            <div className="mt-[40px] flex flex-col gap-[30px] md:flex-row md:gap-[80px]">
              <div className="flex shrink-0 gap-[20px] md:w-[638.41px]">
                <Image
                  src="https://www.jendssafaris.co.zw/wp-content/uploads/2026/05/pexels-photo-11916901-1-683x1024.jpeg"
                  alt="A giraffe walks gracefully through lush grass at a zoo, showcasing its unique pattern and elegance."
                  width={309}
                  height={350}
                  className="h-auto w-1/2 object-cover md:h-[350px] md:w-[309.2px]"
                />
                <Image
                  src="https://www.jendssafaris.co.zw/wp-content/uploads/2026/05/pexels-photo-18386171-1-1024x682.jpeg"
                  alt="Giraffes and zebras grazing peacefully in the golden light of sunset on the African savanna."
                  width={309}
                  height={410}
                  className="h-auto w-1/2 object-cover md:h-[410px] md:w-[309.2px]"
                />
              </div>
              <div className="md:w-[481.59px] md:shrink-0">
                <p className="text-[16px] leading-[27.2px] text-ink md:text-[17px]">
                  Jends Safaris specializes in expertly crafted tours and services,
                  aimed at immersing guests in the breathtaking wonders of Victoria
                  Falls and its captivating wildlife.
                </p>
                <p className="mt-[15px] text-[16px] leading-[27.2px] text-ink md:text-[17px]">
                  Our commitment to exceptional service, combined with local
                  expertise, ensures every traveler experiences the magic and
                  adventure of Zimbabwe&apos;s premier destination.
                </p>
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <div className="pt-[60px] pb-[100px] md:pt-[20px]">
            <div className="flex flex-col gap-[40px] text-center md:flex-row md:gap-[80px]">
              <div className="text-start md:flex md:w-[560px] md:shrink-0 md:flex-col md:justify-center">
                <Eyebrow align="start" className="md:mb-[5px]">
                  Our Journey Begins
                </Eyebrow>
                <SectionTitle align="start" className="md:mb-[20px]">
                  The Story of Jends Safaris
                </SectionTitle>
                <p className="text-[16px] leading-[27.2px] text-ink md:mb-[10px] md:text-[17px]">
                  Founded with a love for nature and adventure, Jends Safaris was
                  established to share the stunning landscapes and cultures of
                  Victoria Falls with the world.
                </p>
                <p className="text-[16px] leading-[27.2px] text-ink md:text-[17px]">
                  Over the years, we have grown from a small operation into a
                  respected tour provider, with a reputation for quality and
                  unforgettable experiences.
                </p>
              </div>
              <Image
                src="https://www.jendssafaris.co.zw/wp-content/uploads/2026/05/pexels-photo-10740865-1-683x1024.jpeg"
                alt="Majestic giraffes walking along a road in the Serengeti, captured in black and white."
                width={560}
                height={500}
                className="h-auto w-full object-cover md:h-[500px] md:w-[560px]"
              />
            </div>

            <div className="mt-[40px] bg-cream p-6 md:mt-[100px] md:p-[64px]">
              <div className="flex flex-col gap-[10px] text-center md:flex-row">
                {stats.map((stat) => (
                  <div key={stat.title} className="flex flex-1 flex-col gap-[10px] text-center">
                    <div className="font-quote text-[36px] leading-[50px] font-bold tracking-[-1px] text-black md:text-[50px]">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div className="text-[16px] leading-[27px] text-black md:text-[18px]">
                      {stat.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        background={ctaBackgrounds.journeyAbout}
        title="Start Your Journey Now"
        copy="Contact us today to plan your unique Victoria Falls adventure."
      />
    </>
  );
}
