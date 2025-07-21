// src/pages/Dashboard.jsx
import { useState } from "react";
import api from "../utils/api";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await api.post(
        "/chat",
        { query },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setResponse(res.data.response);
    } catch (err) {
      alert("Search failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <Navbar />
      <div className="max-w-2xl mx-auto mt-10">
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="text"
            placeholder="Ask a question..."
            className="flex-1 px-4 py-2 border rounded"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-sky-600 text-white px-6 py-2 rounded hover:bg-sky-700"
          >
            {loading ? "Thinking..." : "Ask"}
          </button>
        </form>

        {response && (
          <div className="bg-white p-4 mt-6 rounded shadow">
            <h2 className="font-semibold text-lg text-sky-700 mb-2">AI Response:</h2>
            <p className="text-gray-700">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}
