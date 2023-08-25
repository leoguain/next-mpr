import Link from "next/link";

import { Flex, Text, Icon } from "@chakra-ui/react";

import { FaWpforms } from "react-icons/fa";

export const ProductButton = () => {
  return (
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
  );
};
