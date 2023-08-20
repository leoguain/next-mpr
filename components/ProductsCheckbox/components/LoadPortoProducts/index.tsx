import React from "react";
import Link from "next/link";

import { Flex, Text, Image } from "@chakra-ui/react";

import { ProductsProps } from "../../types";
import { PortoButton } from "./components/PortoButton";
import { exit } from "process";

export const LoadPortoProducts = ({ products }: ProductsProps) => {
  const externalProductsFile = "/productsExternal/";
  const page = "/produtos/";

  let portoProducts = products.filter((product) => {
    return product.type.includes("porto");
  });

  return (
    <Flex flexDirection={"column"} mt={8}>
      <Text fontSize={"2xl"} fontWeight="bold" color={"#003d5c"}>
        Compre agora
      </Text>

      <Flex
        alignSelf={"center"}
        justifyContent="center"
        gap={4}
        flexWrap="wrap"
        mt={4}
      >
        {portoProducts.map(({ id, title, text, url }) => (
          <Flex
            key={id}
            mt={1}
            gap={2}
            background="#ebebeb"
            width={56}
            px={4}
            pt={4}
            flexDirection={"column"}
          >
            <Flex align="center" justifyContent={"center"} gap={2}>
              <Link href={page + id} passHref>
                <Flex flexDirection={"column"} alignItems={"center"}>
                  <Image
                    alt="logo ddo produto"
                    src={externalProductsFile + id + ".jpg"}
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

            <PortoButton url={url} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
