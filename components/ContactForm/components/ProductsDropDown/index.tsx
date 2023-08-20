import React from "react";
import { Select } from "@chakra-ui/react";

import { products } from "../../../../hooks/useProducts";

interface SelectedIdProps {
  selectedId?: string;
}

export const ProductsDropDown = ({ selectedId }: SelectedIdProps) => {
  return (
    <Select
      id="product"
      placeholder={selectedId ? "" : "-- Selecione um produto --"}
      bg="#fff"
      size={["sm", "md"]}
      mb={4}
    >
      {products.map(({ id, title }) => (
        <React.Fragment key={id}>
          <option value={id} selected={selectedId ? true : false}>
            {title}
          </option>
        </React.Fragment>
      ))}
    </Select>
  );
};
