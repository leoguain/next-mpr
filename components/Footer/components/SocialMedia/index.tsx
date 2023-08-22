import React from "react";
import Link from "next/link";

import { Flex, Box, Icon } from "@chakra-ui/react";
import { useSocialMedia } from "./hooks/useSocialMedia";
import { BoxTitle } from "../BoxTitle";

export const SocialMedia = () => {
  const { socialMedia } = useSocialMedia();

  return (
    <Box flex={1}>
      <BoxTitle text="Redes Sociais" />

      {socialMedia.map(({ id, name, href, icon }) => (
        <Link key={id} passHref href={href} target={"_blank"}>
          <Flex
            alignItems="center"
            gap={2}
            color={"#fff"}
            _hover={{ color: "secondary.500" }}
            fontSize="sm"
          >
            <Icon as={icon} />
            {name}
          </Flex>
        </Link>
      ))}
    </Box>
  );
};
