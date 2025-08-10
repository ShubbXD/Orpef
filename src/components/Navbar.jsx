import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Alumnis", path: "/alumnis" },
    { name: "Contact", path: "/contact" },
    { name: "Vision", path: "/vision" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-r from-green-100 via-blue-100 to-blue-300 shadow-md fixed w-full top-0 left-0 z-50 border-b border-gray-300"
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-3 relative">
        
        {/* Logo */}
        <Link to="/" className="relative z-10">
          <img
            src="/logo.png"
            alt="logo"
            className="h-20 w-auto object-contain transition-all duration-300" // Increased height
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 relative">
          {menuLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover="hover"
              className="relative"
              initial="rest"
              animate="rest"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.1 }
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={link.path}
                className="text-gray-800 font-medium hover:text-blue-600 transition relative"
              >
                {link.name}
              </Link>
              {/* Underline animation */}
              <motion.span
                className="absolute left-0 bottom-[-4px] h-[2px] bg-blue-600"
                variants={{
                  rest: { width: 0 },
                  hover: { width: "100%" }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-3 py-1 shadow-sm w-24 transition-all duration-300 hover:w-32 hover:absolute hover:left-[-40px] hover:z-20"
            style={{ position: "relative" }}
          >
            <input
              type="text"
              className="bg-transparent outline-none placeholder-gray-500 w-full"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden ml-auto"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white shadow-lg px-6 py-4 space-y-4 border-t border-gray-300"
        >
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="block text-gray-800 font-medium hover:text-blue-600 transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {/* Mobile Search */}
          <form
            onSubmit={(e) => {
              handleSearch(e);
              setOpen(false);
            }}
            className="flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-full px-3 py-1"
          >
            <input
              type="text"
              className="bg-transparent outline-none placeholder-gray-500 w-full"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
