import { useEffect, useRef, useState } from "react";
import { rollConnectionSuccess } from "../utils/connection";

type Props = {
  number: string;
  onSettled: (success: boolean) => void;
};

type Outcome = "pending" | "busy" | "success";

const CONNECTION_SPEED = "56000 bps";
const SUCCESS_TOTAL_MS = 16000;
const BUSY_TOTAL_MS = 3700;

export default function ConnectingScreen({ number, onSettled }: Props) {
  const display = number ? number : "your ISP";
  const [success] = useState(rollConnectionSuccess);
  const [label, setLabel] = useState(`Dialing ${display}…`);
  const [outcome, setOutcome] = useState<Outcome>("pending");
  const settledRef = useRef(onSettled);
  settledRef.current = onSettled;

  useEffect(() => {
    const audio = new Audio("/audio/dial-up.mp3");
    audio.play().catch(() => {
      // Autoplay may be blocked until the user interacts with the page;
      // the visual sequence still runs regardless.
    });

    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const schedule = (ms: number, fn: () => void) => {
      timeouts.push(setTimeout(fn, ms));
    };

    if (success) {
      schedule(2000, () => setLabel("Connecting…"));
      schedule(5000, () => setLabel("Handshaking…"));
      schedule(9000, () => setLabel("Negotiating…"));
      schedule(12500, () => setLabel("Authenticating…"));
      schedule(14500, () => {
        setLabel(`Connected at ${CONNECTION_SPEED}!`);
        setOutcome("success");
      });
      schedule(SUCCESS_TOTAL_MS, () => settledRef.current(true));
    } else {
      schedule(2200, () => {
        audio.pause();
        setLabel("No answer — line busy.");
        setOutcome("busy");
      });
      schedule(BUSY_TOTAL_MS, () => settledRef.current(false));
    }

    return () => {
      timeouts.forEach(clearTimeout);
      audio.pause();
    };
  }, [success, display]);

  const totalMs = success ? SUCCESS_TOTAL_MS : BUSY_TOTAL_MS;

  return (
    <div className="win-panel bevel-in">
      <p style={{ marginTop: 0 }}>
        <strong>{label}</strong>
      </p>
      <div className="progress-track bevel-in">
        <div className="progress-fill" style={{ animationDuration: `${totalMs}ms` }} />
      </div>
      <ModemLights outcome={outcome} />
    </div>
  );
}

function ModemLights({ outcome }: { outcome: Outcome }) {
  const color = outcome === "busy" ? "#ff0000" : "#00ff00";
  const blinking = outcome === "pending";

  return (
    <div className="modem-lights">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`modem-light${blinking ? " blink" : ""}`}
          style={{
            background: color,
            boxShadow: `0 0 4px ${color}`,
            animationDelay: blinking ? `${i * 0.15}s` : undefined,
          }}
        />
      ))}
    </div>
  );
}
