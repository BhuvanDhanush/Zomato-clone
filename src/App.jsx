import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./suby/pages/LandingPage";
import './App.css'

import ProductMenu from "./suby/components/ProductMenu";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<ProductMenu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;