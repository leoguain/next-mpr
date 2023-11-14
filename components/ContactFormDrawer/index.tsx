import React from "react";

import {
  Flex,
  Button,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
} from "@chakra-ui/react";

import { ContactForm } from "components/Forms/ContactForm";
interface SelectedIdProps {
  selectedId?: string;
}

export const ContactFormDrawer = ({ selectedId }: SelectedIdProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex flexDirection={"column"} mb={4}>
      <Button
        bg="primary.500"
        onClick={onOpen}
        color="#fff"
        w={64}
        _hover={{ color: "#fff", bg: "secondary.500" }}
      >
        Solicite uma proposta
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"md"}>
        <DrawerContent>
          <DrawerBody>
            <ContactForm selectedId={selectedId} closeEvent={onClose} />
          </DrawerBody>
          <DrawerFooter>
            <Button
              color={"primary.500"}
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Voltar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
