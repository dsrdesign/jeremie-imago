import { Camera } from "lucide-react";

type ImagePlaceholderProps = {
  className?: string;
  label?: string;
  aspectRatio?: string;
};

export function ImagePlaceholder({
  className = "",
  label,
  aspectRatio,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-[var(--radius-lg)] border border-dashed border-neutral-300 bg-neutral-100 ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
      role="img"
      aria-label={label ?? "Emplacement photo"}
    >
      <Camera size={22} className="text-neutral-400" strokeWidth={1.5} />
      {label && (
        <span className="text-xs font-medium text-neutral-400">{label}</span>
      )}
    </div>
  );
}
