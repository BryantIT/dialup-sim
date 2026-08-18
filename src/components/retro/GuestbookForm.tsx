import { useState } from "react";

type Entry = {
  name: string;
  message: string;
};

const SEEDED_ENTRIES: Entry[] = [
  { name: "CoolDude98", message: "sweet site!! love the hit counter lol" },
  { name: "Aunt Carol", message: "Steve, please call your mother." },
  { name: "xxSk8rGrlxx", message: "found u through the bigfoot webring, nice pets!" },
];

export default function GuestbookForm() {
  const [entries, setEntries] = useState<Entry[]>(SEEDED_ENTRIES);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSign(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() && !message.trim()) return;
    setEntries((prev) => [
      { name: name.trim() || "Anonymous", message: message.trim() || "(no message)" },
      ...prev,
    ]);
    setName("");
    setMessage("");
  }

  return (
    <div>
      <form onSubmit={handleSign} className="guestbook-form">
        <div className="guestbook-form-row">
          <label htmlFor="gb-name">Your name:</label>
          <input
            id="gb-name"
            type="text"
            className="win-input bevel-in"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="guestbook-form-row">
          <label htmlFor="gb-message">Message:</label>
          <textarea
            id="gb-message"
            className="win-input bevel-in"
            rows={2}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" className="win-button bevel-out">
          Sign the Guestbook
        </button>
      </form>

      <ul className="guestbook-entries">
        {entries.map((entry, i) => (
          <li key={i} className="guestbook-entry">
            <strong>{entry.name}</strong> writes: {entry.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
