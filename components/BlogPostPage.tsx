import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { blogAuthorAvatar, blogPosts, type BlogPost } from "@/lib/site";

function NavArrow({ flip }: { flip?: boolean }) {
  return (
    <span
      className="inline-flex shrink-0 items-center"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="h-[13.59px] w-[11.9px] fill-current"
        aria-hidden="true"
      >
        <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
      </svg>
    </span>
  );
}

function findPost(slug?: string) {
  return slug ? blogPosts.find((p) => p.slug === slug) : undefined;
}

function PostNavigation({ post }: { post: BlogPost }) {
  const prev = findPost(post.prev);
  const next = findPost(post.next);
  if (!prev && !next) return null;
  return (
    <nav className="pt-[34px]">
      <div className="flex">
        {prev ? (
          <div className="w-1/2 pt-[2px] pb-[7.19px] pl-[2px] text-left">
            <Link
              href={prev.href}
              className="block w-[284px] pr-[20px] text-left text-[16px] leading-[16px] font-medium text-ink"
            >
              <span className="flex h-[16.59px] w-[264px] items-center gap-[5px] text-[13.6px] leading-[16px] font-semibold tracking-[0.68px] uppercase">
                <NavArrow />
                Previous
              </span>
              <p className="mt-[8px] w-[264px] overflow-hidden text-[16px] leading-[26.4px] font-normal text-ellipsis whitespace-nowrap">
                {prev.title}
              </p>
            </Link>
          </div>
        ) : (
          <div className="w-1/2" />
        )}
        {next ? (
          <div className="flex w-1/2 justify-end pt-[2px] pb-[7.19px] text-right">
            <Link
              href={next.href}
              className="block w-[284px] pl-[20px] text-right text-[16px] leading-[16px] font-medium text-ink"
            >
              <span className="flex h-[16.59px] w-[264px] items-center gap-[5px] text-[13.6px] leading-[16px] font-semibold tracking-[0.68px] uppercase">
                Next
                <NavArrow flip />
              </span>
              <p className="mt-[8px] w-[264px] overflow-hidden text-[16px] leading-[26.4px] font-normal text-ellipsis whitespace-nowrap">
                {next.title}
              </p>
            </Link>
          </div>
        ) : (
          <div className="w-1/2 pt-[2px] pb-[7.19px]" />
        )}
      </div>
    </nav>
  );
}

function RelatedPosts({ post }: { post: BlogPost }) {
  const related = post.related.map(findPost).filter((p): p is BlogPost => Boolean(p));
  if (related.length === 0) return null;
  return (
    <div className="mt-[34px] bg-white p-[42.5px]">
      <div className="pb-[20px]">
        <h2 className="font-display text-[26px] leading-[41.6px] font-semibold tracking-[-1px] text-black uppercase">
          Related Posts
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-[25px]">
        {related.map((item) => (
          <article key={item.slug} className="w-[300px] pb-[17px] text-gold">
            <Link href={item.href} aria-label={`Read more about ${item.title}`}>
              <Image
                src={item.relatedImage ?? item.image}
                alt={item.imageAlt}
                width={300}
                height={item.relatedImageHeight}
                className="block h-auto w-[300px] [--img-color:var(--gold)]"
                style={{ height: `${item.relatedImageHeight}px` }}
              />
            </Link>
            <header className="mt-[17px] text-ink">
              <h3 className="font-card text-[20px] leading-[30px] font-medium text-black uppercase">
                <Link href={item.href}>{item.title}</Link>
              </h3>
              <div className="entry-meta mt-[12px] text-[14px] leading-[22.4px] font-semibold text-gold">
                <span className="comments-link">
                  <Link href={`${item.href}#respond`}>Leave a Comment</Link>
                </span>
                {item.category ? (
                  <>
                    <span className="mx-[-1.13px]"> / </span>
                    <span className="cat-links">
                      <Link href="/category/general/" rel="category tag">
                        {item.category}
                      </Link>
                    </span>
                  </>
                ) : null}
                <span className="mx-[-0.74px]"> / By </span>
                <span className="posted-by">
                  <Link href="/author/developer01/" className="url fn n">
                    <span className="author-name"> {item.author} </span>
                  </Link>
                </span>
              </div>
            </header>
          </article>
        ))}
      </div>
    </div>
  );
}

function CommentForm() {
  return (
    <form className="comment-form">
      <p className="mb-[25.5px] text-[17px] leading-[27.2px] text-ink">
        <span>Your email address will not be published.</span>{" "}
        <span className="required-field-message">
          Required fields are marked <span className="required">*</span>
        </span>
      </p>
      <div className="mx-[-20px] mb-[25.5px] h-[228px] px-[20px]">
        <label className="sr-only text-[14px] leading-[20px] font-medium text-black">
          Type here..
        </label>
        <textarea
          rows={8}
          placeholder="Type here.."
          className="block h-[218px] w-[625px] max-w-full resize-none border border-hairline bg-white p-[12px] text-[16px] leading-[24px] text-[#475569] placeholder:text-[#475569]"
        />
      </div>
      <div className="flex gap-[20px]">
        {["Name*", "Email*", "Website"].map((label) => (
          <p key={label} className="mb-[29.75px] w-[195px] shrink-0">
            <label className="sr-only text-[14px] leading-[20px] font-medium text-black">
              {label}
            </label>
            <input
              type="text"
              placeholder={label}
              className="h-[40px] w-[195px] mb-[10px] border border-hairline bg-white p-[12px] text-[16px] leading-[24px] text-[#475569] placeholder:text-[#475569]"
            />
          </p>
        ))}
      </div>
      <p className="text-[17px] leading-[27.2px] text-ink">
        <input
          type="checkbox"
          className="mr-[10px] h-[13px] w-[13px] text-[rgb(128,130,133)]"
        />{" "}
        <label className="text-[14px] leading-[20px] font-medium text-black">
          Save my name, email, and website in this browser for the next time I comment
        </label>
      </p>
      <p className="mt-[29.75px]">
        <input
          type="submit"
          value="Post Comment"
          className="h-[57.5px] border-2 border-gold bg-gold px-[28px] py-[14px] text-[17px] leading-[25.5px] text-white"
        />
      </p>
    </form>
  );
}

function Comments({ post }: { post: BlogPost }) {
  const comments = post.comments ?? [];
  return (
    <div className="mt-[34px] bg-white pb-[34px]">
      {comments.length > 0 ? (
        <>
          <h3 className="p-[36px] font-card text-[24px] leading-[33.6px] font-semibold text-black uppercase">
            {`1 thought on “${post.title}”`}
          </h3>
          <ol className="list-none p-0">
            {comments.map((comment, index) => (
              <li key={index} className="px-[42.5px]">
                <article className="py-[42.5px]">
                  <div className="mb-[17px] flex pt-[1px]">
                    <div className="w-[50px] shrink-0">
                      <Image
                        src={comment.avatar}
                        alt=""
                        width={50}
                        height={50}
                        className="h-[50px] w-[50px] rounded-full"
                        style={{ color: "inherit" }}
                      />
                    </div>
                    <header className="-mx-[20px] flex flex-1 items-center justify-between pl-[47.6px] pr-[47.6px] text-[14px] leading-[23.3333px] text-gold">
                      <div className="ast-comment-cite-wrap ml-[-7px] text-[16.8px] leading-[28px] text-gold">
                        <a href="#" className="font-bold">
                          {comment.author}
                        </a>
                      </div>
                      <div className="ast-comment-time text-[14px] leading-[23.3333px] font-medium text-gold">
                        <a href="#">
                          <time>{comment.date}</time>
                        </a>
                      </div>
                    </header>
                  </div>
                  <section className="pl-[70px]">
                    <p className="mb-[16px] text-[17px] leading-[27.2px] text-ink">
                      {comment.body.split("\n").map((part, i, all) => (
                        <Fragment key={i}>
                          {i > 0 ? <br /> : null}
                          {i === all.length - 1 && comment.bodyLink ? (
                            <>
                              {part.slice(0, part.indexOf(comment.bodyLink.text))}
                              <a
                                href={comment.bodyLink.href}
                                rel="nofollow"
                                className="text-gold"
                              >
                                {comment.bodyLink.text}
                              </a>
                              {part.slice(
                                part.indexOf(comment.bodyLink.text) +
                                  comment.bodyLink.text.length
                              )}
                            </>
                          ) : (
                            part
                          )}
                        </Fragment>
                      ))}
                    </p>
                    <div className="ast-comment-edit-reply-wrap flex">
                      <a
                        href="#"
                        rel="nofollow"
                        className="block px-[10px] py-[1px] text-[13px] leading-[20.8px] text-gold"
                      >
                        Reply
                      </a>
                    </div>
                  </section>
                </article>
              </li>
            ))}
          </ol>
        </>
      ) : null}
      <div className={comments.length > 0 ? "px-[42.5px] pt-[42.5px]" : "p-[42.5px]"}>
        <h3 className="mb-[22px] font-card text-[22px] leading-[36.3px] font-semibold text-black uppercase">
          Leave a Comment
        </h3>
        <CommentForm />
      </div>
    </div>
  );
}

export default function BlogPostPage({ post }: { post: BlogPost }) {
  return (
    <div className="mx-auto w-full max-w-[710px] px-5 pt-[168px] pb-[68px] md:px-0">
      <article className="p-[40px] bg-white">
        <header>
          <h1 className="font-display text-[30px] leading-[36px] font-semibold text-black uppercase">
            {post.title}
          </h1>
          <div className="entry-meta mt-[25px] flex items-center pl-[5px] text-[13px] leading-[18.85px] font-semibold text-gold">
            <Image
              src={blogAuthorAvatar}
              alt={post.author}
              width={40}
              height={40}
                        className="h-[40px] w-[40px] shrink-0 rounded-full [--img-color:var(--gold)]"
                      />
            <span className="posted-by ml-[5px]">
              By{" "}
              <Link href="/author/developer01/" className="url fn n">
                <span className="author-name"> {post.author} </span>
              </Link>
            </span>
            <span className="posted-on ml-[7.36px]">
              <time className="published">{post.date}</time>
            </span>
          </div>
          <div className="post-thumb-img-content post-thumb mt-[25px]">
            <Image
              src={post.image}
              alt={post.imageAlt}
              width={630}
              height={472}
              className="h-[472.5px] w-full object-cover text-center"
              style={{ color: "inherit" }}
            />
          </div>
        </header>
        <div className="entry-content mt-[34px]">
          {post.body.map((section, index) => (
            <div key={index}>
              {section.heading ? (
                <h4
                  className={`font-display text-[22px] leading-[30.8px] font-semibold text-black uppercase ${
                    index === 0 ? "mb-[16.6px]" : "mt-[33px] mb-[16.6px]"
                  }`}
                >
                  {section.heading}
                </h4>
              ) : null}
              <p
                className={`text-[17px] leading-[27.2px] text-ink ${
                  index === post.body.length - 1 ? "mb-0" : "mb-[57.46px]"
                }`}
              >
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </article>
      <PostNavigation post={post} />
      <RelatedPosts post={post} />
      <Comments post={post} />
    </div>
  );
}
