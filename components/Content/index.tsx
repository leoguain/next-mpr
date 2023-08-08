import React from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

export const Content = ({ children, ...rest }: FlexProps) => {
  return (
    <Flex
      w="100%"
      maxWidth={["3xl", "3xl", "3xl", "4xl", "6xl"]}
      mx="auto"
      px={4}
      direction="column"
      {...rest}
    >
      <>{children}</>
    </Flex>
  );
};
