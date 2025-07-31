import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { Transition } from "@headlessui/react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-lg font-bold flex items-center gap-2">
          <div className="w-6 h-6 bg-emerald-500 rounded-md"></div>
          <span>Sebastian Palacio</span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-10 font-medium">
          {["hero", "projects", "about", "contact"].map((section) => (
            <li key={section}>
              <Link
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-emerald-500"
              >
                {section === "hero"
                  ? "Inicio"
                  : section === "projects"
                  ? "Proyectos"
                  : section === "about"
                  ? "Sobre mí"
                  : "Contacto"}
              </Link>
            </li>
          ))}
        </ul>

        {/* CV Button on desktop */}
        <a
          href="/CV-SebastianPalacio.pdf"
          download
          className="hidden md:block px-4 py-2 rounded-full text-gray-400 hover:text-emerald-500 font-semibold border border-gray-100 hover:bg-gray-50 hover:border-emerald-500"
        >
          Descargar CV
        </a>
        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Animated mobile menu */}
      <Transition
        show={menuOpen}
        enter="transition ease-out duration-800"
        enterFrom="opacity-0 -translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-800"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-4"
      >
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 font-medium">
          {["hero", "projects", "about", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={closeMenu}
              className="cursor-pointer hover:text-emerald-500"
            >
              {section === "hero"
                ? "Inicio"
                : section === "projects"
                ? "Proyectos"
                : section === "about"
                ? "Sobre mí"
                : "Contacto"}
            </Link>
          ))}
          <a
            href="/CV-SebastianPalacio.pdf"
            download
            className="mt-2 w-full px-4 py-2 text-center rounded-full text-gray-400 hover:text-emerald-500 font-semibold border border-gray-100 hover:bg-gray-50 hover:border-emerald-500"
          >
            Descargar CV
          </a>
        </div>
      </Transition>
    </nav>
  );
};
