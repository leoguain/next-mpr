import Head from "next/head";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { PageTitle } from "components/PageTitle";

import { products } from "../../hooks/useProducts";
import { ProductsCheckbox } from "components/ProductsCheckbox";

function Produtos({
  pageTitle,
  description,
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <title>{"MPR - " + pageTitle}</title>
        <meta name={pageTitle} content={description} />
      </Head>

      <Page title={pageTitle} description={description}>
        <Content>
          <PageTitle pageTitle={pageTitle} pageUrl={asPath} />
          <ProductsCheckbox products={products} />
        </Content>
      </Page>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "Produtos";
  const description =
    "Conheça os produtos com que trabalhamos. Temos as opções certas para você.";

  return {
    props: {
      pageTitle,
      description,
      products: products,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default Produtos;
