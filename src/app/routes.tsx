import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ProjectDetail from "./pages/ProjectDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "projects/:slug", Component: ProjectDetail },
    ],
  },
]);
