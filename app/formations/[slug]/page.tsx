import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Chip } from "@/components/ui/chip";
import { ButtonLink } from "@/components/ui/button-link";
import { PhotoGallery } from "@/components/ui/photo-gallery";
import { formations } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return formations.map((f) => ({ slug: f.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const formation = formations.find((f) => f.id === slug);
  if (!formation) return {};
  return {
    title: formation.title,
    description: formation.shortDescription,
  };
}

/* ── Déco de fond ── */
function FormationHeroDecor() {
  return (
    <svg
      className="absolute right-0 top-0 h-80 w-80 opacity-[0.08]"
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden
    >
      <defs>
        <radialGradient id="fhd-g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3F0069" />
          <stop offset="100%" stopColor="#E10600" />
        </radialGradient>
      </defs>
      <circle cx="160" cy="40" r="120" fill="url(#fhd-g)" />
    </svg>
  );
}

export default async function FormationDetailPage({ params }: Props) {
  const { slug } = await params;
  const formation = formations.find((f) => f.id === slug);
  if (!formation) notFound();

  const index = formations.findIndex((f) => f.id === slug);
  const prev = index > 0 ? formations[index - 1] : null;
  const next = index < formations.length - 1 ? formations[index + 1] : null;

  return (
    <>
      {/* ── En-tête ── */}
      <section className="relative overflow-hidden border-b border-border py-14 sm:py-20">
        <FormationHeroDecor />
        <Container>
          <Link
            href="/formations"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
          >
            ← Toutes les formations
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <Chip variant="violet">{formation.year}</Chip>
            <Chip>{formation.organisation}</Chip>
          </div>

          <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-snug text-foreground sm:text-4xl">
            {formation.title}
          </h1>

          <div className="mt-4 flex items-center gap-2 text-sm text-foreground-muted">
            <MapPin size={15} className="shrink-0" aria-hidden />
            <span>{formation.lieu}</span>
          </div>
        </Container>
      </section>

      {/* ── Corps ── */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
            {/* Contenu principal */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-red-500">Description</h2>
              <p className="mt-4 text-base leading-relaxed text-foreground">{formation.longDescription}</p>

              {formation.localites && (
                <div className="mt-10">
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-red-500">
                    Localités concernées
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {formation.localites.map((loc) => (
                      <div
                        key={loc}
                        className="flex items-center gap-2.5 rounded-[var(--radius-md)] border border-border bg-surface px-5 py-3 shadow-[var(--shadow-soft)]"
                      >
                        <span className="h-2 w-2 rounded-full bg-red-500" aria-hidden />
                        <span className="font-medium text-foreground">{loc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Galerie photos */}
              <div className="mt-12">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-red-500">
                  Galerie photos
                </h2>
                <div className="mt-4">
                  <PhotoGallery label={formation.organisation} slug={slug} />
                </div>
              </div>
            </div>

            {/* Fiche récap */}
            <aside className="flex flex-col gap-4">
              <div className="card-soft p-6">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">
                  Informations
                </h3>
                <dl className="mt-4 flex flex-col gap-4">
                  <div>
                    <dt className="text-xs text-foreground-muted">Période</dt>
                    <dd className="mt-0.5 font-semibold text-foreground">{formation.year}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-foreground-muted">Organisation</dt>
                    <dd className="mt-0.5 font-semibold text-foreground">{formation.organisation}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-foreground-muted">Lieu</dt>
                    <dd className="mt-0.5 font-semibold text-foreground">{formation.lieu}</dd>
                  </div>
                  {formation.localites && (
                    <div>
                      <dt className="text-xs text-foreground-muted">Localités</dt>
                      <dd className="mt-0.5 font-semibold text-foreground">
                        {formation.localites.join(", ")}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              <div className="gradient-brand rounded-[var(--radius-md)] p-6 text-white">
                <p className="text-sm font-semibold">Une formation similaire ?</p>
                <p className="mt-1 text-xs text-white/70">Contactez Jérémie pour un programme sur mesure.</p>
                <a
                  href="mailto:imagojeremie17@gmail.com"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white underline-offset-2 hover:underline"
                >
                  Me contacter →
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* ── Navigation entre formations ── */}
      <section className="border-t border-border py-10">
        <Container>
          <div className="flex items-center justify-between gap-4">
            {prev ? (
              <Link
                href={`/formations/${prev.id}`}
                className="flex-1 rounded-[var(--radius-md)] border border-border bg-surface p-4 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-all"
              >
                <p className="text-xs text-foreground-muted">← Précédent</p>
                <p className="mt-1 font-semibold text-foreground line-clamp-1">{prev.title}</p>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/formations/${next.id}`}
                className="flex-1 rounded-[var(--radius-md)] border border-border bg-surface p-4 text-right shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-all"
              >
                <p className="text-xs text-foreground-muted">Suivant →</p>
                <p className="mt-1 font-semibold text-foreground line-clamp-1">{next.title}</p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
