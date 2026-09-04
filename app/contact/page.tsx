import type { Metadata } from "next";
import { Mail, Briefcase, Users, GraduationCap, FlaskConical, Rocket, Lightbulb, Handshake } from "lucide-react";
import { Container } from "@/components/ui/container";
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Jérémie Imago pour des formations, missions de formulation cosmétique ou conseil entrepreneurial.",
};

/* ── Déco enveloppe SVG ── */
function EnvelopeIllustration() {
  return (
    <svg className="h-52 w-52 opacity-[0.10]" viewBox="0 0 160 120" fill="none" aria-hidden>
      <defs>
        <linearGradient id="env-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3F0069" />
          <stop offset="100%" stopColor="#E10600" />
        </linearGradient>
      </defs>
      <rect x="4" y="20" width="152" height="96" rx="10" stroke="url(#env-g)" strokeWidth="5" />
      <path d="M4 28 L80 72 L156 28" stroke="url(#env-g)" strokeWidth="5" strokeLinecap="round" />
      <path d="M4 108 L52 68" stroke="url(#env-g)" strokeWidth="4" strokeLinecap="round" />
      <path d="M156 108 L108 68" stroke="url(#env-g)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

const CONTACT_CARDS = [
  {
    Icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    cta: "Envoyer un email",
    color: "red" as const,
  },
  {
    Icon: Briefcase,
    label: "LinkedIn",
    value: "Imago Jérémie",
    href: profile.linkedin,
    cta: "Voir le profil",
    color: "violet" as const,
  },
  {
    Icon: Users,
    label: "Facebook",
    value: "Imago Jérémie",
    href: profile.facebook,
    cta: "Voir la page",
    color: "violet" as const,
  },
];

const COLOR_MAP = {
  red: {
    border: "border-red-200",
    bg: "bg-red-25",
    icon: "bg-red-100 text-red-500",
    cta: "text-red-500 hover:text-red-600",
  },
  violet: {
    border: "border-violet-200",
    bg: "bg-violet-25",
    icon: "bg-violet-100 text-violet-700",
    cta: "text-violet-700 hover:text-violet-600",
  },
};

const REASONS = [
  { Icon: GraduationCap, text: "Formation pratique en cosmétique ou produits d'entretien" },
  { Icon: FlaskConical,  text: "Formulation ou amélioration d'un produit cosmétique" },
  { Icon: Rocket,        text: "Accompagnement entrepreneurial et mise en place d'une unité de production" },
  { Icon: Lightbulb,     text: "Conseil en développement produit et marketing" },
  { Icon: Handshake,     text: "Partenariat ou collaboration avec GIC IFTA Cameroun" },
];

export default function ContactPage() {
  return (
    <>
      {/* ── En-tête ── */}
      <section className="relative overflow-hidden border-b border-border py-14 sm:py-20">
        <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2">
          <EnvelopeIllustration />
        </div>
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest text-red-500">Contact</p>
          <h1 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Travaillons ensemble
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted">
            Formation sur mesure, accompagnement à la formulation, conseil entrepreneurial — je suis disponible
            pour échanger sur votre projet.
          </p>
        </Container>
      </section>

      {/* ── Cartes de contact ── */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CONTACT_CARDS.map(({ Icon, label, value, href, cta, color }) => {
              const c = COLOR_MAP[color];
              return (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`card-soft flex flex-col gap-4 border p-7 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] transition-all duration-200 ${c.border} ${c.bg}`}
                >
                  <span className={`flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] ${c.icon}`}>
                    <Icon size={22} aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">
                      {label}
                    </p>
                    <p className="mt-1 font-semibold text-foreground break-all">{value}</p>
                  </div>
                  <span className={`text-sm font-semibold ${c.cta}`}>{cta} →</span>
                </a>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── CTA bloc ── */}
      <section className="py-12 sm:py-16 bg-surface-secondary">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Pour quoi me contacter ?</h2>
              <ul className="mt-6 flex flex-col gap-3">
                {REASONS.map(({ Icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-sm text-foreground-muted">
                    <Icon size={16} className="mt-0.5 shrink-0 text-red-500" aria-hidden />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-[var(--radius-xl)] gradient-brand p-8 text-white">
              <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white/5" aria-hidden />
              <h3 className="text-xl font-bold">Prêt à démarrer ?</h3>
              <p className="mt-2 text-sm text-white/70">
                Un email suffit. Je réponds en général sous 24 à 48 heures.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-6 inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-white px-5 py-3 text-sm font-bold text-red-500 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <Mail size={15} aria-hidden />
                {profile.email}
              </a>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white/80 hover:text-white transition-colors"
                >
                  LinkedIn →
                </a>
                <a
                  href={profile.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white/80 hover:text-white transition-colors"
                >
                  Facebook →
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
