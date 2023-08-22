import React from "react";
import Link from "next/link";

import { Flex, Box, Text } from "@chakra-ui/react";

import Slider from "react-slick";

import { products } from "../../../../hooks/useProducts";

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

interface SelectedItem {
  selectedItem: string;
}

export const ThumbsCarousel = ({ selectedItem }: SelectedItem) => {
  const bannerProductsFile = "/productsBanners/";
  const page = "/produtos/";

  let filterOptions = [selectedItem];

  let filterProducts = products.filter((i) =>
    i.type.split("-").some((product) => filterOptions.includes(product))
  );

  const [slider, setSlider] = React.useState<Slider | null>(null);

  console.log(filterProducts);

  return (
    <Flex
      flexDirection={"column"}
      height={["7em", "7em", "14em", "10em", "16em"]}
      position="relative"
      w={["sm", "md", "2xl", "sm", "lg"]}
    >
      <Text fontSize={"md"} fontWeight="bold" color={"#003d5c"}>
        Outros Produtos
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
                height={["100px", "100px", "200px", "100px", "150px"]}
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
