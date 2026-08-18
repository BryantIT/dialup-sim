import GuestbookForm from "../components/retro/GuestbookForm";
import type { MockSite } from "./types";

const guestbook: MockSite = {
  address: "www.stevesguestbook.com",
  title: "Steve's Guestbook",
  description: "Leave your mark! Read what other visitors had to say.",
  chunks: [
    {
      kind: "text",
      weightKB: 2,
      node: (
        <>
          <h1>SIGN MY GUESTBOOK</h1>
          <p>Thanks for visiting! Let me know you stopped by.</p>
        </>
      ),
    },
    {
      kind: "text",
      weightKB: 4,
      node: <GuestbookForm />,
    },
    {
      kind: "text",
      weightKB: 1,
      node: (
        <p>
          Back to <span className="retro-link">Steve's Rad Homepage</span>
        </p>
      ),
    },
  ],
};

export default guestbook;
