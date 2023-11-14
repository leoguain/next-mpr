import React from "react";
import { HStack, Flex } from "@chakra-ui/react";
import { MenuProps } from "../../types";
import { DesktopSubMenu } from "./components/DesktopSubMenu";
import { DesktopMenuItem } from "./components/DesktopMenuItem";

export const DesktopMenu = ({ items }: MenuProps) => {
  return (
    <Flex
      borderRadius="sm"
      alignItems="center"
      justifyContent="space-between"
      gap={16}
      display={["none", "none", "none", "flex"]}
    >
      <HStack fontSize={["sm", "md"]} gap={[2, 4]} mx={4} my={2}>
        {items.map(({ id, href, subItems }) => (
          <React.Fragment key={id}>
            {subItems.length > 0 ? (
              <DesktopSubMenu id={id} href={href} subItems={subItems} />
            ) : (
              <DesktopMenuItem id={id} title={id} href={href} />
            )}
          </React.Fragment>
        ))}
      </HStack>
    </Flex>
  );
};
