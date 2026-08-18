import type { MockSite } from "../sites/types";

type Props = {
  site: MockSite;
};

export default function SiteContent({ site }: Props) {
  return (
    <div>
      {site.chunks.map((chunk, i) => (
        <div key={i}>{chunk.node}</div>
      ))}
    </div>
  );
}
