import { RouteObject } from "react-router-dom";
import { websiteProject } from "../constants/url";

export const websiteProjectRoute: RouteObject[] = [
  {
    path: websiteProject.index,
    index: true,
    lazy: () => import("../pages/website_project/index"),
  },
  {
    path: websiteProject.Development_of_an_Interactive_Learning_Platform,
    lazy: () =>
      import(
        "../pages/website_project/Development_of_an_Interactive_Learning_Platform"
      ),
  },
];
