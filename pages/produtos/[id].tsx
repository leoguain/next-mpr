import React from "react";
import Head from "next/head";

import { useRouter } from "next/router";

import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { PageTitle } from "components/PageTitle";
import { PageConstructor } from "../../components/PageConstructor";

import { products } from "../../hooks/useProducts";

function Product({
  title,
  description,
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { asPath } = useRouter();

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name={title} content={description} />
      </Head>

      <Page title={title} description={description}>
        <Content>
          <PageTitle pageTitle={title} pageUrl={asPath} />
          <PageConstructor text={content} />
        </Content>
      </Page>
    </React.Fragment>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { id: "consorcio-de-imoveis" } },
    { params: { id: "seguro-notebook" } },
    { params: { id: "seguro-auto-senior" } },
    { params: { id: "seguro-acidentes-pessoais-escolar" } },
    { params: { id: "seguro-acidentes-pessoais-plus" } },
    { params: { id: "seguro-acidentes-pessoais-individual-prazo-curto" } },
    { params: { id: "seguro-auto-mulher" } },
    { params: { id: "seguro-apartamentos" } },
    { params: { id: "consorcio-veiculos" } },
    { params: { id: "seguro-auto-pequenas-empresas" } },
    { params: { id: "seguro-condominio" } },
    { params: { id: "consorcio" } },
    { params: { id: "seguro-residencia-premium" } },
    { params: { id: "seguro-vida-mais-mulher" } },
    { params: { id: "seguro-residencial-facil" } },
    { params: { id: "seguro-camera-fotografica" } },
    { params: { id: "seguro-residencia-veraneio" } },
    { params: { id: "seguro-tablet" } },
    { params: { id: "seguro-auto-jovem" } },
    { params: { id: "seguro-residencia-habitual" } },
    { params: { id: "seguro-filmadora" } },
    { params: { id: "seguro-vida-pequenas-medias-empresas" } },
    { params: { id: "seguro-celular" } },
    { params: { id: "seguro-vida-grupo" } },
    { params: { id: "seguro-caminhao" } },
    { params: { id: "seguro-taxi" } },
    { params: { id: "seguro-convencoes-coletivas" } },
    { params: { id: "seguro-auto-premium" } },
    { params: { id: "seguro-vida-individual" } },
    { params: { id: "alarmes-monitoramento" } },
  ];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = products.filter((product) => {
    return product.id === params?.id;
  });

  const title = product[0].title;
  const description = product[0].text;
  const content = product[0].content;

  return {
    props: {
      title,
      description,
      content,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Product;
