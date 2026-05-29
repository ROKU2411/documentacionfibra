import "./principal.css";

import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../firebase";

function Principal() {
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [plano, setPlano] = useState(null);
  const [cartera, setCartera] = useState(null);
  const [kmz, setKmz] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "proyectos"), {
        empresa,
        email,
        fecha: new Date().toISOString(),
      });

      if (plano) {
        await uploadBytes(
          ref(storage, `proyectos/${docRef.id}/plano`),
          plano
        );
      }

      if (cartera) {
        await uploadBytes(
          ref(storage, `proyectos/${docRef.id}/cartera`),
          cartera
        );
      }

      if (kmz) {
        await uploadBytes(
          ref(storage, `proyectos/${docRef.id}/kmz`),
          kmz
        );
      }

      alert("Proyecto enviado correctamente 🚀");
    } catch (error) {
      console.error(error);
      alert("Error al enviar el formulario ❌");
    }
  };

  return (
    <div className="principal-container">

      <div className="card">

        <div className="header">
          <h1>Registro de Proyecto</h1>
          <p>Carga la información y archivos del proyecto</p>
        </div>

        <form onSubmit={handleSubmit} className="formulario">

          {/* EMPRESA */}
          <div className="form-group">
            <label>Empresa</label>

            <input
              type="text"
              placeholder="Nombre de la empresa"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
            />
          </div>

          {/* EMAIL */}
          <div className="form-group">
            <label>Correo electrónico</label>

            <input
              type="email"
              placeholder="correo@empresa.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* ARCHIVOS */}
          <div className="files-grid">

                <div className="file-card">
                    <span className="file-title">Plano</span>
                    <label className="upload-zone">
                        <input
                        type="file"
                        onChange={(e) => setPlano(e.target.files[0])}
                        hidden/>
                        <div className="upload-content">
                        <span className="upload-icon">
                            📁
                        </span>
                        <p>Haz clic para subir archivo</p>
                        <small>PDF, DWG, JPG, PNG...</small>
                        </div>
                    </label>
                    {plano && (
                        <span className="file-name">
                        {plano.name}
                        </span>
                    )}
                </div>

                <div className="file-card">
                    <span className="file-title">Cartera</span>
                    <label className="upload-zone">
                        <input
                        type="file"
                        onChange={(e) => setCartera(e.target.files[0])}
                        hidden/>
                        <div className="upload-content">
                        <span className="upload-icon">
                            📁
                        </span>
                        <p>Haz clic para subir archivo</p>
                        <small>PDF, DWG, JPG, PNG...</small>
                        </div>
                    </label>
                    {cartera && (
                        <span className="file-name">
                        {cartera.name}
                        </span>
                    )}
                </div>

                <div className="file-card">
                    <span className="file-title">Kmz</span>
                    <label className="upload-zone">
                        <input
                        type="file"
                        onChange={(e) => setKmz(e.target.files[0])}
                        hidden/>
                        <div className="upload-content">
                        <span className="upload-icon">
                            📁
                        </span>
                        <p>Haz clic para subir archivo</p>
                        <small>PDF, DWG, JPG, PNG...</small>
                        </div>
                    </label>
                    {kmz && (
                        <span className="file-name">
                        {kmz.name}
                        </span>
                    )}
                </div>
          </div>

          {/* BOTÓN */}
          <button type="submit" className="submit-btn">
            Enviar Proyecto
          </button>

        </form>
      </div>
    </div>
  );
}

export default Principal;