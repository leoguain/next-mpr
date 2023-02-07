import React from "react";
import { Flex, Link } from "@chakra-ui/react";

import { BreadcrumbItem } from "./BreadCrumbItem";
import { BreadcrumbProps } from "./types";

export const Breadcrumb = ({
  url,
  oldSeparator,
  newSeparator,
}: BreadcrumbProps) => {
  const urlSeparator = "/";
  const breadcrumbSeparator = " >";
  const pages = url.replaceAll(oldSeparator, newSeparator).split(urlSeparator);

  let urlFlex = "http://localhost:3000/";

  return (
    <Flex mx={[2]} flexFlow={["row wrap"]} columnGap={2} align={"end"}>
      <Link href={urlFlex} key={0} color="gray.400">
        Home
      </Link>

      {pages.map((page, index) => (
        <React.Fragment key={index}>
          {!!(urlFlex = urlFlex.concat(page.toString() + urlSeparator))}
          <Link color="gray.400" key={index + 1} href={urlFlex}>
            {page.charAt(0).toUpperCase() + page.slice(1)}
            {pages.length - 1 === index ? "" : breadcrumbSeparator}
          </Link>
        </React.Fragment>
      ))}
    </Flex>
  );
};

/*
return (
    <Flex
      mx={[2]}
      flexFlow={["row wrap"]}
      rowGap={0}
      columnGap={7}
      align="center"
      justifyContent={["center", "center", "center", "start"]}
    >
      {breadcrumbItems.map(({ name, url }, index) => (
        <BreadcrumbItem
          url={url}
          name={name}
          index={index + 1}
          isLast={breadcrumbItems.length - 1 === index}
          key={index}
        />
      ))}
    </Flex>
  );

  */
