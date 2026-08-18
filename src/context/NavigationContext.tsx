import { createContext, useContext, type ReactNode } from "react";

type NavigateFn = (address: string) => void;

const NavigationContext = createContext<NavigateFn>(() => {});

type ProviderProps = {
  navigate: NavigateFn;
  children: ReactNode;
};

export function NavigationProvider({ navigate, children }: ProviderProps) {
  return <NavigationContext.Provider value={navigate}>{children}</NavigationContext.Provider>;
}

export function useNavigate(): NavigateFn {
  return useContext(NavigationContext);
}
