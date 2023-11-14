import React, { MouseEventHandler } from "react";
import NextLink from "next/link";
import { AccordionButton } from "@chakra-ui/react";

interface ItemProps {
  id: string;
  title: string;
  href: string;
  onClose: MouseEventHandler<HTMLButtonElement>;
}

export const MenuSubItem = ({ id, title, href, onClose }: ItemProps) => (
  <NextLink key={id} href={href} passHref scroll={false}>
    <AccordionButton
      as="span"
      flex="1"
      color="prymary.500"
      cursor="pointer"
      onClick={onClose}
      textAlign="left"
      _hover={{
        color: "secondary.500",
      }}
    >
      {title}
    </AccordionButton>
  </NextLink>
);
