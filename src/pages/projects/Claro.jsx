import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./Claro.css";

import img1 from "../../assets/proyecto1.png";
import img2 from "../../assets/proyecto2.png";
import img3 from "../../assets/proyecto3.png";

function Claro() {
  const imagenes = [
    {
      imagen: img1,
      descripcion: "Dashboard principal del sistema CLARO",
    },
    {
      imagen: img2,
      descripcion: "Modulo de gestion de usuarios",
    },
    {
      imagen: img3,
      descripcion: "Panel de estadisticas y reportes",
    },
  ];

  const [index, setIndex] = useState(0);

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndex((prev) =>
      prev === 0 ? imagenes.length - 1 : prev - 1
    );
  };

  return (
    <div className="claro-container">

      {/* 1. Proyecto */}
      <h1 className="claro-title">Proyecto CLARO</h1>

      {/* 2. Descripción */}
      <p className="claro-description">
        Plataforma desarrollada para la gestion y monitoreo de
        procesos tecnologicos, con dashboard interactivo,
        administracion de usuarios y analiticas en tiempo real.
      </p>

      {/* 3. Galeria lateral */}
      <div className="carousel-container">

        <button className="arrow-btn left" onClick={anterior}>
          <FaChevronLeft />
        </button>

        <div className="image-card">
          <img
            src={imagenes[index].imagen}
            alt="Proyecto CLARO"
            className="claro-image"
          />

          <p className="image-description">
            {imagenes[index].descripcion}
          </p>
        </div>

        <button className="arrow-btn right" onClick={siguiente}>
          <FaChevronRight />
        </button>
    </div>

      {/* 4. Botones inferiores */}
      <div className="buttons-container">

        <Link to="/">
          <button className="nav-button">
            Home
          </button>
        </Link>

        <Link to="/projects/ITX">
          <button className="nav-button">
            Siguiente Proyecto ITX
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Claro;