// src/components/AuthForm.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AuthForm({ title, onSubmit, isLogin }) {
  const [form, setForm] = useState({ email: "", password: "", name: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-xl mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">{title} in to your account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
        )}
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {title}
        </button>


 {isLogin && (
<div className="text-center">
<span>Don't have an account?</span>
<Link to="/signup" className="text-blue-600 hover:text-blue-700 ms-1" >Register</Link>
</div>
 )
}


 {!isLogin && (
<div className="text-center">
<span>Already have an account?</span>
<Link to="/" className="text-blue-600 hover:text-blue-700 ms-1">Login</Link>
</div>
 )
}



      </form>
    </div>
  );
}
