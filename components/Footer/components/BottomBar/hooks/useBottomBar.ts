import { useMemo } from "react";

import { MOBILE_BREAKPOINT } from "../../../../../lib/constants";

import { useWindowSize } from "../../../../../hooks/useWindowsSize";

import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { BsCalculator } from "react-icons/bs";
import { SiHackthebox } from "react-icons/si";

export const useBottomBar = () => {
  const { width } = useWindowSize();

  const bbItems = useMemo(
    () => [
      {
        id: "whatsapp",
        title: "Entrar em contato por WhatsApp",
        text: "WHATSAPP!",
        subtext: "(11) 96618-1605",
        href: "https://web.whatsapp.com/send?phone=5511966181605",
        icon: FaWhatsapp,
        color: "#25D366",
      },
      {
        id: "telefone",
        title: "Entrar em contato por telefone",
        text: "LIGUE AGORA!",
        subtext: "(11) 3596-4002",
        href: "tel:1135964002",
        icon: FaPhoneAlt,
        color: "secondary.500",
      },
      {
        id: "email",
        title: "Envie um e-mail",
        text: "FALE CONOSCO",
        subtext: "envie um e-mail",
        href: "mailto:patricia@mprseg.com.br",
        icon: GrMail,
        color: "secondary.500",
      },
      {
        id: "proposta",
        title: "Solicite uma proposta",
        text: "SOLICITE UMA",
        subtext: "proposta",
        href: "/proposta-online",
        icon: BsCalculator,
        color: "secondary.500",
      },
      {
        id: "produto",
        title: "Compre agora",
        text: "PRODUTOS",
        subtext: "compre agora",
        href: "/produtos",
        icon: SiHackthebox,
        color: "secondary.500",
      },
    ],
    []
  );

  const isMobile = width < MOBILE_BREAKPOINT;

  return {
    bbItems,
    isMobile,
  };
};
