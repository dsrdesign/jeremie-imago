import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Chip } from "@/components/ui/chip";
import { formations } from "@/lib/content";

export const metadata: Metadata = {
  title: "Formations",
  description:
    "Toutes les formations et programmes de transmission de compétences animés par Jérémie Imago.",
};

/* ── Déco ── */
function GlobeIllustration() {
  return (
    <svg className="h-48 w-48 opacity-[0.12]" viewBox="0 0 160 160" fill="none" aria-hidden>
      <defs>
        <radialGradient id="globe-g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3F0069" />
          <stop offset="100%" stopColor="#E10600" />
        </radialGradient>
      </defs>
      <circle cx="80" cy="80" r="72" stroke="url(#globe-g)" strokeWidth="4" />
      <ellipse cx="80" cy="80" rx="30" ry="72" stroke="url(#globe-g)" strokeWidth="3" />
      <line x1="8" y1="80" x2="152" y2="80" stroke="url(#globe-g)" strokeWidth="3" />
      <line x1="8" y1="52" x2="152" y2="52" stroke="url(#globe-g)" strokeWidth="2" />
      <line x1="8" y1="108" x2="152" y2="108" stroke="url(#globe-g)" strokeWidth="2" />
    </svg>
  );
}

export default function FormationsPage() {
  return (
    <>
      {/* ── En-tête ── */}
      <section className="relative overflow-hidden border-b border-border py-14 sm:py-20">
        <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2">
          <GlobeIllustration />
        </div>
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-700">
            {formations.length} programmes
          </p>
          <h1 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Formations &amp; Transmission
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted">
            De la cosmétique artisanale à l'entrepreneuriat rural, Jérémie forme des porteurs de projets
            concrets en s'appuyant sur des pratiques ancrées dans les réalités du terrain.
          </p>
        </Container>
      </section>

      {/* ── Liste ── */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="flex flex-col gap-6">
            {formations.map((formation, index) => (
              <Link
                key={formation.id}
                href={`/formations/${formation.id}`}
                className="card-soft group flex flex-col gap-5 p-7 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] transition-all duration-200 sm:flex-row sm:items-start sm:gap-7"
              >
                {/* Numéro */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-violet-700 text-sm font-bold text-violet-700">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Contenu */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <Chip variant="violet">{formation.year}</Chip>
                    <Chip>{formation.organisation}</Chip>
                  </div>
                  <h2 className="mt-3 text-lg font-bold leading-snug text-foreground group-hover:text-violet-700 transition-colors">
                    {formation.title}
                  </h2>
                  <p className="mt-1 text-sm text-foreground-muted">{formation.lieu}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                    {formation.shortDescription}
                  </p>
                  {formation.localites && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {formation.localites.map((loc) => (
                        <span
                          key={loc}
                          className="inline-flex items-center gap-1.5 rounded-full bg-surface-secondary px-3 py-1 text-xs font-medium text-foreground-muted"
                        >
                          <span className="h-1 w-1 rounded-full bg-red-500" aria-hidden />
                          {loc}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <span className="shrink-0 text-sm font-semibold text-violet-700 self-end sm:self-start">
                  Détail →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
