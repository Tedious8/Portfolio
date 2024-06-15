import { RouteObject } from "react-router-dom";
import { androidProject, homeUrl, websiteProject } from "../constants/url";
import { homeRoute } from "./home.route";
import { websiteProjectRoute } from "./website_project.route";
import { androidProjectRoute } from "./android_project.route";

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
  {
    path: androidProject.index,
    lazy: () => import("../layout/default.layout"),
    children: androidProjectRoute,
  },
];

routerIndex.push({
  path: "*",
  lazy: () => import("../templates/404"),
});
