// src/pages/Signup.jsx
import AuthForm from "../components/AuthForm";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = async (form) => {
    try {
      await api.post("/signup", form);
      alert("Signup successful");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return <AuthForm title="Sign Up" onSubmit={handleSignup} isLogin={false} />;
}
