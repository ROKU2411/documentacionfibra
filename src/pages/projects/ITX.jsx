import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect } from "react";

import "./ITX.css";

<<<<<<< HEAD
import img1 from "../../assets/images/atp/kmz.png";
import img2 from "../../assets/images/atp/plano.png";
import img3 from "../../assets/images/atp/plano2.png";
import img4 from "../../assets/images/atp/unifilar.png";
=======
import img1 from "../../assets/images/itx/kmz.png";
import img2 from "../../assets/images/itx/plano.png";
import img3 from "../../assets/images/itx/unifilar.png";
>>>>>>> f4bfece (tercera subida)
const imagenes = [
    {
      imagen: img1,
      descripcion: "Kmz de recorridos de fibra y elementos en diseño y construcción",
    },
    {
      imagen: img2,
<<<<<<< HEAD
      descripcion: "Multi Dwelling Unit – MDU, diseño y entregables para unidades multifamiliares, predios privados. ",
=======
      descripcion: "Planos en DWG, Shape, PDF, de construcciòn de red ",
>>>>>>> f4bfece (tercera subida)
      
    },
    {
      imagen: img3,
<<<<<<< HEAD
      descripcion: "Single Dwelling Unit – SDU. Entregables de diseños de viviendas individuales, zonas externas, tanto cluster y subcluster. Recorridos desde Nodos principales hasta splitter de derivación, así como splitter secundarios de conexión final ",
      
    },
    {
      imagen: img4,
      descripcion: "Unifilares de conexión. Entregables de unifilares de construcción, conexión y derivación hilo a hilo. Conservación de colores y bloques de acuerdo a requerimientos",
    },
=======
      descripcion: "Unifilares de conexión, en Excel, DWG y formatos solicitados por cliente",
      
    },
    
>>>>>>> f4bfece (tercera subida)
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

<<<<<<< HEAD
=======
    <div className="bottom-buttons">
      <Link to="/projects/Claro">
        <button className="nav-button">
          Anterior Proyecto Claro
        </button>
      </Link>
    </div>

>>>>>>> f4bfece (tercera subida)
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
<<<<<<< HEAD
      Entregables tanto de diseño como As-Built...
=======
      Entregables de relevamiento, reportes de avance, seguimientos y documentación para entregables finales.
>>>>>>> f4bfece (tercera subida)
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