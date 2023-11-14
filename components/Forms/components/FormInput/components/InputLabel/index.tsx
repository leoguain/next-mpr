import { FormLabel } from "@chakra-ui/react";

interface LabelProps {
  id: string;
  text: string;
}

export const InputLabel = ({ id, text }: LabelProps) => {
  return (
    <FormLabel fontSize={"md"} htmlFor={id} id={id}>
      {text}
    </FormLabel>
  );
};
