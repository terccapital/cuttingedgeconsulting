import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import CreateUser from "./pages/CreateUser";
import CreateAccount from "./pages/CreateAccount";
import ProfilePage from "./pages/ProfilePage";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-user" element={<CreateUser />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;