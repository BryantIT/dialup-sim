export const BUSY_SIGNAL_CHANCE = 0.1;

export function rollConnectionSuccess(): boolean {
  return Math.random() >= BUSY_SIGNAL_CHANCE;
}
