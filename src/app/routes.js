import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Page404 from "./pages/Page404";

const routes = [
  { path: "/", name: "Homepage", component: Homepage },
  { path: "/about", name: "About", component: About },
  { path: "*", component: Page404 },
];

export default routes;
