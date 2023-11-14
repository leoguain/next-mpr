import { IconButton } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { MouseEventHandler } from "react";

interface ButtonProps {
  label: string;
  icon: ReactJSXElement;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const MenuButton = ({ label, icon, onClick }: ButtonProps) => (
  <IconButton
    aria-label={label}
    bg="#fff"
    color="primary.500"
    icon={icon}
    onClick={onClick}
    size="lg"
    _hover={{ color: "secondary.500" }}
    _active={{ color: "secondary.500" }}
  />
);
