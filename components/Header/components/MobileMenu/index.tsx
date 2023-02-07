import React from "react";
import NextLink from "next/link";
import {
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrAdd, GrClose } from "react-icons/gr";

import { When } from "../../../shared/When";

import { MenuProps } from "../../types";

export const MobileMenu = ({ items }: MenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <React.Fragment>
      <IconButton
        aria-label="Main menu"
        icon={<RxHamburgerMenu size={28} />}
        bg="#fff"
        color="primary.500"
        onClick={onOpen}
        size="lg"
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        returnFocusOnClose={false}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton bg="secondary.500" color="#fff" />
          <DrawerHeader />
          <DrawerBody display="flex" flexDir="column">
            <Accordion allowMultiple>
              {items.map(({ id, href, subItems }) => (
                <React.Fragment key={id}>
                  <When value={!!subItems.length}>
                    <AccordionItem>
                      {({ isExpanded }) => (
                        <React.Fragment>
                          <AccordionButton
                            as="span"
                            flex="1"
                            textAlign="left"
                            justifyContent={"space-between"}
                            color="primary.500"
                            _hover={{
                              color: "secondary.500",
                            }}
                          >
                            {id}
                            {isExpanded ? (
                              <GrClose color="primary.500" />
                            ) : (
                              <GrAdd color="primary.500" />
                            )}
                          </AccordionButton>

                          <AccordionPanel pb={4}>
                            {subItems.map(({ id, href }) => (
                              <NextLink
                                key={id}
                                href={href}
                                passHref
                                scroll={false}
                              >
                                <AccordionButton
                                  as="span"
                                  flex="1"
                                  textAlign="left"
                                  color={"primary.500"}
                                  _hover={{
                                    color: "secondary.500",
                                    cursor: "pointer",
                                  }}
                                  onClick={onClose}
                                >
                                  {id}
                                </AccordionButton>
                              </NextLink>
                            ))}
                          </AccordionPanel>
                        </React.Fragment>
                      )}
                    </AccordionItem>
                  </When>

                  <When value={!subItems.length}>
                    <NextLink key={id} href={href} passHref scroll={false}>
                      <AccordionItem>
                        <AccordionButton
                          as="span"
                          flex="1"
                          textAlign="left"
                          color="primary.500"
                          _hover={{ color: "secondary.500" }}
                          onClick={onClose}
                        >
                          {id}
                        </AccordionButton>
                      </AccordionItem>
                    </NextLink>
                  </When>
                </React.Fragment>
              ))}
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
};
