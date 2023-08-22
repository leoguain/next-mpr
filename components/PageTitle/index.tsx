import React from "react";
import { Breadcrumb } from "../Breadcrumb";
import { Flex, Text } from "@chakra-ui/react";
import { TitleProps } from "./types";

export const PageTitle = ({ pageTitle, pageUrl }: TitleProps) => {
  return (
    <Flex
      borderBottom="2px solid"
      borderColor="gray.200"
      justifyContent={["center", "center", "space-between"]}
      flexDirection={["column-reverse", "column-reverse", "row"]}
    >
      <Text
        align={"center"}
        color={"primary.500"}
        fontSize={["md", "xl", "2xl"]}
        my={4}
      >
        {pageTitle}
      </Text>
      <Breadcrumb url={pageUrl} title={pageTitle} />
    </Flex>
  );
};
