import type { Metadata } from "next";
import { Mail, GraduationCap, FlaskConical, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Chip } from "@/components/ui/chip";
import { ButtonLink } from "@/components/ui/button-link";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { profile, skillGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez le profil et les compétences de Jérémie Imago, formulateur cosmétique, formateur et entrepreneur.",
};

/* ── Illustration déco ── */
function MoleculeIllustration() {
  return (
    <svg
      className="h-64 w-64 opacity-[0.15]"
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden
    >
      <defs>
        <radialGradient id="mol-g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E10600" />
          <stop offset="100%" stopColor="#3F0069" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="40" r="18" fill="url(#mol-g)" />
      <circle cx="40" cy="130" r="14" fill="url(#mol-g)" />
      <circle cx="160" cy="130" r="14" fill="url(#mol-g)" />
      <circle cx="100" cy="170" r="10" fill="url(#mol-g)" />
      <line x1="100" y1="58" x2="47" y2="118" stroke="url(#mol-g)" strokeWidth="3" strokeLinecap="round" />
      <line x1="100" y1="58" x2="153" y2="118" stroke="url(#mol-g)" strokeWidth="3" strokeLinecap="round" />
      <line x1="47" y1="140" x2="153" y2="140" stroke="url(#mol-g)" strokeWidth="3" strokeLinecap="round" />
      <line x1="47" y1="140" x2="94" y2="162" stroke="url(#mol-g)" strokeWidth="3" strokeLinecap="round" />
      <line x1="153" y1="140" x2="106" y2="162" stroke="url(#mol-g)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

const QUICK_LINKS = [
  { href: "/formations", Icon: GraduationCap, label: "Formations", desc: "Programmes animés" },
  { href: "/projets",    Icon: FlaskConical,  label: "Projets",    desc: "Réalisations concrètes" },
  { href: "/experiences",Icon: Briefcase,     label: "Expériences",desc: "Parcours professionnel" },
];

export default function AProposPage() {
  return (
    <>
      {/* ── En-tête page ── */}
      <section className="relative overflow-hidden border-b border-border py-14 sm:py-20">
        <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 opacity-30">
          <MoleculeIllustration />
        </div>
        <Container>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
            {/* Texte */}
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500">À propos</p>
              <h1 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Jérémie Imago
              </h1>
              <p className="mt-2 text-lg font-medium text-foreground-muted">{profile.role}</p>
              <p className="mt-1 text-sm text-foreground-muted">{profile.location}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Formulateur", "Formateur", "Entrepreneur", "Délégué GIC IFTA"].map((tag) => (
                  <Chip key={tag} variant="violet">{tag}</Chip>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={`mailto:${profile.email}`} variant="solid" external>
                  <Mail size={15} aria-hidden />
                  Me contacter
                </ButtonLink>
                <ButtonLink href={profile.linkedin} variant="outline" external>
                  LinkedIn
                </ButtonLink>
              </div>
            </div>

            {/* Photo portrait */}
            <div className="hidden shrink-0 lg:block">
              <div className="relative">
                <div className="absolute -bottom-3 -left-3 h-full w-full rounded-[var(--radius-xl)] border-2 border-violet-200" aria-hidden />
                <ImagePlaceholder
                  className="relative z-10 h-[380px] w-[300px]"
                  label="Photo portrait"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Bio ── */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-violet-700">Profil</h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground">{profile.bio}</p>
              {/* Photo "en action" */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                <ImagePlaceholder className="h-48" label="Sur le terrain" />
                <ImagePlaceholder className="h-48" label="En formation" />
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:w-56">
              <div className="rounded-[var(--radius-md)] border border-border bg-surface p-5 shadow-[var(--shadow-soft)]">
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-1 block break-all text-sm font-medium text-foreground hover:text-red-500 transition-colors"
                >
                  {profile.email}
                </a>
              </div>
              <div className="rounded-[var(--radius-md)] border border-border bg-surface p-5 shadow-[var(--shadow-soft)]">
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">Réseaux</p>
                <div className="mt-2 flex flex-col gap-1">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-foreground hover:text-red-500 transition-colors"
                  >
                    LinkedIn →
                  </a>
                  <a
                    href={profile.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-foreground hover:text-red-500 transition-colors"
                  >
                    Facebook →
                  </a>
                </div>
              </div>
              <div className="rounded-[var(--radius-md)] border border-border bg-surface p-5 shadow-[var(--shadow-soft)]">
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">Localisation</p>
                <p className="mt-1 text-sm font-medium text-foreground">{profile.location}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Compétences ── */}
      <section className="py-12 sm:py-16 bg-surface-secondary">
        <Container>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-red-500">Compétences</h2>
          <p className="mt-2 text-2xl font-bold text-foreground">Expertise pluridisciplinaire</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.title} className="card-soft p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-violet-25 text-violet-700">
                      <Icon size={20} aria-hidden />
                    </span>
                    <h3 className="font-semibold text-foreground">{group.title}</h3>
                  </div>
                  <ul className="mt-4 flex flex-col gap-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground-muted">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-red-500" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Liens rapides ── */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-3">
            {QUICK_LINKS.map(({ href, Icon, label, desc }) => (
              <a
                key={href}
                href={href}
                className="card-soft flex items-center gap-4 p-5 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] transition-all duration-200"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-red-25 text-red-500">
                  <Icon size={22} aria-hidden />
                </span>
                <div>
                  <p className="font-semibold text-foreground">{label}</p>
                  <p className="text-sm text-foreground-muted">{desc}</p>
                </div>
                <span className="ml-auto text-foreground-muted">→</span>
              </a>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
