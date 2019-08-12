import { requiest } from "@features/common";

export const get = () => requiest<JSON>("GET", "/properties/country");

export const estateSaleApi = {
  get
};
