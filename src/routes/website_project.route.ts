import { RouteObject } from "react-router-dom";
import { websiteProject } from "../constants/url";

export const websiteProjectRoute: RouteObject[] = [
  {
    path: websiteProject.index,
    index: true,
    lazy: () => import("../pages/website_project/index"),
  },
  {
    path: websiteProject.this,
    lazy: () => import("../pages/website_project/This"),
  },
];
