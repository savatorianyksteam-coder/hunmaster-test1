type Props = { className?: string };

/**
 * Minimal stylised silhouette of the Hungarian Parliament.
 * Pure geometry, no external assets — stays crisp at any size.
 */
export function Parliament({ className }: Props) {
  const spire = (x: number, h: number, w: number) => (
    <g key={`s-${x}-${h}`}>
      <polygon points={`${x},${300 - h} ${x - w},${300 - h * 0.45} ${x + w},${300 - h * 0.45}`} />
      <rect x={x - w * 0.8} y={300 - h * 0.5} width={w * 1.6} height={h * 0.5} />
    </g>
  );

  return (
    <svg
      viewBox="0 0 800 300"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMax meet"
    >
      {/* base */}
      <rect x="60" y="268" width="680" height="32" />
      {/* wings */}
      <rect x="110" y="226" width="180" height="48" />
      <rect x="510" y="226" width="180" height="48" />
      {spire(150, 118, 13)}
      {spire(250, 118, 13)}
      {spire(550, 118, 13)}
      {spire(650, 118, 13)}
      {/* inner blocks */}
      <rect x="300" y="212" width="200" height="62" />
      {spire(316, 152, 15)}
      {spire(484, 152, 15)}
      {spire(352, 132, 12)}
      {spire(448, 132, 12)}
      {/* drum + dome */}
      <rect x="352" y="196" width="96" height="30" />
      <path d="M352 200 A48 62 0 0 1 448 200 Z" />
      <rect x="392" y="126" width="16" height="22" />
      <polygon points="400,54 391,132 409,132" />
      <circle cx="400" cy="46" r="7" />
      {/* arcade rhythm */}
      {Array.from({ length: 22 }).map((_, i) => (
        <rect key={i} x={126 + i * 25} y={248} width="7" height="22" opacity="0.55" />
      ))}
    </svg>
  );
}
