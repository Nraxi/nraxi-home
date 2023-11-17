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
import Contact from './components/Pages/Contact';
import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <AboutMe />,
    errorElement: <ErrorPage />,
  },
  {
    path: "mystack",
    element: <MyStack />,
    errorElement: <ErrorPage />,
  },
  {
    path: "services",
    element: <Services />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Portfolio",
    element: <Portfolio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();