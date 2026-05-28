import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect } from "react";

import "./GestionPermisos.css";

import img1 from "../../assets/images/gestionpermisos/aire.png";
import img2 from "../../assets/images/gestionpermisos/celsia.png";
import img3 from "../../assets/images/gestionpermisos/ebbsa.png";
import img4 from "../../assets/images/gestionpermisos/emcali.png";
import img5 from "../../assets/images/gestionpermisos/etb.png";
import img6 from "../../assets/images/gestionpermisos/joinas.png";
import img7 from "../../assets/images/gestionpermisos/otros.png";

const imagenes = [
    {
      imagen: img1,
      descripcion: "Gestión de Permisos ante electrificadora Air-e en el caribe, seguimiento lineamientos definidos por la misma con correos de contacto para radicación y seguimiento",
    },
    {
      imagen: img2,
      descripcion: "Gestión de permisos ante Celsia - Ufinet, con lineamientos establecidos por electrificadora, con correos de contacto, estos permisos deben gestionarse por medio de Ufinet administrador de red. ",
    
    },
    {
      imagen: img3,
      descripcion: "Gestión de permisos de uso de torres EBBSA y posteria de electrificadora, Kmz con registros internos como se aprecia en la imagen, junto a demás documentación solicitada",
      
    },
    {
      imagen: img4,
      descripcion: "Tramites de permiso de uso en infraestructura existente EMCALI, valle del cauca. Lineamientos de acuerdo a especificaciones solicitadas, esta información debe radicarse por parte de compañía de manera física",
    },
    {
      imagen: img5,
      descripcion: "Trámite ante operadores de red, UNE, ETB, CLARO, UFINET, etc, cada operador tiene especificaciones definidas para permiso de uso de su infraestructura",
    },
    {
      imagen: img6,
      descripcion: "Proceso de radicación para permiso de uso en portal Join-As Enel, siguiente lineamientos y requerimientos de saturación, proceso de revisión, distancias normativas, documentación requerida, este requiere Usuario por parte de Enel hacia empresa operadora de red",
    },
    {
      imagen: img7,
      descripcion: `Actividades Adicionales:
          1. Revisión de entregables finalizados, resumen de observaciones y estadísticas.
          2. Documentación para licitaciones y proceso de adquisición de contratos en diseño.
          3. Explicación y capacitación.
          4. Conversión entre archivos, escala y georreferenciación de planos.
          5. Documentación adicional como SiteSurvey, Renders de acceso y detalle, generación de cartografía, pre-relevamiento basado en bases de datos existentes.
          6. Gestión de permisos ante Concesiones Viales - PMT, con requerimientos de cada concesión vial, ANI, INVIAS, ICCU, ETC.`,
    
    },
  ];

function Gestion() {
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
  <div className="gestion-container">

    <div className="bottom-buttons">
      <Link to="/projects/ITX">
        <button className="nav-button">
          Anterior Proyecto ITX
        </button>
      </Link>
    </div>

    <div className="top-buttons">
      <Link to="/">
        <button className="nav-button">
          Home
        </button>
      </Link>

      <Link to="/projects/ATP">
        <button className="nav-button">
          Siguiente Proyecto ATP
        </button>
      </Link>
    </div>

    <h1 className="claro-title">Gestion de Permisos</h1>

    <p className="claro-description">
      Gestión de permisos ante operadores de red, propietarios de infraestructura y documentación adicional.
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
          alt="Gestion de Permisos"
          className="gestion-image"
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

export default Gestion;