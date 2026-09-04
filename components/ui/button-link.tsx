import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  external?: boolean;
};

export function ButtonLink({ href, children, variant = "solid", external }: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-semibold transition-all duration-200";

  const styles: Record<string, string> = {
    solid:
      "bg-red-500 text-white hover:bg-red-600 shadow-sm hover:shadow-md",
    outline:
      "border-2 border-violet-700 text-violet-700 hover:bg-violet-700 hover:text-white",
    ghost:
      "text-foreground-muted hover:text-foreground hover:bg-surface-secondary",
  };

  const className = `${base} ${styles[variant]}`;
  const isExternal = external || href.startsWith("http");

  if (!isExternal && href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
