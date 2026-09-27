import type { Metadata } from "next";
import { Hero } from "@/components/bands";
import ContactForm from "@/app/contact/ContactForm";
import Reveal from "@/components/Reveal";
import {
  Container,
  MediaFrame,
  Section,
  SectionHeader,
} from "@/components/ui";
import { brand, heroBackgrounds, whatsapp } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us - Jends Safaris",
  description:
    "Have questions or need assistance with your booking? Our dedicated team is here to help. Call, email, or message us on WhatsApp.",
};

const contactCards = [
  { heading: "Call us", value: brand.phone, href: brand.phoneHref },
  { heading: "Email us", value: brand.email, href: brand.emailHref },
  {
    heading: "WhatsApp",
    value: brand.phone,
    href: whatsapp.href,
  },
];

export default function Contact() {
  return (
    <>
      <Hero
        background={heroBackgrounds.contact}
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Have questions or need assistance with your booking? Our dedicated team is here to help."
      />

      <Section>
        <Container>
          {/* Contact details strip */}
          <Reveal>
            <dl className="grid gap-8 border-b border-line pb-12 sm:grid-cols-3 sm:gap-6">
              {contactCards.map((card) => (
                <div key={card.heading}>
                  <dt className="text-tagline text-ink-muted">
                    {card.heading}
                  </dt>
                  <dd className="mt-3">
                    <a
                      href={card.href}
                      {...(card.heading === "WhatsApp"
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="link-underline inline-flex min-h-11 items-center font-display text-[20px] text-ink lg:text-[22px]"
                    >
                      {card.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Form + reassurance panel */}
          <div className="mt-16 grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <Reveal>
              <SectionHeader
                eyebrow="Send a Message"
                title="Tell Us About Your Trip"
              />
              <div className="mt-10">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={100} className="space-y-8">
              <MediaFrame
                ratio="portrait"
                src="https://www.jendssafaris.co.zw/wp-content/uploads/2026/05/pexels-photo-32489711-1-1024x682.jpeg"
                alt="A cheetah rests in the golden savannah light at sunset in the Serengeti, Tanzania."
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="rounded-xs border border-line bg-surface-sunken p-6">
                <h3 className="font-display text-card text-ink">
                  Working hours
                </h3>
                <ul className="mt-4 space-y-1 text-body text-ink-muted">
                  <li>Monday – Friday: 8 AM – 5 PM</li>
                  <li>Saturday – Sunday: 10 AM – 5 PM</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
