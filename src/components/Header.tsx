import { useState, useEffect } from "react";
import NavLink from "./common/NavLink";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    toggleMenu();
  };

  return (
    <nav
      className={`py-2 px-4 md:px-6 lg:px-8 transition duration-300 ${
        isScrolled
          ? "fixed top-0 left-0 right-0 z-50 bg-gray-800"
          : "absolute w-full bg-transparent z-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-white font-bold text-xl">
              <img width={"200px"} src="/gabdotcode.png" alt="gabdotcode" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink
                href="#about"
                section="about"
                active={activeSection === "about"}
                onClick={() => handleNavClick("about")}
              >
                About
              </NavLink>

              <NavLink
                href="#projects"
                section="projects"
                active={activeSection === "projects"}
                onClick={() => handleNavClick("projects")}
              >
                Projects
              </NavLink>

              <NavLink
                href="#contact"
                section="contact"
                active={activeSection === "contact"}
                onClick={() => handleNavClick("contact")}
              >
                Contact
              </NavLink>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`mobile-menu ${
          isOpen ? "open text-center" : "hidden"
        } md:hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            href="#about"
            section="about"
            active={activeSection === "about"}
            onClick={() => handleNavClick("about")}
          >
            About
          </NavLink>

          <NavLink
            href="#projects"
            section="projects"
            active={activeSection === "projects"}
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </NavLink>

          <NavLink
            href="#contact"
            section="contact"
            active={activeSection === "contact"}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
