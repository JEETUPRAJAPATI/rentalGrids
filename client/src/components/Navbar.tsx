import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.nav 
      className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">RG</span>
                </div>
                <span className="text-xl font-bold text-white">Rent Grids</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-300">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-300">Pricing</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors duration-300">Testimonials</a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors duration-300">FAQ</a>
              <a href="#hero" className="btn-gradient ml-3">Join Waitlist</a>
            </div>
          </div>

          <div className="md:hidden">
            <button type="button" onClick={toggleMobileMenu} className="text-gray-400 hover:text-white">
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" onClick={toggleMobileMenu} className="block px-3 py-2 text-gray-300 hover:text-white">About</a>
            <a href="#features" onClick={toggleMobileMenu} className="block px-3 py-2 text-gray-300 hover:text-white">Features</a>
            <a href="#pricing" onClick={toggleMobileMenu} className="block px-3 py-2 text-gray-300 hover:text-white">Pricing</a>
            <a href="#testimonials" onClick={toggleMobileMenu} className="block px-3 py-2 text-gray-300 hover:text-white">Testimonials</a>
            <a href="#faq" onClick={toggleMobileMenu} className="block px-3 py-2 text-gray-300 hover:text-white">FAQ</a>
            <a href="#hero" onClick={toggleMobileMenu} className="btn-gradient w-full mt-3 flex justify-center">Join Waitlist</a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
