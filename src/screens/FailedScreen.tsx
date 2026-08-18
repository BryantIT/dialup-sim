type Props = {
  onRedial: () => void;
};

export default function FailedScreen({ onRedial }: Props) {
  return (
    <div className="win-panel bevel-in">
      <p style={{ marginTop: 0 }}>
        <strong>*BUSY*</strong>
      </p>
      <p>Unable to connect — the line was busy. Please try again.</p>
      <div style={{ textAlign: "right" }}>
        <button type="button" className="win-button bevel-out" onClick={onRedial}>
          Redial
        </button>
      </div>
    </div>
  );
}
