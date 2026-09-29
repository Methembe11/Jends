import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import HeroVideo from "@/components/HeroVideo";
import Parallax from "@/components/motion/Parallax";
import MediaDrift from "@/components/motion/MediaDrift";

/* ==========================================================================
   Layout
   ========================================================================== */

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-[1240px] px-5">{children}</div>;
}

/** Vertical rhythm: the reference runs 14em (224px) top/bottom per section. */
export function Section({
  children,
  tone = "surface",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: "surface" | "alt" | "inverse";
  className?: string;
  id?: string;
}) {
  const tones = {
    surface: "bg-surface text-ink",
    alt: "bg-surface-alt text-ink",
    inverse: "bg-surface-inverse text-ink-inverse",
  } as const;

  return (
    <section id={id} className={`${tones[tone]} py-4xl lg:py-6xl ${className}`}>
      {children}
    </section>
  );
}

/* ==========================================================================
   Typography
   ========================================================================== */

export function Eyebrow({
  children,
  tone = "dark",
  align = "left",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <p
      className={`text-tagline ${
        tone === "light" ? "text-ink-inverse" : "text-ink-muted"
      } ${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  tone = "dark",
  align = "left",
  className = "",
  as: Tag = "h2",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Tag
      className={`text-heading ${
        tone === "light" ? "text-ink-inverse" : "text-ink"
      } ${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Eyebrow → title → lede. The single section-header pattern site-wide. */
export function SectionHeader({
  eyebrow,
  title,
  lede,
  tone = "dark",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-[640px] text-center" : "max-w-[640px]"} ${className}`}
    >
      {eyebrow ? (
        <Eyebrow tone={tone} align={align}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <SectionTitle tone={tone} align={align} className="mt-3">
        {title}
      </SectionTitle>
      {lede ? (
        <p
          className={`mt-5 text-lede ${
            tone === "light" ? "text-ink-inverse/80" : "text-ink-muted"
          }`}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}

export function PageTitle({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <h1
      className={`text-display ${tone === "light" ? "text-ink-inverse" : "text-ink"} ${className}`}
    >
      {children}
    </h1>
  );
}

/* ==========================================================================
   Buttons — one system, one shape: label + circular arrow badge.
   Matches the reference language (text block + rotating arrow disc) while
   staying near-sharp to keep the editorial feel.
   ========================================================================== */

/**
 * Buttons — the reference language, reproduced structurally:
 * a flex row holding a fully-rounded pill (.button, border-radius:50vw)
 * followed by a separate 26px circular badge (.btn-icon-wrapper) with an
 * up-right arrow. The two are siblings, not nested.
 */

type ButtonTone = "dark" | "light";

/** The 1.625rem (26px) circular arrow disc. */
function ArrowBadge({ tone }: { tone: ButtonTone }) {
  return (
    <span
      aria-hidden="true"
      className={`grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full p-[6px] transition-colors duration-300 ease-out-expo ${
        tone === "dark"
          ? "bg-surface-inverse text-ink-inverse"
          : "bg-surface-sunken text-ink"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="btn-arrow h-full w-full group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
      >
        <path d="M7 17 17 7M9 7h8v8" />
      </svg>
    </span>
  );
}

/**
 * The reference's pill resolves to 40px tall, which sits under the 44px
 * minimum touch target. `min-h-11` lifts the pill itself to 44px rather than
 * padding out a pseudo-element: an extended hit area is easy to occlude with
 * the next block in the flow, which would silently eat the extra taps.
 */
const PILL =
  "inline-flex min-h-11 items-center justify-center rounded-[50vw] border px-5 py-3 text-btn transition-colors duration-300 ease-out-expo";

export function PrimaryButton({
  href,
  children,
  tone = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: ButtonTone;
  className?: string;
}) {
  const pills = {
    dark: "border-surface-inverse bg-surface-inverse text-ink-inverse hover:bg-transparent hover:text-ink",
    light: "border-surface-sunken bg-surface-sunken text-ink hover:bg-transparent hover:text-ink-inverse",
  } as const;

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 ${className}`}
    >
      <span
        className={`${PILL} ${pills[tone]}`}
      >
        {children}
      </span>
      <ArrowBadge tone={tone} />
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
  tone = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: ButtonTone;
  className?: string;
}) {
  const pills = {
    dark: "border-surface-inverse bg-transparent text-ink hover:bg-surface-inverse hover:text-ink-inverse",
    light: "border-surface-sunken bg-transparent text-ink-inverse hover:bg-surface-sunken hover:text-ink",
  } as const;

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 ${className}`}
    >
      <span
        className={`${PILL} ${pills[tone]}`}
      >
        {children}
      </span>
      <ArrowBadge tone={tone} />
    </Link>
  );
}

/** Tertiary: typographic link with an animated rule. */
export function TextLink({
  href,
  children,
  tone = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: ButtonTone;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group/tl inline-flex min-h-11 items-center gap-2 text-body ${
        tone === "light" ? "text-ink-inverse" : "text-ink"
      } ${className}`}
    >
      <span className="link-underline">{children}</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-300 ease-out-expo group-hover/tl:translate-x-1"
      >
        &rarr;
      </span>
    </Link>
  );
}

/**
 * The one booking pair used site-wide. The primary label is identical on
 * every page so the action is never ambiguous.
 */
export function CtaButtons({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <PrimaryButton href="/contact/" tone={tone}>
        Plan Your Safari
      </PrimaryButton>
      <SecondaryButton href="/activities/" tone={tone}>
        View Activities
      </SecondaryButton>
    </div>
  );
}

/* ==========================================================================
   Photography
   ========================================================================== */

export function MediaFrame({
  src,
  alt,
  ratio = "portrait",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
  imageClassName = "",
  parallax = true,
}: {
  src: string;
  alt: string;
  ratio?: "portrait" | "square" | "landscape" | "band";
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  /** Scrub-linked drift. On by default; the image is scaled to allow travel. */
  parallax?: boolean;
}) {
  const ratios = {
    portrait: "aspect-portrait",
    square: "aspect-square-safari",
    landscape: "aspect-landscape",
    band: "aspect-[16/9] lg:aspect-[21/9]",
  } as const;

  return (
    <div className={`media-frame ${ratios[ratio]} ${className}`}>
      {parallax ? (
        <Parallax className="h-full w-full">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={`object-cover ${imageClassName}`}
          />
        </Parallax>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${imageClassName}`}
        />
      )}
    </div>
  );
}

/* ==========================================================================
   Full-bleed image band
   ========================================================================== */

export function BackgroundBand({
  image,
  video,
  children,
  className = "",
  minHeight = "min-h-[68vh] lg:min-h-[76vh]",
  priority = false,
  mediaDrift = true,
}: {
  image: string;
  /** Optional self-hosted mp4. Plays behind `image`, which stays as the poster. */
  video?: string;
  children: ReactNode;
  className?: string;
  minHeight?: string;
  priority?: boolean;
  /** Scrub-linked drift on the background. Off leaves the media static. */
  mediaDrift?: boolean;
}) {
  const media = video ? (
    <HeroVideo
      src={video}
      poster={image}
      className="absolute inset-0 h-full w-full object-cover"
    />
  ) : (
    <Image
      src={image}
      alt=""
      fill
      priority={priority}
      sizes="100vw"
      className="object-cover"
    />
  );

  return (
    <section
      className={`relative flex w-full items-end overflow-hidden bg-surface-inverse ${minHeight} ${className}`}
    >
      {mediaDrift ? <MediaDrift>{media}</MediaDrift> : media}
      {/* The reference sits a single 10%-black filter over its hero media
          (rgba(0,0,0,.1)) and relies on type contrast alone. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/10"
      />
      <div className="relative w-full">{children}</div>
    </section>
  );
}

/* ==========================================================================
   Cards
   ========================================================================== */

type CardProps = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  price?: string;
};

/**
 * Tour/activity card. The reference stacks media above copy with no rule
 * above the item, so the grid reads as a set of images rather than a list.
 */
function SafariCard({ image, imageAlt, title, description, price }: CardProps) {
  return (
    <article className="group flex flex-col">
      <div className="media-frame aspect-square-safari w-full">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-5 flex min-w-0 flex-1 flex-col">
        <h3 className="font-display text-h5 text-ink">{title}</h3>
        <p className="mt-2 text-small text-ink-muted">{description}</p>
        {price ? (
          <p className="mt-3 text-meta text-ink-muted">{price}</p>
        ) : null}
      </div>
    </article>
  );
}

export function TourCard(props: CardProps) {
  return <SafariCard {...props} />;
}

export function ActivityCard(props: CardProps) {
  return <SafariCard {...props} />;
}

/* ==========================================================================
   Misc
   ========================================================================== */

export function Stars({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex gap-1 text-ink ${className}`}
      role="img"
      aria-label="Rated 5 out of 5"
    >
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px] fill-current"
        >
          <path d="m12 17.27 5.18 3.13-1.37-5.9 4.58-3.96-6.03-.52L12 4.5 9.64 10.02l-6.03.52 4.58 3.96-1.37 5.9z" />
        </svg>
      ))}
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul role="list" className="mt-8 space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-body text-ink">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="mt-1 h-4 w-4 shrink-0 text-ink"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
