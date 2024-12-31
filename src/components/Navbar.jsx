import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", onClick: props.scrollToHome },
    { name: "Projects", onClick: props.scrollToProjects },
    { name: "About", onClick: props.scrollToAbout },
    { name: "Contact", onClick: props.scrollToContact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background2 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center px-[7%] h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold logo-spin text-gray-400 hover:cursor-pointer hover:text-secondary duration-200 "
          >
            Adrien's Portfolio
          </motion.div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                  // props.setActiveSection(item.name)
                  item.onClick()}
                  }
                  className="hover:text-secondary duration-200"

                  // className={`capitalize ${
                  //   // props.activeSection === item.name
                  //     ? "text-secondary"
                  //     : "text-gray-400 hover:text-gray-200"
                  // }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
            <div className="flex space-x-6 mb-4">
              <a
                href="https://github.com/adddddddddddddddd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="www.linkedin.com/in/adrien-leveuf-673305298"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:adrien.leveuf@gmail.com"
                className="text-gray-400 hover:text-secondary transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </ul>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <ul className="py-2">
              {navItems.map((item) => (
                <li key={item.name} className="block py-2">
                  <button
                    onClick={() => {
                      // props.setActiveSection(item.name);
                      setIsMenuOpen(false);
                      item.onClick();
                    }}
                    className="hover:text-secondary"
                    // className={`capitalize ${
                    //   // props.activeSection === item.name
                    //     ? "text-accent"
                    //     : "text-gray-400 hover:text-gray-200"
                    // }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
