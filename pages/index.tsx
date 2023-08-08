import Head from "next/head";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";

import Fab from "../components/FAB";

function Home({
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
        <Fab />
        <Content></Content>
      </Page>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "MPR - Seguros Auto, Vida e Viagem";
  const description =
    "Corretora de seguros online. Auto, consórcio, saúde, vida, viagem";

  return {
    props: {
      pageTitle,
      description,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default Home;
