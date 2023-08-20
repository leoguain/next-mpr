import React from "react";
import Link from "next/link";

import { Flex, Text, Image } from "@chakra-ui/react";

import { ProductsProps } from "../../types";

export const LoadMPrProducts = ({ products }: ProductsProps) => {
  const thumbProductsFile = "/productsThumbs/";
  const page = "/produtos/";

  let mprProducts = products.filter((product) => {
    return product.type.includes("mpr");
  });

  return (
    <Flex flexDirection={"column"} my={8}>
      <Text fontSize={"xl"} fontWeight="bold" color={"#003d5c"}>
        Produtos
      </Text>

      <Flex
        alignSelf={"center"}
        justifyContent="center"
        gap={4}
        flexWrap="wrap"
        mt={4}
      >
        {mprProducts.map(({ id, title, text }) => (
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
                    alt="logo do produto"
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
    </Flex>
  );
};
