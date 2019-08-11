import React, { ReactNode } from "react";
import styled from "styled-components";

interface MainTemplateProps {
  header?: JSX.Element;
  children: ReactNode;
}

export const MainTemplate = ({ header, children }: MainTemplateProps) => (
  <Layout>
    {header && <Header>{header}</Header>}
    <Content>{children}</Content>
  </Layout>
);

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.div`
  flex-grow: 0;
`;

const Content = styled.div`
  flex-grow: 1;
`;
