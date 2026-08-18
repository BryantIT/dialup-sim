import { useEffect, useMemo, useState } from "react";
import { getPageWeightKB, type MockSite } from "../sites";

export const SIMULATED_SPEED_KBPS = 4;

export type LoadState = {
  revealedCount: number;
  downloadedKB: number;
  totalKB: number;
  percent: number;
  isDone: boolean;
  speedKbps: number;
};

export function useThrottledLoad(site: MockSite): LoadState {
  const totalKB = useMemo(() => getPageWeightKB(site), [site]);

  const cumulative = useMemo(() => {
    let sum = 0;
    return site.chunks.map((chunk) => (sum += chunk.weightKB));
  }, [site]);

  const [downloadedKB, setDownloadedKB] = useState(0);

  useEffect(() => {
    setDownloadedKB(0);
    if (totalKB === 0) return;

    const start = performance.now();
    let raf = 0;

    function tick() {
      const elapsedSec = (performance.now() - start) / 1000;
      const kb = Math.min(totalKB, elapsedSec * SIMULATED_SPEED_KBPS);
      setDownloadedKB(kb);
      if (kb < totalKB) {
        raf = requestAnimationFrame(tick);
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [site, totalKB]);

  const revealedCount = cumulative.filter((c) => c <= downloadedKB).length;
  const percent = totalKB === 0 ? 100 : Math.min(100, Math.round((downloadedKB / totalKB) * 100));
  const isDone = downloadedKB >= totalKB;

  return { revealedCount, downloadedKB, totalKB, percent, isDone, speedKbps: SIMULATED_SPEED_KBPS };
}
