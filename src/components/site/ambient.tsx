/** Slow-moving ambient gradients + fine grain behind all content. */
export function Ambient() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-40 -left-32 h-[46rem] w-[46rem] animate-drift rounded-full opacity-60 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--paprika) 40%, transparent), transparent 68%)",
        }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[40rem] w-[40rem] animate-drift rounded-full opacity-50 blur-[130px]"
        style={{
          animationDelay: "-9s",
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--wine) 70%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[32rem] w-[32rem] animate-drift rounded-full opacity-25 blur-[140px]"
        style={{
          animationDelay: "-17s",
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--magyar-green) 45%, transparent), transparent 70%)",
        }}
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-veil)" }} />
    </div>
  );
}
