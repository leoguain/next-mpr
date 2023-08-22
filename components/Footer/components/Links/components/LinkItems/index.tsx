import React from "react";
import Link from "next/link";
import { Text } from "@chakra-ui/react";

import { useLinks } from "./hooks/useLinks";

export const LinkItems = () => {
  const { linkItems } = useLinks();

  return (
    <React.Fragment>
      {linkItems.map(({ id, name, href }) => (
        <Link key={id} passHref href={href}>
          <Text
            color={"#fff"}
            fontSize="sm"
            _hover={{ color: "secondary.500" }}
          >
            {name}
          </Text>
        </Link>
      ))}
    </React.Fragment>
  );
};
