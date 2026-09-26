import type { ReactNode } from "react";
import { BackgroundBand, Container, CtaButtons, Eyebrow, SectionTitle } from "@/components/ui";

export function Hero({
  background,
  eyebrow,
  title,
  subtitle,
  innerClassName = "max-w-[800px]",
  subtitleClassName = "max-w-[720px]",
  children,
}: {
  background: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  innerClassName?: string;
  subtitleClassName?: string;
  children?: ReactNode;
}) {
  return (
    <BackgroundBand image={background}>
      <Container>
        <div
          className={`mx-auto pt-[110px] pb-[70px] text-center md:pt-[200px] md:pb-[120px] ${innerClassName}`}
        >
          {eyebrow ? <Eyebrow tone="white">{eyebrow}</Eyebrow> : null}
          <h1 className="mt-[10px] mb-[20px] font-display text-[32px] leading-[1.2] font-semibold text-white uppercase md:text-[54px] md:leading-[64.8px]">
            {title}
          </h1>
          {subtitle ? (
            <div className={`mx-auto text-[16px] leading-[27.2px] text-white md:text-[17px] ${subtitleClassName}`}>
              {subtitle}
            </div>
          ) : null}
          {children}
        </div>
      </Container>
    </BackgroundBand>
  );
}

export function CtaBand({
  background,
  title,
  copy,
  withButtons = true,
  buttonGap = "mt-[25px]",
  children,
}: {
  background: string;
  title: string;
  copy: string;
  withButtons?: boolean;
  buttonGap?: string;
  children?: ReactNode;
}) {
  return (
    <BackgroundBand image={background}>
      <Container>
        <div className="mx-auto max-w-[700px] py-[60px] text-center md:py-[100px]">
          <SectionTitle tone="light" className="mb-[10px]">
            {title}
          </SectionTitle>
          <div className="text-[16px] leading-[27.2px] text-white md:text-[17px]">
            {copy}
          </div>
          {withButtons ? <CtaButtons className={buttonGap} /> : null}
          {children}
        </div>
      </Container>
    </BackgroundBand>
  );
}
