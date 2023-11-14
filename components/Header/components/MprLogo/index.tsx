import Link from "next/link";
import { Text, Flex, Image } from "@chakra-ui/react";

export const MprLogo = () => {
  return (
    <Link href="/">
      <Flex align={"center"}>
        <Image src="/avatar.png" alt="Logo MPR" width="100px" />
        <Text color="primary.500">Corretora de Seguros</Text>
      </Flex>
    </Link>
  );
};
