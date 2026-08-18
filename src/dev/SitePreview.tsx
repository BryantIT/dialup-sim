import { useState } from "react";
import { mockSites, getPageWeightKB } from "../sites";
import SiteContent from "../components/SiteContent";

export default function SitePreview() {
  const [open, setOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);

  const selectedSite = mockSites.find((s) => s.address === selectedAddress) ?? null;

  if (!open) {
    return (
      <button
        type="button"
        className="win-button bevel-out"
        style={{ position: "fixed", bottom: 16, left: 16 }}
        onClick={() => setOpen(true)}
      >
        dev: preview sites
      </button>
    );
  }

  return (
    <div
      className="win-window bevel-out"
      style={{
        position: "fixed",
        top: 16,
        left: 16,
        width: 420,
        maxHeight: "85vh",
        overflowY: "auto",
        zIndex: 1000,
      }}
    >
      <div className="win-titlebar">
        <span className="win-titlebar-text">dev: Mock Site Preview (full speed, no throttle)</span>
        <button
          type="button"
          className="win-button bevel-out"
          onClick={() => {
            setOpen(false);
            setSelectedAddress(null);
          }}
        >
          X
        </button>
      </div>
      <div className="win-window-body">
        {selectedSite ? (
          <>
            <button
              type="button"
              className="win-button bevel-out"
              style={{ marginBottom: 10 }}
              onClick={() => setSelectedAddress(null)}
            >
              ← Back to list
            </button>
            <div className="browser-viewport bevel-in">
              <SiteContent site={selectedSite} />
            </div>
          </>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {mockSites.map((site) => (
              <li key={site.address} style={{ marginBottom: 10 }}>
                <button
                  type="button"
                  className="win-button bevel-out"
                  style={{ width: "100%", textAlign: "left" }}
                  onClick={() => setSelectedAddress(site.address)}
                >
                  {site.title}
                </button>
                <div style={{ fontSize: 11, padding: "2px 4px" }}>
                  {site.address} — {getPageWeightKB(site)}KB, {site.chunks.length} chunks
                  <br />
                  {site.description}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
