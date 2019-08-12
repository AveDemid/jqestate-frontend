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
          <MenuLink to="/" exact>
            Аренда
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/" exact>
            Поселки
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/" exact>
            О компании
          </MenuLink>
        </MenuItem>
      </Menu>
    </ContainerFluid>
  </HeaderBox>
);
