import React from "react";
import Head from "next/head";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";

import { FAB } from "../components/FAB";

import { ProductsCarousel } from "components/ProductsCarousel";
import { PageConstructor } from "components/PageConstructor";

function Home({
  pageTitle,
  description,
  texts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
        <meta name={pageTitle} content={description} />
      </Head>

      <Page title={pageTitle} description={description}>
        <FAB />
        <Content>
          <React.Fragment>
            <ProductsCarousel />
            <PageConstructor text={texts} />
          </React.Fragment>
        </Content>
      </Page>
    </React.Fragment>
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
              text: "Seguro Celular",
              path: "https://www.youtube.com/embed/42u3iuD1amw",
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
              text: "Saúde Ocupacional",
              path: "https://www.youtube.com/embed/GlSNq8TlzgU",
            },
          ],
        },
      ],
    },
    {
      id: "columns_02",
      type: "columns",
      texts: [
        {
          id: "column_01",
          type: "column",
          texts: [
            {
              id: "thumbsCarousel_01",
              type: "thumbsCarousel",
              text: "consorcio",
            },
          ],
        },
        {
          id: "column_02",
          type: "column",
          texts: [
            {
              id: "thumbsCarousel_02",
              type: "thumbsCarousel",
              text: "monitoramento",
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
      texts,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default Home;
