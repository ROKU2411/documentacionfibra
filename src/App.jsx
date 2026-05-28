import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
=======
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
>>>>>>> f4bfece (tercera subida)

import Home from "./pages/Home";
import Projects from "./pages/projects";

import ATP from "./pages/projects/ATP";
import CLARO from "./pages/projects/Claro";
import ITX from "./pages/projects/ITX";
import ONNET from "./pages/projects/Onnet";
import OTROS from "./pages/projects/GestionPermisos";
import UFINET from "./pages/projects/Ufinet";
<<<<<<< HEAD
=======
import LOGIN from "./pages/projects/login";
>>>>>>> f4bfece (tercera subida)

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
<<<<<<< HEAD
      </Routes>
=======
        <Route path="/projects/login" element={<LOGIN />} />
      </Routes>
      <ToastContainer />
>>>>>>> f4bfece (tercera subida)
    </BrowserRouter>
  );
}
export default App;