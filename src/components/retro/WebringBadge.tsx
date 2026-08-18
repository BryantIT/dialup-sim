type Props = {
  ringName: string;
};

export default function WebringBadge({ ringName }: Props) {
  return (
    <div className="webring-badge">
      <div className="webring-badge-title">{ringName}</div>
      <div className="webring-badge-nav">
        <span>◄ PREV</span>
        <span>RANDOM</span>
        <span>NEXT ►</span>
      </div>
    </div>
  );
}
