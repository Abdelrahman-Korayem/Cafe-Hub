const N = 21;

function isFilled(x: number, y: number, seed: number) {
  const corners = [
    [0, 0],
    [N - 7, 0],
    [0, N - 7],
  ];
  for (const [cx, cy] of corners) {
    const dx = x - cx;
    const dy = y - cy;
    if (dx >= -1 && dx <= 7 && dy >= -1 && dy <= 7) {
      if (dx < 0 || dx > 6 || dy < 0 || dy > 6) return false;
      return Math.max(Math.abs(dx - 3), Math.abs(dy - 3)) !== 2;
    }
  }
  return (x * 7 + y * 13 + x * y + seed) % 5 < 2;
}

type QrPatternProps = {
  label: string;
  seed?: number;
  className?: string;
};

// Decorative QR-like pattern (not a real, scannable QR code)
export default function QrPattern({ label, seed = 0, className }: QrPatternProps) {
  const cells = Array.from({ length: N * N }, (_, i) => ({
    x: i % N,
    y: Math.floor(i / N),
  })).filter((c) => isFilled(c.x, c.y, seed));

  return (
    <svg
      viewBox={`0 0 ${N} ${N}`}
      role="img"
      aria-label={label}
      className={className}
      shapeRendering="crispEdges"
    >
      {cells.map((c) => (
        <rect
          key={`${c.x}-${c.y}`}
          x={c.x}
          y={c.y}
          width="1"
          height="1"
          fill="currentColor"
        />
      ))}
    </svg>
  );
}