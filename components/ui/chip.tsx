export function Chip({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "red" | "violet";
}) {
  const styles = {
    default: "border-border bg-surface text-foreground-muted",
    red: "border-red-200 bg-red-25 text-red-600",
    violet: "border-violet-200 bg-violet-25 text-violet-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
