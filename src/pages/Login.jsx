import "./Login.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [selectedRole, setSelectedRole] = useState("Trabajador");
  const navigate = useNavigate();

  return (
    <motion.div
  className="phone-container"

  initial={{
    opacity: 0,
    x: 40,
  }}

  animate={{
    opacity: 1,
    x: 0,
  }}

  exit={{
    opacity: 0,
    x: -40,
  }}

  transition={{
    duration: 0.35,
  }}
>

      <div className="top-section">
        <div className="logo">changa+</div>

        <div className="welcome-card">
          <h1>Bienvenido de nuevo</h1>
          <p>Inicia sesión para continuar</p>

          <div className="role-selector">

            <button
              className={`role ${
                selectedRole === "Trabajador"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setSelectedRole("Trabajador")
              }
            >
              Trabajador
            </button>

            <button
              className={`role ${
                selectedRole === "Cliente"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setSelectedRole("Cliente")
              }
            >
              Cliente
            </button>

          </div>
        </div>
      </div>

      <div className="form-section">

        <input
          type="email"
          placeholder="Correo Electrónico"
        />

        <input
          type="password"
          placeholder="Contraseña"
        />

        <span className="forgot">
          ¿Olvidaste tu contraseña?
        </span>

        <button
          className="login-btn"
          onClick={() => {

            if (selectedRole === "Cliente") {
              navigate("/client");
            } else {
              navigate("/worker");
            }

          }}
        >
          Ingresar a mi cuenta
          
        </button>

        <div className="divider">
          <span>O</span>
        </div>

        <p className="register-text">
        ¿No tienes cuenta?{" "}

        <a
            href="#"
            onClick={(e) => {
            e.preventDefault();
            navigate("/register");
            }}
        >
            Regístrate aquí
        </a>
        </p>

      </div>

    </motion.div>
  );
}

export default Login;