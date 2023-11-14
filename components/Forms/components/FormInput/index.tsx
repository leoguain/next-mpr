import React from "react";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";

import { Flex } from "@chakra-ui/react";
import { ContactFormProps } from "types/global";
import { InputLabel } from "./components/InputLabel";
import { InputField } from "./components/InputField";
import { AuxiliarLabel } from "./components/AuxiliarLabel";
import { InputTextArea } from "./components/InputTextArea";

interface InputProps {
  id: Path<ContactFormProps>;
  label: string;
  placeholder: string;
  required: boolean;
  register: UseFormRegister<ContactFormProps>;
  errors: FieldErrors<ContactFormProps>;
  auxiliarText?: string;
  typeInput?: string;
  value?: string;
}

export const FormInput = (props: InputProps) => {
  const { id, label, errors } = props;
  return (
    <React.Fragment>
      <Flex align={"center"} justifyContent="space-between">
        <InputLabel id={id} text={label} />
        <AuxiliarLabel text={props.auxiliarText} />
        {errors[id]?.message}
      </Flex>
      {props.typeInput == "textArea" ? (
        <InputTextArea {...props} />
      ) : (
        <InputField {...props} />
      )}
    </React.Fragment>
  );
};
