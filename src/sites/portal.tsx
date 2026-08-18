import type { MockSite } from "./types";

export const HOME_ADDRESS = "home.netzone.com";

export function buildPortalSite(sites: MockSite[], onNavigate: (address: string) => void): MockSite {
  return {
    address: HOME_ADDRESS,
    title: "NetZone!",
    description: "Your Gateway to the Information Superhighway",
    chunks: [
      {
        kind: "text",
        weightKB: 2,
        node: (
          <div className="portal-page">
            <div className="portal-logo">
              NetZone<span className="portal-logo-bang">!</span>
            </div>
            <p className="portal-tagline">Your Gateway to the Information Superhighway</p>
            <hr />
            <h2>Featured Sites</h2>
          </div>
        ),
      },
      ...sites.map((site) => ({
        kind: "text" as const,
        weightKB: 4,
        node: (
          <div className="portal-directory-item">
            <button
              type="button"
              className="link-button portal-directory-link"
              onClick={() => onNavigate(site.address)}
            >
              {site.title}
            </button>
            <div className="portal-directory-address">{site.address}</div>
            <div className="portal-directory-desc">{site.description}</div>
          </div>
        ),
      })),
    ],
  };
}
