import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gbsks.org" && password === "admin123") {
      localStorage.setItem("admin", "true");
      navigate("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-white dark:bg-gray-800 p-8 rounded-xl shadow"
      >
        {/* ✅ heading color fix */}
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Admin Login
        </h2>

        {/* ✅ input: transparent bg + white text in dark */}
        <input
          type="email"
          placeholder="Admin Email"
          className="
            w-full p-3 mb-4 rounded border
            bg-white text-gray-900 border-gray-300
            dark:bg-transparent dark:text-white dark:border-gray-600
            placeholder:text-gray-500 dark:placeholder:text-gray-300
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="
            w-full p-3 mb-6 rounded border
            bg-white text-gray-900 border-gray-300
            dark:bg-transparent dark:text-white dark:border-gray-600
            placeholder:text-gray-500 dark:placeholder:text-gray-300
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
