import React from "react";

import { Flex } from "@chakra-ui/react";

import { useHeader } from "./hooks/useHeader";

import { MprLogo } from "./components/MprLogo";
import { MobileMenu } from "./components/MobileMenu";
import { DesktopMenu } from "./components/DesktopMenu";

export const Header = () => {
  const { menuItems } = useHeader();

  return (
    <Flex
      bg={"#fff"}
      w="100%"
      mx="auto"
      px={[4, 6, 6, 6, 32]}
      py={2}
      gap={[0, 2, 8]}
      justifyContent={["space-between"]}
      align="center"
    >
      <MprLogo />
      <MobileMenu items={menuItems} />
      <DesktopMenu items={menuItems} />
    </Flex>
  );
};
