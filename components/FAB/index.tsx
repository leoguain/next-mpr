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
      top={["14em", "16em", "18em", "12em", "14em"]}
      p={1}
      cursor="pointer"
      transition="linear 0.2s"
      maxW={[20, 24]}
      zIndex={3}
      _hover={{
        maxW: ["100px", "120px"],
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
