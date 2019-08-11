import { HomePage } from "./home/page";
import { EstateSalePage } from "./estate/sale/page";

export const routes = () => [
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    path: "/estate/sale",
    exact: true,
    component: EstateSalePage
  }
];
