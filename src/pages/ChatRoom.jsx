import "./ChatRoom.css";

import {
  ArrowLeft,
  Send,
} from "lucide-react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  useState,
} from "react";

function ChatRoom() {

  const navigate = useNavigate();

  const { id } = useParams();

  const [messages, setMessages] =
    useState([
      {
        id: 1,
        senderId: 2,
        content:
          "Buenas Lucas",
      },

      {
        id: 2,
        senderId: 1,
        content:
          "Hola Gerardo",
      },
    ]);

  const [newMessage,
    setNewMessage] =
      useState("");

  const sendMessage = () => {

    if (!newMessage.trim())
      return;

    setMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        senderId: 1,
        content:
          newMessage,
      },
    ]);

    setNewMessage("");
  };

  return (
    <div className="chat-room">

      <div className="room-header">

        <button
          onClick={() =>
            navigate(-1)
          }
        >
          <ArrowLeft size={20}/>
        </button>

        <div>

          <strong>
            Gerardo Peralta
          </strong>

          <p>
            Activo ahora
          </p>

        </div>

      </div>

      <div className="messages">

        {messages.map(msg => (

          <div
            key={msg.id}
            className={
              msg.senderId === 1
                ? "message sent"
                : "message received"
            }
          >

            {msg.content}

          </div>

        ))}

      </div>

      <div className="message-input">

        <input
          value={newMessage}
          onChange={(e)=>
            setNewMessage(
              e.target.value
            )
          }
          placeholder="Escribe un mensaje..."
        />

        <button
          onClick={sendMessage}
        >
          <Send size={18}/>
        </button>

      </div>

    </div>
  );
}

export default ChatRoom;