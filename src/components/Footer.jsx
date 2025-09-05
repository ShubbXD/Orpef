export default function Footer() {
  return (
    <footer
      className="flex flex-col items-center justify-center w-full py-10 px-6 text-center 
      bg-gradient-to-r from-blue-50 via-blue-100 to-indigo-100 text-gray-800 shadow-inner"
    >
      {/* ORPEF Name */}
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
        The Odisha Retired Power Engineers Forum (ORPEF)
      </h2>
      <p className="text-sm md:text-base text-gray-700 max-w-2xl leading-relaxed mb-6">
        United by{" "}
        <span className="text-indigo-600 font-semibold">experience</span>, 
        dedicated to{" "}
        <span className="text-indigo-600 font-semibold">service</span>,{" "}
        <span className="text-indigo-600 font-semibold">mentorship</span>, and{" "}
        <span className="text-indigo-600 font-semibold">
          Odisha’s energy future
        </span>.
      </p>

      {/* Navigation Links */}
      <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
        <a href="/" className="font-medium text-gray-700 hover:text-indigo-600 transition-all">
          Home
        </a>
        <a href="/about" className="font-medium text-gray-700 hover:text-indigo-600 transition-all">
          About
        </a>
        {/* Link to Service section inside Home page */}
        <a href="/#services" className="font-medium text-gray-700 hover:text-indigo-600 transition-all">
          Services
        </a>
        <a href="/gallery" className="font-medium text-gray-700 hover:text-indigo-600 transition-all">
          Gallery
        </a>
        <a href="/contact" className="font-medium text-gray-700 hover:text-indigo-600 transition-all">
          Contact
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-6 text-indigo-600 mb-6">
        <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform">
          <i className="fab fa-facebook-f text-xl"></i>
        </a>
        <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform">
          <i className="fab fa-instagram text-xl"></i>
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
          <i className="fab fa-linkedin-in text-xl"></i>
        </a>
        <a href="#" aria-label="Twitter" className="hover:scale-110 transition-transform">
          <i className="fab fa-twitter text-xl"></i>
        </a>
      </div>

      {/* Divider */}
      <div className="w-full max-w-3xl border-t border-gray-300 my-4"></div>

      {/* Legal Links */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-3 text-xs text-gray-600">
        <a href="/Legal" className="hover:text-indigo-600 transition-all">
          Terms & Conditions
        </a>
        <span className="hidden md:inline">|</span>
        <a href="/Legal" className="hover:text-indigo-600 transition-all">
          Privacy Policy
        </a>
      </div>

      {/* Built By */}
      <p className="text-xs text-gray-700 font-medium mb-1">
        Site Designed & Maintained by ~ <span className="text-indigo-600 font-semibold">OneWholesale</span>
      </p>

      {/* Copyright */}
      <p className="text-xs text-gray-600">
        © {new Date().getFullYear()} ORPEF. All Rights Reserved.
      </p>
    </footer>
  );
}
