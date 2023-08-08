import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import { usefulPhones } from "../hooks/useUsefulPhones";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { PageTitle } from "components/PageTitle";
import { PageConstructor } from "components/PageConstructor";

import Fab from "../components/FAB";

function TelefonesUteis({
  pageTitle,
  description,
  usefulPhones,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { asPath } = useRouter();

  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
        <meta name={pageTitle} content={description} />
      </Head>

      <Page title={pageTitle} description={description}>
        <Fab />
        <Content>
          <PageTitle pageTitle={pageTitle} pageUrl={asPath} />
          <PageConstructor text={usefulPhones} />
        </Content>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "MPR - Telefones úteis";
  const description = "Telefones úteis quando precisar de atendimento.";

  return {
    props: {
      pageTitle,
      description,
      usefulPhones: usefulPhones,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default TelefonesUteis;
