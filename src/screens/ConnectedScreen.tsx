import { useState } from "react";
import BrowserChrome from "../components/BrowserChrome";
import PortalPage from "../components/PortalPage";
import SiteContent from "../components/SiteContent";
import { findSiteByAddress } from "../sites";

const HOME_ADDRESS = "home.netzone.com";

type Props = {
  onDisconnect: () => void;
};

export default function ConnectedScreen({ onDisconnect }: Props) {
  const [currentAddress, setCurrentAddress] = useState(HOME_ADDRESS);

  function handleNavigate(address: string) {
    const site = findSiteByAddress(address);
    if (site) setCurrentAddress(site.address);
  }

  function handleHome() {
    setCurrentAddress(HOME_ADDRESS);
  }

  const site = currentAddress === HOME_ADDRESS ? null : findSiteByAddress(currentAddress);

  return (
    <BrowserChrome onDisconnect={onDisconnect} onHome={handleHome} currentAddress={currentAddress}>
      {site ? <SiteContent site={site} /> : <PortalPage onNavigate={handleNavigate} />}
    </BrowserChrome>
  );
}
