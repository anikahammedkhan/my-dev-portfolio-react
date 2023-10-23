import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Error from "../../components/Error/Error";
import Hero from "../../components/Hero/Hero";
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails";
import Projects from "../../components/Projects/Projects";
import TechStack from "../../components/TechStack/TechStack";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Hero /> },
      { path: "/about", element: <About /> },
      { path: "/techState", element: <TechStack /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/project/:id",
        loader: ({ params }) =>
          fetch(
            `https://front-end-developer-server.vercel.app/projects/${params.id}`
          ),
        element: <ProjectDetails />,
      },
    ],
  },
  { path: "*", element: <Error></Error> },
]);

export default router;
