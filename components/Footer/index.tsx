import React from "react";
import { Flex } from "@chakra-ui/react";

import { Contacts } from "./components/Contacts";
import { Links } from "./components/Links";
import { SocialMedia } from "./components/SocialMedia";
import { BottomBar } from "./components/BottomBar";

export const Footer = () => {
  return (
    <React.Fragment>
      <Flex
        bg="#02314b"
        flexDirection={["column", "column", "row"]}
        w="100%"
        mx="auto"
        p={[4]}
        pb={20}
        gap={[4, 10]}
        zIndex={3}
      >
        <Contacts />
        <Links />
        <SocialMedia />
      </Flex>
      <BottomBar />
    </React.Fragment>
  );
};
