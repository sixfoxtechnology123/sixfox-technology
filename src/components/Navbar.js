import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // check if admin is logged in
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Project", path: "/project" },
    { name: "Careers", path: "/careers" },
    // { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const activeClass = "font-bold text-primaryOrange";

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/"); // redirect to home
  };

  return (
    <nav className="bg-deepNavy text-white shadow-md relative z-50">
      <div className="flex justify-between items-center px-4 sm:px-6 py-4">
        {/* Logo + Text */}
        <Link className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primaryOrange flex items-center justify-center">
            <img src={logo} alt="Sixfox Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl sm:text-2xl font-bold text-[#F37021]">Sixfox Technology</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-6 items-center">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `hover:text-primaryOrange ${isActive ? activeClass : ""}`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          {/* Admin login/logout link */}
          <li>
            {isAdmin ? (
              <button
                onClick={handleLogout}
                className="font-bold text-yellow-400 hover:text-yellow-300"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="font-bold text-yellow-400 hover:text-yellow-300"
              >
                Admin Login
              </NavLink>
            )}
          </li>
        </ul>

        {/* Mobile: Admin Login + Hamburger */}
        <div className="flex items-center sm:hidden gap-4">
          {/* Admin Login / Logout outside hamburger */}
          {isAdmin ? (
            <button
              onClick={handleLogout}
              className="font-bold text-yellow-400 hover:text-yellow-300"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="font-bold text-yellow-400 hover:text-yellow-300"
            >
              Admin Login
            </NavLink>
          )}

          {/* Hamburger */}
          <button
            className="flex flex-col justify-center items-center gap-1 h-6 w-6 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition duration-300 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden absolute top-full right-0 w-full bg-deepNavy transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col divide-y divide-gray-600 px-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `py-4 block hover:text-primaryOrange ${isActive ? activeClass : ""}`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
