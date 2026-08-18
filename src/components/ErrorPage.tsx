type Props = {
  address: string;
};

export default function ErrorPage({ address }: Props) {
  return (
    <div className="error-page">
      <p className="error-page-icon">⚠</p>
      <h2>The page cannot be displayed</h2>
      <p>
        <strong>{address || "(blank)"}</strong> could not be found. Please check the address and try again.
      </p>
      <ul>
        <li>Make sure the site address is spelled correctly.</li>
        <li>Try visiting the NetZone homepage instead.</li>
      </ul>
    </div>
  );
}
