import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect } from "react";

import "./Ufinet.css";

import img1 from "../../assets/images/ufinet/kmz.png";
import img2 from "../../assets/images/ufinet/plano.png";
import img3 from "../../assets/images/ufinet/unifilar.png";
const imagenes = [
    {
      imagen: img1,
      descripcion: "Kmz de recorridos de fibra y elementos en diseño y construcción",
    },
    {
      imagen: img2,
      descripcion: "Planos de distribucion, relevamiento, construcciòn Ufinet ",
      
    },
    {
      imagen: img3,
      descripcion: "Unifilares de distribuciòn de hilos para redes tanto troncales como ramificadas ultimas millas",
      
    },
    
  ];

function Ufinet() {
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
  <div className="onnet-container">
    <div className="bottom-buttons">
      <Link to="/projects/ATP">
        <button className="nav-button">
          Anterior Proyecto ATP
        </button>
      </Link>
    </div>
    <div className="top-buttons">
      <Link to="/">
        <button className="nav-button">
          Home
        </button>
      </Link>

      <Link to="/projects/Claro">
        <button className="nav-button">
          Siguiente Proyecto CLARO
        </button>
      </Link>
    </div>

    <h1 className="onnet-title">Proyecto UFINET</h1>

    <p className="onnet-description">
      Entregables para gestión de permiso, construcción de red de fibra y entregables finales As-Built.
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
          alt="Proyecto Ufinet"
          className="ufinet-image"
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
export default Ufinet;