import { Plane } from "lucide-react";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid size-9 place-items-center rounded-md border border-primary/30 bg-primary/15 text-primary shadow-glow">
        <Plane aria-hidden="true" className="size-4 -rotate-12" />
      </span>
      {!compact && (
        <span className="font-semibold text-foreground">
          Target <span className="text-muted-foreground">Flight Price</span>
        </span>
      )}
    </div>
  );
}
