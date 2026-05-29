import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import Home from "./pages/Home";
import Projects from "./pages/Projects";

import ATP from "./pages/projects/ATP";
import CLARO from "./pages/projects/Claro";
import ITX from "./pages/projects/ITX";
import ONNET from "./pages/projects/Onnet";
import OTROS from "./pages/projects/GestionPermisos";
import UFINET from "./pages/projects/Ufinet";
import LOGIN from "./pages/projects/login";
import PPAL from "./pages/servicios/principal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/ATP" element={<ATP />} />
        <Route path="/projects/Claro" element={<CLARO />} />
        <Route path="/projects/ITX" element={<ITX />} />
        <Route path="/projects/Onnet" element={<ONNET />} />
        <Route path="/projects/GestionPermisos" element={<OTROS />} />
        <Route path="/projects/Ufinet" element={<UFINET />} />
        <Route path="/servicios/principal" element={<PPAL />} />
      </Routes>

      <ToastContainer />


    </BrowserRouter>
  );
}
export default App;