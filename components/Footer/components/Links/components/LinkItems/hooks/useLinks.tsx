import { useMemo } from "react";

export const useLinks = () => {
  const linkItems = useMemo(
    () => [
      {
        id: "about",
        name: "Sobre",
        href: "/quem-somos",
      },
      {
        id: "privacy",
        name: "Política de privacidade",
        href: "/politica-de-privacidade",
      },
    ],
    []
  );

  return {
    linkItems,
  };
};
