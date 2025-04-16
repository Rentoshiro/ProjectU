import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

export enum AppRouterPaths {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutePath: Record<AppRouterPaths, string> = {
  [AppRouterPaths.MAIN]: "/",
  [AppRouterPaths.ABOUT]: "/about",
};

export const routeConfig: Record<AppRouterPaths, RouteProps> = {
  [AppRouterPaths.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRouterPaths.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
};
