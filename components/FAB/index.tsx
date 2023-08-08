import Link from "next/link";

import { Flex, Text, Icon } from "@chakra-ui/react";

import { FaWpforms } from "react-icons/fa";

const FAB = () => {
  return (
    <Flex
      backgroundColor={"#0046c0"}
      opacity={["0.8", "0.8", "0.8", "1"]}
      borderRadius={4}
      position={"fixed"}
      right="0"
      top={["8em", "8em", "12em", "12em", "2em"]}
      p={1}
      cursor="pointer"
      transition="linear 0.2s"
      maxWidth={[24]}
      _hover={{
        maxWidth: "120",
      }}
    >
      <Link color="#fff" passHref href="/produtos">
        <Flex
          flexDirection={"column"}
          color="#fff"
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
          border="solid 1px #fff"
          p={1}
        >
          <Icon as={FaWpforms} boxSize={[6]} />
          <Text
            align={"center"}
            lineHeight={4}
            fontSize={["xs", "xs", "xs", "sm"]}
            color="#fff"
          >
            SIMULE E CONTRATE
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
};

export default FAB;
