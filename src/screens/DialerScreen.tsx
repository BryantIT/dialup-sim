import { useState } from "react";

type Props = {
  onDial: (number: string) => void;
  initialNumber?: string;
};

export default function DialerScreen({ onDial, initialNumber = "" }: Props) {
  const [number, setNumber] = useState(initialNumber);
  const [dialing, setDialing] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (dialing) return;
    setDialing(true);
    onDial(number.trim());
  }

  return (
    <form onSubmit={handleSubmit}>
      <p style={{ marginTop: 0 }}>
        Enter a phone number to connect to <strong>NetZone Online</strong>.
      </p>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <label htmlFor="phone-number">Phone number:</label>
        <input
          id="phone-number"
          type="tel"
          className="win-input bevel-in"
          style={{ flex: 1 }}
          placeholder="555-0199"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          autoFocus
        />
      </div>
      <div style={{ marginTop: 16, textAlign: "right" }}>
        <button type="submit" className="win-button bevel-out" disabled={dialing}>
          Dial
        </button>
      </div>
    </form>
  );
}
