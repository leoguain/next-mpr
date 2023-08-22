import React from "react";

import { Text } from "@chakra-ui/react";

interface ParamProps {
  text: string;
}

export const BoxTitle = ({ text }: ParamProps) => {
  return (
    <Text
      borderBottom={"1px dotted"}
      color={"#fff"}
      fontSize={["md"]}
      fontWeight="bold"
      mb={2}
    >
      {text}
    </Text>
  );
};
