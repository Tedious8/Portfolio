import { RouteObject } from "react-router-dom";
import { homeUrl } from "../constants/url";

export const homeRoute: RouteObject[] = [
  {
    path: homeUrl.home,
    index: true,
    lazy: () => import("../pages/home"),
  },
];
