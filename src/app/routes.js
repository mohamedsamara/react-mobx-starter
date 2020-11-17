import Homepage from "./pages/Homepage";
import Page404 from "./pages/Page404";

const routes = [
  { path: "/", exact: true, name: "Homepage", component: Homepage },
  { path: "*", component: Page404 },
];

export default routes;
