import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFountPage } from "pages/NotFoundPage";
import { RouteProps } from "react-router-dom";

export enum AppRouterPaths {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRouterPaths, string> = {
  [AppRouterPaths.MAIN]: "/",
  [AppRouterPaths.ABOUT]: "/about",
  [AppRouterPaths.NOT_FOUND]: "*",
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
  [AppRouterPaths.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFountPage />,
  },
};
