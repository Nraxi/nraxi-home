import React from 'react';
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './css/index.css';
import App from './App';
import ErrorPage from './components/Pages/ErrorPage';
import Home from './components/Pages/Home';
import AboutMe from './components/Pages/AboutMe';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/About",
        element: <AboutMe />,
      }

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);