import React from "react";
import { Box } from "@chakra-ui/react";
import { BoxTitle } from "../BoxTitle";

import { LineText } from "./components/LineText";
import { ContactItems } from "./components/ContactItems";

export const Contacts = () => {
  return (
    <Box flex={1}>
      <BoxTitle text="MPR Seguros" />
      <LineText text="Alameda dos Guaramomis - Planalto Paulista" />
      <LineText text="São Paulo/SP - 04076-011" />

      <LineText text="Telefones:" title />
      <ContactItems />
    </Box>
  );
};
