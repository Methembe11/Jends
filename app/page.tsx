import Image from "next/image";
import { CtaBand } from "@/components/bands";
import HeroExpand from "@/components/motion/HeroExpand";
import Reveal from "@/components/Reveal";
import PinnedGallery from "@/components/motion/PinnedGallery";
import WhyCards from "@/components/WhyCards";
import {
  Container,
  MediaFrame,
  PrimaryButton,
  SecondaryButton,
  Section,
  SectionHeader,
  Stars,
  TourCard,
} from "@/components/ui";
import {
  adventureCta,
  brand,
  ctaBackgrounds,
  galleryColumns,
  heroBackgrounds,
  heroVideo,
  homeGallery,
  homeIntro,
  testimonials,
  tours,
  whyUsPoints,
} from "@/lib/site";

/**
 * Homepage section order mirrors the original page, restyled onto the
 * reference's design language: 100vh hero, oversized light display headings,
 * pill buttons with a circular arrow badge, and 224px section rhythm.
 */
export default function Home() {
  const gallery = galleryColumns.flat();

  return (
    <>
      <HeroExpand
        background={heroBackgrounds.home}
        video={heroVideo.enabled ? heroVideo.src : undefined}
        eyebrow="Experience the Adventure"
        title="Discover Victoria Falls"
        subtitle="Join Jends Safaris for breathtaking guided tours, exhilarating activities, and unforgettable experiences around the majestic Victoria Falls."
      >
        <PrimaryButton href="/contact/" tone="light">
          Plan Your Safari
        </PrimaryButton>
      </HeroExpand>

      {/* Introduction */}
      <Section>
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="w-20 lg:w-24">
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
                eyebrow={homeIntro.eyebrow}
                title={homeIntro.title}
                className="mt-8"
              />
              <div className="mt-6 max-w-[520px] space-y-4 text-body text-ink-muted">
                {homeIntro.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <PrimaryButton href={homeIntro.ctaHref} className="mt-8">
                {homeIntro.ctaLabel}
              </PrimaryButton>
            </Reveal>

            <Reveal delay={100}>
              <MediaFrame
                src={homeIntro.image}
                alt={homeIntro.imageAlt}
                ratio="landscape"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Popular tours — the four flagship experiences, scannable in one screen */}
      <Section tone="alt">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Popular Tours"
              title="Guided Tours & Transfers"
              lede="Discover the best tours and transfers tailored to your needs."
            />
          </Reveal>
          <div className="mt-14 grid gap-x-8 gap-y-14 lg:grid-cols-2 lg:gap-x-16">
            {tours.slice(0, 4).map((tour, index) => (
              <Reveal key={tour.title} delay={(index % 2) * 90}>
                <TourCard {...tour} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14">
            <PrimaryButton href="/activities/">View All Activities</PrimaryButton>
          </Reveal>
        </Container>
      </Section>

      {/* Mid-page call to action */}
      <Section>
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionHeader eyebrow="" title={adventureCta.title} />
              <p className="mt-6 max-w-[416px] text-body text-ink-muted">
                {adventureCta.copy}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <PrimaryButton href={adventureCta.primaryHref}>
                  {adventureCta.primaryLabel}
                </PrimaryButton>
                <SecondaryButton href={adventureCta.secondaryHref}>
                  {adventureCta.secondaryLabel}
                </SecondaryButton>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <MediaFrame
                src={adventureCta.image}
                alt={adventureCta.imageAlt}
                ratio="landscape"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Why choose us */}
      <Section tone="alt">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Why Choose Us"
              title="Unmatched Safari Experiences"
              lede="Expert guides and tailored experiences ensure your safari is memorable and unique."
              align="center"
            />
          </Reveal>
          <div className="mt-16">
            <WhyCards items={whyUsPoints} />
          </div>
        </Container>
      </Section>

      {/* Photo gallery — the page's one moment of lateral motion. Pinned and
          scrubbed sideways on pointer devices; a swipeable strip on touch. */}
      <PinnedGallery
        items={gallery}
        header={
          <div className="mb-12">
            <Container>
              <Reveal>
                <SectionHeader
                  eyebrow={homeGallery.eyebrow}
                  title={homeGallery.title}
                  lede={homeGallery.lede}
                />
              </Reveal>
            </Container>
          </div>
        }
      />

      {/* Testimonials — hairline-bordered cards on #f9f9f9 that warm to
          beige on hover, with the quote set large and light. */}
      <Section tone="alt">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="What Our Guests Say"
              title="Guest Testimonials"
              align="center"
              lede="Hear from our satisfied adventurers."
            />
          </Reveal>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 90}>
                <article className="flex h-full flex-col justify-between gap-8 rounded-well border border-surface-inverse bg-surface-sunken p-7 transition-colors duration-300 ease-out-expo hover:bg-surface-alt lg:p-[30px]">
                  <div>
                    <Stars />
                    <blockquote className="mt-6 font-display text-[26px] font-normal leading-[1.3] text-ink lg:text-[33px]">
                      {testimonial.quote}
                    </blockquote>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-surface-alt">
                      <Image
                        src={testimonial.avatar}
                        alt=""
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <p className="font-display text-[17px] text-ink">
                      {testimonial.name}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        background={ctaBackgrounds.journeyHome}
        eyebrow="Plan Your Safari"
        title="Start Your Journey Now"
        copy="Contact us today to plan your unique Victoria Falls adventure."
      />
    </>
  );
}
