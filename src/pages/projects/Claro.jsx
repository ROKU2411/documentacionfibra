import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect } from "react";

import "./Claro.css";
import img1 from "../../assets/images/claro/kmz.png";
import img2 from "../../assets/images/claro/plano.png";
import img3 from "../../assets/images/claro/unifilar2.png";
import img4 from "../../assets/images/claro/unifilar.png";

const imagenes = [
    {
      imagen: img1,
      descripcion: "Kmz de recorridos de fibra y elementos en diseño y construcción",
    },
    {
      imagen: img2,
      descripcion: "Planos de recorrido, cartografias, actualizaciones y diseño",
      
    },
    {
      imagen: img3,
      descripcion: "Single Dwelling Unit – SDU. Entregables de diseños de viviendas individuales, zonas externas, tanto cluster y subcluster. Recorridos desde Nodos principales hasta splitter de derivación, así como splitter secundarios de conexión final ",
      
    },
    {
      imagen: img4,
      descripcion: "Unifilares de conexión. Entregables de unifilares de construcción, conexión y derivación hilo a hilo. Conservación de colores y bloques de acuerdo a requerimientos",
    },
    
  ];

function Claro() {
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
  <div className="claro-container">
    <div className="bottom-buttons">
      <Link to="/projects/Ufinet">
        <button className="nav-button">
          Anterior Proyecto Ufinet
        </button>
      </Link>
    </div>
    <div className="top-buttons">
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

    <h1 className="claro-title">Proyecto Claro</h1>

    <p className="claro-description">
      Entregables tanto para solicitud de permiso, como para presentación final As-Built hacia operador de red
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
          alt="Proyecto CLARO"
          className="claro-image"
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

export default Claro;