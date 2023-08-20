import React, { useState } from "react";

import {
  Flex,
  Text,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Switch,
} from "@chakra-ui/react";

import { ProductsProps } from "./types";
import { useProductTypes } from "../ProductsCheckbox/hooks/useProductTypes";
import { LoadMPrProducts } from "./components/LoadMprProducts";
import { LoadPortoProducts } from "./components/LoadPortoProducts";

export const ProductsCheckbox = ({ products }: ProductsProps) => {
  const { productTypes } = useProductTypes();

  let filterOptions = productTypes.map((product) => product.id);

  let [activeFilter, setActiveFilter] = useState(filterOptions);

  let filterProducts = products.filter((i) =>
    i.type.split("-").some((product) => activeFilter.includes(product))
  );

  let [activeProducts, setActiveProducts] = useState(filterProducts);

  const onSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      activeFilter.push(event.target.value);
    } else {
      setActiveFilter(
        (activeFilter = activeFilter.filter(
          (option) => option !== event.target.value
        ))
      );
    }

    setActiveProducts(
      products.filter((i) =>
        i.type.split("-").some((product) => activeFilter.includes(product))
      )
    );
  };

  return (
    <React.Fragment>
      <Flex flexDirection={"column"} mt={8}>
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton justifyContent={"space-between"}>
              <Text color={"primary.500"} fontSize="2xl" mt={4}>
                Filtro
              </Text>
              <AccordionIcon boxSize={8} color="primary.500" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Flex
                alignSelf={"center"}
                justifyContent="center"
                gap={4}
                flexWrap="wrap"
                mt={4}
              >
                {productTypes.map(({ id, title, icon }) => (
                  <Flex
                    key={id}
                    flexDirection="column"
                    align={"center"}
                    justifyContent="space-between"
                    w={28}
                  >
                    <Icon as={icon} boxSize={8} />
                    <Text
                      fontSize={"sm"}
                      align="center"
                      lineHeight={1}
                      p={2}
                      color="primary.500"
                    >
                      {title}
                    </Text>

                    <Switch
                      id={id}
                      value={id}
                      onChange={onSwitchChange}
                      defaultChecked
                    />
                  </Flex>
                ))}
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
      {activeProducts && <LoadPortoProducts products={activeProducts} />}
      {activeProducts && <LoadMPrProducts products={activeProducts} />}
    </React.Fragment>
  );
};

/*

<LoadPortoProducts products={products} />
      <LoadMPrProducts products={activeProducts} />

      */
