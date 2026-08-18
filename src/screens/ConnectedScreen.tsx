import { useCallback, useMemo, useState } from "react";
import BrowserChrome from "../components/BrowserChrome";
import SiteContent from "../components/SiteContent";
import ErrorPage from "../components/ErrorPage";
import { NavigationProvider } from "../context/NavigationContext";
import { findSiteByAddress, mockSites } from "../sites";
import { buildPortalSite, HOME_ADDRESS } from "../sites/portal";
import { useThrottledLoad } from "../hooks/useThrottledLoad";

type Props = {
  onDisconnect: () => void;
};

export default function ConnectedScreen({ onDisconnect }: Props) {
  const [currentAddress, setCurrentAddress] = useState(HOME_ADDRESS);
  const [notFoundAddress, setNotFoundAddress] = useState<string | null>(null);

  const handleNavigate = useCallback((address: string) => {
    const site = findSiteByAddress(address);
    if (site) {
      setCurrentAddress(site.address);
      setNotFoundAddress(null);
    } else {
      setNotFoundAddress(address.trim());
    }
  }, []);

  const handleHome = useCallback(() => {
    setCurrentAddress(HOME_ADDRESS);
    setNotFoundAddress(null);
  }, []);

  const portalSite = useMemo(() => buildPortalSite(mockSites, handleNavigate), [handleNavigate]);

  const currentSite =
    currentAddress === HOME_ADDRESS ? portalSite : (findSiteByAddress(currentAddress) ?? portalSite);

  const { revealedCount, percent, downloadedKB, totalKB, isDone, speedKbps } = useThrottledLoad(currentSite);

  const statusText = notFoundAddress
    ? `Cannot find server: ${notFoundAddress || "(blank)"}`
    : isDone
      ? "Done"
      : `Downloading… ${speedKbps.toFixed(1)} KB/s — ${percent}% (${downloadedKB.toFixed(1)}/${totalKB} KB)`;

  return (
    <NavigationProvider navigate={handleNavigate}>
      <BrowserChrome
        onDisconnect={onDisconnect}
        onHome={handleHome}
        onNavigate={handleNavigate}
        currentAddress={currentAddress}
        statusText={statusText}
      >
        {notFoundAddress !== null ? (
          <ErrorPage address={notFoundAddress} />
        ) : (
          <SiteContent site={currentSite} revealedCount={revealedCount} />
        )}
      </BrowserChrome>
    </NavigationProvider>
  );
}
