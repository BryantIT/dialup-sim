import { mockSites } from "../sites";

type Props = {
  onNavigate: (address: string) => void;
};

export default function PortalPage({ onNavigate }: Props) {
  return (
    <div className="portal-page">
      <div className="portal-logo">
        NetZone<span className="portal-logo-bang">!</span>
      </div>
      <p className="portal-tagline">Your Gateway to the Information Superhighway</p>
      <hr />
      <h2>Featured Sites</h2>
      <ul className="portal-directory">
        {mockSites.map((site) => (
          <li key={site.address} className="portal-directory-item">
            <button
              type="button"
              className="link-button portal-directory-link"
              onClick={() => onNavigate(site.address)}
            >
              {site.title}
            </button>
            <div className="portal-directory-address">{site.address}</div>
            <div className="portal-directory-desc">{site.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
