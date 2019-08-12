import React from "react";

import { MainTemplate } from "@ui/templates";
import { Header } from "@features/common";

export const HomePage = () => (
  <MainTemplate header={<Header />}>
    <h1>Hello world!</h1>
  </MainTemplate>
);
