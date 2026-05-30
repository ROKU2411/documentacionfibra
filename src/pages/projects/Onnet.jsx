import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect } from "react";

import "./Onnet.css";
import img1 from "../../assets/images/onnet/kmz.png";
import img2 from "../../assets/images/onet/plano.png";
import img3 from "../../assets/images/onnet/cartera.png";

const imagenes = [
    {
      imagen: img1,
      descripcion: "Kmz de recorridos de fibra y elementos en diseño y construcción",
    },
    {
      imagen: img2,
      descripcion: "Plano DWG y PDF convenciones Telefonica-Onnet. ",
      
    },
    {
      imagen: img3,
      descripcion: "Carteras de red para todos los proyectos, incluyendo Onnet-Telefonica, tanto de obras civiles como de construccion y diseño de red ",
      
    },
  
  ];

function Onnet() {
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
      <Link to="/projects/Atp">
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

      <Link to="/projects/Ufinet">
        <button className="nav-button">
          Siguiente Proyecto UFINET
        </button>
      </Link>
    </div>

    <h1 className="onnet-title">Proyecto ONNET</h1>

    <p className="onnet-description">
      Entregables de diseño, despliegue, obras civiles y permisos de uso, así como As-Built al momento de finalizar actividades
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
          alt="Proyecto Onnet"
          className="onnet-image"
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

export default Onnet;