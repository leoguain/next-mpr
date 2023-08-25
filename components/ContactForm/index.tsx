import React, { useState } from "react";
import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { products } from "../../hooks/useProducts";

import {
  Flex,
  Link,
  FormControl,
  Button,
  Input,
  Textarea,
  Select,
  Checkbox,
  Spinner,
  useToast,
} from "@chakra-ui/react";

import { AuxiliarLabel } from "./components/AuxiliarLabel";
import { FieldLabel } from "./components/FieldLabel";

type Inputs = {
  name: string;
  document: string;
  email: string;
  phone: string;
  cellphone: string;
  product: string;
  message: string;
  mailing: string;
  privacy: string;
};

interface SelectedIdProps {
  selectedId?: string;
}

export const ContactForm = ({ selectedId }: SelectedIdProps) => {
  const toast = useToast();

  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const form: React.RefObject<HTMLFormElement> = useRef(null);

  const onSubmit: SubmitHandler<Inputs> = () =>
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
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FieldLabel text="Nome*" />
          <Input
            id="name"
            type="text"
            placeholder="Digite seu nome completo"
            bg="#fff"
            size={["sm", "md"]}
            mb={4}
            {...register("name", { required: true })}
          />
          {errors.name && <span>O campo nome é obrigatório</span>}

          <FieldLabel text="CPF/CNPJ" />
          <Input
            id="document"
            type="number"
            placeholder="Documento"
            bg="#fff"
            size={["sm", "md"]}
            {...register("document", {
              valueAsNumber: true,
            })}
          />
          <AuxiliarLabel text="Somente números" />
          <FieldLabel text="E-mail" />
          <Input
            id="email"
            type="email"
            placeholder="e-mail@dominio.com.br"
            bg="#fff"
            size={["sm", "md"]}
            mb={4}
            {...register("email")}
          />
          <FieldLabel text="Telefone" />
          <Input
            id="phone"
            type="text"
            placeholder="Telefone"
            bg="#fff"
            size={["sm", "md"]}
            {...register("phone")}
          />
          <AuxiliarLabel text="Formato: (xx) xxxxx - xxxx" />
          <FieldLabel text="Celular" />
          <Input
            id="cellphone"
            type="text"
            placeholder="Celular"
            bg="#fff"
            size={["sm", "md"]}
            {...register("cellphone")}
          />
          <AuxiliarLabel text="Formato: (xx) xxxxx - xxxx" />
          <FieldLabel text="Produto" />

          <Select
            id="product"
            placeholder={selectedId ? "" : "-- Selecione um produto --"}
            bg="#fff"
            size={["sm", "md"]}
            mb={4}
            {...register("product")}
          >
            {products
              .sort((a, b) => (a.title < b.title ? -1 : 1))
              .map(({ id, title }) => (
                <React.Fragment key={id}>
                  <option
                    value={title}
                    selected={selectedId === id ? true : false}
                  >
                    {title}
                  </option>
                </React.Fragment>
              ))}
          </Select>

          <FieldLabel text="Mensagem*" />
          <Textarea
            id="message"
            placeholder="Mensagem"
            bg="#fff"
            size={["sm", "md"]}
            mb={4}
            {...register("message")}
          />

          <Checkbox
            id="mailing"
            bg="#fff"
            size={["sm", "sm", "md"]}
            mb={4}
            {...register("mailing")}
            onChange={handleChange}
            value={checked ? "Sim" : "Não"}
          >
            Aceito receber e-mails de comunicações, ofertas ou promoções
          </Checkbox>

          <Checkbox
            id="privacy"
            bg="#fff"
            size={["sm", "sm", "md"]}
            mb={4}
            {...(register("privacy"), { required: true })}
          >
            Estou ciente e concordo com a{" "}
            <Link
              color="secondary.500"
              fontWeight="normal"
              href={"/politica-de-privacidade"}
              isExternal
            >
              Política de Privacidade
            </Link>{" "}
            (Obrigatório para continuar)
          </Checkbox>
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
    </Flex>
  );
};
