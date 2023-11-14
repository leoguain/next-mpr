import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

import { Flex, FormControl, Button, useToast } from "@chakra-ui/react";

import { ContactFormProps } from "types/global";

import { FormInput } from "../components/FormInput";
import { ProductSelectInput } from "../components/ProductSelectInput";
import { CheckBoxInput } from "../components/CheckBoxInput";
import { PrivacyCheckBoxInput } from "../components/PrivacyCheckBoxInput";

interface SelectedIdProps {
  selectedId?: string;
  closeEvent?: () => void;
}

export const ContactForm = ({ selectedId, closeEvent }: SelectedIdProps) => {
  const toast = useToast();
  const methods = useForm();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormProps>();

  const form: React.RefObject<HTMLFormElement> = useRef(null);

  const onSubmit: SubmitHandler<ContactFormProps> = () =>
    emailjs
      .sendForm(
        "service_g91esj1",
        "template_7govf8q",
        form.current || "",
        "0qmtdfR_V38wbMh0q"
      )
      .then(
        (result) => {
          toast({
            title: "Mensagem enviada.",
            description: "Sua mensagem foi enviada com sucesso.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });

          reset();
          if (closeEvent) {
            closeEvent();
          }
        },
        (error) => {
          toast({
            title: "Erro ao enviar mensagem.",
            description:
              "Houve um problema ao enviar sua mensagem. Tente novamente.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });

          console.log(error.text);
        }
      );

  return (
    <Flex
      maxW={["sm", "md", "xl"]}
      bg="gray.100"
      flexDirection="column"
      border="1px solid #e5e5e5"
      borderRadius="2xl"
      my={12}
      mx="auto"
      p={4}
      zIndex={0}
    >
      <FormProvider {...methods}>
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormInput
              id="name"
              label="Nome*"
              placeholder="Digite seu nome completo"
              errors={errors}
              register={register}
              required
            />
            <FormInput
              id="document"
              label="CPF/CNPJ"
              placeholder="Documento | somente números"
              typeInput="number"
              errors={errors}
              register={register}
              required={false}
            />
            <FormInput
              id="email"
              label="E-mail"
              placeholder="e-mail@dominio.com.br"
              typeInput="email"
              errors={errors}
              register={register}
              required={false}
            />
            <FormInput
              id="phone"
              label="Telefone"
              placeholder="Telefone | (xx) xxxxx-xxxx"
              errors={errors}
              register={register}
              required={false}
            />
            <FormInput
              id="cellphone"
              label="Celular"
              placeholder="Celular | (xx) xxxxx-xxxx"
              errors={errors}
              register={register}
              required={false}
            />
            <ProductSelectInput
              id="product"
              label="Produto"
              placeholder={selectedId ? "" : "-- Selecione um produto --"}
              value={selectedId ? selectedId : ""}
              register={register}
              errors={errors}
              required
            />
            <FormInput
              id="message"
              label="Mensagem*"
              placeholder="Sua mensagem"
              typeInput="textArea"
              errors={errors}
              register={register}
              required
            />
            <CheckBoxInput
              id="mailing"
              text="Aceito receber e-mails de comunicações, ofertas ou promoções."
              errors={errors}
              register={register}
            />
            <PrivacyCheckBoxInput
              id="privacy"
              errors={errors}
              register={register}
            />
          </FormControl>
          <Button
            isLoading={isSubmitting}
            loadingText="Enviando"
            type="submit"
            bg="primary.500"
            _hover={{ bg: "secondary.500" }}
            color="#fff"
            borderRadius="md"
            fontSize="sm"
            w={"100%"}
            mb={4}
          >
            ENVIAR
          </Button>
        </form>
      </FormProvider>
    </Flex>
  );
};
