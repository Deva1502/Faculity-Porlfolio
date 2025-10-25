import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/academic", label: "Academic" },
    { href: "/projects", label: "Projects" },
    { href: "/research", label: "Research" },
    { href: "/awards-grants", label: "Awards & Grants" },
    { href: "/administrative", label: "Administrative" },
    { href: "/achievements", label: "Achievements" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <h1 className="font-bold text-cyan-900 text-2xl sm:text-3xl lg:text-4xl transition-all duration-300 hover:text-cyan-700">
            <Link to="/" onClick={closeMenu}>
              Rajesh Dwivedi
            </Link>
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-row gap-1 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-900 text-white shadow-md"
                      : "text-gray-700 hover:bg-cyan-50 hover:text-cyan-900"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-cyan-900 p-2 rounded-lg hover:bg-cyan-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Toggle menu"
          >
            <div className="text-2xl">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pt-2 pb-4 bg-white border-t border-gray-100">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-900 text-white shadow-sm"
                    : "text-gray-700 hover:bg-cyan-50 hover:text-cyan-900"
                }`
              }
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
