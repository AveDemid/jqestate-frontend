import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderBox = styled.div`
  height: 9rem;
  display: flex;
  align-items: center;
`;

export const Menu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

export const MenuItem = styled.li``;

export const MenuLink = styled(NavLink)`
  display: block;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  font-size: 1.8rem;
  color: #232323;
  &:hover {
    color: #ff4c4e;
    text-decoration: none;
  }
  &.active {
    color: #ff4c4e;
  }
`;
