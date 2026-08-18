import UnderConstructionBanner from "../components/retro/UnderConstructionBanner";
import HitCounter from "../components/retro/HitCounter";
import SiteLink from "../components/SiteLink";
import type { MockSite } from "./types";

const stevesHomepage: MockSite = {
  address: "www.stevesradhomepage.com",
  title: "Steve's Rad Homepage!!!",
  description: "Steve's personal corner of the web — pets, hobbies, and an ever-growing hit counter.",
  chunks: [
    {
      kind: "text",
      weightKB: 2,
      node: (
        <h1 className="marquee-text">★ WELCOME TO STEVE'S RAD HOMEPAGE ★</h1>
      ),
    },
    {
      kind: "text",
      weightKB: 3,
      node: (
        <p>
          Hi, I'm Steve! Thanks for stopping by my little piece of the World Wide Web.
          This page looks best in 800x600 resolution. Feel free to sign my{" "}
          <SiteLink address="www.stevesguestbook.com">guestbook</SiteLink> before you leave!
        </p>
      ),
    },
    {
      kind: "image",
      weightKB: 8,
      node: <UnderConstructionBanner />,
    },
    {
      kind: "text",
      weightKB: 4,
      node: (
        <>
          <h2>My Pets</h2>
          <table className="retro-table">
            <tbody>
              <tr>
                <td>🐹</td>
                <td>
                  <strong>Nibbles</strong> — my hamster. He's very fast on his wheel.
                </td>
              </tr>
              <tr>
                <td>🐢</td>
                <td>
                  <strong>Shelldon</strong> — my turtle. He's very slow on his wheel (he doesn't have one).
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      kind: "image",
      weightKB: 1,
      node: <HitCounter value={3482} />,
    },
    {
      kind: "text",
      weightKB: 2,
      node: (
        <>
          <h2>Cool Links</h2>
          <ul>
            <li>
              <SiteLink address="www.bigfootbelievers.com">Join the Bigfoot Believers Web Ring</SiteLink>
            </li>
            <li>
              <SiteLink address="www.dailydialup.com">Read the Daily Dial-Up</SiteLink>
            </li>
            <li>
              <SiteLink address="www.stevesguestbook.com">Sign my guestbook</SiteLink>
            </li>
          </ul>
        </>
      ),
    },
  ],
};

export default stevesHomepage;
