import { useMemo } from "react";

export const useBreadCrumbItem = () => {
  const breadCrumbItem = useMemo(
    () => [
      {
        id: 1,
        url: "/quem-somos",
        title: "Quem somos",
      },
      {
        id: 2,
        url: "/norma",
        title: "Norma",
      },
      {
        id: 3,
        url: "/norma/rbac-120-explicado",
        title: "Norma ANAC RBAC 120 explicada",
      },
      {
        id: 4,
        url: "/norma/empresas-obrigadas-a-adocao-da-rbac",
        title: "Quem está obrigado a adotar…",
      },
      {
        id: 5,
        url: "/norma/consultoria-norma-rbac-120",
        title: "Como implantar a norma RBAC?",
      },
      {
        id: 6,
        url: "/faq",
        title: "FAQ",
      },

      {
        id: 7,
        url: "/faq/quando-aplicar-exames-toxicologicos",
        title: "Quando aplicar exames toxicológicos?",
      },
      {
        id: 8,
        url: "/faq/qual-a-definicao-de-arso",
        title: "Qual a definição de ARSO?",
      },
      {
        id: 9,
        url: "/faq/quais-sao-as-datas-limites-para-implantacao",
        title: "Quais são as datas limites…",
      },
      {
        id: 10,
        url: "/faq/onde-encontro-a-norma-oficial",
        title: "Onde encontro a norma oficial?",
      },
      {
        id: 11,
        url: "/fale-conosco",
        title: "Fale conosco",
      },
      {
        id: 12,
        url: "/contact",
        title: "Fale conosco",
      },
    ],
    []
  );

  return {
    breadCrumbItem,
  };
};
