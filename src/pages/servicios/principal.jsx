import "./principal.css";
import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../firebase";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

function Principal() {
    const [empresa, setEmpresa] = useState("");
    const [email, setEmail] = useState("");
    const [plano, setPlano] = useState(null);
    const [cartera, setCartera] = useState(null);
    const [kmz, setKmz] = useState(null);
    const [tiempoRestante, setTiempoRestante] = useState("");
    const [fechaLimite, setFechaLimite] = useState(null);
    const [user, setUser] = useState(null);

        useEffect(() => {
        const usuario = localStorage.getItem("usuario");
            const guardada = localStorage.getItem(
            `fechaLimiteProyecto_${usuario}`
            );

        if (guardada) {
            setFechaLimite(Number(guardada));
        }
        }, []);

        useEffect(() => {
        if (!fechaLimite) return;

        const intervalo = setInterval(() => {
            const diferencia = fechaLimite - Date.now();

            if (diferencia <= 0) {
            clearInterval(intervalo);
            setTiempoRestante("Tiempo agotado");
            return;
            }

            const horas = Math.floor(diferencia / (1000 * 60 * 60));
            const minutos = Math.floor(
            (diferencia % (1000 * 60 * 60)) / (1000 * 60)
            );
            const segundos = Math.floor(
            (diferencia % (1000 * 60)) / 1000
            );

            setTiempoRestante(
            `${horas}h ${minutos}m ${segundos}s`
            );
        }, 1000);

        return () => clearInterval(intervalo);

        }, [fechaLimite]);

            useEffect(() => {
            const unsub = onAuthStateChanged(auth, (currentUser) => {
                if (currentUser) {
                setUser(currentUser);

                const guardada = localStorage.getItem(
                    `fechaLimiteProyecto_${currentUser.email}`
                );

                if (guardada) {
                    setFechaLimite(Number(guardada));
                }
                }
            });

            return () => unsub();
            }, []);

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
        const emailUser = user?.email;
        const limite = Date.now() + 48 * 60 * 60 * 1000;
        localStorage.setItem(
        `fechaLimiteProyecto_${emailUser}`,
        limite
        );
        setFechaLimite(limite);
        alert("Proyecto enviado correctamente 🚀");
    } catch (error) {
      console.error(error);
      alert("Error al enviar el formulario ❌");
    }
  };

  return (
    
    
    <div className="principal-container">

                    <div className="top-buttons">
                <Link to="/">
                    <button className="nav-button">
                        Salir
                    </button>
                </Link>
                </div>
                {tiempoRestante && (
                <div className="contador">
                    ⏳ Tiempo restante: {tiempoRestante}
                </div>
                )}

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