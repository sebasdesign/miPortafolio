import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaFacebook,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";

import angular from "@/assets/logos/angular.png";
import figma from "@/assets/logos/Figma.png";
import html from "@/assets/logos/Html.png";
import js from "@/assets/logos/js.png";
import node from "@/assets/logos/css-3.svg"; // ⚠️ Verifica si esta ruta es correcta
import postgresql from "@/assets/logos/Postgresql.png";
import reactLogo from "@/assets/logos/React.png";
import tailwind from "@/assets/logos/Tailwind.png";

const logos = [angular, reactLogo, figma, js, node, postgresql, html, tailwind];

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full min-h-screen bg-neutral-800 text-white py-16 px-4 flex flex-col items-center"
    >
      {/* Texto + círculo */}
      <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-full max-w-6xl">
        {/* Texto */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-5xl font-bold mb-4">Contáctame</h2>
          <p className="">
            Estoy entusiasmado por colaborar en proyectos que generen impacto y
            valor. Si buscas un desarrollador comprometido con la calidad y la
            innovación, estaré encantado de conversar contigo.
          </p>
          <p className="mt-2">
            Ya sea que necesites asesoría técnica, apoyo en desarrollo web o
            quieras trabajar en equipo, no dudes en contactarme. Estoy aquí para
            ayudarte a transformar tus ideas en soluciones digitales efectivas.
          </p>
        </div>

        {/* Círculo de logos animado */}
        <div className="relative w-72 h-72">
          {/* Rotating icons only */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {logos.map((logo, index) => {
              const angle = (index / logos.length) * 2 * Math.PI;
              const radius = 130;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              return (
                <motion.img
                  key={index}
                  src={logo}
                  className="absolute w-10 h-10 rounded-full shadow-md"
                  style={{
                    top: `calc(50% + ${y}px - 1.25rem)`,
                    left: `calc(50% + ${x}px - 1.25rem)`,
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                />
              );
            })}
          </motion.div>

          {/* Centro fijo */}
          <div className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full text-white bg-neutral-950 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-md">
            <span className="text-5xl">
              <IoPersonOutline />
            </span>
          </div>
        </div>
      </div>

      {/* Botones de redes sociales */}
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {[
          {
            href: "https://wa.me/+573154264944",
            icon: <FaWhatsapp size={24} />,
            label: "WhatsApp",
          },
          {
            href: "https://www.facebook.com/sebastian.palaciohernandez.9",
            icon: <FaFacebook size={24} />,
            label: "Facebook",
          },
          {
            href: "mailto:sebastianpalaciohernandez8@gmail.com?subject=Hola&body=Quiero contactarte",
            icon: <FaEnvelope size={24} />,
            label: "Gmail",
          },
          {
            href: "https://github.com/sebasdesign",
            icon: <FaGithub size={24} />,
            label: "GitHub",
          },
          {
            href: "https://www.linkedin.com/in/sebastian-palacio-hernandez-1bb00b175",
            icon: <FaLinkedin size={24} />,
            label: "LinkedIn",
          },
        ].map((btn, index) => (
          <motion.a
            key={btn.label}
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center border p-4 rounded-xl shadow hover:bg-gray-100 transition-all text-white hover:text-black hover:scale-110"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            {btn.icon}
            <span className="text-sm font-medium mt-2">{btn.label}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
