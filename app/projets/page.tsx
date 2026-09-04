import type { Metadata } from "next";
import Link from "next/link";
import { FlaskConical } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Chip } from "@/components/ui/chip";
import { projets } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Projets et réalisations concrets de Jérémie Imago : savon au charbon activé, jus naturels, production de charbon activé.",
};

/* ── Flasque illustrative SVG ── */
function FlaskIllustration() {
  return (
    <svg className="h-44 w-44 opacity-[0.12]" viewBox="0 0 120 160" fill="none" aria-hidden>
      <defs>
        <linearGradient id="flask-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E10600" />
          <stop offset="100%" stopColor="#3F0069" />
        </linearGradient>
      </defs>
      {/* Corps */}
      <path
        d="M40 60 L20 130 Q18 148 60 148 Q102 148 100 130 L80 60 Z"
        fill="url(#flask-g)"
        opacity="0.6"
      />
      {/* Col */}
      <rect x="40" y="10" width="40" height="52" rx="4" stroke="url(#flask-g)" strokeWidth="4" />
      {/* Bouchon */}
      <rect x="34" y="6" width="52" height="10" rx="4" fill="url(#flask-g)" />
      {/* Bulles */}
      <circle cx="50" cy="110" r="8" fill="white" opacity="0.3" />
      <circle cx="72" cy="125" r="5" fill="white" opacity="0.3" />
      <circle cx="62" cy="100" r="4" fill="white" opacity="0.3" />
    </svg>
  );
}

const CATEGORY_COLORS: Record<string, string> = {
  "Formulation & Production": "violet",
  "Transformation agroalimentaire": "red",
  "Transformation": "default",
};

export default function ProjetsPage() {
  return (
    <>
      {/* ── En-tête ── */}
      <section className="relative overflow-hidden border-b border-border py-14 sm:py-20">
        <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2">
          <FlaskIllustration />
        </div>
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest text-red-500">
            {projets.length} réalisations
          </p>
          <h1 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Projets &amp; Réalisations
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted">
            Des produits formulés, testés et produits concrètement — du savon au charbon activé aux jus
            naturels, en passant par la production de charbon.
          </p>
        </Container>
      </section>

      {/* ── Grille ── */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projets.map((projet) => (
              <Link
                key={projet.id}
                href={`/projets/${projet.id}`}
                className="card-soft group flex flex-col gap-4 p-7 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] transition-all duration-200"
              >
                {/* Illustration de catégorie */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-red-25 text-red-500">
                    <FlaskConical size={22} aria-hidden />
                  </div>
                  <Chip variant={(CATEGORY_COLORS[projet.category] as "red" | "violet" | "default") ?? "default"}>
                    {projet.year}
                  </Chip>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">
                    {projet.category}
                  </p>
                  <h2 className="mt-1 text-lg font-bold text-foreground group-hover:text-red-500 transition-colors leading-snug">
                    {projet.title}
                  </h2>
                </div>

                <p className="flex-1 text-sm leading-relaxed text-foreground-muted">
                  {projet.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {projet.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface-secondary px-2.5 py-0.5 text-xs text-foreground-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-semibold text-red-500 group-hover:gap-2 transition-all">
                  Voir le projet →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
