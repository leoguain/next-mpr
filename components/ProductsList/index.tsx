import React from "react";
import Link from "next/link";

import { Flex, Box, Text, Image } from "@chakra-ui/react";

import { ProductsProps } from "./types";

export const ProductsList = ({ products }: ProductsProps) => {
  return (
    <Box gap={4} mt={2} p={8}>
      <Flex
        alignSelf={"center"}
        justifyContent="center"
        gap={4}
        flexWrap="wrap"
      >
        {products.map(({ id, image, title, text, url }) => (
          <Flex key={id} m={1} gap={2} background="#ebebeb" width={56} p={4}>
            <Flex flexDirection={"column"} align="center" gap={2}>
              <Link href={url} passHref>
                <Image
                  alt="logo do campeonato"
                  src={image}
                  width="150px"
                  align={"center"}
                  mb={4}
                />
                <Text
                  color={"primary.500"}
                  fontWeight={"semibold"}
                  textDecoration="underline"
                >
                  {title}
                </Text>
              </Link>

              <Text color={"primary.500"} fontSize={["xs"]}>
                {text}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};
