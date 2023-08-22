import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import { privacyPolicy } from "../hooks/usePrivacyPolicy";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { PageTitle } from "components/PageTitle";
import { PageConstructor } from "components/PageConstructor";

import Fab from "../components/FAB";

function PoliticaPrivacidade({
  pageTitle,
  description,
  privacyPolicy,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { asPath } = useRouter();

  return (
    <React.Fragment>
      <Head>
        <title>{"MPR - " + pageTitle}</title>
        <meta name={pageTitle} content={description} />
      </Head>

      <Page title={pageTitle} description={description}>
        <Fab />
        <Content>
          <PageTitle pageTitle={pageTitle} pageUrl={asPath} />
          <PageConstructor text={privacyPolicy} />
        </Content>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "Política de privacidade";
  const description = "Saiba mais sobre nossa política de privacidade.";

  return {
    props: {
      pageTitle,
      description,
      privacyPolicy: privacyPolicy,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default PoliticaPrivacidade;
