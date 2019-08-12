import { HomePage } from "./home/page";
import { EstateSalePage } from "./estate/sale/page";
import { EstateRentPage } from "./estate/rent/page";
import { EstateCottageVillagesPage } from "./estate/cottage-villages/page";
import { AboutPage } from "./about/page";

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
  },
  {
    path: "/estate/rent",
    exact: true,
    component: EstateRentPage
  },
  {
    path: "/estate/cottage-villages",
    exact: true,
    component: EstateCottageVillagesPage
  },
  {
    path: "/about",
    exact: true,
    component: AboutPage
  }
];
