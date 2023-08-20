import { useMemo } from "react";

import { FaHandHoldingUsd } from "react-icons/fa";
import { GiCctvCamera } from "react-icons/gi";
import { MdLocalHospital } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { BsHouseDoorFill } from "react-icons/bs";

export const useProductTypes = () => {
  const productTypes = useMemo(
    () => [
      {
        id: "acidente",
        title: "Acidentes Pessoais",
        icon: MdLocalHospital,
      },
      {
        id: "consorcio",
        title: "Consórcios",
        icon: FaHandHoldingUsd,
      },
      {
        id: "equipamentos",
        title: "Equipamentos Portáteis",
        icon: FaCamera,
      },
      {
        id: "imovel",
        title: "Imóveis",
        icon: BsHouseDoorFill,
      },
      {
        id: "monitoramento",
        title: "Proteção e Monitoramento",
        icon: GiCctvCamera,
      },

      {
        id: "auto",
        title: "Veículos",
        icon: AiFillCar,
      },
      {
        id: "viagem",
        title: "Viagem",
        icon: GiCommercialAirplane,
      },
      {
        id: "vida",
        title: "Vida e Família",
        icon: MdFamilyRestroom,
      },
    ],
    []
  );

  return {
    productTypes,
  };
};
