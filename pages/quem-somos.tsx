import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import { about } from "../hooks/useAbout";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { PageTitle } from "components/PageTitle";
import { PageConstructor } from "components/PageConstructor";

import { FAB } from "../components/FAB";

function QuemSomos({
  pageTitle,
  description,
  about,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { asPath } = useRouter();

  return (
    <React.Fragment>
      <Head>
        <title>{"MPR - " + pageTitle}</title>
        <meta name={pageTitle} content={description} />
      </Head>

      <Page title={pageTitle} description={description}>
        <FAB />
        <Content>
          <PageTitle pageTitle={pageTitle} pageUrl={asPath} />
          <PageConstructor text={about} />
        </Content>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "Quem somos";
  const description = "Saiba mais sobre a MPR, nossa missão e valores.";

  return {
    props: {
      pageTitle,
      description,
      about: about,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default QuemSomos;
