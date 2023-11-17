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


const router = createBrowserRouter([
  {
    path: "/nraxi-home",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/nraxi-home",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <AboutMe />
  },
  {
    path: "mystack",
    element: <MyStack />
  },
  {
    path: "services",
    element: <Services />
  },
  {
    path: "Portfolio",
    element: <Portfolio />
  },
  {
    path: "ArtGallery",
    element: <ArtGallery />
  },
  {
    path: "contact",
    element: <Contact />

  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();