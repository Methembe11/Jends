import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { blogPosts, heroBackgrounds } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog - Jends Safaris",
  description:
    "Read the latest safari insights, travel tips, and stories from Jends Safaris.",
};

export default function Blog() {
  return (
    <>
      <section
        className="relative flex bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackgrounds.blog})`,
        }}
      >
        <Container>
          <div className="pt-[100px] pb-[71.3px] md:pt-[193.09px] md:pb-[142.11px]">
            <h1 className="text-center font-display text-[32px] leading-[38.4px] font-semibold text-white uppercase md:text-[54px] md:leading-[64.8px]">
              Safari Insights
            </h1>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="py-[40px] md:py-0 md:pt-[68px] md:pb-[68px]">
            <div className="grid grid-cols-1 gap-[40px] md:mx-[-17px] md:grid-cols-3 md:gap-0">
              {blogPosts.map((post) => (
                <article key={post.slug} className="px-0 md:mb-[34px] md:px-[17px]">
                  <div className="bg-white p-[25.5px]">
                    <div className="mx-[-25.5px] mt-[-25.5px] mb-[25.5px]">
                      <Link href={post.href} className="block text-gold">
                        <Image
                          src={post.image}
                          alt={post.imageAlt}
                          width={377}
                          height={283}
                          className="h-[282.95px] w-full object-cover [--img-color:var(--gold)]"
                        />
                      </Link>
                    </div>
                    <h2 className="mb-[13.2px] font-display text-[20px] leading-[26px] font-semibold tracking-[-1px] text-black uppercase md:text-[22px] md:leading-[28.6px]">
                      <Link href={post.href} className="hover:text-gold">
                        {post.title}
                      </Link>
                    </h2>
                    <header className="mb-[15.6px] text-[12px] leading-[20.8px] md:text-[13px]">
                      <div className="text-[12px] leading-[18.85px] font-semibold text-gold md:text-[13px]">
                        <span className="posted-on">
                          <span className="published">{post.date}</span>
                        </span>
                      </div>
                    </header>
                    <p className="text-[16px] leading-[27.2px] text-ink md:text-[17px]">
                      {post.excerpt}
                    </p>
                    <p className="mt-[25.5px] mb-[13.6px] text-[17px] leading-[27.2px] font-semibold text-ink">
                      <Link href={post.href} className="inline-block text-gold hover:text-gold">
                        Read Post »
                      </Link>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
