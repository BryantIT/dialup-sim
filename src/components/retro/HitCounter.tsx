type Props = {
  value: number;
};

export default function HitCounter({ value }: Props) {
  const digits = String(value).padStart(6, "0").split("");

  return (
    <div className="hit-counter-wrap">
      <div className="hit-counter">
        {digits.map((d, i) => (
          <span key={i} className="hit-counter-digit">
            {d}
          </span>
        ))}
      </div>
      <div className="hit-counter-label">you are visitor number</div>
    </div>
  );
}
