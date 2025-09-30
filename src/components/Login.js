import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Admin credentials
    const adminUser = "admin";
    const adminPass = "admin123";

    if (username === adminUser && password === adminPass) {
      localStorage.setItem("isAdmin", true); // mark admin logged in
      navigate("/"); // redirect to home page
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        {error && <p className="text-red-600 mb-2">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full mb-3 bg-gray-200"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded w-full mb-3 bg-gray-200"
          required
        />
        <button type="submit" className="bg-primaryOrange text-white py-2 w-full rounded hover:bg-peach">
          Login
        </button>

        {/* Link to Home page */}
        <p className="mt-4 text-center">
          <Link to="/" className="text-primaryOrange hover:text-peach">
            Go to Home
          </Link>
        </p>
      </form>
    </div>
  );
}
