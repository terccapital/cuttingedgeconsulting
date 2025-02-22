import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import CreateUser from "./pages/CreateUser";
import CreateAccount from "./pages/CreateAccount";
import ConfirmEmail from "./pages/ConfirmEmail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-user" element={<CreateUser />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/confirm" element={<ConfirmEmail />} />
    </Routes>
  );
}

export default App;