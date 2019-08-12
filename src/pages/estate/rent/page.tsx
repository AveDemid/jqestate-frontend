import React from "react";

import { ContainerFluid } from "@ui/atoms";
import { MainTemplate } from "@ui/templates";
import { Header } from "@features/common";

export const EstateRentPage = () => (
  <MainTemplate header={<Header />}>
    <ContainerFluid>
      <h1>Аренда элитной недвижимости в Подмосковье</h1>
    </ContainerFluid>
  </MainTemplate>
);
