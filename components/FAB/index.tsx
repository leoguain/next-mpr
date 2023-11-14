import { Flex } from "@chakra-ui/react";
import { ProductButton } from "./componentes/ProductButton";

export const FAB = () => {
  return (
    <Flex
      backgroundColor={"#0046c0"}
      opacity={["0.8", "0.8", "0.8", "1"]}
      borderRadius={4}
      position={"fixed"}
      right="0em"
      top={["6em", "6em", "6em", "12em", "14em"]}
      p={1}
      cursor="pointer"
      transition="linear 0.2s"
      maxW={[20, 24]}
      zIndex={3}
      _hover={{
        maxW: ["100px", "120px"],
      }}
    >
      <ProductButton />
    </Flex>
  );
};
