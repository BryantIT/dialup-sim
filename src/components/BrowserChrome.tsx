import { useEffect, useState, type FormEvent, type ReactNode } from "react";

type Props = {
  onDisconnect: () => void;
  onHome: () => void;
  onNavigate: (address: string) => void;
  currentAddress: string;
  children: ReactNode;
  statusText?: string;
};

export default function BrowserChrome({
  onDisconnect,
  onHome,
  onNavigate,
  currentAddress,
  children,
  statusText = "Ready",
}: Props) {
  const [address, setAddress] = useState(currentAddress);

  useEffect(() => {
    setAddress(currentAddress);
  }, [currentAddress]);

  function handleGo(e: FormEvent) {
    e.preventDefault();
    onNavigate(address);
  }

  return (
    <div>
      <form onSubmit={handleGo} className="browser-toolbar">
        <button type="button" className="win-button bevel-out" onClick={onHome}>
          Home
        </button>
        <input
          type="text"
          className="win-input bevel-in"
          style={{ flex: 1 }}
          placeholder="Type a site name…"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit" className="win-button bevel-out">
          Go
        </button>
        <button type="button" className="win-button bevel-out" onClick={onDisconnect}>
          Hang Up
        </button>
      </form>
      <div className="browser-viewport bevel-in">{children}</div>
      <div className="browser-statusbar bevel-in">{statusText}</div>
    </div>
  );
}
