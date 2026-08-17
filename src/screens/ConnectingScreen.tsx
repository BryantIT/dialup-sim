type Props = {
  number: string;
};

export default function ConnectingScreen({ number }: Props) {
  const display = number ? number : "your ISP";

  return (
    <div className="win-panel bevel-in">
      <p style={{ marginTop: 0 }}>
        <strong>Dialing {display}…</strong>
      </p>
      <p>
        (Placeholder — built in Phase 2: handshake sound, staged status text,
        and the 10% busy-signal roll will go here.)
      </p>
    </div>
  );
}
