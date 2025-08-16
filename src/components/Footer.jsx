export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-16 px-6 text-center 
      bg-gradient-to-r from-blue-100 via-blue-50 to-green-100 text-gray-800">
      
      {/* ORPEF Name */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Odisha Retired Power Engineers Forum (ORPEF)
      </h2>
      <p className="text-sm md:text-base text-gray-700 max-w-2xl leading-relaxed mb-8">
        United by <span className="text-blue-600 font-semibold">experience</span>, 
        dedicated to <span className="text-blue-600 font-semibold">service</span>, 
        <span className="text-blue-600 font-semibold"> mentorship</span>, and 
        <span className="text-blue-600 font-semibold"> Odisha’s energy future</span>.
      </p>

      {/* Navigation Links */}
      <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
        <a href="#home" className="font-medium text-gray-700 hover:text-blue-600 transition-all">Home</a>
        <a href="#about" className="font-medium text-gray-700 hover:text-blue-600 transition-all">About</a>
        <a href="#services" className="font-medium text-gray-700 hover:text-blue-600 transition-all">Services</a>
        <a href="#gallery" className="font-medium text-gray-700 hover:text-blue-600 transition-all">Gallery</a>
        <a href="#contact" className="font-medium text-gray-700 hover:text-blue-600 transition-all">Contact</a>
      </div>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-6 text-blue-600 mb-8">
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

      {/* Copyright */}
      <p className="text-xs text-gray-600">
        © {new Date().getFullYear()} ORPEF. All Rights Reserved.
      </p>
    </footer>
  );
}
