import React from "react";
import { HiChevronRight, HiChevronDown } from "react-icons/hi";
import { When } from "../../../../components/shared/When";

import { Box, List, ListItem, ListIcon } from "@chakra-ui/react";

import { ListProps } from "../../types";

export const TextList = ({ list }: ListProps) => {
  return (
    <Box>
      <List>
        {list.map(({ id, type, text }) => (
          <React.Fragment key={id}>
            <When value={type === "listItem"}>
              <ListItem mt={1} pl={5}>
                {text}
              </ListItem>
            </When>

            <When value={type === "listItem-1"}>
              <ListItem pl={10}>{text}</ListItem>
            </When>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};
