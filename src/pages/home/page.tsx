import React from "react";

import { ContainerFluid } from "@ui/atoms";
import { MainTemplate } from "@ui/templates";
import { Header } from "@features/common";

export const HomePage = () => (
  <MainTemplate header={<Header />}>
    <ContainerFluid>
      <h1>Главная</h1>
    </ContainerFluid>
  </MainTemplate>
);
