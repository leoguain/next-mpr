export type ProductsTypesProps = {
  productsTypes: ProductTypeProps[];
};

export type ProductTypeProps = {
  id: string;
  title: string | undefined;
  icon: React.ElementType;
};

export type ProductsProps = {
  products: ProductProps[];
};

export type ProductProps = {
  id: string;
  title: string;
  text: string | undefined;
  url: string;
  type: string;
  content: string | undefined;
};
