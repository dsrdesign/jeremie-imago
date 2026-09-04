import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Target } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Chip } from "@/components/ui/chip";
import { PhotoGallery } from "@/components/ui/photo-gallery";
import { projets } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projets.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const projet = projets.find((p) => p.id === slug);
  if (!projet) return {};
  return {
    title: projet.title,
    description: projet.shortDescription,
  };
}

export default async function ProjetDetailPage({ params }: Props) {
  const { slug } = await params;
  const projet = projets.find((p) => p.id === slug);
  if (!projet) notFound();

  const index = projets.findIndex((p) => p.id === slug);
  const prev = index > 0 ? projets[index - 1] : null;
  const next = index < projets.length - 1 ? projets[index + 1] : null;

  return (
    <>
      {/* ── En-tête ── */}
      <section className="relative overflow-hidden border-b border-border py-14 sm:py-20">
        {/* Déco */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #E10600 0%, #3F0069 100%)" }}
          aria-hidden
        />
        <Container>
          <Link
            href="/projets"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
          >
            ← Tous les projets
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <Chip variant="red">{projet.year}</Chip>
            <Chip>{projet.category}</Chip>
          </div>

          <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-snug text-foreground sm:text-4xl">
            {projet.title}
          </h1>

          <div className="mt-3 flex items-center gap-2 text-sm text-foreground-muted">
            <Target size={15} className="shrink-0" aria-hidden />
            <span>Rôle : {projet.role}</span>
          </div>
        </Container>
      </section>

      {/* ── Corps ── */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
            {/* Contenu */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-red-500">
                Description du projet
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground">{projet.longDescription}</p>

              <div className="mt-10">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-red-500">Tags</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {projet.tags.map((tag) => (
                    <Chip key={tag}>{tag}</Chip>
                  ))}
                </div>
              </div>

              {/* Galerie photos */}
              <div className="mt-12">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-red-500">
                  Galerie photos
                </h2>
                <div className="mt-4">
                  <PhotoGallery label={projet.title} />
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
                    <dd className="mt-0.5 font-semibold text-foreground">{projet.year}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-foreground-muted">Catégorie</dt>
                    <dd className="mt-0.5 font-semibold text-foreground">{projet.category}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-foreground-muted">Rôle</dt>
                    <dd className="mt-0.5 font-semibold text-foreground">{projet.role}</dd>
                  </div>
                </dl>
              </div>

              {/* CTA */}
              <div className="rounded-[var(--radius-md)] border-2 border-red-500 p-6">
                <p className="text-sm font-bold text-foreground">Un projet similaire ?</p>
                <p className="mt-1 text-xs text-foreground-muted">
                  Je peux vous accompagner dans votre démarche de formulation ou de production.
                </p>
                <a
                  href="mailto:imagojeremie17@gmail.com"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red-500 underline-offset-2 hover:underline"
                >
                  Me contacter →
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* ── Navigation entre projets ── */}
      <section className="border-t border-border py-10">
        <Container>
          <div className="flex items-center justify-between gap-4">
            {prev ? (
              <Link
                href={`/projets/${prev.id}`}
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
                href={`/projets/${next.id}`}
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
