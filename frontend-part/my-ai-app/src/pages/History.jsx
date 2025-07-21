// src/pages/History.jsx
import { useEffect, useState } from "react";
import api from "../utils/api";
import Navbar from "../components/Navbar";

export default function History() {
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const res = await api.get("/chat/history", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setHistory(res.data);
      console.log(res.data);
    } catch (err) {
      console.error("Error fetching history:", err);
      alert("Failed to fetch history");
    }
  };

  const deleteItem = async (id) => {
    const confirm = window.confirm("Delete this search?");
    if (!confirm) return;

    try {
      const token = localStorage.getItem("token");
      await api.delete(`/chat/history/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setHistory((prev) => prev.filter((item) => item._id !== id));
    } catch {
      alert("Delete failed");
    }
  };

  const deleteAll = async () => {
    const confirm = window.confirm("Delete all history?");
    if (!confirm) return;

    try {
      const token = localStorage.getItem("token");
      await api.delete(`/chat/history`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setHistory([]);
    } catch {
      alert("Delete all failed");
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <Navbar />
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Search History</h2>
          {history.length > 0 && (
            <button
              onClick={deleteAll}
              className="text-red-600 hover:underline"
            >
              Delete All
            </button>
          )}
        </div>

        {history.length === 0 ? (
          <p className="text-gray-500">No search history found.</p>
        ) : (
          <ul className="space-y-4">
            {history.map((item) => (
             
          <div tabIndex={item._id}  className="collapse collapse-plus bg-base-100 border-base-300 border">
          <div className="collapse-title font-semibold">{item.query}</div>
          <div className="collapse-content text-sm">{item.response} </div>
           <p className="text-sm text-gray-500 ms-2">
           {new Date(item.timestamp).toLocaleString()}
            </p>
               <button onClick={() => deleteItem(item._id)} className="text-red-500 hover:underline">
                    Delete
                </button>
          </div>

            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
