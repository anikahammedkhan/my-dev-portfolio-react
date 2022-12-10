import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Error from "../../components/Error/Error";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import TechStack from "../../components/TechStack/TechStack";
import Main from "../../layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Hero /> },
            { path: '/home', element: <Hero /> },
            { path: '/about', element: <About /> },
            { path: '/techState', element: <TechStack /> },
            { path: '/projects', element: <Projects /> },
            { path: '/contact', element: <Contact /> },
        ]
    },
    { path: '*', element: <Error></Error> }
]);

export default router;