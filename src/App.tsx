import { useState } from "react";
import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePageLayout from "./components/HomePageLayout/HomePageLayout";
import ElementPage from "./pages/elementsPage/ElementPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ElementPage />} />
    </Routes>
  );
}

export default App;
