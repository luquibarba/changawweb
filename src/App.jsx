import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Presentation from "./pages/Presentation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WorkerHome from "./pages/WorkerHome";
import ClientHome from "./pages/ClientHome";
import ChatList from "./pages/ChatList";
import ChatRoom from "./pages/ChatRoom";

function App() {

  const location = useLocation();

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
    >
      <Routes
        location={location}
        key={location.pathname}
      >

        <Route
          path="/"
          element={<Presentation />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/worker"
          element={<WorkerHome />}
        />

        <Route
          path="/client"
          element={<ClientHome />}
        />

        <Route
          path="/chats"
          element={<ChatList />}
        />

        <Route
          path="/chat/:id"
          element={<ChatRoom />}
        />

      </Routes>
    </AnimatePresence>
  );
}

export default App;