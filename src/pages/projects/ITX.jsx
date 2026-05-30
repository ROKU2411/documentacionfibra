import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect } from "react";

import "./ITX.css";
import img1 from "../../assets/images/itx/kmz.png";
import img2 from "../../assets/images/itx/plano.png";
import img3 from "../../assets/images/atp/unifilar.png";
const imagenes = [
    {
      imagen: img1,
      descripcion: "Kmz de recorridos de fibra y elementos en diseño y construcción",
    },
    {
      imagen: img2,
      descripcion: "Planos en DWG, Shape, PDF, de construcciòn de red ",
      
    },
    {
      imagen: img3,
      descripcion: "Unifilares tanto en .xlsx como en DWG de conexiòn y distribuciòn de hilos",
      
    },
  
      
  ];

function ITX() {
const [fade, setFade] = useState(true);
  const [index, setIndex] = useState(0);

  const siguiente = () => {
    setFade(false);
    setTimeout(() => {
    setIndex((prev) => (prev + 1) % imagenes.length);
    setFade(true);
  }, 200);
  };

  const anterior = () => {
    setFade(false);
    setTimeout(() => {
    setIndex((prev) => (prev - 1 + imagenes.length) % imagenes.length);
    setFade(true);
  }, 200);
  };  

  const imagenActual = imagenes[index];
  return (
  <div className="itx-container">
    <div className="bottom-buttons">
      <Link to="/projects/Claro">
        <button className="nav-button">
          Anterior Proyecto Claro
        </button>
      </Link>
    </div>
    <div className="top-buttons">
      <Link to="/">
        <button className="nav-button">
          Home
        </button>
      </Link>

      <Link to="/projects/GestionPermisos">
        <button className="nav-button">
          GESTION DE PERMISOS
        </button>
      </Link>
    </div>

    <h1 className="itx-title">Proyecto ITX</h1>

    <p className="ix-description">
      Entregables de relevamiento, reportes de avance, seguimientos y documentación para entregables finales.
    </p>

    <div className="carousel-container">

      <button
        className="arrow-btn left"
        onClick={anterior}
        aria-label="Imagen anterior"
      >
        <FaChevronLeft />
      </button>

      <div className={`image-card ${fade ? "fade-in" : "fade-out"}`}>
        <img
          src={imagenActual.imagen}
          alt="Proyecto ITX"
          className="itx-image"
        />

        <p className="image-description">
          {imagenActual.descripcion}
        </p>
      </div>

      <button
        className="arrow-btn right"
        onClick={siguiente}
        aria-label="Imagen siguiente"
      >
        <FaChevronRight />
      </button>

    </div>
  </div>
  );
}

export default ITX;