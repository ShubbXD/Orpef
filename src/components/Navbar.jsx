import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // ✅ for More dropdown
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); // ✅ detect active route

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Members", path: "/members" },
    { name: "Gallery", path: "/gallery" },
    { name: "More", path: "#" }, // dropdown trigger
  ];

  const dropdownLinks = [
    { name: "Donations", path: "/donations" },
    { name: "FAQ", path: "/faq" },
    { name: "Mission", path: "/mission" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/members?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-r from-green-50 via-blue-50 to-indigo-100 shadow-md fixed w-full top-0 left-0 z-50 border-b border-gray-200"
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        
        {/* Logo + Title */}
        <div className="flex items-center gap-2"> {/* 🔹 reduced gap */}
          <Link to="/">
            <img
              src="/logo.jpg"
              alt="logo"
              className="h-20 w-36 object-contain"
            />
          </Link>
          <span className="hidden md:block font-semibold text-gray-800 text-lg leading-snug">
            The Odisha Retired<span className="text-blue-700"> Power Engineers Forum (ORPEF)</span> <br />
            <span className="text-sm font-normal text-gray-600">
              Regd. No. 781/18202400067 of 2024-2025
            </span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuLinks.map((link, index) =>
            link.name !== "More" ? (
              <motion.div
                key={index}
                whileHover="hover"
                className="relative"
                initial="rest"
                animate="rest"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.05 },
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={link.path}
                  className={`relative font-medium transition 
                    ${
                      location.pathname === link.path
                        ? "text-blue-700 font-semibold"
                        : "text-gray-800 hover:text-blue-600"
                    }`}
                >
                  {link.name}
                </Link>
                {/* Underline animation */}
                <motion.span
                  className="absolute left-0 bottom-[-4px] h-[2px] bg-blue-600"
                  variants={{
                    rest: { width: location.pathname === link.path ? "100%" : 0 },
                    hover: { width: "100%" },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ) : (
              // More Dropdown
              <div
                key="more"
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className="flex items-center font-medium text-gray-800 hover:text-blue-600 transition"
                >
                  More
                  <svg
                    className={`ml-1 w-4 h-4 transform transition ${
                      dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border border-gray-200"
                    >
                      {dropdownLinks.map((item, i) => (
                        <Link
                          key={i}
                          to={item.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          )}

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-3 py-1 shadow-sm"
          >
            <input
              type="text"
              className="bg-transparent outline-none placeholder-gray-500 w-32"
              placeholder="Search members..."
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
          className="lg:hidden bg-gradient-to-r from-green-50 via-blue-50 to-indigo-100 shadow-lg px-6 py-4 space-y-4 border-t border-gray-200"
        >
          {menuLinks.map((link, index) =>
            link.name !== "More" ? (
              <Link
                key={index}
                to={link.path}
                className={`block font-medium transition 
                  ${
                    location.pathname === link.path
                      ? "text-blue-700 font-semibold"
                      : "text-gray-800 hover:text-blue-600"
                  }`}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <div key="mobile-more">
                <p className="font-medium text-gray-800">More</p>
                <div className="ml-4 space-y-2">
                  {dropdownLinks.map((item, i) => (
                    <Link
                      key={i}
                      to={item.path}
                      className="block text-gray-700 hover:text-blue-600 transition"
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}

          {/* Mobile Search */}
          <form
            onSubmit={(e) => {
              handleSearch(e);
              setOpen(false);
            }}
            className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-3 py-1"
          >
            <input
              type="text"
              className="bg-transparent outline-none placeholder-gray-500 w-full"
              placeholder="Search members..."
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
