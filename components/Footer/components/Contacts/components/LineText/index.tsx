import { Text } from "@chakra-ui/react";

import React from "react";

interface ParamProps {
  text: string;
  title?: boolean;
}

export const LineText = ({ text, title }: ParamProps) => {
  return (
    <Text
      color={"#fff"}
      fontSize={["sm"]}
      fontWeight={title ? "bold" : "normal"}
      mt={title ? 4 : 0}
    >
      {text}
    </Text>
  );
};
