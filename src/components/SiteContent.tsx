import type { MockSite } from "../sites/types";

type Props = {
  site: MockSite;
  /** How many chunks (from the start) are revealed. Omit to render everything at once. */
  revealedCount?: number;
};

export default function SiteContent({ site, revealedCount }: Props) {
  const count = revealedCount ?? site.chunks.length;
  const visible = site.chunks.slice(0, count);
  const pending = site.chunks[count];

  return (
    <div>
      {visible.map((chunk, i) => (
        <div key={i}>{chunk.node}</div>
      ))}
      {pending?.kind === "image" && (
        <div className="image-placeholder blink-text">[ Loading image… ]</div>
      )}
    </div>
  );
}
