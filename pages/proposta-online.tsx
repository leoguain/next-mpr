import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { PageTitle } from "components/PageTitle";
import { ContactForm } from "components/ContactForm";

function PropostaOnline({
  pageTitle,
  description,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { asPath } = useRouter();

  return (
    <React.Fragment>
      <Head>
        <title>{"MPR - " + pageTitle}</title>
        <meta name={pageTitle} content={description} />
      </Head>

      <Page title={pageTitle} description={description}>
        <Content>
          <PageTitle pageTitle={pageTitle} pageUrl={asPath} />
          <ContactForm />
        </Content>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "Solicite uma proposta";
  const description = "Solicite uma cotação de nossos produtos.";

  return {
    props: {
      pageTitle,
      description,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default PropostaOnline;
