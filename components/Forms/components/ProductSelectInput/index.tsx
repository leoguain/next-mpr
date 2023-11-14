import React from "react";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";

import { Flex, Select } from "@chakra-ui/react";
import { ContactFormProps } from "types/global";
import { InputLabel } from "../FormInput/components/InputLabel";

import { products } from "../../../../hooks/useProducts";

interface InputProps {
  id: Path<ContactFormProps>;
  errors: FieldErrors<ContactFormProps>;
  register: UseFormRegister<ContactFormProps>;
  label: string;
  placeholder: string;
  required: boolean;
  value?: string;
}

export const ProductSelectInput = (props: InputProps) => {
  const { id, label, placeholder, register, errors, value } = props;
  return (
    <React.Fragment>
      <Flex align={"center"}>
        <InputLabel id={id} text={label} />
        {errors[id]?.message}
      </Flex>

      <Select
        id="product"
        placeholder={placeholder}
        bg="#fff"
        size={["sm", "md"]}
        mb={4}
        {...register("product")}
      >
        {products
          .sort((a, b) => (a.title < b.title ? -1 : 1))
          .map(({ id, title }) => (
            <React.Fragment key={id}>
              <option value={title} selected={value === id ? true : false}>
                {title}
              </option>
            </React.Fragment>
          ))}
      </Select>
    </React.Fragment>
  );
};
