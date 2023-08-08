import Link from "next/link";
import { Flex, Text, Box } from "@chakra-ui/react";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { BottomBar } from "./BottomBar";
import React from "react";

export const Footer = () => {
  return (
    <React.Fragment>
      <Flex
        bg="#02314b"
        flexDirection={["column", "row"]}
        w="100%"
        mx="auto"
        p={[4]}
        pb={20}
        gap={[4, 10]}
      >
        <Box flex={1}>
          <Text
            borderBottom={"1px dotted"}
            color={"#fff"}
            fontSize={["md"]}
            fontWeight="bold"
            mb={2}
          >
            MPR Seguros
          </Text>
          <Text color={"#fff"} fontSize={["sm"]}>
            Alameda dos Guaramomis - Planalto Paulista
          </Text>
          <Text color={"#fff"} fontSize={["sm"]}>
            São Paulo/SP - 04076-011
          </Text>
          <Text color={"#fff"} fontSize={["sm"]} fontWeight="bold" mt={4}>
            Telefones:
          </Text>

          <Flex
            alignItems="center"
            gap={2}
            color={"#fff"}
            _hover={{ color: "secondary.500" }}
            fontSize="sm"
          >
            <FaPhoneAlt />
            <Link passHref href="tel:1135964002">
              (11) 3596-4002
            </Link>
          </Flex>

          <Flex
            alignItems="center"
            gap={2}
            color={"#fff"}
            _hover={{ color: "secondary.500" }}
            fontSize="sm"
          >
            <FaPhoneAlt />
            <Link passHref href="tel:11993802249">
              (11) 99380-2249
            </Link>
          </Flex>

          <Flex
            alignItems="center"
            gap={2}
            color={"#fff"}
            _hover={{ color: "secondary.500" }}
            fontSize="sm"
          >
            <FaWhatsapp />
            <Link
              passHref
              href="https://web.whatsapp.com/send?phone=5511966181605"
            >
              (11) 96618-1605
            </Link>
          </Flex>

          <Flex
            alignItems="center"
            gap={2}
            color={"#fff"}
            _hover={{ color: "secondary.500" }}
            fontSize="sm"
          >
            <GrMail />
            <Link passHref href="mailto:patricia@mprseg.com.br">
              patricia@mprseg.com.br
            </Link>
          </Flex>
        </Box>
        <Box flex={1}>
          <Text
            borderBottom={"1px dotted"}
            color={"#fff"}
            fontSize={["md"]}
            fontWeight="bold"
            mb={2}
          >
            Links
          </Text>
          <Link passHref href="/quem-somos">
            <Text
              color={"#fff"}
              fontSize="sm"
              _hover={{ color: "secondary.500" }}
            >
              Sobre
            </Text>
          </Link>
          <Link passHref href="/politica-de-privacidade">
            <Text
              color={"#fff"}
              fontSize={["sm", "xs", "sm"]}
              _hover={{ color: "secondary.500" }}
            >
              Política de privacidade
            </Text>
          </Link>
        </Box>
        <Box flex={1}>
          <Text
            borderBottom={"1px dotted"}
            color={"#fff"}
            fontSize={["md"]}
            fontWeight="bold"
            mb={2}
          >
            Redes Sociais
          </Text>

          <Flex
            alignItems="center"
            gap={2}
            color={"#fff"}
            _hover={{ color: "secondary.500" }}
            fontSize="sm"
          >
            <FaFacebook />
            <Link
              passHref
              href="https://www.facebook.com/mprcorretoradeseguros/"
              target={"_blank"}
            >
              Facebook
            </Link>
          </Flex>

          <Flex
            alignItems="center"
            gap={2}
            color={"#fff"}
            _hover={{ color: "secondary.500" }}
            fontSize="sm"
          >
            <FaInstagram />
            <Link
              passHref
              href="https://www.instagram.com/mprcorretora/"
              target={"_blank"}
            >
              Instagram
            </Link>
          </Flex>
        </Box>
      </Flex>

      <BottomBar />
    </React.Fragment>
  );
};

//politica-de-privacidade
