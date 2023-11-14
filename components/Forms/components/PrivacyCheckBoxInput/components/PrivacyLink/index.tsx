import React from "react";
import { Link } from "@chakra-ui/react";

export const PrivacyLink = () => {
  return (
    <Link
      color="secondary.500"
      fontWeight="normal"
      href={"/politica-de-privacidade"}
      isExternal
    >
      Política de Privacidade
    </Link>
  );
};
