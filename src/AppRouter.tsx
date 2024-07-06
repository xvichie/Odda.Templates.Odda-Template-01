import React, { useState } from "react";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Home from "./screens/Home/Home";
import FAQ from "./screens/Faq/FAQ";
import AboutUs from "./screens/AboutUs/AboutUs";
import Prices from "./screens/Prices/Prices";
import Error404 from "./screens/Error404/Error404";
import ViewCottage from "./screens/ViewCottage/ViewCottage";
import Contact from "./screens/Contact/Contact";


function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index={true} path="/" element={<Home />}></Route>
        <Route index={true} path="/faq" element={<FAQ />}></Route>
        <Route index={true} path="/about" element={<AboutUs />}></Route>
        <Route index={true} path="/prices" element={<Prices />}></Route>
        <Route index={true} path="/cottage" element={<ViewCottage />}></Route>
        <Route index={true} path="/contact" element={<Contact />}></Route>
        <Route index={true} path="*" element={<Error404 />}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default AppRouter;
