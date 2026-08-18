import stevesHomepage from "./stevesHomepage";
import bigfootWebring from "./bigfootWebring";
import dailyDialup from "./dailyDialup";
import guestbook from "./guestbook";
import type { MockSite } from "./types";

export const mockSites: MockSite[] = [stevesHomepage, bigfootWebring, dailyDialup, guestbook];

export function findSiteByAddress(address: string): MockSite | undefined {
  const normalized = address.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/\/$/, "");
  return mockSites.find((site) => site.address.toLowerCase() === normalized);
}

export type { MockSite, SiteChunk } from "./types";
export { getPageWeightKB } from "./types";
