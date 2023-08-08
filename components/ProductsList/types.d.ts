export type ProductsProps = {
  products: ProductProps[];
};

export type ProductProps = {
  id: number | undefined;
  image: string | undefined;
  title: string | undefined;
  text: string | undefined;
  url: string;
};
