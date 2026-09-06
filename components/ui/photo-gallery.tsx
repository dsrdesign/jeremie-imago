import { ImagePlaceholder } from "./image-placeholder";
import { ImageOrPlaceholder } from "./image-or-placeholder";

type Props = {
  label?: string;
  slug?: string;
};

export function PhotoGallery({ label = "Session", slug }: Props) {
  const Slot = ({
    index,
    className,
    slotLabel,
  }: {
    index: number;
    className: string;
    slotLabel: string;
  }) =>
    slug ? (
      <ImageOrPlaceholder slug={slug} index={index} className={className} label={slotLabel} />
    ) : (
      <ImagePlaceholder className={className} label={slotLabel} />
    );

  return (
    <div className="flex flex-col gap-2">
      {/* Rangée 1 */}
      <div className="grid grid-cols-3 gap-2">
        <Slot index={1} className="col-span-2 h-56 sm:h-64" slotLabel={`${label} — vue principale`} />
        <Slot index={2} className="h-56 sm:h-64" slotLabel={`${label} — détail`} />
      </div>
      {/* Rangée 2 */}
      <div className="grid grid-cols-3 gap-2">
        <Slot index={3} className="h-36 sm:h-40" slotLabel={`${label} — participants`} />
        <Slot index={4} className="h-36 sm:h-40" slotLabel={`${label} — atelier`} />
        <Slot index={5} className="h-36 sm:h-40" slotLabel={`${label} — résultat`} />
      </div>
    </div>
  );
}
