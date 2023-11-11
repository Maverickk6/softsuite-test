import { useState } from "react";
import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePageLayout from "./pages/HomePageLayout/HomePageLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePageLayout />} />
    </Routes>
  );
}

export default App;
