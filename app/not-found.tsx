import { Hero } from "@/components/bands";
import { Container, CtaButtons, Section } from "@/components/ui";
import { heroBackgrounds } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <Hero
        background={heroBackgrounds.home}
        eyebrow="Page Not Found"
        title="We Could Not Find That Page"
        subtitle="The page you are looking for may have been moved or no longer exists."
      >
        <CtaButtons tone="light" />
      </Hero>

      <Section tone="alt">
        <Container>
          <div className="flex flex-col items-center gap-5 text-center">
            <p className="text-body text-ink-muted">
              Try the activities page, or head back to the homepage.
            </p>
            <p className="font-display text-heading text-ink">
              404
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
