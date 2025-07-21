// src/pages/Login.jsx
import AuthForm from "../components/AuthForm";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async (form) => {
    try {
      const res = await api.post("/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return <AuthForm title="Login" onSubmit={handleLogin} isLogin={true} />;
}
