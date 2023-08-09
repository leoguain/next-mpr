export type ProductsProps = {
  products: ProductProps[];
};

export type ProductProps = {
  id: string;
  title: string | undefined;
  text: string | undefined;
  content: string | undefined;
};
