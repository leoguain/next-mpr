import React from "react";

import { Input } from "@chakra-ui/react";

interface SelectedFieldProps {
  id: string;
}

export const InputBox = ({ id }: SelectedFieldProps) => {
  return (
    <Input
      id="name"
      type="text"
      placeholder="Digite seu nome completo"
      bg="#fff"
      size={["sm", "md"]}
      mb={4}
    />
  );
};
