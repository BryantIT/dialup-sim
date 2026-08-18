import { useState } from "react";
import type { AppState } from "./types";
import DialerScreen from "./screens/DialerScreen";
import ConnectingScreen from "./screens/ConnectingScreen";
import ConnectedScreen from "./screens/ConnectedScreen";
import FailedScreen from "./screens/FailedScreen";
import DevStateSwitcher from "./dev/DevStateSwitcher";
import SitePreview from "./dev/SitePreview";
import Taskbar from "./components/retro/Taskbar";

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

  function handleDisconnect() {
    setState("dialer");
  }

  const windowTitle = state === "connected" ? "NetZone Browser" : "Dial-Up Networking";
  const windowWidth = state === "connected" ? "min(92vw, 960px)" : "min(92vw, 480px)";

  return (
    <div className="desktop">
      <div className="win-window bevel-out" style={{ width: windowWidth }}>
        <div className="win-titlebar">
          <span className="win-titlebar-text">{windowTitle}</span>
        </div>
        <div className="win-window-body">
          {state === "dialer" && <DialerScreen onDial={handleDial} initialNumber={phoneNumber} />}
          {state === "connecting" && (
            <ConnectingScreen number={phoneNumber} onSettled={handleConnectingSettled} />
          )}
          {state === "connected" && <ConnectedScreen onDisconnect={handleDisconnect} />}
          {state === "failed" && <FailedScreen onRedial={handleRedial} />}
        </div>
      </div>
      <Taskbar />
      <div className="crt-overlay" />
      {import.meta.env.DEV && <DevStateSwitcher state={state} setState={setState} />}
      {import.meta.env.DEV && <SitePreview />}
    </div>
  );
}

export default App;
