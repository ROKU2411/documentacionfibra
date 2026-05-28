import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./login.css";
import { toast } from "react-toastify";


function Login() {
  return (

    
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="top-buttons">
            <Link to="/">
              <button className="nav-button">
                Home
              </button>
            </Link>
          </div>
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8">
        <div className="flex flex-col items-center mb-8">
          <img
            src={logo}
            alt="Logo"
          />

          <h1 className="text-3xl font-bold text-white text-center">
            Bienvenido
          </h1>

          <p className="text-slate-300 text-sm mt-2 text-center">
            Ingrese sus credenciales para continuar
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm text-slate-200 mb-2">
              Usuario
            </label>

            <input
              type="text"
              placeholder="Ingrese su usuario"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-200 mb-2">
              Contraseña
            </label>

            <input
              type="password"
              placeholder="Ingrese su contraseña"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              toast.info("Funciòn deshabilitada");
            }}
            className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 text-white font-semibold shadow-lg"
            >
            Ingresar
          </button>
        </form>

        <div className="mt-6 text-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toast.info("Recuperación de contraseña próximamente");
            }}
            className="text-sm text-cyan-300 hover:text-cyan-200 transition"
            >
            ¿Olvidó su contraseña?
          </a>
        </div>
      </div>
    </div>
    
  );
}
export default Login;