import ErrorPage from './components/Pages/ErrorPage';
import App from './App';
import './css/index.css';
import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutMe from './components/Pages/AboutMe';
import MyStack from './components/Pages/MyStack';
import Services from './components/Pages/Services';
import Portfolio from './components/Pages/Portfolio';
import ArtGallery from './components/Pages/ArtGallery';
import Contact from './components/Pages/Contact';
import reportWebVitals from './reportWebVitals';
import Gaming from './components/Pages/Gaming';


const router = createBrowserRouter([
  {
    path: "/nraxi-home",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/nraxi-home/about",
    element: <AboutMe />
  },
  {
    path: "/nraxi-home/mystack",
    element: <MyStack />
  },
  {
    path: "/nraxi-home/services",
    element: <Services />
  },
  {
    path: "/nraxi-home/portfolio",
    element: <Portfolio />
  },
  {
    path: "/nraxi-home/artgallery",
    element: <ArtGallery />
  },
  {
    path: "/nraxi-home/gaming",
    element: <Gaming />
  },
  {
    path: "/nraxi-home/contact",
    element: <Contact />
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();