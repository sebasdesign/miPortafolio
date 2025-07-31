import React from "react";
import "./Carousel.css";
import reactLogo from "@/assets/logos/React.png";
import nodeLogo from "@/assets/logos/Node.png";
import postgresLogo from "@/assets/logos/Postgresql.png";
import tailwindLogo from "@/assets/logos/Tailwind.png";
import angularLogo from "@/assets/logos/angular.png";
import tsLogo from "@/assets/logos/ts.png";
import htmlLogo from "@/assets/logos/Html.png";
import cssLogo from "@/assets/logos/css-3.svg";
import vercelLogo from "@/assets/logos/vercel.svg";
import jsLogo from "@/assets/logos/js.png";
import figmaLogo from "@/assets/logos/Figma.png";

const technologies = [
  { name: "React", src: reactLogo },
  { name: "Node.js", src: nodeLogo },
  { name: "PostgreSQL", src: postgresLogo },
  { name: "Tailwind", src: tailwindLogo },
  { name: "Angular", src: angularLogo },
  { name: "TypeScript", src: tsLogo },
  { name: "HTML", src: htmlLogo },
  { name: "CSS", src: cssLogo },
  { name: "Vercel", src: vercelLogo },
  { name: "JavaScript", src: jsLogo },
  { name: "Figma", src: figmaLogo },
];

const Carousel: React.FC = () => {
  return (
    <div className="relative w-full bg-white py-13 overflow-hidden">
      {/* Desvanecido izquierdo */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-80 bg-gradient-to-r from-white to-transparent z-10" />
      {/* Desvanecido derecho */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-80 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Carrusel */}
      <div className="flex gap-6 animate-scroll whitespace-nowrap">
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-3 font-medium text-gray-800 bg-gray-50 shadow-sm min-w-fit"
          >
            <img
              src={tech.src}
              alt={tech.name}
              className="w-6 h-6 object-contain"
            />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
