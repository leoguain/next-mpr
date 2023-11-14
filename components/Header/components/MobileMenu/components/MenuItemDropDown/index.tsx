import React, { MouseEventHandler } from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  IconButton,
} from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { MenuSubItem } from "../MenuSubItem";
import { SubItemProps } from "components/Header/types";

interface ItemProps {
  title: string;
  openIcon: ReactJSXElement;
  closeIcon: ReactJSXElement;
  subItems: SubItemProps[];
  onClose: MouseEventHandler<HTMLButtonElement>;
}

export const MenuItemDropDown = ({
  title,
  openIcon,
  closeIcon,
  subItems,
  onClose,
}: ItemProps) => (
  <AccordionItem borderColor={"secondary.100"}>
    {({ isExpanded }) => (
      <React.Fragment>
        <AccordionButton
          flex="1"
          textAlign="left"
          justifyContent={"space-between"}
          color="primary.500"
          _hover={{ color: "secondary.500" }}
          _active={{ color: "secondary.500" }}
        >
          {title}
          {isExpanded ? (
            <IconButton
              aria-label="Close submenu"
              icon={closeIcon}
              bg={"#fff"}
              color="primary.500"
              size="xl"
              _hover={{ color: "secondary.500" }}
              _active={{ color: "secondary.500" }}
            />
          ) : (
            <IconButton
              aria-label="Open submenu"
              icon={openIcon}
              bg={"#fff"}
              color="primary.500"
              size="xl"
              _hover={{ color: "secondary.500" }}
              _active={{ color: "secondary.500" }}
            />
          )}
        </AccordionButton>
        <AccordionPanel pb={4}>
          {subItems.map(({ id, href }: SubItemProps) => (
            <MenuSubItem
              key={id}
              id={id}
              title={id}
              href={href}
              onClose={onClose}
            />
          ))}
        </AccordionPanel>
      </React.Fragment>
    )}
  </AccordionItem>
);
