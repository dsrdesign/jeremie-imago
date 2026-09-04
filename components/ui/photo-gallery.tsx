import { ImagePlaceholder } from "./image-placeholder";

/* Galerie 5 photos :
   [ Photo 1 (large) ] [ Photo 2 ]
   [ Photo 3 ] [ Photo 4 ] [ Photo 5 ]
*/
export function PhotoGallery({ label = "Session" }: { label?: string }) {
  return (
    <div className="flex flex-col gap-2">
      {/* Rangée 1 */}
      <div className="grid grid-cols-3 gap-2">
        <ImagePlaceholder
          className="col-span-2 h-56 sm:h-64"
          label={`${label} — vue principale`}
        />
        <ImagePlaceholder
          className="h-56 sm:h-64"
          label={`${label} — détail`}
        />
      </div>
      {/* Rangée 2 */}
      <div className="grid grid-cols-3 gap-2">
        <ImagePlaceholder className="h-36 sm:h-40" label={`${label} — participants`} />
        <ImagePlaceholder className="h-36 sm:h-40" label={`${label} — atelier`} />
        <ImagePlaceholder className="h-36 sm:h-40" label={`${label} — résultat`} />
      </div>
    </div>
  );
}
