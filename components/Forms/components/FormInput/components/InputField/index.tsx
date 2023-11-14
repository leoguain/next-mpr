import React from "react";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { Input } from "@chakra-ui/react";

import { ContactFormProps } from "types/global";

interface InputProps {
  id: Path<ContactFormProps>;
  placeholder: string;
  typeInput?: string;
  register: UseFormRegister<ContactFormProps>;
  errors: FieldErrors<ContactFormProps>;
  required: boolean;
}

export const InputField = (props: InputProps) => {
  const { id, placeholder, required, register, typeInput } = props;
  return (
    <>
      <Input
        bg="#fff"
        id={id}
        mb={4}
        placeholder={placeholder}
        size={["sm", "md"]}
        type={typeInput ? typeInput : "text"}
        {...register(id, {
          required: { value: required, message: "Campo Obrigatório" },
        })}
      />
    </>
  );
};
