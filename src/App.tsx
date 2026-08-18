import { useState } from "react";
import type { AppState } from "./types";
import DialerScreen from "./screens/DialerScreen";
import ConnectingScreen from "./screens/ConnectingScreen";
import ConnectedScreen from "./screens/ConnectedScreen";
import FailedScreen from "./screens/FailedScreen";
import DevStateSwitcher from "./dev/DevStateSwitcher";

function App() {
  const [state, setState] = useState<AppState>("dialer");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleDial(number: string) {
    setPhoneNumber(number);
    setState("connecting");
  }

  function handleConnectingSettled(success: boolean) {
    setState(success ? "connected" : "failed");
  }

  function handleRedial() {
    setState("dialer");
  }

  return (
    <div className="desktop">
      <div className="win-window bevel-out" style={{ width: 480 }}>
        <div className="win-titlebar">
          <span className="win-titlebar-text">Dial-Up Networking</span>
        </div>
        <div className="win-window-body">
          {state === "dialer" && <DialerScreen onDial={handleDial} />}
          {state === "connecting" && (
            <ConnectingScreen number={phoneNumber} onSettled={handleConnectingSettled} />
          )}
          {state === "connected" && <ConnectedScreen />}
          {state === "failed" && <FailedScreen onRedial={handleRedial} />}
        </div>
      </div>
      {import.meta.env.DEV && <DevStateSwitcher state={state} setState={setState} />}
    </div>
  );
}

export default App;
