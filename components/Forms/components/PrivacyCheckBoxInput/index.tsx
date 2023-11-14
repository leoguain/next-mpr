import React from "react";
import { Path, UseFormRegister, FieldErrors } from "react-hook-form";

import { Checkbox } from "@chakra-ui/react";
import { ContactFormProps } from "types/global";
import { PrivacyLink } from "./components/PrivacyLink";

interface InputProps {
  id: Path<ContactFormProps>;
  errors: FieldErrors<ContactFormProps>;
  register: UseFormRegister<ContactFormProps>;
}

export const PrivacyCheckBoxInput = (props: InputProps) => {
  const { id, register } = props;

  return (
    <Checkbox
      id={id}
      bg="#fff"
      size={["sm", "sm", "md"]}
      my={4}
      {...(register(id), { required: true })}
    >
      Estou ciente e concordo com a <PrivacyLink /> (Obrigatório para continuar)
    </Checkbox>
  );
};
