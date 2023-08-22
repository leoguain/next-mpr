import React from "react";

import { Flex, Link } from "@chakra-ui/react";

import { BreadcrumbProps } from "./types";

export const Breadcrumb = ({ url, title }: BreadcrumbProps) => {
  const urlSeparator = "/";
  const breadcrumbSeparator = " >";
  const pages = url.split(urlSeparator);

  let urlFlex = "";

  return (
    <Flex mx={[2]} flexFlow={["row wrap"]} columnGap={2} align={"center"}>
      <Link href={"/"} key={0} color="gray.500">
        Início
      </Link>

      {pages.map((page, index) => (
        <React.Fragment key={index}>
          {!!(urlFlex = urlFlex.concat(page.toString() + urlSeparator))}
          <Link color="gray.500" key={index + 1} href={urlFlex}>
            {pages.length - 1 === index
              ? ""
              : page.charAt(0).toUpperCase() + page.slice(1)}
            {pages.length - 1 === index ? title : breadcrumbSeparator}
          </Link>
        </React.Fragment>
      ))}
    </Flex>
  );
};
