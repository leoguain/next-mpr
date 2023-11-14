import React from "react";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { Textarea } from "@chakra-ui/react";
import { ContactFormProps } from "types/global";

interface InputProps {
  id: Path<ContactFormProps>;
  placeholder: string;
  typeInput?: string;
  register: UseFormRegister<ContactFormProps>;
  errors: FieldErrors<ContactFormProps>;
  required: boolean;
}

export const InputTextArea = (props: InputProps) => {
  const { id, placeholder, required, register } = props;
  return (
    <Textarea
      id={id}
      placeholder={placeholder}
      bg="#fff"
      size={["sm", "md"]}
      mb={4}
      {...register(id, {
        required: { value: required, message: "Campo Obrigatório" },
      })}
    />
  );
};
