import "./WorkerHome.css";

import {
  Home,
  Search,
  FileText,
  MessageSquare,
  User,
  MapPin,
  Circle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
function WorkerHome() {

  const navigate = useNavigate();
  
  return (
    <div className="worker-page">

      {/* HEADER */}

      <div className="worker-header">

        <div className="worker-logo">
          changa+
        </div>

        <p className="worker-greeting">
          ¡Hola de nuevo,
        </p>

        <h1>
          Agustin Quintela
        </h1>

        <div className="search-container">

          <div className="search-box">

            <Search size={18} />

            <input
              placeholder="Buscar trabajos disponibles"
            />

          </div>

        </div>

      </div>

      {/* TRABAJOS */}

      <div className="section">

        <div className="section-header">

          <h3>Trabajos disponibles</h3>

          <span>Ver todos</span>

        </div>

        <div className="job-card">

          <div className="job-content">

            <div className="job-info">

            <div className="job-title-row">

            <span className="job-dot blue"></span>

            <div className="job-title">
                Reparación de Estufa
            </div>

            </div>

              <div className="job-location">
                <MapPin size={10} />
                Palermo, CABA (hace 20m)
              </div>

              <div className="job-price">
                $20000 - $60000
              </div>

            </div>

            <button>
              Chat
            </button>

          </div>

        </div>

        <div className="job-card">

          <div className="job-content">

            <div className="job-info">

            <div className="job-title-row">

            <span className="job-dot blue"></span>

            <div className="job-title">
                Reparación de Estufa
            </div>

            </div>      

              <div className="job-location">
                <MapPin size={10} />
                Palermo, CABA (hace 20m)
              </div>

              <div className="job-price">
                $20000 - $60000
              </div>

            </div>

            <button>
              Chat
            </button>

          </div>

        </div>

      </div>

      {/* PUBLICACIONES */}

      <div className="section">

        <div className="section-header">

          <h3>Mis publicaciones</h3>

          <span>Ver todas</span>

        </div>

        <div className="publication-card">

          <div>

            <div className="publication-title-row">

            <span className="status-dot active-dot"></span>

            <div className="publication-title">
                Reparo perdidas
            </div>

            </div>

            <div className="publication-subtitle">
              5 propuestas disponibles
            </div>

          </div>

          <div className="status active">
            Activa
          </div>

        </div>

        <div className="publication-card">

          <div>

            <div className="publication-title-row">

            <span className="status-dot paused-dot"></span>

            <div className="publication-title">
                Arreglo paredes
            </div>

            </div>  

            <div className="publication-subtitle">
              Sin propuestas disponibles
            </div>

          </div>

          <div className="status paused">
            En pausa
          </div>

        </div>

      </div>

      {/* CHAT */}

      <div className="section">

        <h3>Chat</h3>

        <div className="chat-box">

          <div className="chat-top">
            2 Solicitudes de Mensaje disponibles
          </div>

<div className="chat-item">

  <div className="chat-avatar">
    GP
  </div>

  <div className="chat-content">

    <strong>
      Gerardo Peralta
    </strong>

    <p>
      Buenas, le paso mi presupuesto acerca del trabajo...
    </p>

  </div>

</div>

<div className="chat-item">

  <div className="chat-avatar">
    GP
  </div>

  <div className="chat-content">

    <strong>
      Gerardo Peralta
    </strong>

    <p>
      Buenas, le paso mi presupuesto acerca del trabajo...
    </p>

  </div>

</div>

          <div className="chat-footer">
            No hay más mensajes
          </div>

        </div>

      </div>

      {/* NAVBAR */}


      <div className="bottom-navbar">

        <div className="nav-item active">

          <Home size={18} />

          <span>Inicio</span>

        </div>

        <div className="nav-item">

          <Search size={18} />

          <span>Explorar</span>

        </div>

        <div className="nav-item">

          <FileText size={18} />

          <span>Publicaciones</span>

        </div>

        <div
          className="nav-item"
          onClick={() =>
  navigate("/chats", {
    state: {
      role: "worker",
    },
  })
}   
        >

          <MessageSquare size={18} />

          <span>Chats</span>

        </div>

        <div className="nav-item">

          <User size={18} />

          <span>Mi perfil</span>

        </div>

      </div>

    </div>
  );
}

export default WorkerHome;