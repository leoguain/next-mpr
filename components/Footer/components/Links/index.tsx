import React from "react";

import { Box } from "@chakra-ui/react";
import { BoxTitle } from "../BoxTitle";
import { LinkItems } from "./components/LinkItems";

export const Links = () => {
  return (
    <Box flex={1}>
      <BoxTitle text="Links" />
      <LinkItems />
    </Box>
  );
};
