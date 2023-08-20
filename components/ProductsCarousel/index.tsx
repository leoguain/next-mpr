import React from "react";
import Link from "next/link";

import { Flex, Box, Text } from "@chakra-ui/react";

import Slider from "react-slick";
import { ProductsProps } from "components/ProductsCheckbox/types";

const settings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const ProductsCarousel = ({ products }: ProductsProps) => {
  const bannerProductsFile = "/productsBanners/";
  const page = "/produtos/";

  let filterOptions = ["Seguro Auto", "Seguro Viagem", "Seguro Vida"];

  let filterProducts = products.filter((product) =>
    filterOptions.includes(product.title)
  );

  const [slider, setSlider] = React.useState<Slider | null>(null);

  console.log(filterProducts);

  return (
    <Flex
      flexDirection={"column"}
      height={["8.5em", "12em", "16em", "18em", "25em"]}
      position="relative"
    >
      <Text fontSize={"md"} fontWeight="bold" color={"#003d5c"}>
        Contrate Online
      </Text>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {filterProducts
          .sort((a, b) => (a.title < b.title ? -1 : 1))
          .map(({ id }) => (
            <Link key={id} href={page + id} passHref>
              <Box
                key={id}
                height={["100px", "150px", "200px", "250px", "350px"]}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={[bannerProductsFile + id + ".jpg"]}
              />
            </Link>
          ))}
      </Slider>
    </Flex>
  );
};
