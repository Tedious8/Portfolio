import { RouteObject } from "react-router-dom";
import { androidProject } from "../constants/url";

export const androidProjectRoute: RouteObject[] = [
  {
    path: androidProject.index,
    index: true,
    lazy: () => import("../pages/android_project/index"),
  },
  {
    path: androidProject.Petopia,
    lazy: () =>
      import(
        "../pages/android_project/Petopia"
      ),
  },
];
