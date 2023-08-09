import React from "react";
import Link from "next/link";

import { Flex, Text, Image } from "@chakra-ui/react";

import { ProductsProps } from "./types";

export const ProductsList = ({ products }: ProductsProps) => {
  const thumbProductsFile = "/productsThumbs/";
  const page = "/produtos/";

  return (
    <Flex
      alignSelf={"center"}
      justifyContent="center"
      gap={4}
      mt={2}
      p={8}
      flexWrap="wrap"
    >
      {products.map(({ id, title, text }) => (
        <Flex
          key={id}
          m={1}
          gap={2}
          background="#ebebeb"
          width={56}
          p={4}
          flexDirection={"column"}
        >
          <Flex align="center" justifyContent={"center"} gap={2}>
            <Link href={page + id} passHref>
              <Flex flexDirection={"column"} alignItems={"center"}>
                <Image
                  alt="logo do campeonato"
                  src={thumbProductsFile + id + ".jpg"}
                  width="150px"
                  mb={4}
                />
                <Text
                  color={"primary.500"}
                  fontWeight={"semibold"}
                  textDecoration="underline"
                >
                  {title}
                </Text>
              </Flex>
            </Link>
          </Flex>
          <Text color={"primary.500"} fontSize={["xs"]}>
            {text}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};
