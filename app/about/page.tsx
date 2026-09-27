import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, Hero } from "@/components/bands";
import Reveal from "@/components/Reveal";
import ScrollGallery from "@/components/ScrollGallery";
import {
  Container,
  MediaFrame,
  Section,
  SectionHeader,
  TextLink,
} from "@/components/ui";
import {
  brand,
  ctaBackgrounds,
  galleryColumns,
  heroBackgrounds,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "About - Jends Safaris",
  description:
    "Jends Safaris specializes in expertly crafted tours and services, aimed at immersing guests in the breathtaking wonders of Victoria Falls and its captivating wildlife.",
};

export default function About() {
  const gallery = galleryColumns.flat();

  return (
    <>
      <Hero
        background={heroBackgrounds.about}
        eyebrow="Discover Our Passion"
        title="Who We Are"
        subtitle="At Jends Safaris, we are dedicated to providing unforgettable experiences tailored to showcase the beauty and adventure of Victoria Falls and its surroundings."
      />

      {/* Introduction with the brand mark */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="order-2 grid grid-cols-2 gap-5 lg:order-1">
              <MediaFrame
                src="https://www.jendssafaris.co.zw/wp-content/uploads/2026/05/pexels-photo-11916901-1-683x1024.jpeg"
                alt="A giraffe walks gracefully through lush grass at a zoo, showcasing its unique pattern and elegance."
                ratio="portrait"
                sizes="(min-width: 1024px) 280px, 45vw"
              />
              <MediaFrame
                src="https://www.jendssafaris.co.zw/wp-content/uploads/2026/05/pexels-photo-18386171-1-1024x682.jpeg"
                alt="Giraffes and zebras grazing peacefully in the golden light of sunset on the African savanna."
                ratio="portrait"
                sizes="(min-width: 1024px) 280px, 45vw"
              />
            </Reveal>

            <Reveal delay={100} className="order-1 lg:order-2">
              <div className="flex items-start gap-6">
                <div className="w-20 shrink-0 rounded-xs bg-surface-sunken p-2 lg:w-24">
                  <Image
                    src={brand.logo}
                    alt={brand.logoAlt}
                    width={96}
                    height={120}
                    sizes="96px"
                    className="h-auto w-full object-contain"
                  />
                </div>
                <SectionHeader
                  eyebrow="Introducing Jends Safaris"
                  title="About Our Company"
                />
              </div>
              <div className="mt-8 max-w-[520px] space-y-5 text-body text-ink-muted">
                <p>
                  Jends Safaris specializes in expertly crafted tours and
                  services, aimed at immersing guests in the breathtaking
                  wonders of Victoria Falls and its captivating wildlife.
                </p>
                <p>
                  Our commitment to exceptional service, combined with local
                  expertise, ensures every traveler experiences the magic and
                  adventure of Zimbabwe&apos;s premier destination.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Our story */}
      <Section tone="alt">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="order-1">
              <SectionHeader
                eyebrow="Our Journey Begins"
                title="The Story of Jends Safaris"
              />
              <div className="mt-8 max-w-[520px] space-y-5 text-body text-ink-muted">
                <p>
                  Founded with a love for nature and adventure, Jends Safaris
                  was established to share the stunning landscapes and cultures
                  of Victoria Falls with the world.
                </p>
                <p>
                  Over the years, we have grown from a small operation into a
                  respected tour provider, with a reputation for quality and
                  unforgettable experiences.
                </p>
              </div>
              <TextLink href="/activities/" className="mt-8">
                Explore our activities
              </TextLink>
            </Reveal>

            <Reveal delay={100} className="order-2">
              <MediaFrame
                src="https://www.jendssafaris.co.zw/wp-content/uploads/2026/05/pexels-photo-10740865-1-683x1024.jpeg"
                alt="Majestic giraffes walking along a road in the Serengeti, captured in black and white."
                ratio="portrait"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Gallery — horizontal scroll row, the page's one moment of motion */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Explore Our Adventures"
              title="Photo Gallery"
              lede="A glimpse into the stunning beauty and adventures awaiting you at Victoria Falls."
            />
          </Reveal>
          <div className="mt-12">
            <ScrollGallery items={gallery} />
          </div>
        </Container>
      </Section>

      <CtaBand
        background={ctaBackgrounds.journeyAbout}
        title="Start Your Journey Now"
        copy="Contact us today to plan your unique Victoria Falls adventure."
      />
    </>
  );
}
