import type { AppState } from "../types";

const STATES: AppState[] = ["dialer", "connecting", "connected", "failed"];

type Props = {
  state: AppState;
  setState: (s: AppState) => void;
};

export default function DevStateSwitcher({ state, setState }: Props) {
  return (
    <div
      className="win-panel bevel-out"
      style={{ position: "fixed", bottom: 16, right: 16, display: "flex", gap: 6 }}
    >
      <span style={{ alignSelf: "center", fontSize: 11 }}>dev: jump to</span>
      {STATES.map((s) => (
        <button
          key={s}
          type="button"
          className="win-button bevel-out"
          disabled={s === state}
          onClick={() => setState(s)}
        >
          {s}
        </button>
      ))}
    </div>
  );
}
