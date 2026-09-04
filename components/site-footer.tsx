import Link from "next/link";
import { Container } from "@/components/ui/container";
import { profile } from "@/lib/content";

const LINKS = [
  { href: "/a-propos", label: "À propos" },
  { href: "/formations", label: "Formations" },
  { href: "/projets", label: "Projets" },
  { href: "/experiences", label: "Expériences" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-auto">
      <Container className="py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="h-5 w-1 rounded-full bg-red-500" />
              <span className="text-sm font-bold text-foreground">{profile.name}</span>
            </div>
            <p className="max-w-xs text-xs leading-relaxed text-foreground-muted">
              Formulateur · Formateur · Entrepreneur
            </p>
            <p className="text-xs text-foreground-muted">{profile.location}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">Navigation</p>
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">Contact</p>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-foreground-muted transition-colors hover:text-foreground"
              >
                Email
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground-muted transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href={profile.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground-muted transition-colors hover:text-foreground"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-foreground-muted">
            © {year} {profile.name}. Tous droits réservés.
          </p>
          <p className="text-xs text-foreground-muted">
            Délégué GIC IFTA Cameroun
          </p>
        </div>
      </Container>
    </footer>
  );
}
