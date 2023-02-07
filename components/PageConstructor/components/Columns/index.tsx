import React from "react";

import { Box, Flex } from "@chakra-ui/react";

import { ColumnsProps } from "../../types";
import { PageConstructor } from "../..";

export const Columns = ({ columns }: ColumnsProps) => {
  return (
    <Flex
      maxWidth={"7xl"}
      mx="auto"
      my={2}
      gap={8}
      flexDirection={["column", "column", "column", "row"]}
    >
      {columns.map(({ id, texts }) => (
        <React.Fragment key={id}>
          <Box flex={1}>
            <PageConstructor text={texts} />
          </Box>
        </React.Fragment>
      ))}
    </Flex>
  );
};
