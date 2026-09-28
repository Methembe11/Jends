import Reveal from "@/components/Reveal";
import DrawIcon from "@/components/motion/DrawIcon";

/**
 * Trust row. Reproduces the reference card anatomy: a beige well
 * (.why-card-bg — 4px radius, 27.25em tall) holding one oversized line icon
 * (~9em), with the heading sitting *below* the well rather than inside it.
 * Decorative only; the text content is unchanged.
 */

function CompassIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="9.25" />
      <path d="m15.6 8.4-2.1 5.1-5.1 2.1 2.1-5.1z" />
    </svg>
  );
}

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2.6 19.4 5.8v5.9c0 4.6-3.1 8.2-7.4 9.1-4.3-.9-7.4-4.5-7.4-9.1V5.8z" />
      <path d="m8.8 11.8 2.3 2.3 4.3-4.3" />
    </svg>
  );
}

function SparkIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2.8v3.6M12 17.6v3.6M2.8 12h3.6M17.6 12h3.6M5.5 5.5l2.5 2.5M16 16l2.5 2.5M18.5 5.5 16 8M8 16l-2.5 2.5" />
      <circle cx="12" cy="12" r="3.1" />
    </svg>
  );
}

const icons = [CompassIcon, ShieldIcon, SparkIcon];

export default function WhyCards({ items }: { items: string[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-3 lg:gap-[1.25em]">
      {items.map((item, index) => {
        const Icon = icons[index % icons.length];
        return (
          <Reveal key={item} delay={index * 90}>
            <article className="group h-full">
              {/* The well: beige, 4px radius, oversized centred mark. */}
              <div className="mb-6 flex h-[150px] items-center justify-center rounded-well bg-surface-alt transition-colors duration-500 ease-out-expo group-hover:bg-surface-sunken lg:h-[436px]">
                <DrawIcon className="h-20 w-20 text-ink transition-transform duration-500 ease-out-expo group-hover:scale-105 lg:h-36 lg:w-36">
                  <Icon className="h-full w-full" />
                </DrawIcon>
              </div>
              <h3 className="text-h5 text-ink">{item}</h3>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
