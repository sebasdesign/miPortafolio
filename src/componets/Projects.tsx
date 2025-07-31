"use client";

import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import Vigen from "@/assets/Vigen.jpg";
import SigimImg from "@/assets/Sigim.jpg";
import ThesisImg from "@/assets/Thesis.jpg";
import BlacklineImg from "@/assets/Blackline.jpg";
import ChatImg from "@/assets/Chat.jpg";
import BiodigestorImg from "@/assets/Biodigestor.jpg";

const projects = [
  {
    title: "Vigen",
    description:
      "Aplicativo web para el registro, seguimiento y canalización de víctimas de violencia. Facilita la atención oportuna y centraliza la información relevante para los encargados del proceso.",
    image: Vigen,
    github: "https://github.com/DanielHS01/VigenReact.git",
    web: "https://vigen-react.vercel.app",
    tech: "React",
  },
  {
    title: "Sigim",
    description:
      "Plataforma web para la gestión integral de un gimnasio. Permite controlar membresías, horarios, usuarios y reportes desde una interfaz sencilla e intuitiva.",
    image: SigimImg,
    github: "https://github.com/santiagosil/Sigim-React.git",
    web: "https://www.figma.com/proto/xArbFhYpBswYCFI8PdVbpI/SIGIM?node-id=260-840&t=O6du0NzTxqAib4Ly-1",
    tech: "React",
  },
  {
    title: "Thesis Aidant",
    description:
      "Herramienta web impulsada por inteligencia artificial que permite interactuar con documentos académicos. Me encargué del diseño de interfaz para facilitar la experiencia del usuario.",
    image: ThesisImg,
    github: null,
    web: "https://www.figma.com/proto/R1Jj2PiVnsf7QKZwwMliIb/THESIS-AIDANT-V2?node-id=2-3&t=XRBCL8bIUXJSoh6F-1",
    tech: "React",
  },
  {
    title: "BlackLine",
    description:
      "Landing page moderna diseñada para una empresa ficticia de tatuadores. Destaca por su estilo oscuro, uso de tipografía impactante y diseño minimalista.",
    image: BlacklineImg,
    github: null,
    web: "https://www.figma.com/proto/k0ngJCsAtW7Nl0EHfYkRUj/BlackLine?node-id=0-1&t=iOC2qgy9SoCLyEpE-1",
    tech: "React",
  },
  {
    title: "ChatBot Universitario",
    description:
      "Chatbot inteligente para asistir a estudiantes universitarios en preguntas frecuentes, procesos administrativos y orientación académica. Me enfoqué en la parte de diseño conversacional y visual.",
    image: ChatImg,
    github: "https://github.com/sebasdesign/FrontendChatBot.git",
    web: "https://www.figma.com/proto/BfixdgkstMAMX6X3TBQ0Z9/ChatBot-Mientras-lo-nombramos-?node-id=1-2&t=zlIbPQ3IOeZi0APU-1",
    tech: "React",
  },
  {
    title: "Dashboard Biodigestor",
    description:
      "Desarrollo frontend para un sistema de monitoreo de un biodigestor. Proyecto desarrollado en conjunto con un semillero de investigación universitaria, centrado en visualización de datos en tiempo real.",
    image: BiodigestorImg,
    github: "https://github.com/LESTOMA/LestomaBiodigestorIAFront.git",
    web: "https://www.figma.com/proto/fGc146aXQZPIp2R3XjQMPA/Biodigestor?node-id=1-5&t=Wk0Ta4qYTdM83SaB-1",
    tech: "React",
  },
];

const gradients = [
  "from-purple-500 to-pink-500",
  "from-yellow-400 to-orange-500",
  "from-blue-500 to-cyan-500",
  "from-green-500 to-lime-400",
  "from-red-500 to-pink-400",
  "from-indigo-500 to-blue-400",
];

const Projects = () => {
  return (
    <section id="projects" className="bg-neutral-800 pt-20 text-white py-16 px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex space-x-28 flex-col">
          <h2 className="text-6xl font-bold mb-6 w-96">
            Mis Trabajos Recientes
          </h2>
          <p className="mb-12 text-gray-300 max-w-2xl">
            Diseño y desarrollo soluciones web modernas con una experiencia de
            usuario (UX) y diseño de interfaz (UI) profesional, utilizando las
            últimas tendencias.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-md text-black hover:shadow-xl transition-transform transform hover:-translate-y-4 duration-400"
            >
              <div
                className={`h-4 w-full bg-gradient-to-r ${gradients[index % gradients.length]}`}
              ></div>

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-700 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-1 border font-semibold  border-gray-400 rounded-full px-4 py-2 hover:bg-gray-50 hover:text-emerald-500 hover:border-emerald-500"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  <a
                    href={project.web}
                    target="_blank"
                    className="flex items-center gap-1 border font-semibold border-gray-400 rounded-full px-4 py-2 hover:text-gray-100 hover:bg-neutral-900 hover:border-emerald-500"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe /> Web
                  </a>
                  <img
                    src={`/src/assets/logos/${project.tech.toLowerCase()}.png`}
                    alt={project.tech}
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
