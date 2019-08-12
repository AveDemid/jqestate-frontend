import React from "react";

import { ContainerFluid } from "@ui/atoms";

import { HeaderBox, Menu, MenuItem, MenuLink } from "./styled";

export const Header = () => (
  <HeaderBox>
    <ContainerFluid>
      <Menu>
        <MenuItem>
          <MenuLink to="/" exact>
            Главная
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/estate/sale">Продажа</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/estate/rent">Аренда</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/estate/cottage-villages">Поселки</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/about" exact>
            О компании
          </MenuLink>
        </MenuItem>
      </Menu>
    </ContainerFluid>
  </HeaderBox>
);
