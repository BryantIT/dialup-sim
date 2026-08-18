import BrowserChrome from "../components/BrowserChrome";

type Props = {
  onDisconnect: () => void;
};

export default function ConnectedScreen({ onDisconnect }: Props) {
  return (
    <BrowserChrome onDisconnect={onDisconnect}>
      <p style={{ marginTop: 0 }}>
        <strong>Browser content area</strong> (placeholder — built in Phases 4–7)
      </p>
      <p>The search-portal landing page and mock sites will render here.</p>
    </BrowserChrome>
  );
}
