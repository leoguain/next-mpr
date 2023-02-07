import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { BreadcrumbItemProps } from "../types";

export const BreadcrumbItem = ({
  url,
  name,
  index,
  isLast,
}: BreadcrumbItemProps) => {
  return (
    <Flex
      mx={[2]}
      flexFlow={["row wrap"]}
      rowGap={0}
      columnGap={7}
      align="center"
      justifyContent={["center", "center", "center", "start"]}
    >
      <Link key={index} href={url} passHref>
        {name}
      </Link>
      {isLast ? "" : <span>{">"}</span>}
    </Flex>
  );
};
