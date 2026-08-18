import { useEffect, useState } from "react";

export default function Taskbar() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const time = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  return (
    <div className="taskbar">
      <button type="button" className="win-button bevel-out taskbar-start">
        <span className="taskbar-start-icon">⊞</span> Start
      </button>
      <div className="taskbar-clock bevel-in">{time}</div>
    </div>
  );
}
