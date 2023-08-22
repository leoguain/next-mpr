import { useMemo } from "react";

import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export const useContact = () => {
  const contactItems = useMemo(
    () => [
      {
        id: "phone",
        text: "(11) 3596-4002",
        href: "tel:1135964002",
        icon: FaPhoneAlt,
      },
      {
        id: "cellphone",
        text: "(11) 99380-2249",
        href: "tel:11993802249",
        icon: FaPhoneAlt,
      },
      {
        id: "whatsapp",
        text: "(11) 96618-1605",
        href: "https://web.whatsapp.com/send?phone=5511966181605",
        icon: FaWhatsapp,
      },
      {
        id: "email",
        text: "patricia@mprseg.com.br",
        href: "mailto:patricia@mprseg.com.br",
        icon: GrMail,
      },
    ],
    []
  );

  return {
    contactItems,
  };
};
