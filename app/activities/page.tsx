import type { Metadata } from "next";
import { CtaBand, Hero } from "@/components/bands";
import Reveal from "@/components/Reveal";
import {
  ActivityCard,
  Container,
  MediaFrame,
  Section,
  SectionHeader,
  TextLink,
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

const activityColumns = [
  activityTours.slice(0, 4),
  activityTours.slice(4, 8),
];

export default function Activities() {
  return (
    <>
      <Hero
        background={heroBackgrounds.activities}
        eyebrow="Our Exclusive Menu"
        title="Discover Our Offerings"
        subtitle="Explore a wide range of unforgettable experiences with Jends Safaris, crafted for every adventurous spirit."
      />

      {/* Inventory — two scannable columns, hairline separated */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Tours & Transfers"
              title="Book Your Experience"
              lede="Discover the best tours and transfers tailored to your needs."
            />
          </Reveal>
          <div className="mt-14 grid gap-x-16 gap-y-4 lg:grid-cols-2">
            {activityColumns.map((column, index) => (
              <Reveal key={index} delay={index * 90}>
                {column.map((tour) => (
                  <ActivityCard key={tour.title} {...tour} />
                ))}
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Cinematic photographic break */}
      <Section tone="alt">
        <Container>
          <Reveal>
            <MediaFrame
              ratio="band"
              src="https://www.jendssafaris.co.zw/wp-content/uploads/2026/05/pexels-photo-33650610-1-576x1024.jpeg"
              alt="Two giraffes gracefully roam the savannah in Tanzania, capturing the essence of African wildlife."
              sizes="(min-width: 1024px) 1240px, 100vw"
            />
          </Reveal>
        </Container>
      </Section>

      {/* Packages — asymmetric row */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Special Offers"
              title="Limited Time Packages"
              lede="Exclusive deals tailored for your unforgettable adventure."
            />
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
            {activityPackages.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="group">
                  <MediaFrame
                    src={item.image}
                    alt={item.imageAlt}
                    ratio="portrait"
                    sizes="(min-width: 768px) 30vw, 90vw"
                    imageClassName="transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                  />
                  <h3 className="mt-6 font-display text-card text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-body text-ink-muted">
                    {activityPackageDescriptions[index]}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <TextLink href="/contact/">Ask about a package</TextLink>
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        background={ctaBackgrounds.journeyActivities}
        title="Start Your Journey Now"
        copy="Contact us today to plan your unique Victoria Falls adventure."
      />
    </>
  );
}
