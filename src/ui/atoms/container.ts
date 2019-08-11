import styled from "styled-components";
import { breakpoints } from "@lib/breakpoints";

export const Container = styled("div")`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @media (min-width: ${breakpoints.small}) {
    max-width: 54rem;
  }

  @media (min-width: ${breakpoints.medium}) {
    max-width: 72rem;
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: 96rem;
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    max-width: 114rem;
  }
`;
