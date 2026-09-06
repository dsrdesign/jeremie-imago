import Link from "next/link";
import { FlaskConical, GraduationCap, Rocket, Globe, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Chip } from "@/components/ui/chip";
import { ImageOrPlaceholder } from "@/components/ui/image-or-placeholder";
import { profile, skillGroups, formations, projets, experiences } from "@/lib/content";

/* ── Déco SVG — cercle dégradé illustratif ── */
function HeroBlob() {
  return (
    <svg
      className="absolute right-0 top-0 -z-10 h-[520px] w-[520px] opacity-[0.12]"
      viewBox="0 0 520 520"
      fill="none"
      aria-hidden
    >
      <defs>
        <radialGradient id="blob-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E10600" />
          <stop offset="100%" stopColor="#3F0069" />
        </radialGradient>
      </defs>
      <circle cx="260" cy="260" r="260" fill="url(#blob-grad)" />
    </svg>
  );
}

/* ── Badge avec icône Lucide ── */
function StatBadge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-[var(--radius-md)] border border-border bg-surface px-4 py-3 shadow-[var(--shadow-soft)]">
      <Icon size={16} className="shrink-0 text-violet-700" aria-hidden />
      <span className="text-sm font-medium text-foreground">{label}</span>
    </div>
  );
}

/* ── Carte formation aperçu ── */
function FormationCard({ formation }: { formation: typeof formations[0] }) {
  return (
    <Link
      href={`/formations/${formation.id}`}
      className="card-soft flex flex-col gap-3 p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-violet-25 text-violet-700">
          <GraduationCap size={18} aria-hidden />
        </span>
        <Chip variant="violet">{formation.year}</Chip>
      </div>
      <div>
        <h3 className="font-semibold text-foreground leading-snug line-clamp-2">{formation.title}</h3>
        <p className="mt-1 text-sm text-foreground-muted">{formation.organisation}</p>
      </div>
      <p className="text-sm leading-relaxed text-foreground-muted line-clamp-2">{formation.shortDescription}</p>
      <span className="mt-auto text-xs font-semibold text-violet-700">Voir le détail →</span>
    </Link>
  );
}

/* ── Carte projet aperçu ── */
function ProjetCard({ projet }: { projet: typeof projets[0] }) {
  return (
    <Link
      href={`/projets/${projet.id}`}
      className="card-soft flex flex-col gap-3 p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-red-25 text-red-500">
          <FlaskConical size={18} aria-hidden />
        </span>
        <Chip variant="red">{projet.year}</Chip>
      </div>
      <div>
        <h3 className="font-semibold text-foreground leading-snug">{projet.title}</h3>
        <p className="mt-1 text-sm text-foreground-muted">{projet.category}</p>
      </div>
      <p className="text-sm leading-relaxed text-foreground-muted line-clamp-2">{projet.shortDescription}</p>
      <span className="mt-auto text-xs font-semibold text-red-500">Voir le détail →</span>
    </Link>
  );
}

export default function Home() {
  const featuredFormations = formations.slice(0, 3);
  const featuredProjets = projets.slice(0, 3);
  const latestExperiences = experiences.slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-14 pb-10 sm:pt-20 sm:pb-14">
        <HeroBlob />
        <Container>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            {/* Texte */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-25 px-3 py-1 text-xs font-medium text-violet-700">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-700 animate-pulse" aria-hidden />
                Délégué GIC IFTA Cameroun
              </div>

              <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">
                <span className="text-foreground">{profile.name}</span>
              </h1>

              <p className="mt-3 text-xl font-medium text-foreground-muted">{profile.role}</p>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground-muted">
                {profile.tagline}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/formations" variant="solid">Mes formations</ButtonLink>
                <ButtonLink href="/projets" variant="outline">Mes projets</ButtonLink>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                <StatBadge icon={FlaskConical} label="Formulateur cosmétique" />
                <StatBadge icon={GraduationCap} label="Formateur pratique" />
                <StatBadge icon={Rocket} label="Entrepreneur" />
                <StatBadge icon={Globe} label="Délégué GIC IFTA" />
              </div>
            </div>

            {/* Photo portrait */}
            <div className="hidden shrink-0 lg:block">
              <div className="relative">
                {/* Cadre décoratif décalé */}
                <div className="absolute -bottom-3 -right-3 h-full w-full rounded-[var(--radius-xl)] border-2 border-red-200" aria-hidden />
                <ImageOrPlaceholder
                  slug="accueil"
                  index={1}
                  className="relative z-10 h-[420px] w-[320px]"
                  label="Photo portrait"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Aperçu À propos ── */}
      <section className="py-10 sm:py-14">
        <Container>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            {/* Photo "en action" */}
            <div className="grid grid-cols-2 gap-3 lg:w-2/5 shrink-0">
              <ImageOrPlaceholder slug="accueil" index={2} className="col-span-2 h-52" label="En formation" />
              <ImageOrPlaceholder slug="accueil" index={3} className="h-36" label="Atelier" />
              <ImageOrPlaceholder slug="accueil" index={4} className="h-36" label="Produits" />
            </div>

            {/* Texte */}
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500">À propos</p>
              <h2 className="mt-3 text-2xl font-bold leading-snug text-foreground sm:text-3xl">
                Concevoir, former, transformer.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground-muted">{profile.bio}</p>
              <div className="mt-6">
                <ButtonLink href="/a-propos" variant="ghost">
                  En savoir plus →
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Formations ── */}
      <section className="py-10 sm:py-14 bg-surface-secondary">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-700">Formations</p>
              <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                Transmettre, c'est construire.
              </h2>
            </div>
            <Link
              href="/formations"
              className="hidden shrink-0 text-sm font-semibold text-red-500 hover:text-red-600 sm:inline"
            >
              Tout voir →
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredFormations.map((f) => (
              <FormationCard key={f.id} formation={f} />
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <ButtonLink href="/formations" variant="outline">Toutes les formations</ButtonLink>
          </div>
        </Container>
      </section>

      {/* ── Projets ── */}
      <section className="py-10 sm:py-14">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500">Projets & Réalisations</p>
              <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                Des formules qui passent à l'action.
              </h2>
            </div>
            <Link
              href="/projets"
              className="hidden shrink-0 text-sm font-semibold text-red-500 hover:text-red-600 sm:inline"
            >
              Tout voir →
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjets.map((p) => (
              <ProjetCard key={p.id} projet={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Expériences (aperçu) ── */}
      <section className="py-10 sm:py-14 bg-surface-secondary">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-700">Expériences</p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">Un parcours ancré dans le terrain.</h2>

          <div className="mt-8 flex flex-col gap-4">
            {latestExperiences.map((exp) => (
              <div
                key={exp.id}
                className="flex items-start gap-4 rounded-[var(--radius-md)] border border-border bg-surface p-5 shadow-[var(--shadow-soft)]"
              >
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <p className="font-semibold text-foreground">{exp.role}</p>
                    <span className="text-sm text-foreground-muted">·</span>
                    <p className="text-sm text-foreground-muted">{exp.company}</p>
                  </div>
                  <p className="mt-0.5 text-xs text-foreground-muted">{exp.period} · {exp.type}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <ButtonLink href="/experiences" variant="outline">Voir tout le parcours</ButtonLink>
          </div>
        </Container>
      </section>

      {/* ── CTA Contact ── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-[var(--radius-xl)] gradient-brand px-8 py-14 text-center sm:px-14">
            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/5" aria-hidden />
            <div className="absolute -right-10 -bottom-10 h-36 w-36 rounded-full bg-white/5" aria-hidden />

            <p className="text-sm font-semibold uppercase tracking-widest text-white/70">Contact</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Un projet ? Une formation ?
            </h2>
            <p className="mt-4 text-base text-white/80">
              Je suis disponible pour des collaborations, formations sur mesure et conseils entrepreneuriaux.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-white px-6 py-3 text-sm font-semibold text-red-500 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <Mail size={15} aria-hidden />
                {profile.email}
              </a>
              <ButtonLink href="/contact" variant="ghost">
                <span className="text-white">Formulaire de contact →</span>
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
