import { RouteObject } from "react-router-dom";
import { homeUrl, websiteProject } from "../constants/url";
import { homeRoute } from "./home.route";
import { websiteProjectRoute } from "./website_project.route";

export const routerIndex: RouteObject[] = [
  {
    path: homeUrl.home,
    lazy: () => import("../layout/default.layout"),
    children: homeRoute,
  },
  {
    path: websiteProject.index,
    lazy: () => import("../layout/default.layout"),
    children: websiteProjectRoute,
  },
];

routerIndex.push({
  path: "*",
  lazy: () => import("../templates/404"),
});
