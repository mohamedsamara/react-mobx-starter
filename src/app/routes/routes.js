import loadable from "@loadable/component";

export const LoadableHome = loadable(() => import("../pages/Homepage"));

export const LoadableAbout = loadable(() => import("../pages/About"));

export const LoadableShop = loadable(() => import("../pages/Shop"));

export const LoadableCart = loadable(() => import("../pages/Cart"));

export const LoadableNotFoundPage = loadable(() => import("../pages/Page404"));
