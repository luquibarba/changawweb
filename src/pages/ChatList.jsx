import "./ChatList.css";

import {
  Home,
  Search,
  FileText,
  MessageSquare,
  User,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import chats from "../data/mockChats";

function ChatList() {

  const location = useLocation();

  const role =
    location.state?.role ||
    "worker";

  const navigate = useNavigate();

  return (

    <motion.div
      className="chat-list-page"
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
    >

      <div className="chat-list-header">

        <div className="chat-logo">
          changa+
        </div>

        <h2>
          Chats
        </h2>

      </div>

      <div className="chat-search-container">

        <div className="chat-search-box">

          <Search size={18} />

          <input
            type="text"
            placeholder="Buscar conversación"
          />

        </div>

      </div>

      <div className="chat-conversations">

        {chats.map((chat) => (

          <motion.div
            key={chat.id}
            className="chat-card"
            onClick={() =>
              navigate(`/chat/${chat.id}`)
            }
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >

            <div className="chat-card-left">

              <div className="chat-avatar">

                {chat.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)}

              </div>

            </div>

            <div className="chat-card-center">

              <div className="chat-card-name">
                {chat.name}
              </div>

              <div className="chat-card-message">
                {chat.lastMessage}
              </div>

            </div>

            <div className="chat-card-right">

              <div className="chat-card-time">
                {chat.time}
              </div>

              <div
                className={
                  chat.online
                    ? "online-dot"
                    : "offline-dot"
                }
              />

              {chat.unread > 0 && (

                <div className="unread-badge">

                  {chat.unread}

                </div>

              )}

            </div>

          </motion.div>

        ))}

      </div>

      <div className="bottom-navbar">

        <div
          className="nav-item"
          onClick={() =>
            navigate(
              role === "worker"
                ? "/worker"
                : "/client"
            )
          }
        >

          <Home size={18} />

          <span>
            Inicio
          </span>

        </div>

        <div className="nav-item">

          <Search size={18} />

          <span>
            Buscar
          </span>

        </div>

        <div className="nav-item">

          <FileText size={18} />

          <span>

            {role === "worker"
              ? "Publicaciones"
              : "Solicitudes"}

          </span>

        </div>

        <div className="nav-item active">

          <MessageSquare size={18} />

          <span>
            Chats
          </span>

        </div>

        <div className="nav-item">

          <User size={18} />

          <span>
            Perfil
          </span>

        </div>

      </div>

    </motion.div>

  );
}

export default ChatList; 