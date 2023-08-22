import React from "react";
import Link from "next/link";
import { Flex, Icon } from "@chakra-ui/react";

import { useContact } from "./hooks/useContact";

export const ContactItems = () => {
  const { contactItems } = useContact();

  return (
    <React.Fragment>
      {contactItems.map(({ id, text, href, icon }) => (
        <Link key={id} passHref href={href} target={"_blank"}>
          <Flex
            alignItems="center"
            gap={2}
            color={"#fff"}
            _hover={{ color: "secondary.500" }}
            fontSize="sm"
          >
            <Icon as={icon} />
            {text}
          </Flex>
        </Link>
      ))}
    </React.Fragment>
  );
};
