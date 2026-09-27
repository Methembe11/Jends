import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/bands";
import Reveal from "@/components/Reveal";
import {
  Container,
  MediaFrame,
  Section,
  SectionHeader,
  TextLink,
} from "@/components/ui";
import { blogPosts, heroBackgrounds } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog - Jends Safaris",
  description:
    "Read the latest safari insights, travel tips, and stories from Jends Safaris.",
};

export default function Blog() {
  return (
    <>
      <Hero
        background={heroBackgrounds.blog}
        eyebrow="Safari Insights"
        title="Stories From the Wild"
        subtitle="Read the latest safari insights, travel tips, and stories from Jends Safaris."
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Latest Posts"
              title="From the Journal"
              align="center"
              lede="Travel tips, destination guides, and stories from our guides on the ground."
            />
          </Reveal>

          <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {blogPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 80}>
                <article className="group">
                  <Link href={post.href} className="block">
                    <MediaFrame
                      src={post.image}
                      alt={post.imageAlt}
                      ratio="portrait"
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                      imageClassName="transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                    />
                  </Link>
                  <p className="mt-6 text-meta text-ink">
                    {post.date}
                  </p>
                  <h2 className="mt-3 font-display text-card text-ink">
                    <Link
                      href={post.href}
                      className="transition-colors duration-200 group-hover:text-ink"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  {post.excerpt ? (
                    <p className="mt-4 text-body text-ink-muted">
                      {post.excerpt}
                    </p>
                  ) : null}
                  <TextLink href={post.href} className="mt-5">
                    Read post
                  </TextLink>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
