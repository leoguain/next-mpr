import { useMemo } from "react";

import { MOBILE_BREAKPOINT } from "../../../lib/constants";

import { useWindowSize } from "../../../hooks/useWindowsSize";

export const useHeader = () => {
  const { width } = useWindowSize();

  const menuItems = useMemo(
    () => [
      {
        id: "Início",
        href: "/",
        subItems: [],
      },
      {
        id: "Produtos",
        href: "/produtos",
        subItems: [],
      },
      {
        id: "Telefones Úteis",
        href: "/telefones-uteis",
        subItems: [],
      },
      {
        id: "Solicite uma proposta",
        href: "/proposta-online",
        subItems: [],
      },
      {
        id: "Quem somos",
        href: "/quem-somos",
        subItems: [],
      },
    ],
    []
  );

  const isMobile = width < MOBILE_BREAKPOINT;

  return {
    menuItems,
    isMobile,
  };
};
