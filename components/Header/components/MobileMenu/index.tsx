import React from "react";

import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Accordion,
  Flex,
} from "@chakra-ui/react";

import { RxHamburgerMenu, RxChevronDown, RxChevronUp } from "react-icons/rx";

import { MenuProps } from "../../types";
import { MenuButton } from "./components/MenuButton";
import { MenuItem } from "./components/MenuItem";
import { MenuItemDropDown } from "./components/MenuItemDropDown";

export const MobileMenu = ({ items }: MenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex alignSelf="right" display={["flex", "flex", "flex", "none"]}>
      <MenuButton
        label="Main menu"
        icon={<RxHamburgerMenu size={28} />}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        returnFocusOnClose={false}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            color="primary.500"
            _hover={{ color: "secondary.500" }}
            _active={{ color: "secondary.500" }}
          />
          <DrawerHeader />
          <DrawerBody display="flex" flexDir="column">
            <Accordion allowMultiple>
              {items.map(({ id, href, subItems }) => (
                <React.Fragment key={id}>
                  {subItems.length > 0 ? (
                    <MenuItemDropDown
                      title={id}
                      openIcon={<RxChevronDown />}
                      closeIcon={<RxChevronUp />}
                      subItems={subItems}
                      onClose={onClose}
                    />
                  ) : (
                    <MenuItem
                      id={id}
                      title={id}
                      href={href}
                      onClose={onClose}
                    />
                  )}
                </React.Fragment>
              ))}
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
