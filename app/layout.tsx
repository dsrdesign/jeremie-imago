import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jérémie Imago — Formulateur & Formateur",
    template: "%s · Jérémie Imago",
  },
  description:
    "Portfolio de Jérémie Imago, formulateur cosmétique, formateur et entrepreneur spécialisé dans la cosmétique, les produits d'entretien et la transformation.",
  authors: [{ name: "Jérémie Imago" }],
  creator: "Jérémie Imago",
  keywords: [
    "formulateur cosmétique",
    "formateur",
    "entrepreneur",
    "cosmétique",
    "produits d'entretien",
    "transformation",
    "GIC IFTA",
    "Cameroun",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${workSans.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
