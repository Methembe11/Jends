import { Container } from "@/components/ui";
import { brand, footerColumns } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="bg-surface-inverse text-ink-inverse">
      <Container>
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16 lg:py-20">
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h2 className="text-tagline text-ink-inverse/60">
                {column.heading}
              </h2>
              <ul className="mt-6 space-y-1">
                {column.lines.map((line) => (
                  <li key={line.text}>
                    {line.href ? (
                      <a
                        href={line.href}
                        {...(line.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="link-underline flex min-h-11 items-center py-1 text-body text-ink-inverse/75 transition-colors duration-200 hover:text-white"
                      >
                        {line.text}
                      </a>
                    ) : (
                      <p className="py-1 text-body text-ink-inverse/75">
                        {line.text}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 py-8">
          <p className="text-meta text-ink-inverse/60">{brand.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
