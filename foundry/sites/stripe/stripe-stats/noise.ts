/** Deterministic pseudo-random number in [0, 1), so the art is the same on server and client. */
export function noise(i: number, seed = 1): number {
  const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
  return x - Math.floor(x);
}
