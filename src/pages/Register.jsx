import "./Register.css";

import { motion } from "framer-motion";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] =
    useState("Trabajador");

  const [gender, setGender] =
    useState("Hombre");

  return (
    <motion.div
      className="phone-container"

      initial={{
        opacity: 0,
        x: "100%",
      }}

      animate={{
        opacity: 1,
        x: 0,
      }}

      exit={{
        opacity: 0,
        x: "-100%",
      }}

      transition={{
        duration: 0.45,
        ease: "easeInOut",
      }}
    >

      <div className="register-top-section">

        <div className="logo">
          changa+
        </div>

        <div className="welcome-card">

          <h1>
            Crear<br />
            cuenta
          </h1>

          <p>
            Regístrate para comenzar
          </p>

          <div className="role-selector">

            <button
              className={`role ${
                selectedRole === "Trabajador"
                  ? "active-register"
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
                  ? "active-register"
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

      <div className="register-form">

        <div className="input-group">
          <label>Nombre</label>

          <input type="text" />
        </div>

        <div className="input-group">
          <label>Apellido</label>

          <input type="text" />
        </div>

        <div className="gender-wrapper">

          <label>Género</label>

          <div className="gender-selector">

            <button
              type="button"
              className={
                gender === "Hombre"
                  ? "gender-btn active-gender"
                  : "gender-btn"
              }

              onClick={() =>
                setGender("Hombre")
              }
            >
              ♂
            </button>

            <button
              type="button"
              className={
                gender === "Mujer"
                  ? "gender-btn active-gender"
                  : "gender-btn"
              }

              onClick={() =>
                setGender("Mujer")
              }
            >
              ♀
            </button>

          </div>

        </div>

        <div className="input-group">

          <label>
            Fecha de nacimiento
          </label>

          <div className="date-row">

            <input
              type="text"
              placeholder="dd"
            />

            <input
              type="text"
              placeholder="mm"
            />

            <input
              type="text"
              placeholder="aa"
            />

          </div>

        </div>

        <div className="input-group">

          <label>DNI / CUIT</label>

          <input type="text" />

        </div>

        <div className="input-group">

          <label>Provincia</label>

          <input type="text" />

        </div>

        <div className="street-row">

          <div className="input-group">

            <label>Calle</label>

            <input type="text" />

          </div>

          <div className="input-group">

            <label>Número</label>

            <input type="text" />

          </div>

        </div>

        <div className="input-group">

          <label>
            Correo Electrónico
          </label>

          <input type="email" />

        </div>

        <div className="input-group">

          <label>Contraseña</label>

          <input type="password" />

        </div>

        <button className="register-btn">
          Crear cuenta
        </button>

        <div className="divider">
          <span>O</span>
        </div>

        <p className="register-text">

          ¿Ya tienes cuenta?{" "}

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();

              navigate("/login");
            }}
          >
            Inicia sesión
          </a>

        </p>

      </div>

    </motion.div>
  );
}

export default Register;