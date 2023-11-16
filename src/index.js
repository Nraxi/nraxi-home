// import React from 'react';
// import * as ReactDOM from "react-dom/client";
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/Pages/ErrorPage';
// import Home from './components/Pages/Home';
// import Resume from './components/Pages/Resume';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,

//     children: [
//       // {
//       //   index: true,
//       //   element: <Home />,
//       // },
//       {
//         path: "/about",
//         element: <div><h2>HEJSAN DU </h2></div>,
//       },
//       {
//         path: "/resume",
//         element: <Resume />
//       }

//     ]
//   }
// ])

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import App from './App';
import './css/index.css';
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import AboutMe from './components/Pages/AboutMe';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // (
    //   <div>
    //     <h1>Hello World</h1>
    //     <Link to="about">About Us</Link>
    //   </div>
    // ),
  },
  {
    path: "about",
    element: <AboutMe />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);