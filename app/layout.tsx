import type { Metadata, Viewport } from "next";
import { Work_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/lib/content";
import { SITE_URL, SITE_NAME, SITE_LOCALE } from "@/lib/site";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

const title  = `${profile.name} — Formulateur, Formateur & Entrepreneur`;
const description =
  "Portfolio de Jérémie Imago, formulateur cosmétique, formateur et entrepreneur spécialisé dans la cosmétique, les produits d'entretien et la transformation. Délégué GIC IFTA Cameroun.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: title,
    template: `%s · ${profile.name}`,
  },
  description,
  keywords: [
    "Jérémie Imago",
    "formulateur cosmétique Cameroun",
    "formateur cosmétique",
    "formation cosmétique Douala",
    "produits d'entretien artisanaux",
    "savon noir charbon activé",
    "transformation agroalimentaire",
    "entrepreneuriat Cameroun",
    "GIC IFTA",
    "IFTA Academy",
    "NOVABLOOMS",
    "formation pratique Cameroun",
    "conseil entrepreneurial",
    "développement produit cosmétique",
    "porteurs de projets",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,

  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title,
    description,
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
};

/* Données structurées JSON-LD — décrit Jérémie comme personne
   pour Google, Bing et les assistants IA qui lisent Schema.org. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Formulateur cosmétique, Formateur et Entrepreneur",
  description,
  url: SITE_URL,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Douala",
    addressCountry: "CM",
  },
  sameAs: [profile.linkedin, profile.facebook],
  knowsAbout: [
    "Formulation cosmétique",
    "Produits d'entretien",
    "Transformation agroalimentaire",
    "Formation pratique",
    "Entrepreneuriat",
    "Développement produit",
    "Charbon activé",
  ],
  memberOf: {
    "@type": "Organization",
    name: "GIC IFTA Cameroun",
    description: "Groupement d'Intérêt Commun spécialisé dans la formation et l'entrepreneuriat",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${workSans.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
