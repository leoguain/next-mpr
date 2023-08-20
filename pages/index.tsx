import React from "react";
import Head from "next/head";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";

import Fab from "../components/FAB";

import { products } from "../hooks/useProducts";
import { ProductsCarousel } from "components/ProductsCarousel";
import { PageConstructor } from "components/PageConstructor";

function Home({
  pageTitle,
  description,
  products,
  texts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name={pageTitle} content={description} />
      </Head>

      <Page title={pageTitle} description={description}>
        <Fab />
        <Content>
          <React.Fragment>
            <ProductsCarousel products={products} />
            <PageConstructor text={texts} />
          </React.Fragment>
        </Content>
      </Page>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "MPR - Seguros Auto, Vida e Viagem";
  const description =
    "Corretora de seguros online. Auto, consórcio, saúde, vida, viagem";

  const texts = [
    {
      id: "columns_01",
      type: "columns",
      texts: [
        {
          id: "column_01",
          type: "column",
          texts: [
            {
              id: "video_01",
              type: "video",
              text: "Previdência Privada",
              path: "https://www.youtube.com/embed/bVcDDyjhNCw",
            },
          ],
        },
        {
          id: "column_02",
          type: "column",
          texts: [
            {
              id: "video_02",
              type: "video",
              text: "Porto Seguro Saúde",
              path: "https://www.youtube.com/embed/M8F7ZmMVk6Q",
            },
          ],
        },
        {
          id: "column_03",
          type: "column",
          texts: [
            {
              id: "video_03",
              type: "video",
              text: "Seguro Celular",
              path: "https://www.youtube.com/embed/42u3iuD1amw",
            },
          ],
        },
      ],
    },
  ];

  return {
    props: {
      pageTitle,
      description,
      products: products,
      texts,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default Home;
