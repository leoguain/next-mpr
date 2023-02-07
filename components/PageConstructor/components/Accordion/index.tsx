import React from "react";

import {
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";

import { FiPlus, FiMinus } from "react-icons/fi";

import { AccordionProps } from "../../types";
import { PageConstructor } from "../..";

export const AccordionMenu = ({ items }: AccordionProps) => {
  return (
    <Flex justifyContent={"center"} mx="auto" px={4} my={2}>
      <Accordion defaultIndex={[0]} allowMultiple w={"3xl"}>
        {items.map(({ id, text, content }) => (
          <React.Fragment key={id}>
            <AccordionItem
              bg={"primary.500"}
              color={"#fff"}
              borderRadius={"md"}
            >
              {({ isExpanded }) => (
                <React.Fragment>
                  <AccordionButton gap={1}>
                    {isExpanded ? <FiMinus /> : <FiPlus />}
                    {text}
                  </AccordionButton>

                  <AccordionPanel bg={"#fff"} color={"#000"} pb={4}>
                    <PageConstructor text={content} />
                  </AccordionPanel>
                </React.Fragment>
              )}
            </AccordionItem>
          </React.Fragment>
        ))}
      </Accordion>
    </Flex>
  );
};

/*

 <AccordionButton gap={1}>
                <AccordionIcon />
                {text}
              </AccordionButton>

              <AccordionPanel bg={"#fff"} color={"#000"} pb={4}>
                <PageConstructor text={content} />
              </AccordionPanel>

              */
