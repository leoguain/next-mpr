import React from "react";
import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { products } from "../../hooks/useProducts";

import {
  Flex,
  Text,
  Link,
  FormControl,
  FormHelperText,
  FormLabel,
  Button,
  Input,
  Textarea,
  Select,
  Checkbox,
  Spinner,
  useToast,
} from "@chakra-ui/react";

import { ProductsDropDown } from "./components/ProductsDropDown";

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
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const toast = useToast();
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
    >
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel mt={4}>Nome*</FormLabel>
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
          <FormLabel mt={4}>CPF/CNPJ</FormLabel>
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
          <FormHelperText pl={2} mb={4} fontSize="smaller">
            Somente números
          </FormHelperText>
          <FormLabel mt={4}>E-mail</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="e-mail@dominio.com.br"
            bg="#fff"
            size={["sm", "md"]}
            mb={4}
            {...register("email")}
          />
          <FormLabel mt={4}>Telefone</FormLabel>
          <Input
            id="phone"
            type="text"
            placeholder="Telefone"
            bg="#fff"
            size={["sm", "md"]}
            {...register("phone")}
          />
          <FormHelperText pl={2} mb={4} fontSize="smaller">
            Formato: (xx) xxxxx - xxxx
          </FormHelperText>
          <FormLabel mt={4}>Celular</FormLabel>
          <Input
            id="cellphone"
            type="text"
            placeholder="Celular"
            bg="#fff"
            size={["sm", "md"]}
            {...register("cellphone")}
          />
          <FormHelperText pl={2} mb={4} fontSize="smaller">
            Formato: (xx) xxxxx - xxxx
          </FormHelperText>
          <FormLabel mt={4}>Produto</FormLabel>

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

          <FormLabel mt={4}>Mensagem*</FormLabel>
          <Textarea
            id="message"
            placeholder="Mensagem"
            bg="#fff"
            size={["sm", "md"]}
            mb={4}
            {...(register("message"), { required: true })}
          />
          <Checkbox
            id="mailing"
            bg="#fff"
            size={["sm", "sm", "md"]}
            mb={4}
            {...register("mailing")}
          >
            <option>Aceito receber e-mails de</option>
            <Text>comunicações, ofertas ou promoções</Text>
          </Checkbox>
          <Checkbox
            id="privacy"
            bg="#fff"
            size={["sm", "sm", "md"]}
            mb={4}
            {...(register("privacy"), { required: true })}
          >
            <option>Estou ciente e concordo com a</option>
            <Text>
              <Link
                color="secondary.500"
                fontWeight="normal"
                href={"/politica-de-privacidade"}
                isExternal
              >
                Política de Privacidade
              </Link>{" "}
              (Obrigatório para continuar)
            </Text>
          </Checkbox>
        </FormControl>

        <Button
          disabled={isSubmitting}
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
        {isSubmitting && (
          <Spinner
            ml={4}
            color="secondary.500"
            thickness="4px"
            visibility="visible"
          />
        )}
      </form>
    </Flex>
  );
};
