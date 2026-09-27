import Link from "next/link";
import {
  Container,
  MediaFrame,
  Section,
  SectionHeader,
  TextLink,
} from "@/components/ui";
import { blogPosts, type BlogPost } from "@/lib/site";

function findPost(slug?: string) {
  return slug ? blogPosts.find((post) => post.slug === slug) : undefined;
}

function PostNavigation({ post }: { post: BlogPost }) {
  const prev = findPost(post.prev);
  const next = findPost(post.next);
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Post navigation"
      className="mt-16 grid gap-8 border-t border-line pt-8 sm:grid-cols-2"
    >
      {prev ? (
        <Link href={prev.href} className="group block">
          <span className="text-tagline text-ink-muted">Previous</span>
          <span className="mt-2 block font-display text-[19px] leading-snug text-ink transition-colors duration-200 group-hover:text-ink lg:text-[21px]">
            {prev.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={next.href} className="group block sm:text-right">
          <span className="text-tagline text-ink-muted">Next</span>
          <span className="mt-2 block font-display text-[19px] leading-snug text-ink transition-colors duration-200 group-hover:text-ink lg:text-[21px]">
            {next.title}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}

function RelatedPosts({ post }: { post: BlogPost }) {
  const related = post.related
    .map(findPost)
    .filter((item): item is BlogPost => Boolean(item));

  if (related.length === 0) return null;

  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Keep Reading"
          title="Related Posts"
          align="center"
        />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-8">
          {related.map((item) => (
            <article key={item.slug} className="group">
              <Link href={item.href} className="block">
                <MediaFrame
                  src={item.relatedImage ?? item.image}
                  alt={item.relatedImageAlt ?? item.imageAlt}
                  ratio="portrait"
                  sizes="(min-width: 640px) 40vw, 90vw"
                  imageClassName="transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                />
                <h3 className="mt-6 font-display text-card text-ink transition-colors duration-200 group-hover:text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-meta text-ink-muted">{item.date}</p>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default function BlogPostPage({ post }: { post: BlogPost }) {
  return (
    <>
      <Section>
        <Container>
          <article>
            <header className="mx-auto max-w-[760px]">
              <TextLink href="/blog/" className="text-tagline">
                All posts
              </TextLink>
              <h1 className="mt-6 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.12] text-ink">
                {post.title}
              </h1>
              <p className="mt-5 flex items-center gap-3 text-meta text-ink-muted">
                <span>{post.date}</span>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-surface-inverse" />
                <span>Jends Safaris</span>
              </p>
            </header>

            <div className="mx-auto mt-12 max-w-[1100px]">
              <MediaFrame
                src={post.image}
                alt={post.imageAlt}
                ratio="band"
                priority
                sizes="(min-width: 1024px) 1100px, 100vw"
              />
            </div>

            <div className="mx-auto mt-14 max-w-[680px]">
              {post.body.map((section, index) => (
                <div key={index}>
                  {section.heading ? (
                    <h2
                      className={`font-display text-[clamp(1.35rem,2.6vw,1.75rem)] leading-[1.25] text-ink ${
                        index === 0 ? "mb-5" : "mt-12 mb-5"
                      }`}
                    >
                      {section.heading}
                    </h2>
                  ) : null}
                  <p
                    className={`text-body-lg text-ink-muted ${
                      index === post.body.length - 1 ? "" : "mb-8"
                    }`}
                  >
                    {section.text}
                  </p>
                </div>
              ))}

              <div className="mt-12 border-l-2 border-surface-inverse pl-6">
                <p className="font-display text-[20px] leading-[1.45] text-ink lg:text-[24px]">
                  Ready to see Victoria Falls for yourself?
                </p>
                <TextLink href="/activities/" className="mt-4">
                  Explore our activities
                </TextLink>
              </div>

              <PostNavigation post={post} />
            </div>
          </article>
        </Container>
      </Section>

      <RelatedPosts post={post} />

      <Section tone="alt">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] leading-tight text-ink">
              Questions about your booking?
            </h2>
            <TextLink href="/contact/">Contact Jends Safaris</TextLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
