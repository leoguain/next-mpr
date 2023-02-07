import React from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import {
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  background,
} from "@chakra-ui/react";

import { HiChevronDown } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";

import { MenuItemProps } from "../../types";

export const DesktopSubMenu = ({ id, href, subItems }: MenuItemProps) => {
  const { asPath } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu isOpen={isOpen} closeOnBlur>
      <MenuButton
        as={Button}
        rightIcon={isOpen ? <HiChevronUp /> : <HiChevronDown />}
        href={href}
        color={asPath.includes(id) ? "secondary.500" : "primary.500"}
        _hover={{ color: "secondary.500" }}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        {id}
      </MenuButton>

      <MenuList
        color="primary.500"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        onClick={onClose}
      >
        {subItems.map(({ id, href }) => (
          <Link
            as={NextLink}
            key={id}
            href={href}
            passHref
            scroll={false}
            color={asPath.includes(id) ? "secondary.500" : "primary.500"}
            _hover={{ color: "secondary.500" }}
          >
            <MenuItem _hover={{ color: "secondary.500" }}>{id}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};
