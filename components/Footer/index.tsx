import { Flex } from "@chakra-ui/react";

import { BottomBar } from "./components/BottomBar";
import React from "react";
import { SocialMedia } from "./components/SocialMedia";
import { Contacts } from "./components/Contacts";
import { Links } from "./components/Links";

export const Footer = () => {
  return (
    <React.Fragment>
      <Flex
        bg="#02314b"
        flexDirection={["column", "row"]}
        w="100%"
        mx="auto"
        p={[4]}
        pb={20}
        gap={[4, 10]}
      >
        <Contacts />
        <Links />
        <SocialMedia />
      </Flex>
      <BottomBar />
    </React.Fragment>
  );
};
