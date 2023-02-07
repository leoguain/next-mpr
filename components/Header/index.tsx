import Link from "next/link";

import { useHeader } from "./hooks/useHeader";

import { When } from "../shared/When";
import { MobileMenu } from "./components/MobileMenu";
import { DesktopMenu } from "./components/DesktopMenu";

import { Text, Flex, AspectRatio, Image } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  const { menuItems, isMobile } = useHeader();

  //opacity={"0.8"}

  return (
    <>
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
        <Link href="/">
          <Flex align={"center"}>
            <AspectRatio maxW="213px" ratio={3.55 / 1}>
              <Image src="/avatar.png" alt="Logo MPR" />
            </AspectRatio>
            <Image src="/avatar.png" alt="logo MPR" width="100" height="100" />
            <Text color="primary.500">Corretora de Seguros</Text>
          </Flex>
        </Link>

        <Flex alignSelf="right">
          <When value={isMobile}>
            <MobileMenu items={menuItems} />
          </When>
          <When value={!isMobile}>
            <DesktopMenu items={menuItems} />
          </When>
        </Flex>
      </Flex>
    </>
  );
};
