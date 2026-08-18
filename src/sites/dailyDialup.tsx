import type { MockSite } from "./types";

const dailyDialup: MockSite = {
  address: "www.dailydialup.com",
  title: "The Daily Dial-Up — Your #1 Source for Cyber News",
  description: "Breaking news from the information superhighway, updated whenever someone remembers to.",
  chunks: [
    {
      kind: "text",
      weightKB: 2,
      node: (
        <>
          <h1>THE DAILY DIAL-UP</h1>
          <p>
            <em>"All the news that's fit to download."</em>
          </p>
        </>
      ),
    },
    {
      kind: "text",
      weightKB: 10,
      node: (
        <>
          <h2>Top Headlines</h2>
          <table className="retro-table">
            <tbody>
              <tr>
                <td>Local Man Discovers He Can't Use the Phone While Online</td>
              </tr>
              <tr>
                <td>Experts Warn: Downloading a Car Would Take 4 Years</td>
              </tr>
              <tr>
                <td>New Screensaver Promises to Prevent "Burn-In," Deliver World Peace</td>
              </tr>
              <tr>
                <td>Study Finds 9 Out of 10 Modems Prefer to Be Left Alone Overnight</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      kind: "image",
      weightKB: 12,
      node: (
        <div className="ad-banner">
          <div className="blink-text">YOU ARE THE 1,000,000th VISITOR!!!</div>
          <div>CLICK HERE TO CLAIM YOUR PRIZE</div>
        </div>
      ),
    },
    {
      kind: "text",
      weightKB: 3,
      node: (
        <>
          <h2>Weather on the Information Superhighway</h2>
          <p>Scattered packet loss with a chance of disconnection around dinnertime.</p>
        </>
      ),
    },
    {
      kind: "text",
      weightKB: 1,
      node: (
        <p>
          Featured reader site: <span className="retro-link">Steve's Rad Homepage</span>
        </p>
      ),
    },
  ],
};

export default dailyDialup;
