# Dial-Up Simulator

A single-page app that recreates the experience of connecting to the internet via a dial-up modem — enter a number, dial in, listen to the handshake, maybe get a busy signal, and once connected, browse a small "internet" of retro mock sites at authentic dial-up speeds.

## Features

**Dialer**
- Enter any phone number (no validation — it's cosmetic, purely for the experience) and hit Dial.
- Redialing after a busy signal prefills the number you last tried.

**Connection sequence**
- Plays a real dial-up handshake sound while a staged status readout ("Dialing… → Connecting… → Handshaking… → Negotiating… → Authenticating…") and an animated progress bar/modem lights run for ~16 seconds.
- **10% chance** the line is busy — the audio cuts short, the modem lights turn red, and you land on a "*BUSY*" screen with a Redial button. The odds are fixed and never shown to the user.
- On success, the browser widens into "NetZone Browser" with a confirmation ("Connected at 56000 bps!").

**Browsing**
- A NetZone Browser chrome (Home / address bar / Go / Hang Up / status bar) wraps everything once connected.
- Landing page is a retro search-portal ("NetZone!") listing all available mock sites.
- Four hand-built period sites, each with a distinct simulated "page weight":
  - **Steve's Rad Homepage** (`www.stevesradhomepage.com`) — GeoCities-style personal page: marquee header, "under construction" banner, pet table, LED-style hit counter.
  - **The Bigfoot Believers Web Ring** (`www.bigfootbelievers.com`) — testimonials table, blurred "photo evidence," webring nav badge.
  - **The Daily Dial-Up** (`www.dailydialup.com`) — parody tech-news headlines and a garish banner ad.
  - **Steve's Guestbook** (`www.stevesguestbook.com`) — a working mini guestbook form (in-memory, resets on reload).
- **Throttled progressive loading**: every page load — including the portal — paces itself against a simulated 4 KB/s connection. Text renders first; pending images show a blinking "`[ Loading image… ]`" placeholder until their simulated download time elapses. The status bar shows a live "Downloading… X KB/s — Y% (Z/N KB)" readout.
- **Address bar resolution**: type a known site's address (case- and protocol-insensitive) and hit Go/Enter to navigate directly.
- **Cross-links**: pages link to each other in-context (e.g. Steve's homepage links to the webring, the guestbook, and the zine), so you can browse site-to-site without returning to the portal.
- **Error page**: typing an unrecognized address renders a period-correct "The page cannot be displayed" screen instead of doing nothing.
- Hang Up returns to the dialer at any point, mid-load or not.

**Retro presentation**
- Windows-95-style UI throughout: beveled buttons/panels, a blue gradient titlebar, a fixed taskbar with a live clock, and a subtle CRT scanline/vignette overlay.
- Responsive down to phone-width viewports.

## Tech Stack

- React + Vite + TypeScript
- No backend — fully client-side simulation, deployed as a static SPA

## Getting Started

```
npm install
npm run dev       # start the dev server
npm run build     # type-check + production build
npm run preview   # preview the production build
npm run lint       # oxlint
```

In development, two extra dev-only overlays appear (stripped from production builds): a bottom-right state switcher to jump directly between dialer/connecting/connected/failed, and a bottom-left "preview sites" panel to review each mock site's content at full speed with no throttling.

## Project Structure

```
src/
  App.tsx                 top-level state machine (dialer/connecting/connected/failed)
  screens/                one component per app state
  components/              BrowserChrome, SiteContent, SiteLink, ErrorPage
  components/retro/        reusable period UI flourishes (Taskbar, HitCounter, WebringBadge, ...)
  sites/                   mock site content + data model (MockSite, SiteChunk) and the address registry
  hooks/useThrottledLoad.ts  the progressive-loading engine
  context/NavigationContext.tsx  lets in-page links navigate without prop drilling
  utils/connection.ts      the 10% busy-signal roll
  styles/                  theme.css (chrome) and sites.css (mock site content styling)
  dev/                     dev-only state switcher and site preview panel
```

## How the Loader Works

Each `MockSite` is a list of weighted `SiteChunk`s (`{ kind: "text" | "image", weightKB, node }`). `useThrottledLoad` sums a page's total weight, then reveals chunks over time at a fixed simulated 4 KB/s, exposing `revealedCount`, `percent`, and `downloadedKB` so the UI can slice the chunk list and drive the status bar in sync. The search portal is built the same way (`buildPortalSite`), so it goes through the identical loading experience as every other page.

## Project Docs

Planning docs live in `reference/` locally and are gitignored (not part of the shipped app):

- `reference/USER_STORIES.md` — feature requirements as user stories
- `reference/DEVELOPMENT_PLAN.md` — phased build plan with test checkpoints
