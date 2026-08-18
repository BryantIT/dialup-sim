import { useCallback, useMemo, useState } from "react";
import BrowserChrome from "../components/BrowserChrome";
import SiteContent from "../components/SiteContent";
import { findSiteByAddress, mockSites } from "../sites";
import { buildPortalSite, HOME_ADDRESS } from "../sites/portal";
import { useThrottledLoad } from "../hooks/useThrottledLoad";

type Props = {
  onDisconnect: () => void;
};

export default function ConnectedScreen({ onDisconnect }: Props) {
  const [currentAddress, setCurrentAddress] = useState(HOME_ADDRESS);

  const handleNavigate = useCallback((address: string) => {
    const site = findSiteByAddress(address);
    if (site) setCurrentAddress(site.address);
  }, []);

  const handleHome = useCallback(() => {
    setCurrentAddress(HOME_ADDRESS);
  }, []);

  const portalSite = useMemo(() => buildPortalSite(mockSites, handleNavigate), [handleNavigate]);

  const currentSite =
    currentAddress === HOME_ADDRESS ? portalSite : (findSiteByAddress(currentAddress) ?? portalSite);

  const { revealedCount, percent, downloadedKB, totalKB, isDone, speedKbps } = useThrottledLoad(currentSite);

  const statusText = isDone
    ? "Done"
    : `Downloading… ${speedKbps.toFixed(1)} KB/s — ${percent}% (${downloadedKB.toFixed(1)}/${totalKB} KB)`;

  return (
    <BrowserChrome
      onDisconnect={onDisconnect}
      onHome={handleHome}
      currentAddress={currentAddress}
      statusText={statusText}
    >
      <SiteContent site={currentSite} revealedCount={revealedCount} />
    </BrowserChrome>
  );
}
