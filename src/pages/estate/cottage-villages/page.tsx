import React from "react";

import { ContainerFluid } from "@ui/atoms";
import { MainTemplate } from "@ui/templates";
import { Header } from "@features/common";

export const EstateCottageVillagesPage = () => (
  <MainTemplate header={<Header />}>
    <ContainerFluid>
      <h1>Элитные посёлки Подмосковья</h1>
    </ContainerFluid>
  </MainTemplate>
);
