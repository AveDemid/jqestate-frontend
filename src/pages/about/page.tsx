import React from "react";

import { ContainerFluid } from "@ui/atoms";
import { MainTemplate } from "@ui/templates";
import { Header } from "@features/common";

export const AboutPage = () => (
  <MainTemplate header={<Header />}>
    <ContainerFluid>
      <h1>JQ Estate — агентство элитной недвижимости</h1>
    </ContainerFluid>
  </MainTemplate>
);
