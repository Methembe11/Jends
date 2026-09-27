import type { ReactNode } from "react";
import {
  BackgroundBand,
  Container,
  CtaButtons,
  Eyebrow,
  SectionTitle,
} from "@/components/ui";

/**
 * Full-height photographic hero. Mirrors the reference metrics: 100vh media,
 * content anchored bottom-left, heading column capped at 45.375em, lede at
 * 26em, and a 6.25rem bottom offset so the type clears the fold cleanly.
 */
export function Hero({
  background,
  video,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  background: string;
  /** Optional self-hosted mp4 played behind `background`. */
  video?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <BackgroundBand image={background} video={video} minHeight="min-h-[100svh]" priority>
      <Container>
        <div className="flex flex-col items-start pb-[6.25rem] pt-32">
          {eyebrow ? <Eyebrow tone="light">{eyebrow}</Eyebrow> : null}
          <h1 className="mt-6 max-w-[726px] text-display text-ink-inverse">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-6 max-w-[416px] text-body text-ink-inverse">
              {subtitle}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </BackgroundBand>
  );
}

/**
 * Closing band. Left-aligned like the hero so the page keeps a single reading
 * axis; carries one message and one action.
 */
export function CtaBand({
  background,
  title,
  copy,
  eyebrow,
  withButtons = true,
  children,
}: {
  background: string;
  title: string;
  copy: string;
  eyebrow?: string;
  withButtons?: boolean;
  children?: ReactNode;
}) {
  return (
    <BackgroundBand
      image={background}
      minHeight="min-h-[64svh] lg:min-h-[72svh]"
    >
      <Container>
        <div className="flex max-w-[726px] flex-col items-start pb-20 pt-40 lg:pb-28 lg:pt-52">
          {eyebrow ? <Eyebrow tone="light">{eyebrow}</Eyebrow> : null}
          <SectionTitle tone="light" className="mt-6">
            {title}
          </SectionTitle>
          <p className="mt-6 max-w-[416px] text-body text-ink-inverse">
            {copy}
          </p>
          {withButtons ? <CtaButtons tone="light" className="mt-9" /> : null}
          {children}
        </div>
      </Container>
    </BackgroundBand>
  );
}
