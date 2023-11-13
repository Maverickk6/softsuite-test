import "./App.scss";
import { Routes, Route } from "react-router-dom";
import ElementPage from "./pages/elementsPage/ElementPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ElementPage />} />
    </Routes>
  );
}

export default App;
