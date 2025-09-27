import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact", highlight: true },
  ];

  return (
    <nav className="bg-deepNavy text-white shadow-md relative z-50">
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-4 sm:px-6 py-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#F37021]">
          Sixfox Technology
        </h1>

        {/* Hamburger / Cross */}
        <button
          className="sm:hidden flex flex-col justify-center items-center gap-1 h-6 w-6 focus:outline-none"
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

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`hover:text-primaryOrange ${
                  item.highlight ? "font-bold text-primaryOrange" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu - slides in below navbar */}
      <div
        className={`sm:hidden absolute top-full right-0 w-full bg-deepNavy transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col divide-y divide-gray-600 px-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`py-4 block hover:text-primaryOrange ${
                  item.highlight ? "font-bold text-primaryOrange" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
