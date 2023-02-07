import React from "react";
import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { useProducts } from "./hooks/useProducts";

import {
  Text,
  Link,
  FormControl,
  FormHelperText,
  FormLabel,
  Box,
  Button,
  Input,
  Textarea,
  Select,
  Checkbox,
} from "@chakra-ui/react";

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

export const ContactForm = () => {
  const { products } = useProducts();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const form: React.RefObject<HTMLFormElement> = useRef(null);

  //const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const onSubmit: SubmitHandler<Inputs> = () =>
    emailjs
      .sendForm(
        "service_g91esj1",
        "template_j5o5jic",
        form.current || "",
        "0qmtdfR_V38wbMh0q"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensagem enviada com sucesso");
          reset();
        },
        (error) => {
          alert("Houve um erro ao enviar sua mensagem. Tente novamente.");
          console.log(error.text);
        }
      );

  return (
    <Box
      maxW={"xl"}
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
            size="md"
            mb={4}
            {...register("name", { required: true })}
          />
          {errors.name && <span>O campo nome é obrigatório</span>}
          <FormLabel mt={4}>CPF/CNPJ</FormLabel>
          <Input
            id="document"
            type="text"
            placeholder="Documento"
            bg="#fff"
            size="md"
            {...register("document")}
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
            size="md"
            mb={4}
            {...register("email")}
          />
          <FormLabel mt={4}>Telefone</FormLabel>
          <Input
            id="phone"
            type="text"
            placeholder="Telefone"
            bg="#fff"
            size="md"
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
            size="md"
            {...register("cellphone")}
          />
          <FormHelperText pl={2} mb={4} fontSize="smaller">
            Formato: (xx) xxxxx - xxxx
          </FormHelperText>
          <FormLabel mt={4}>Produto</FormLabel>
          <Select
            id="product"
            placeholder="-- Selecione um produto --"
            bg="#fff"
            size="md"
            mb={4}
            {...register("product")}
          >
            {products.map(({ id, text }) => (
              <React.Fragment key={id}>
                <option>{text}</option>
              </React.Fragment>
            ))}
          </Select>
          <FormLabel mt={4}>Mensagem*</FormLabel>
          <Textarea
            id="message"
            placeholder="Mensagem"
            bg="#fff"
            size="md"
            mb={4}
            {...(register("message"), { required: true })}
          />
          <Checkbox
            id="mailing"
            bg="#fff"
            size="md"
            mb={4}
            {...register("mailing")}
          >
            <option>
              Aceito receber e-mails de comunicações, ofertas ou promoções
            </option>
          </Checkbox>
          <Checkbox
            id="privacy"
            bg="#fff"
            size="md"
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
    </Box>
  );
};
