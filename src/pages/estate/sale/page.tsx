import React from "react";

import { ContainerFluid } from "@ui/atoms";
import { MainTemplate } from "@ui/templates";
import { Header } from "@features/common";

export const EstateSalePage = () => (
  <MainTemplate header={<Header />}>
    <ContainerFluid>
      <h1>Элитная недвижимость в Подмосковье</h1>
    </ContainerFluid>
  </MainTemplate>
);