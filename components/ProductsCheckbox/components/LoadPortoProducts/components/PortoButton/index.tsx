import React from "react";
import Link from "next/link";

import { Button } from "@chakra-ui/react";

export const PortoButton = ({ url }: { url: string }) => {
  return (
    <Link href={url} passHref target={"_blank"}>
      <Button
        background={"#77b32a"}
        color="#fff"
        boxShadow={"lg"}
        mb={4}
        _hover={{
          backgroundColor: "#699e25",
          border: "solid 1px #77b32a",
          boxShadow: "xl",
        }}
      >
        SIMULE E CONTRATE
      </Button>
    </Link>
  );
};
