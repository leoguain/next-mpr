import React, { useState } from "react";
import { Path, UseFormRegister, FieldErrors } from "react-hook-form";

import { Checkbox } from "@chakra-ui/react";
import { ContactFormProps } from "types/global";

interface InputProps {
  id: Path<ContactFormProps>;
  errors: FieldErrors<ContactFormProps>;
  register: UseFormRegister<ContactFormProps>;
  text: string;
}

export const CheckBoxInput = (props: InputProps) => {
  const { id, register, text } = props;
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <Checkbox
      id={id}
      bg="#fff"
      size={["sm", "sm", "md"]}
      my={4}
      {...register(id)}
      onChange={handleChange}
      value={checked ? "Sim" : "Não"}
    >
      {text}
    </Checkbox>
  );
};
