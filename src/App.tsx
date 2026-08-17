import { useState } from "react";
import type { AppState } from "./types";
import DialerScreen from "./screens/DialerScreen";
import ConnectingScreen from "./screens/ConnectingScreen";
import ConnectedScreen from "./screens/ConnectedScreen";
import FailedScreen from "./screens/FailedScreen";
import DevStateSwitcher from "./dev/DevStateSwitcher";

function App() {
  const [state, setState] = useState<AppState>("dialer");

  return (
    <div className="desktop">
      <div className="win-window bevel-out" style={{ width: 480 }}>
        <div className="win-titlebar">
          <span className="win-titlebar-text">Dial-Up Networking</span>
        </div>
        <div className="win-window-body">
          {state === "dialer" && <DialerScreen />}
          {state === "connecting" && <ConnectingScreen />}
          {state === "connected" && <ConnectedScreen />}
          {state === "failed" && <FailedScreen />}
        </div>
      </div>
      {import.meta.env.DEV && <DevStateSwitcher state={state} setState={setState} />}
    </div>
  );
}

export default App;
