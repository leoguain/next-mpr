import Head from "next/head";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";

function Produtos({
  pageTitle,
  description,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name={pageTitle} content={description} />
      </Head>

      <Page title={pageTitle} description={description}>
        <Content></Content>
      </Page>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "MPR - Produtos";
  const description =
    "Conheça os produtos com que trabalhamos. Temos as opções certas para você.";

  return {
    props: {
      pageTitle,
      description,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default Produtos;
