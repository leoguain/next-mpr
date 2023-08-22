import React from "react";
import Link from "next/link";
import { Text, Flex, Icon, Tooltip } from "@chakra-ui/react";

import { useBottomBar } from "../BottomBar/hooks/useBottomBar";

export const BottomBar = () => {
  const { bbItems } = useBottomBar();

  return (
    <Flex
      position={"fixed"}
      bottom="0"
      bg={"#021a27"}
      w="100%"
      mx="auto"
      px={4}
      justifyContent="center"
    >
      <Flex alignItems="end" gap={8} h={"12"}>
        {bbItems.map(({ id, text, title, subtext, href, icon, color }) => (
          <React.Fragment key={id}>
            <Tooltip label={title}>
              <Link color="#fff" passHref href={href}>
                <Flex gap={4} align="center">
                  <Flex
                    align={"center"}
                    justifyContent="center"
                    alignSelf={"end"}
                    boxSize={14}
                    backgroundColor={color}
                    color="#fff"
                    borderRadius="100%"
                    _hover={{
                      backgroundColor: "#fff",
                      color: color,
                      border: "3px",
                      borderStyle: "solid",
                      borderColor: color,
                    }}
                  >
                    <Icon as={icon} boxSize={8} />
                  </Flex>

                  <Flex
                    display={["none", "none", "none", "none", "flex"]}
                    flexDirection={"column"}
                    justifySelf={"center"}
                  >
                    <Text
                      color="secondary.500"
                      fontSize="sm"
                      lineHeight={"shorter"}
                    >
                      {text}
                    </Text>
                    <Text color="#fff" fontSize="sm" lineHeight={"shorter"}>
                      {subtext}
                    </Text>
                  </Flex>
                </Flex>
              </Link>
            </Tooltip>
          </React.Fragment>
        ))}
      </Flex>
    </Flex>
  );
};
