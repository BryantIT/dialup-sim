import WebringBadge from "../components/retro/WebringBadge";
import SiteLink from "../components/SiteLink";
import type { MockSite } from "./types";

const bigfootWebring: MockSite = {
  address: "www.bigfootbelievers.com",
  title: "The Bigfoot Believers Web Ring",
  description: "A ring of true believers, united by grainy photographic evidence and unwavering conviction.",
  chunks: [
    {
      kind: "text",
      weightKB: 3,
      node: (
        <>
          <h1>THE BIGFOOT BELIEVERS WEB RING</h1>
          <p>
            You have reached the official home of the Web Ring for those who KNOW the truth
            is out there, walking upright, in the Pacific Northwest.
          </p>
        </>
      ),
    },
    {
      kind: "image",
      weightKB: 15,
      node: (
        <div className="photo-evidence">
          <div className="photo-evidence-frame">[ BLURRY PHOTOGRAPH — TRUST US ]</div>
          <div className="photo-evidence-caption">Exhibit A. Taken near Willamette National Forest, 1987.</div>
        </div>
      ),
    },
    {
      kind: "text",
      weightKB: 5,
      node: (
        <>
          <h2>Member Testimonials</h2>
          <table className="retro-table">
            <tbody>
              <tr>
                <td>"I heard a knock on my tent at 3am. It was HIM."</td>
                <td>
                  <em>— RidgeWalker_Dan</em>
                </td>
              </tr>
              <tr>
                <td>"The footprint was 18 inches. EIGHTEEN."</td>
                <td>
                  <em>— SquatchMom77</em>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      kind: "image",
      weightKB: 3,
      node: <WebringBadge ringName="Bigfoot Believers Web Ring" />,
    },
    {
      kind: "text",
      weightKB: 1,
      node: (
        <p>
          Ring member spotlight: <SiteLink address="www.stevesradhomepage.com">Steve's Rad Homepage</SiteLink>{" "}
          (he has a hamster, not a Sasquatch, but he's still a believer).
        </p>
      ),
    },
  ],
};

export default bigfootWebring;
