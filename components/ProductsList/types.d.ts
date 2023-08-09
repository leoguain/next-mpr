export type ProductsProps = {
  products: ProductProps[];
};

export type ProductProps = {
  id: string;
  image: string | undefined;
  title: string | undefined;
  text: string | undefined;
  url: string;
  content: string | undefined;
};
