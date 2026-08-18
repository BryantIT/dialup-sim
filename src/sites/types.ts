import type { ReactNode } from "react";

export type SiteChunkKind = "text" | "image";

export type SiteChunk = {
  kind: SiteChunkKind;
  /** Simulated size in KB — drives the Phase 6 throttled loader's pacing. */
  weightKB: number;
  node: ReactNode;
};

export type MockSite = {
  /** What the address bar resolves and what portal/webring links point to. */
  address: string;
  title: string;
  description: string;
  chunks: SiteChunk[];
};

export function getPageWeightKB(site: MockSite): number {
  return site.chunks.reduce((sum, chunk) => sum + chunk.weightKB, 0);
}
