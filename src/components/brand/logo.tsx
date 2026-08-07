import { Parliament } from "./parliament";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-secondary/70">
        <span
          className="absolute inset-x-1 bottom-1 h-[2px] rounded-full"
          style={{
            background:
              "linear-gradient(90deg, var(--paprika), transparent 45%, transparent 55%, var(--magyar-green))",
          }}
        />
        <Parliament className="h-4 w-7 text-foreground" />
      </span>
      <span className="leading-none">
        <span className="display block text-[1.05rem] tracking-[-0.04em]">
          Hun<span className="text-gradient-ember">Master</span>
        </span>
        {!compact && (
          <span className="mt-1 block text-[0.55rem] tracking-[0.24em] text-muted-foreground uppercase">
            венгерский язык
          </span>
        )}
      </span>
    </span>
  );
}
