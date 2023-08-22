import { useMemo } from "react";

import { FaInstagram, FaFacebook } from "react-icons/fa";

export const useSocialMedia = () => {
  const socialMedia = useMemo(
    () => [
      {
        id: "facebook",
        name: "Facebook",
        href: "https://www.facebook.com/mprcorretoradeseguros/",
        icon: FaFacebook,
      },
      {
        id: "instagram",
        name: "Instagram",
        href: "https://www.instagram.com/mprcorretora/",
        icon: FaInstagram,
      },
    ],
    []
  );

  return {
    socialMedia,
  };
};
