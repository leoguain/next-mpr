import { useMemo } from "react";

export const useProducts = () => {
  const products = useMemo(
    () => [
      { id: 1, text: "Alarmes e Monitoramento" },
      { id: 2, text: "Consórcio" },
      { id: 3, text: "Consórcio de Imóvel" },
      { id: 4, text: "Consórcio de Veículo" },
      { id: 5, text: "Rastreador Porto Seguro" },
      { id: 6, text: "Consórcio de Imóvel" },
      { id: 7, text: "Seguro Apartamentos" },
      { id: 8, text: "Seguro Auto Jovem" },
      { id: 9, text: "Seguro Auto Mulher" },
      { id: 10, text: "Seguro Auto Pequenas Empresas" },
      { id: 11, text: "Seguro Auto Premium" },
      { id: 12, text: "Seguro Auto Sênior" },
      { id: 13, text: "Seguro Caminhão" },
      { id: 14, text: "Seguro Condomínio" },
      { id: 15, text: "Seguro de Acidentes Pessoais Escolar " },
      { id: 16, text: "Seguro de Acidentes Pessoais Individual Prazo Curto" },
      { id: 17, text: "Seguro de Acidentes Pessoais Plus" },
      { id: 18, text: "Seguro de Viagem " },
      { id: 19, text: "Seguro de Vida " },
      { id: 20, text: "Seguro de Vida em Grupo " },
      { id: 21, text: "Seguro de Vida Individual " },
      { id: 22, text: "Seguro de Vida Mais Mulher " },
      { id: 23, text: "Seguro de Vida Pequenas e Médias Empresas " },
      { id: 24, text: "Seguro Moto " },
      { id: 25, text: "Seguro para Automóveis " },
      { id: 26, text: "Seguro para Câmera Fotográfica " },
      { id: 27, text: "Seguro para Celular " },
      { id: 28, text: "Seguro para Convenções Coletivas " },
      { id: 29, text: "Seguro para Equipamentos Portáteis " },
      { id: 30, text: "Seguro para Filmadora " },
      { id: 31, text: "Seguro para Notebook " },
      { id: 32, text: "Seguro para Residências " },
      { id: 33, text: "Seguro para Tablet" },
      { id: 34, text: "Seguro Residência Habitual" },
      { id: 35, text: "Seguro Residência Premium" },
      { id: 36, text: "Seguro Residência Veraneio" },
      { id: 37, text: "Seguro Residência Fácil" },
      { id: 38, text: "Seguro Táxi" },
      { id: 39, text: "Seguro Vida Mais Simples" },
    ],
    []
  );

  return {
    products,
  };
};
