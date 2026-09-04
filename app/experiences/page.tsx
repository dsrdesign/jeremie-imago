import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Chip } from "@/components/ui/chip";
import { ButtonLink } from "@/components/ui/button-link";
import { experiences, profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Expériences",
  description:
    "Parcours professionnel de Jérémie Imago : directeur, délégué GIC IFTA, formateur, consultant et enseignant.",
};

/* ── Timeline SVG déco ── */
function TimelineDecor() {
  return (
    <svg className="h-48 w-32 opacity-[0.10]" viewBox="0 0 80 200" fill="none" aria-hidden>
      <defs>
        <linearGradient id="tl-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3F0069" />
          <stop offset="100%" stopColor="#E10600" />
        </linearGradient>
      </defs>
      <line x1="40" y1="0" x2="40" y2="200" stroke="url(#tl-g)" strokeWidth="4" />
      {[20, 60, 100, 140, 180].map((y, i) => (
        <circle key={i} cx="40" cy={y} r="8" fill="url(#tl-g)" />
      ))}
    </svg>
  );
}

const TYPE_COLORS: Record<string, "red" | "violet" | "default"> = {
  "Temps plein": "red",
  "Temps partiel": "violet",
  "Consultation": "default",
  "Associatif": "default",
  "Enseignement": "default",
};

export default function ExperiencesPage() {
  return (
    <>
      {/* ── En-tête ── */}
      <section className="relative overflow-hidden border-b border-border py-14 sm:py-20">
        <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2">
          <TimelineDecor />
        </div>
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-700">
            {experiences.length} postes
          </p>
          <h1 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Parcours professionnel
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted">
            Un parcours pluridisciplinaire alliant direction, formation, formulation cosmétique et
            conseil — ancré dans les réalités du terrain au Cameroun.
          </p>
        </Container>
      </section>

      {/* ── Timeline ── */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="relative">
            {/* Ligne verticale de la timeline */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border sm:left-[23px]" aria-hidden />

            <div className="flex flex-col gap-0">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative flex gap-6 pb-10 last:pb-0">
                  {/* Point de la timeline */}
                  <div className="relative z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-background bg-background">
                    <div
                      className={`h-4 w-4 rounded-full ${
                        index === 0
                          ? "bg-red-500"
                          : index % 2 === 0
                          ? "bg-violet-700"
                          : "bg-neutral-300"
                      }`}
                    />
                  </div>

                  {/* Contenu */}
                  <div className="card-soft flex-1 p-6">
                    <div className="flex flex-wrap items-start gap-2">
                      <Chip variant={TYPE_COLORS[exp.type] ?? "default"}>{exp.type}</Chip>
                      <Chip>{exp.period}</Chip>
                    </div>

                    <h2 className="mt-3 text-lg font-bold text-foreground">{exp.role}</h2>
                    <p className="mt-0.5 font-medium text-red-500">{exp.company}</p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border py-12 sm:py-16">
        <Container>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-foreground">Vous souhaitez collaborer ?</h2>
              <p className="mt-1 text-sm text-foreground-muted">
                Jérémie est disponible pour des missions de formation, formulation et conseil.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="solid">Me contacter</ButtonLink>
              <ButtonLink href={`mailto:${profile.email}`} variant="outline" external>
                Email direct
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
