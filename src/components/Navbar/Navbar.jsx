// Importamos React, el hook useState, el logo, y el componente Link de react-router-dom
import { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

// Array de enlaces principales de la barra de navegación
const navbarLinks = [
  { id: 1, title: "Quienes Somos", link: "/quienes-somos" },
  { id: 2, title: "Servicios", link: "/servicios" },
  { id: 3, title: "Productos", link: "/productos" },
  { id: 4, title: "Catálogo Web", link: "/catalogo-web" },
  { id: 5, title: "Nuestros Trabajos", link: "/nuestros-trabajos" },
  { id: 6, title: "Contáctanos", link: "/contactanos" },
];

// Array de redes sociales con sus íconos, enlaces y efectos visuales
const redesSociales = [
  {
    id: 1, // Identificador único
    title: "WhatsApp", // Título del ícono
    link: "https://wa.me/59175961315?text=Que%20quiere%20joven%3F%20Estoy%20codeando",
    icon: <i className="bi bi-whatsapp text-xl" />, // Ícono de WhatsApp
    hoverClass:
      "hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.7)]", // Efecto de hover
    target: "_blank", // Abre el enlace en una nueva pestaña
    rel: "noopener noreferrer", // Agrega seguridad al enlace
  },
  {
    id: 2,
    title: "Instagram",
    link: "#", // Enlace de Instagram
    icon: <i className="bi bi-instagram text-xl" />, // Ícono de Instagram
    hoverClass:
      "hover:text-pink-500 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]", // Efecto de hover
  },
];

// Componente principal Navbar
const Navbar = () => {
  // Estado para manejar si el menú móvil está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Contenedor principal del Navbar
    <nav className="fixed w-full top-0 z-50 bg-cyan-600/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto">
        {/* Contenedor para el logo, los enlaces principales y el menú móvil */}
        <div className="flex justify-between items-center sm:px-12 sm:py-4 px-4 py-3">
          {/* Logo del sitio */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={Logo}
                alt="Logo del Sitio"
                className="w-[120px] hover:opacity-90 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
              />
            </Link>
          </div>

          {/* Enlaces principales para pantallas grandes */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {/* Renderizamos cada enlace del array navbarLinks */}
              {navbarLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.link}
                    className="text-white relative font-medium text-sm uppercase tracking-wide py-2 px-1
                    hover:text-cyan-300 transition-all duration-300
                    hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]
                    after:content-[''] after:absolute after:w-full after:h-[2px] 
                    after:bg-cyan-300 after:bottom-0 after:left-0
                    after:scale-x-0 hover:after:scale-x-100
                    after:transition-transform after:duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Íconos de redes sociales para pantallas grandes */}
          <div className="hidden md:block">
            <ul className="flex space-x-6">
              {redesSociales.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.link} // Enlace de la red social
                    target={social.target} // Atributo target para abrir en nueva pestaña
                    rel={social.rel} // Atributo rel para seguridad
                    className={`text-white transition-all duration-300 ${social.hoverClass}`}
                    title={social.title}
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Botón de menú móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Alterna el estado del menú móvil
              className="text-white transition-all duration-300 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <i className={`bi ${isMenuOpen ? "bi-x-lg" : "bi-list"} text-2xl`} />
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <div
          className={`md:hidden bg-[#2d6073]/95 backdrop-blur-md transform transition-all duration-300 ease-in-out
          ${
            isMenuOpen
              ? "opacity-100 translate-y-0 max-h-[400px]"
              : "opacity-0 -translate-y-4 max-h-0 overflow-hidden"
          }`}
        >
          {/* Lista de enlaces del menú móvil */}
          <ul
            className={`px-4 pt-2 pb-4 space-y-2 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            } transition-opacity duration-200 delay-100`}
          >
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className="block text-white px-3 py-2 rounded-md text-base font-medium
                  transition-all duration-300
                  hover:text-cyan-300 hover:bg-[#3d7b94]
                  hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]"
                >
                  {link.title}
                </a>
              </li>
            ))}

            {/* Redes sociales en el menú móvil */}
            <li className="pt-4">
              <div className="flex space-x-6 px-3">
                {redesSociales.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target={social.target} // Atributo target para nueva pestaña
                    rel={social.rel} // Atributo rel para seguridad
                    className={`text-white transition-all duration-300 ${social.hoverClass}`}
                    title={social.title}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
