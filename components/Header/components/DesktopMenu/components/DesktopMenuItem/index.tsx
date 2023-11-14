import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

interface ItemProps {
  id: string;
  title: string;
  href: string;
}

export const DesktopMenuItem = ({ id, title, href }: ItemProps) => (
  <Link
    as={NextLink}
    color={"primary.500"}
    _hover={{ color: "secondary.500" }}
    key={id}
    href={href}
    scroll={false}
  >
    {title}
  </Link>
);
