import type { ReactNode } from "react";
import { useNavigate } from "../context/NavigationContext";

type Props = {
  address: string;
  children: ReactNode;
};

export default function SiteLink({ address, children }: Props) {
  const navigate = useNavigate();

  return (
    <button type="button" className="link-button" onClick={() => navigate(address)}>
      {children}
    </button>
  );
}
